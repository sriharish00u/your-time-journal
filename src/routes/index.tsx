import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { Plus, Settings as SettingsIcon } from "lucide-react";
import {
  useActivities,
  usePapers,
  useSummaries,
  useSettings,
  useSkippedDays,
} from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import {
  rescheduleAllNotifications,
  scheduleRepeatReminder,
  setupNotificationChannel,
  requestNotificationPermission,
} from "@/lib/tymeline/notifications";
import { ActivityCard } from "@/components/tymeline/ActivityCard";
import { AddActivitySheet } from "@/components/tymeline/AddActivitySheet";
import { format, isToday, isYesterday, differenceInMinutes } from "date-fns";
import { toast } from "sonner";
import type { Activity } from "@/lib/tymeline/types";

function formatGap(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.round(min / 60);
  return `${h} hour${h > 1 ? "s" : ""}`;
}

function dayLabel(day: string) {
  const d = new Date(day);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "EEEE, MMM d");
}

export function TimelinePage() {
  const navigate = useNavigate();
  const [activities, setActivities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const [settings] = useSettings();
  const [skippedDays, setSkippedDays] = useSkippedDays();
  const [open, setOpen] = useState(false);
  const [pendingDate, setPendingDate] = useState<Date | undefined>();

  // Redirect onboarding (client-side)
  useEffect(() => {
    if (settings && settings.onboarded === false) {
      navigate("/onboarding");
    }
  }, [settings, navigate]);

  // Notification channel setup
  useEffect(() => {
    setupNotificationChannel();
  }, []);

  // Permission request on first real use (post-onboarding)
  useEffect(() => {
    if (settings && settings.onboarded !== false && settings.notificationsEnabled !== false) {
      requestNotificationPermission().catch(() => {});
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

  // Compute all calendar days from earliest activity to today
  const allDays = useMemo(() => {
    if (sorted.length === 0 && skippedDays.length === 0) return [];
    const dates: string[] = [];
    const earliest = sorted.length > 0 ? new Date(sorted[sorted.length - 1].timestamp) : new Date();
    const end = new Date();
    const cur = new Date(earliest);
    // Normalize to date-only range so time-of-day doesn't break the loop
    cur.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    while (cur <= end) {
      dates.push(cur.toDateString());
      cur.setDate(cur.getDate() + 1);
    }
    return dates;
  }, [sorted, skippedDays]);

  const todayCount = activities.filter((a) => isToday(new Date(a.timestamp))).length;

  const onAdd = (activity: Activity) => {
    const next = [activity, ...activities];
    setActivities(next);
    const newPapers = evaluatePapers({
      activities: next,
      existing: papers,
      summariesCount: summaries.length,
    });
    if (newPapers.length) {
      setPapers([...papers, ...newPapers]);
      newPapers.forEach((p) => {
        window.dispatchEvent(new CustomEvent("tymeline:paper-earned", { detail: { paper: p } }));
      });
    }
    toast.success("Logged");
    setPendingDate(undefined);
    if (settings.notificationsEnabled !== false) {
      rescheduleAllNotifications(next, settings.name).catch(() => {});
      const isRepeat = activities.some(
        (a) => a.name.trim().toLowerCase() === activity.name.trim().toLowerCase(),
      );
      if (isRepeat) {
        scheduleRepeatReminder(activity.name).catch(() => {});
      }
    }
  };

  const onDelete = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  const onSkipDay = (day: string) => {
    setSkippedDays([...skippedDays, day]);
  };

  const onLogForDay = (day: string) => {
    setPendingDate(new Date(day));
    setOpen(true);
  };

  const openSheet = () => {
    setPendingDate(undefined);
    setOpen(true);
  };

  // Build a map of day -> activities for quick lookup
  const dayMap = useMemo(() => {
    const m = new Map<string, typeof sorted>();
    for (const a of sorted) {
      const k = new Date(a.timestamp).toDateString();
      if (!m.has(k)) m.set(k, []);
      m.get(k)!.push(a);
    }
    return m;
  }, [sorted]);

  const skippedSet = useMemo(() => new Set(skippedDays), [skippedDays]);

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

      {sorted.length === 0 && allDays.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-6">
          {allDays.map((day) => {
            const dayActivities = dayMap.get(day);
            const isSkipped = skippedSet.has(day);

            // Actual day with activities
            if (dayActivities && dayActivities.length > 0) {
              return (
                <section key={day}>
                  <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {dayLabel(day)}
                  </h2>
                  <div className="space-y-2.5">
                    {dayActivities.map((a, i, arr) => {
                      const prev = arr[i - 1];
                      const gap = prev
                        ? differenceInMinutes(new Date(prev.timestamp), new Date(a.timestamp))
                        : 0;
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
              );
            }

            // Skipped day
            if (isSkipped) {
              return (
                <section key={day}>
                  <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {dayLabel(day)}
                  </h2>
                  <p className="px-1 text-xs italic text-text-secondary">— Skipped</p>
                </section>
              );
            }

            // Pending day (no activities, not skipped)
            return (
              <section key={day}>
                <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {dayLabel(day)}
                </h2>
                <div className="rounded-2xl border-2 border-dashed border-border bg-surface/30 p-4 text-center">
                  <p className="text-sm text-text-secondary">
                    No moments logged — add one or skip this day
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() => onLogForDay(day)}
                      className="rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-accent-foreground transition active:scale-95"
                    >
                      + Log now
                    </button>
                    <button
                      onClick={() => onSkipDay(day)}
                      className="rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-text-secondary transition active:scale-95"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      <button
        onClick={openSheet}
        aria-label="Log activity"
        className={`fixed bottom-24 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition active:scale-90 ${todayCount === 0 ? "pulse-ring" : ""}`}
      >
        <Plus size={26} strokeWidth={2.5} />
      </button>

      <AddActivitySheet
        open={open}
        onClose={() => {
          setOpen(false);
          setPendingDate(undefined);
        }}
        onAdd={onAdd}
        defaultDate={pendingDate}
        lastEndTime={
          !pendingDate || pendingDate.toDateString() === new Date().toDateString()
            ? (sorted[0]?.endTime ?? sorted[0]?.timestamp)
            : undefined
        }
      />
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
