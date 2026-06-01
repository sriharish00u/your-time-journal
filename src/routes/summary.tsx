import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { useActivities, useSettings, useSummaries, usePapers } from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { generateAISummary } from "@/lib/tymeline/ai.functions";
import { useServerFn } from "@tanstack/react-start";
import { MOOD_SCORE } from "@/lib/tymeline/categories";
import { startOfWeek, startOfMonth, format } from "date-fns";
import { Copy, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/summary")({
  head: () => ({
    meta: [
      { title: "Reflect — Tymeline" },
      { name: "description", content: "Reflect on how you spent your time." },
    ],
  }),
  component: SummaryPage,
});

type Period = "week" | "month" | "all";

function filterByPeriod(activities: ReturnType<typeof useActivities>[0], period: Period) {
  if (period === "all") return activities;
  const from = period === "week" ? startOfWeek(new Date(), { weekStartsOn: 1 }) : startOfMonth(new Date());
  return activities.filter((a) => new Date(a.timestamp) >= from);
}

function buildLocalSummary(activities: ReturnType<typeof useActivities>[0], period: Period): string {
  if (activities.length === 0) return "No activities logged for this period yet.";
  const totalMin = activities.reduce((s, a) => s + (a.duration ?? 30), 0);
  const byCat = new Map<string, number>();
  for (const a of activities) byCat.set(a.category, (byCat.get(a.category) ?? 0) + (a.duration ?? 30));
  const topCat = Array.from(byCat.entries()).sort((a, b) => b[1] - a[1])[0];
  const moods = activities.filter((a) => a.mood).map((a) => MOOD_SCORE[a.mood!] ?? 3);
  const avgMood = moods.length ? (moods.reduce((s, n) => s + n, 0) / moods.length).toFixed(1) : null;
  const periodLabel = period === "week" ? "this week" : period === "month" ? "this month" : "across all time";

  const moodLine = avgMood
    ? ` Your average mood was ${avgMood}/5 — ${Number(avgMood) >= 4 ? "mostly bright" : Number(avgMood) >= 3 ? "balanced" : "a little heavy"}.`
    : "";
  const tip = topCat
    ? ` You leaned heavily into ${topCat[0].toLowerCase()}. Consider whether that balance still feels right.`
    : "";

  return `You logged ${activities.length} moment${activities.length > 1 ? "s" : ""} ${periodLabel}, totaling about ${Math.round(totalMin / 60)} hours of intentional time. ${topCat ? `Most of it (${Math.round((topCat[1] / totalMin) * 100)}%) went to ${topCat[0]}.` : ""}${moodLine}${tip} Keep capturing — small notes turn into real understanding over time.`;
}

