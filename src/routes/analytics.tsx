import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useActivities } from "@/lib/tymeline/storage";
import { CATEGORY_COLORS, MOOD_SCORE } from "@/lib/tymeline/categories";
import type { Activity } from "@/lib/tymeline/types";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";
import { format, startOfDay, startOfWeek, startOfMonth, subDays } from "date-fns";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Tymeline" },
      { name: "description", content: "See how you spend your time." },
    ],
  }),
  component: AnalyticsPage,
});

type Range = "today" | "week" | "month" | "all";
const RANGES: { id: Range; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "week", label: "Week" },
  { id: "month", label: "Month" },
  { id: "all", label: "All" },
];

function filterRange(activities: Activity[], range: Range): Activity[] {
  const now = new Date();
  let from: Date | null = null;
  if (range === "today") from = startOfDay(now);
  if (range === "week") from = startOfWeek(now, { weekStartsOn: 1 });
  if (range === "month") from = startOfMonth(now);
  return from ? activities.filter((a) => new Date(a.timestamp) >= from!) : activities;
}

function AnalyticsPage() {
  const [activities] = useActivities();
  const [range, setRange] = useState<Range>("week");
  const filtered = useMemo(() => filterRange(activities, range), [activities, range]);

  const byCategory = useMemo(() => {
    const m = new Map<string, number>();
    for (const a of filtered) {
      m.set(a.category, (m.get(a.category) ?? 0) + (a.duration ?? 30));
    }
    return Array.from(m.entries())
      .map(([category, minutes]) => ({ category, hours: +(minutes / 60).toFixed(2), color: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] }))
      .sort((a, b) => b.hours - a.hours);
  }, [filtered]);

  const moodTrend = useMemo(() => {
    const m = new Map<string, { sum: number; count: number }>();
    for (const a of filtered) {
      if (!a.mood) continue;
      const key = format(new Date(a.timestamp), "MMM d");
      const cur = m.get(key) ?? { sum: 0, count: 0 };
      cur.sum += MOOD_SCORE[a.mood] ?? 3;
      cur.count += 1;
      m.set(key, cur);
    }
    return Array.from(m.entries()).map(([date, { sum, count }]) => ({ date, mood: +(sum / count).toFixed(2) }));
  }, [filtered]);

  const heatmap = useMemo(() => {
    const counts = new Array(24).fill(0);
    for (const a of filtered) counts[new Date(a.timestamp).getHours()]++;
    const max = Math.max(...counts, 1);
    return counts.map((c, h) => ({ hour: h, intensity: c / max, count: c }));
  }, [filtered]);

  const stats = useMemo(() => {
    const freq = new Map<string, number>();
    const moodFreq = new Map<string, number>();
    const byDay = new Map<string, number>();
    for (const a of filtered) {
      freq.set(a.name, (freq.get(a.name) ?? 0) + 1);
      if (a.mood) moodFreq.set(a.mood, (moodFreq.get(a.mood) ?? 0) + 1);
      const k = new Date(a.timestamp).toDateString();
      byDay.set(k, (byDay.get(k) ?? 0) + 1);
    }
    const top = (m: Map<string, number>) =>
      Array.from(m.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
    const longest = Array.from(byDay.entries()).sort((a, b) => b[1] - a[1])[0];
    return {
      total: filtered.length,
      topActivity: top(freq),
      topMood: top(moodFreq),
      longestDay: longest ? `${longest[1]} on ${format(new Date(longest[0]), "MMM d")}` : "—",
    };
  }, [filtered]);

  return (
    <div className="px-5 pt-6">
      <header className="mb-5">
        <h1 className="font-serif text-3xl text-foreground">How you spend time</h1>
        <p className="mt-1 text-sm text-text-secondary">Patterns in your moments</p>
      </header>

      <div className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 scrollbar-hide">
        {RANGES.map((r) => {
          const active = range === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setRange(r.id)}
              className="shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition"
              style={{
                backgroundColor: active ? "var(--accent)" : "transparent",
                color: active ? "var(--accent-foreground)" : "var(--foreground)",
                borderColor: active ? "var(--accent)" : "var(--border)",
              }}
            >{r.label}</button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <EmptyChart />
      ) : (
        <>
          <Card title="Time by category">
            <div style={{ height: Math.max(180, byCategory.length * 36) }}>
              <ResponsiveContainer>
                <BarChart data={byCategory} layout="vertical" margin={{ left: 12, right: 16, top: 4, bottom: 4 }}>
                  <CartesianGrid horizontal={false} stroke="var(--border)" />
                  <XAxis type="number" stroke="var(--text-secondary)" fontSize={11} />
                  <YAxis type="category" dataKey="category" stroke="var(--text-secondary)" fontSize={11} width={86} />
                  <Tooltip
                    contentStyle={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }}
                    formatter={(v: number) => [`${v}h`, "Time"]}
                  />
                  <Bar dataKey="hours" radius={[0, 8, 8, 0]} animationDuration={700}>
                    {byCategory.map((d) => (
                      <Bar key={d.category} dataKey="hours" fill={d.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {moodTrend.length > 1 && (
            <Card title="Mood over time">
              <div style={{ height: 180 }}>
                <ResponsiveContainer>
                  <LineChart data={moodTrend} margin={{ left: -8, right: 8, top: 8, bottom: 4 }}>
                    <CartesianGrid stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="date" stroke="var(--text-secondary)" fontSize={11} />
                    <YAxis domain={[1, 5]} stroke="var(--text-secondary)" fontSize={11} />
                    <Tooltip contentStyle={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                    <Line type="monotone" dataKey="mood" stroke="var(--accent)" strokeWidth={2.5} dot={{ fill: "var(--accent)", r: 3 }} animationDuration={700} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          )}

          <Card title="Active hours">
            <div className="grid grid-cols-6 gap-1.5">
              {heatmap.map((h) => (
                <div
                  key={h.hour}
                  className="flex aspect-square flex-col items-center justify-center rounded-md text-[10px] font-medium"
                  style={{
                    backgroundColor: `color-mix(in oklab, var(--accent) ${Math.round(h.intensity * 85) + 5}%, transparent)`,
                    color: h.intensity > 0.5 ? "#fff" : "var(--text-secondary)",
                  }}
                >
                  <span>{h.hour}</span>
                  {h.count > 0 && <span className="text-[8px] opacity-80">{h.count}</span>}
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Stat label="Total logged" value={String(stats.total)} />
            <Stat label="Top activity" value={stats.topActivity} />
            <Stat label="Top mood" value={stats.topMood} />
            <Stat label="Longest day" value={stats.longestDay} />
          </div>
        </>
      )}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-4 rounded-2xl border bg-surface p-4">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">{title}</h3>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-surface p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">{label}</div>
      <div className="mt-1 truncate font-serif text-lg text-foreground">{value}</div>
    </div>
  );
}

function EmptyChart() {
  return (
    <div className="mt-16 text-center text-text-secondary">
      <p className="font-serif text-xl">No data yet</p>
      <p className="mt-1 text-sm">Log activities to see your patterns emerge.</p>
    </div>
  );
}
