import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useRef } from "react";
import { useActivities, useSettings, useSummaries, usePapers } from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { generateAISummary } from "@/lib/tymeline/ai.functions";
import { useServerFn } from "@tanstack/react-start";
import { MOOD_SCORE } from "@/lib/tymeline/categories";
import { startOfWeek, startOfMonth, format } from "date-fns";
import { Copy, Sparkles, Loader2, Download } from "lucide-react";
import { toast } from "sonner";
import type { SummaryContent, ActivityCategory } from "@/lib/tymeline/types";

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
  const from =
    period === "week" ? startOfWeek(new Date(), { weekStartsOn: 1 }) : startOfMonth(new Date());
  return activities.filter((a) => new Date(a.timestamp) >= from);
}

function buildLocalSummary(
  activities: ReturnType<typeof useActivities>[0],
  period: Period,
): string {
  if (activities.length === 0) {
    return "No activities logged for this period yet. Every journey begins with a single step — start capturing your moments to see meaningful patterns emerge over time.";
  }
  const totalMin = activities.reduce((s, a) => s + (a.duration ?? 30), 0);
  const totalHours = Math.round(totalMin / 60);
  const byCat = new Map<string, number>();
  for (const a of activities)
    byCat.set(a.category, (byCat.get(a.category) ?? 0) + (a.duration ?? 30));
  const sortedCats = Array.from(byCat.entries()).sort((a, b) => b[1] - a[1]);
  const topCat = sortedCats[0];
  const moods = activities.filter((a) => a.mood).map((a) => MOOD_SCORE[a.mood!] ?? 3);
  const avgMood = moods.length
    ? (moods.reduce((s, n) => s + n, 0) / moods.length).toFixed(1)
    : null;
  const freq = new Map<string, number>();
  for (const a of activities) freq.set(a.name, (freq.get(a.name) ?? 0) + 1);
  const mostFreq = Array.from(freq.entries()).sort((a, b) => b[1] - a[1])[0];
  const byDay = new Map<string, number>();
  for (const a of activities) {
    const d = new Date(a.timestamp).toDateString();
    byDay.set(d, (byDay.get(d) ?? 0) + 1);
  }
  const longestDay = Array.from(byDay.entries()).sort((a, b) => b[1] - a[1])[0];
  const totalDays = byDay.size;

  const periodLabel =
    period === "week" ? "this week" : period === "month" ? "this month" : "across all time";
  const dayRange = totalDays > 1 ? `over ${totalDays} different days` : "on a single day";

  const paras: string[] = [];

  // Opening paragraph
  paras.push(
    `Looking back ${periodLabel}, I see a story taking shape. You recorded ${activities.length} moment${activities.length > 1 ? "s" : ""} ${dayRange}, giving approximately ${totalHours} hour${totalHours > 1 ? "s" : ""} of your time a name and a place in memory. Each entry is a thread in the larger fabric of your days.`,
  );

  // Category breakdown
  if (sortedCats.length > 0) {
    const catLines = sortedCats.slice(0, 4).map(([cat, min], i) => {
      const pct = Math.round((min / totalMin) * 100);
      return `${cat} claimed ${pct}% of your logged time`;
    });
    const catStr = catLines.join(", ");
    const lastComma = catStr.lastIndexOf(", ");
    const formatted =
      lastComma > 0 ? catStr.slice(0, lastComma) + ", and " + catStr.slice(lastComma + 2) : catStr;
    paras.push(
      `Your time distributed across ${sortedCats.length} categor${sortedCats.length > 1 ? "ies" : "y"} — ${formatted}. ${topCat ? `${topCat[0]} was your dominant theme, accounting for the single largest share of your focus.` : ""}`,
    );
  }

  // Most frequent activity
  if (mostFreq && mostFreq[1] > 1) {
    paras.push(
      `A familiar rhythm emerges: "${mostFreq[0]}" appears ${mostFreq[1]} time${mostFreq[1] > 1 ? "s" : ""}, more than any other activity. This repetition suggests a steady habit or a recurring commitment woven into your routine.`,
    );
  }

  // Longest day
  if (longestDay && longestDay[1] > 1) {
    paras.push(
      `Your most eventful day held ${longestDay[1]} logged moment${longestDay[1] > 1 ? "s" : ""} — a rich and full span of hours. Days like these are worth noticing; they show what a full, engaged day looks like for you.`,
    );
  }

  // Mood reflection
  if (avgMood) {
    const moodDesc =
      Number(avgMood) >= 4
        ? "mostly bright and positive"
        : Number(avgMood) >= 3
          ? "balanced with steady moments"
          : "carrying some weight";
    const moodAdvice =
      Number(avgMood) >= 4
        ? "These positive states are worth protecting — notice what feeds them."
        : Number(avgMood) >= 3
          ? "The balanced stretches are where growth quietly happens."
          : "Even the heavier days are data, not verdicts — they reveal what matters enough to affect you.";
    paras.push(
      `On the emotional side, your average mood settled at ${avgMood} out of 5 — ${moodDesc}. ${moodAdvice}`,
    );
  } else {
    paras.push(
      `No mood data was recorded for this period. Adding a quick emotion marker to each entry paints a richer picture over time and reveals how different activities shape your state of mind.`,
    );
  }

  // Closing reflection
  paras.push(
    `Every moment you capture is an act of attention — a small pause to register that this mattered enough to remember. The patterns here are still emerging, and with each new entry the story becomes clearer. Keep going.`,
  );

  return paras.join(" ");
}