function SummaryPage() {
  const [activities] = useActivities();
  const [settings] = useSettings();
  const [summaries, setSummaries] = useSummaries();
  const [papers, setPapers] = usePapers();
  const [period, setPeriod] = useState<Period>("week");
  const [loading, setLoading] = useState(false);
  const aiFn = useServerFn(generateAISummary);

  const scoped = useMemo(() => filterByPeriod(activities, period), [activities, period]);

  const generate = async () => {
    setLoading(true);
    try {
      let content: string;
      let isAI = false;
      if (settings.aiEnabled) {
        const res = await aiFn({
          data: {
            period,
            activities: scoped.map((a) => ({
              name: a.name, category: a.category,
              duration: a.duration, mood: a.mood, timestamp: a.timestamp,
            })),
          },
        });
        content = res.content;
        isAI = true;
      } else {
        content = buildLocalSummary(scoped, period);
      }
      const newSummary = {
        id: crypto.randomUUID(),
        period,
        generatedAt: new Date().toISOString(),
        content,
        isAI,
      };
      const next = [newSummary, ...summaries];
      setSummaries(next);
      const newPapers = evaluatePapers({
        activities, existing: papers, summariesCount: next.length,
      });
      if (newPapers.length) {
        setPapers([...papers, ...newPapers]);
        newPapers.forEach((p) => toast.success(`📜 ${p.title}`, { description: p.reason }));
      }
    } catch (e) {
      toast.error((e as Error).message ?? "Couldn't generate summary");
    } finally {
      setLoading(false);
    }
  };

  const periodSummaries = summaries.filter((s) => s.period === period);
  const latest = periodSummaries[0];

  return (
    <div className="px-5 pt-6">
      <header className="mb-5">
        <h1 className="font-serif text-3xl text-foreground">Reflect</h1>
        <p className="mt-1 text-sm text-text-secondary">A quiet look back</p>
      </header>

      <div className="mb-5 grid grid-cols-3 gap-2">
        {(["week", "month", "all"] as Period[]).map((p) => {
          const active = period === p;
          return (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="rounded-2xl border bg-surface p-3 text-center transition"
              style={{
                borderColor: active ? "var(--accent)" : "var(--border)",
                boxShadow: active ? "0 0 0 1px var(--accent) inset" : "none",
              }}
            >
              <div className="font-serif text-base capitalize text-foreground">{p}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-wider text-text-secondary">
                {p === "all" ? "All time" : `This ${p}`}
              </div>
            </button>
          );
        })}
      </div>

      {latest ? (
        <PaperCard summary={latest} />
      ) : loading ? (
        <ShimmerCard />
      ) : (
        <div className="rounded-2xl border-2 border-dashed bg-surface/40 p-8 text-center">
          <Sparkles className="mx-auto mb-2 text-accent" size={24} />
          <p className="font-serif text-lg text-foreground">Nothing to reflect on yet</p>
          <p className="mt-1 text-sm text-text-secondary">
            Tap below to {settings.aiEnabled ? "ask AI for" : "compose"} a thoughtful summary.
          </p>
        </div>
      )}

      <button
        onClick={generate}
        disabled={loading || scoped.length === 0}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground transition active:scale-[0.98] disabled:opacity-40"
      >
        {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
        {loading ? "Reflecting…" : latest ? "Regenerate" : "Generate Summary"}
      </button>

      {periodSummaries.length > 1 && (
        <div className="mt-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">Past reflections</h3>
          <div className="space-y-3">
            {periodSummaries.slice(1).map((s) => <PaperCard key={s.id} summary={s} compact />)}
          </div>
        </div>
      )}
    </div>
  );
}

function PaperCard({ summary, compact }: { summary: { id: string; content: string; generatedAt: string; isAI: boolean; period: string }; compact?: boolean }) {
  const copy = () => {
    navigator.clipboard.writeText(summary.content);
    toast.success("Copied");
  };
  const words = summary.content.trim().split(/\s+/).length;
  return (
    <article
      className="paper-texture rounded-2xl border bg-surface p-5 shadow-sm"
      style={{ boxShadow: "0 1px 0 var(--border), 0 8px 24px -16px rgba(0,0,0,0.15)" }}
    >
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-text-secondary">
        <span>
          {summary.isAI ? "AI · " : ""}{summary.period} · {format(new Date(summary.generatedAt), "MMM d, h:mm a")}
        </span>
        <button onClick={copy} aria-label="Copy" className="rounded-full p-1.5 hover:bg-accent-soft hover:text-accent">
          <Copy size={13} />
        </button>
      </div>
      <p className={`font-serif text-foreground leading-relaxed ${compact ? "text-base" : "text-lg"}`}>
        {summary.content}
      </p>
      <div className="mt-3 text-[10px] text-text-secondary">{words} words</div>
    </article>
  );
}

function ShimmerCard() {
  return (
    <div className="space-y-2 rounded-2xl border bg-surface p-5">
      {[100, 95, 92, 88, 70].map((w, i) => (
        <div key={i} className="h-3 animate-pulse rounded bg-border" style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}
