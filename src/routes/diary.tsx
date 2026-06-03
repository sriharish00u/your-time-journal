import { useState, useMemo } from "react";
import { useActivities, useClosedDiaries } from "@/lib/tymeline/storage";
import { format, isToday, isYesterday } from "date-fns";
import { CATEGORY_COLORS } from "@/lib/tymeline/categories";
import type { Activity, ClosedDiary } from "@/lib/tymeline/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

function dayLabel(dateStr: string) {
  const d = new Date(dateStr);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "EEEE, MMMM d");
}

function formatDur(min: number) {
  if (!min) return "";
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function DiaryRow({ activity }: { activity: Activity }) {
  const color = CATEGORY_COLORS[activity.category];
  return (
    <div className="relative flex items-start gap-3 py-2 pl-6">
      <div
        className="absolute left-0 top-3 h-2.5 w-2.5 rounded-full border-2 border-background shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="w-12 shrink-0 pt-0.5 font-mono text-xs text-text-secondary">
        {format(new Date(activity.timestamp), "HH:mm")}
      </span>
      <div className="min-w-0 flex-1">
        <span className="font-serif text-base leading-snug text-foreground">
          {activity.emoji ? `${activity.emoji} ` : ""}{activity.name}
        </span>
        <div className="mt-0.5 flex items-center gap-2 text-[10px] text-text-secondary">
          <span
            className="rounded-full px-1.5 py-0.5"
            style={{ backgroundColor: `${color}22`, color }}
          >
            {activity.category}
          </span>
          {activity.duration ? <span>{formatDur(activity.duration)}</span> : null}
        </div>
      </div>
      {activity.mood && (
        <span className="shrink-0 text-xl leading-none pt-0.5">{activity.mood}</span>
      )}
    </div>
  );
}

function DiaryDaySection({ dateKey, activities }: { dateKey: string; activities: Activity[] }) {
  const totalMin = activities.reduce((s, a) => s + (a.duration ?? 0), 0);
  const topCat = useMemo(() => {
    const m = new Map<string, number>();
    for (const a of activities) m.set(a.category, (m.get(a.category) ?? 0) + (a.duration ?? 0));
    return [...m.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
  }, [activities]);

  const sorted = [...activities].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  );

  return (
    <section
      className="relative mb-6 overflow-hidden rounded-2xl border bg-surface"
      style={{
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 31px, var(--border) 31px, var(--border) 32px)",
        backgroundPositionY: "48px",
      }}
    >
      <div className="flex items-start justify-between border-b border-border/60 px-4 pt-4 pb-3">
        <h2 className="font-serif text-xl text-foreground">{dayLabel(dateKey)}</h2>
        <div className="text-right">
          <p className="font-mono text-xl font-bold text-accent leading-none">
            {format(new Date(dateKey), "dd")}
          </p>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">
            {format(new Date(dateKey), "MMM yyyy")}
          </p>
        </div>
      </div>

      <div
        className="absolute left-4 top-[72px] bottom-12 w-px"
        style={{ backgroundColor: "var(--border)" }}
      />

      <div className="px-4 py-2">
        {sorted.map((a) => (
          <DiaryRow key={a.id} activity={a} />
        ))}
      </div>

      <div className="border-t border-border/40 px-4 py-2.5 text-[11px] italic text-text-secondary">
        {totalMin > 0 ? `${formatDur(totalMin)} tracked` : "No duration logged"}
        {topCat ? ` · mostly ${topCat}` : ""}
        {` · ${activities.length} moment${activities.length > 1 ? "s" : ""}`}
      </div>
    </section>
  );
}