function SummaryPage() {
  const [activities] = useActivities();
  const [settings] = useSettings();
  const [summaries, setSummaries] = useSummaries();
  const [papers, setPapers] = usePapers();
  const [period, setPeriod] = useState<Period>("week");
  const [loading, setLoading] = useState(false);
  const aiFn = useServerFn(generateAISummary);
  const printRef = useRef<HTMLDivElement>(null);

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
              name: a.name,
              category: a.category,
              duration: a.duration,
              mood: a.mood,
              timestamp: a.timestamp,
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
        activities,
        existing: papers,
        summariesCount: next.length,
      });
      if (newPapers.length) {
        setPapers([...papers, ...newPapers]);
        newPapers.forEach((p) => {
          window.dispatchEvent(new CustomEvent("tymeline:paper-earned", { detail: { paper: p } }));
        });
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
        <div ref={printRef} className="print-summary">
          <PaperCard summary={latest} />
          <button
            onClick={() => window.print()}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border bg-surface py-3 text-sm font-medium text-foreground transition active:scale-[0.98]"
          >
            <Download size={16} />
            Export as PDF
          </button>
          <p className="mt-1.5 text-center text-[10px] text-text-secondary">
            Opens your browser's print dialog — save as PDF.
          </p>
        </div>
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
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Past reflections
          </h3>
          <div className="space-y-3">
            {periodSummaries.slice(1).map((s) => (
              <PaperCard key={s.id} summary={s} compact />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function EssayView({ content }: { content: SummaryContent }) {
  const sections: { key: keyof SummaryContent; label: string; color: string; bold?: boolean }[] = [
    { key: "what_you_did", label: "What you did", color: "var(--foreground)" },
    { key: "positives", label: "Positives", color: "#43A047" },
    { key: "negatives", label: "What drained you", color: "#FB8C00" },
    { key: "improvements_must", label: "Must improve", color: "#C0392B" },
    { key: "improvements_nice", label: "Nice to improve", color: "var(--text-secondary)" },
  ];
  return (
    <div className="space-y-4">
      {sections.map(({ key, label, color, bold }) => {
        const text = content[key];
        if (!text || text.trim().length === 0) return null;
        return (
          <div key={key}>
            <h4
              className="mb-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{ color }}
            >
              {label}
            </h4>
            <p
              className="font-serif leading-relaxed text-foreground"
              style={{ fontWeight: bold ? 600 : 400 }}
            >
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function PaperCard({
  summary,
  compact,
}: {
  summary: {
    id: string;
    content: string | SummaryContent;
    generatedAt: string;
    isAI: boolean;
    period: string;
  };
  compact?: boolean;
}) {
  const copy = () => {
    const text =
      typeof summary.content === "string"
        ? summary.content
        : Object.values(summary.content as SummaryContent)
            .filter(Boolean)
            .join("\n\n");
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  return (
    <article
      className="paper-texture rounded-2xl border bg-surface p-5 shadow-sm"
      style={{ boxShadow: "0 1px 0 var(--border), 0 8px 24px -16px rgba(0,0,0,0.15)" }}
    >
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-text-secondary">
        <span>
          {summary.isAI ? "AI · " : ""}
          {summary.period} · {format(new Date(summary.generatedAt), "MMM d, h:mm a")}
        </span>
        <button
          onClick={copy}
          aria-label="Copy"
          className="rounded-full p-1.5 hover:bg-accent-soft hover:text-accent"
        >
          <Copy size={13} />
        </button>
      </div>

      {typeof summary.content === "string" ? (
        <p
          className={`font-serif text-foreground leading-relaxed ${compact ? "text-base" : "text-lg"}`}
        >
          {summary.content}
        </p>
      ) : (
        <div className={compact ? "text-base" : "text-lg"}>
          <EssayView content={summary.content as SummaryContent} />
        </div>
      )}
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
