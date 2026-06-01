import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Plus, Settings as SettingsIcon } from "lucide-react";
import { useActivities, usePapers, useSummaries, useSettings } from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { ActivityCard } from "@/components/tymeline/ActivityCard";
import { AddActivitySheet } from "@/components/tymeline/AddActivitySheet";
import { format, isToday, isYesterday, differenceInMinutes } from "date-fns";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tymeline — Your timeline" },
      { name: "description", content: "Your private daily activity timeline." },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const [activities, setActivities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const [settings] = useSettings();
  const [open, setOpen] = useState(false);

  // Redirect onboarding (client-side)
  useEffect(() => {
    if (settings && settings.onboarded === false && typeof window !== "undefined") {
      window.location.assign("/onboarding");
    }
  }, [settings]);

  const sorted = useMemo(
    () => [...activities].sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp)),
    [activities],
  );

  const groups = useMemo(() => {
    const map = new Map<string, typeof sorted>();
    for (const a of sorted) {
      const k = new Date(a.timestamp).toDateString();
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(a);
    }
    return Array.from(map.entries());
  }, [sorted]);

  const todayCount = activities.filter((a) => isToday(new Date(a.timestamp))).length;

  const handleAdd = (a: Parameters<typeof setActivities>[0] extends (p: infer P) => infer _ ? never : never) => a;

  const addActivity = (a: Parameters<typeof setActivities>[0] extends never ? never : Parameters<Awaited<ReturnType<typeof Promise.resolve>>>[0]) => a;
  void handleAdd; void addActivity;

  const onAdd = (activity: Parameters<typeof setActivities>[0] extends never ? never : any) => {
    const next = [activity, ...activities];
    setActivities(next);
    // evaluate papers
    const newPapers = evaluatePapers({
      activities: next, existing: papers, summariesCount: summaries.length,
    });
    if (newPapers.length) {
      setPapers([...papers, ...newPapers]);
      newPapers.forEach((p) => toast.success(`📜 Paper earned: ${p.title}`, { description: p.reason }));
    }
    toast.success("Logged");
  };

  const onDelete = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-accent leading-none">Tymeline</h1>
          <p className="mt-1 text-xs text-text-secondary">{format(new Date(), "EEEE, MMM d")}</p>
        </div>
        <Link
          to="/settings"
          aria-label="Settings"
          className="rounded-full border bg-surface p-2.5 text-text-secondary transition active:scale-95"
        >
          <SettingsIcon size={18} />
        </Link>
      </header>

      {sorted.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-6">
          {groups.map(([day, items]) => (
            <section key={day}>
              <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                {dayLabel(day)}
              </h2>
              <div className="space-y-2.5">
                {items.map((a, i) => {
                  const prev = items[i - 1];
                  const gap = prev ? differenceInMinutes(new Date(prev.timestamp), new Date(a.timestamp)) : 0;
                  return (
                    <div key={a.id}>
                      {gap > 30 ? (
                        <div className="my-2 flex items-center gap-2 px-2 text-[10px] uppercase tracking-wider text-text-secondary">
                          <div className="h-px flex-1 bg-border" />
                          <span>~{formatGap(gap)} gap</span>
                          <div className="h-px flex-1 bg-border" />
                        </div>
                      ) : null}
                      <ActivityCard activity={a} index={i} onDelete={onDelete} />
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(true)}
        aria-label="Log activity"
        className={`fixed bottom-24 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition active:scale-90 ${todayCount === 0 ? "pulse-ring" : ""}`}
      >
        <Plus size={26} strokeWidth={2.5} />
      </button>

      <AddActivitySheet open={open} onClose={() => setOpen(false)} onAdd={onAdd} />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-20 flex flex-col items-center text-center px-6 float-soft">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-3xl">
        ✎
      </div>
      <h2 className="font-serif text-2xl text-foreground">A blank canvas</h2>
      <p className="mt-2 max-w-xs text-sm text-text-secondary">
        Your day is unwritten. Tap the orange button to capture your first moment.
      </p>
    </div>
  );
}

function dayLabel(day: string) {
  const d = new Date(day);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "EEEE, MMM d");
}

function formatGap(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.round(min / 60);
  return `${h} hour${h > 1 ? "s" : ""}`;
}
