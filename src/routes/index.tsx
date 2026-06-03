import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { Plus, Settings as SettingsIcon } from "lucide-react";
import {
  useActivities,
  usePapers,
  useSummaries,
  useSettings,
  useSkippedDays,
  useClosedDiaries,
} from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { getYearToSeal, sealYear, buildLocalYearSummary } from "@/lib/tymeline/diary";
import {
  rescheduleAllNotifications,
  setupNotificationChannel,
  requestNotificationPermission,
} from "@/lib/tymeline/notifications";
import { ActivityCard } from "@/components/tymeline/ActivityCard";
import { AddActivitySheet } from "@/components/tymeline/AddActivitySheet";
import { format, isToday, differenceInMinutes } from "date-fns";
import { toast } from "sonner";
import type { Activity } from "@/lib/tymeline/types";

function formatGap(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.round(min / 60);
  return `${h} hour${h > 1 ? "s" : ""}`;
}

function formatDuration(min: number) {
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

export function TimelinePage() {
  const navigate = useNavigate();
  const [activities, setActivities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const [settings] = useSettings();
  const [skippedDays, setSkippedDays] = useSkippedDays();
  const [closedDiaries, setClosedDiaries] = useClosedDiaries();
  const [open, setOpen] = useState(false);
  const [pendingDate, setPendingDate] = useState<Date | undefined>();

  useEffect(() => {
    if (settings && settings.onboarded === false) {
      navigate("/onboarding");
    }
  }, [settings, navigate]);

  useEffect(() => {
    if (!activities.length) return;
    const yearToSeal = getYearToSeal(activities, closedDiaries);
    if (yearToSeal === null) return;
    const summaryText = buildLocalYearSummary(yearToSeal, activities);
    const { diary, remaining } = sealYear(yearToSeal, activities, summaryText);
    setClosedDiaries([...closedDiaries, diary]);
    setActivities(remaining);
    toast.success(`${yearToSeal} diary sealed — find it in the Diary tab.`, { duration: 5000 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);

  useEffect(() => {
    setupNotificationChannel();
  }, []);

  useEffect(() => {
    if (settings && settings.onboarded !== false && settings.notificationsEnabled !== false) {
      requestNotificationPermission().catch(() => {});
    }
  }, [settings]);

  const todayActivities = useMemo(
    () =>
      activities
        .filter((a) => isToday(new Date(a.timestamp)))
        .sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp)),
    [activities],
  );

  const todayCount = todayActivities.length;
  const todayTotalMin = useMemo(
    () => todayActivities.reduce((s, a) => s + (a.duration ?? 0), 0),
    [todayActivities],
  );

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
    if (pendingDate) {
      const key = pendingDate.toDateString();
      setSkippedDays((prev) => prev.filter((d) => d !== key));
    }
    setPendingDate(undefined);
    if (settings.notificationsEnabled !== false) {
      rescheduleAllNotifications(next, settings.name).catch(() => {});
    }
  };

  const onDelete = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  const openSheet = () => {
    setPendingDate(undefined);
    setOpen(true);
  };

  return (
    <div className="px-5 pt-6 pb-28">
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

      {todayCount > 0 && (
        <p className="mb-4 text-xs text-text-secondary">
          {todayCount} moment{todayCount > 1 ? "s" : ""} logged today
          {todayTotalMin > 0 ? ` · ${formatDuration(todayTotalMin)}` : ""}
        </p>
      )}

      {todayCount === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {todayActivities.map((a, i, arr) => {
            const prev = arr[i - 1];
            const prevStart = prev ? new Date(prev.timestamp) : null;
            const curEnd = a.endTime ? new Date(a.endTime) : new Date(a.timestamp);
            const gap = prevStart ? differenceInMinutes(prevStart, curEnd) : 0;
            return (
              <div key={a.id}>
                {gap > 30 && (
                  <div className="my-2 flex items-center gap-2 px-2 text-[10px] uppercase tracking-wider text-text-secondary">
                    <div className="h-px flex-1 bg-border" />
                    <span>~{formatGap(gap)} gap</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                )}
                <ActivityCard activity={a} index={i} onDelete={onDelete} />
              </div>
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
            ? (todayActivities[0]?.endTime ?? todayActivities[0]?.timestamp)
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