function BookSpine({ diary, onOpen }: { diary: ClosedDiary; onOpen: () => void }) {
  const domColor = diary.topCategories[0]
    ? CATEGORY_COLORS[diary.topCategories[0].category]
    : "var(--accent)";
  return (
    <button
      onClick={onOpen}
      className="relative flex h-36 w-14 shrink-0 flex-col items-center justify-center overflow-hidden rounded-lg shadow-md transition active:scale-95"
      style={{ backgroundColor: domColor }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/20" />
      <span
        className="relative z-10 font-serif text-sm font-bold text-white"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        {diary.year}
      </span>
      <span className="relative z-10 mt-2 text-[9px] uppercase tracking-widest text-white/70">
        {diary.activities.length} logs
      </span>
    </button>
  );
}

function ClosedDiaryReader({ diary, onClose }: { diary: ClosedDiary; onClose: () => void }) {
  const [page, setPage] = useState(0);

  const dayGroups = useMemo(() => {
    const m = new Map<string, Activity[]>();
    for (const a of diary.activities) {
      const k = new Date(a.timestamp).toDateString();
      if (!m.has(k)) m.set(k, []);
      m.get(k)!.push(a);
    }
    return Array.from(m.entries()).sort(
      (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime(),
    );
  }, [diary]);

  const totalPages = dayGroups.length + 2;
  const isCoverPage = page === 0;
  const isSummaryPage = page === totalPages - 1;
  const dayGroup = !isCoverPage && !isSummaryPage ? dayGroups[page - 1] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-background"
      style={{ animation: "fadeIn 200ms ease" }}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <button onClick={onClose} className="rounded-full border bg-surface p-2">
          <ChevronLeft size={18} />
        </button>
        <span className="text-sm font-medium text-text-secondary">
          {isCoverPage ? "Cover" : isSummaryPage ? "Year End" : `Day ${page} of ${dayGroups.length}`}
        </span>
        <span className="text-xs text-text-secondary">{diary.year}</span>
      </div>

      <div
        className="flex-1 overflow-y-auto px-5 py-6"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, var(--border) 31px, var(--border) 32px)",
          backgroundPositionY: "24px",
        }}
      >
        {isCoverPage && (
          <div className="flex flex-col items-center justify-center min-h-full text-center py-12">
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary mb-4">
              Personal Journal
            </p>
            <h1 className="font-serif text-7xl font-bold text-accent">{diary.year}</h1>
            <p className="mt-6 font-serif text-xl text-foreground">Your Time. Your Story.</p>
            <div className="mt-8 space-y-2 text-sm text-text-secondary">
              <p>{diary.activities.length} moments logged</p>
              <p>{new Set(diary.activities.map((a) => new Date(a.timestamp).toDateString())).size} days</p>
              <p>{diary.totalHours} total hours</p>
            </div>
          </div>
        )}

        {isSummaryPage && (
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-foreground">Year in Review</h2>
            {diary.summary && (
              <p className="font-serif text-lg leading-relaxed text-foreground">{diary.summary}</p>
            )}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Time by Category
              </h3>
              <div className="space-y-2.5">
                {diary.topCategories.map(({ category, minutes }) => {
                  const maxMin = diary.topCategories[0]?.minutes ?? 1;
                  const pct = Math.round((minutes / maxMin) * 100);
                  const color = CATEGORY_COLORS[category];
                  return (
                    <div key={category} className="flex items-center gap-3">
                      <span className="w-20 shrink-0 text-xs text-text-secondary text-right">
                        {category}
                      </span>
                      <div className="relative flex-1 h-5 rounded-full bg-border overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${pct}%`, backgroundColor: color }}
                        />
                      </div>
                      <span className="w-12 shrink-0 text-xs text-text-secondary">
                        {Math.round(minutes / 60)}h
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {dayGroup && (
          <DiaryDaySection dateKey={dayGroup[0]} activities={dayGroup[1]} />
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border px-6 py-4">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="rounded-full border bg-surface p-3 transition disabled:opacity-30 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-1">
          {Array.from({ length: Math.min(totalPages, 7) }).map((_, i) => {
            const dotPage = totalPages <= 7 ? i : Math.round((i / 6) * (totalPages - 1));
            return (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full transition"
                style={{
                  backgroundColor: page === dotPage ? "var(--accent)" : "var(--border)",
                }}
              />
            );
          })}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="rounded-full border bg-surface p-3 transition disabled:opacity-30 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}

export function DiaryPage() {
  const [activities] = useActivities();
  const [closedDiaries] = useClosedDiaries();
  const [openDiary, setOpenDiary] = useState<ClosedDiary | null>(null);

  const dayGroups = useMemo(() => {
    const m = new Map<string, Activity[]>();
    for (const a of activities) {
      const k = new Date(a.timestamp).toDateString();
      if (!m.has(k)) m.set(k, []);
      m.get(k)!.push(a);
    }
    return Array.from(m.entries()).sort(
      (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime(),
    );
  }, [activities]);

  return (
    <div className="px-5 pt-6 pb-28">
      <header className="mb-5">
        <h1 className="font-serif text-3xl text-foreground">Diary</h1>
        <p className="mt-1 text-sm text-text-secondary">Your time, written.</p>
      </header>

      {closedDiaries.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Sealed Diaries
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {closedDiaries
              .slice()
              .sort((a, b) => b.year - a.year)
              .map((d) => (
                <BookSpine key={d.id} diary={d} onOpen={() => setOpenDiary(d)} />
              ))}
          </div>
        </section>
      )}

      {dayGroups.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-serif text-xl text-foreground/50">Nothing written yet</p>
          <p className="mt-2 text-sm text-text-secondary">
            Log a moment on the home page to start your diary.
          </p>
        </div>
      ) : (
        <div className="space-y-1">
          {dayGroups.map(([dateKey, acts]) => (
            <DiaryDaySection key={dateKey} dateKey={dateKey} activities={acts} />
          ))}
        </div>
      )}

      {openDiary && (
        <ClosedDiaryReader diary={openDiary} onClose={() => setOpenDiary(null)} />
      )}
    </div>
  );
}
