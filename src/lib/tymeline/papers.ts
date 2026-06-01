import type { Activity, Paper, PaperType } from "./types";

interface PaperDef {
  type: PaperType;
  title: string;
  reason: string;
  check: (ctx: { activities: Activity[]; summariesCount: number; didExport: boolean; didImport: boolean }) => boolean;
}

function sameDay(a: string, b: string) {
  const da = new Date(a), db = new Date(b);
  return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
}

function uniqueDays(activities: Activity[]): string[] {
  return Array.from(new Set(activities.map((a) => new Date(a.timestamp).toDateString())));
}

function consecutiveDays(activities: Activity[], n: number): boolean {
  const days = uniqueDays(activities).map((d) => new Date(d).getTime()).sort();
  let streak = 1;
  for (let i = 1; i < days.length; i++) {
    const diff = (days[i] - days[i - 1]) / 86400000;
    if (diff === 1) { streak++; if (streak >= n) return true; }
    else if (diff > 1) streak = 1;
  }
  return false;
}

export const PAPERS: PaperDef[] = [
  { type: "first-step", title: "First Step", reason: "Logged your first activity",
    check: ({ activities }) => activities.length >= 1 },
  { type: "consistent", title: "Consistent", reason: "Logged 3 days in a row",
    check: ({ activities }) => consecutiveDays(activities, 3) },
  { type: "deep-diver", title: "Deep Diver", reason: "Logged an activity over 2 hours",
    check: ({ activities }) => activities.some((a) => (a.duration ?? 0) >= 120) },
  { type: "mood-tracker", title: "Mood Tracker", reason: "Added mood to 5 activities",
    check: ({ activities }) => activities.filter((a) => a.mood).length >= 5 },
  { type: "reflector", title: "Reflector", reason: "Generated your first summary",
    check: ({ summariesCount }) => summariesCount >= 1 },
  { type: "archivist", title: "Archivist", reason: "Exported a backup",
    check: ({ didExport }) => didExport },
  { type: "returning", title: "Returning", reason: "Imported data",
    check: ({ didImport }) => didImport },
  { type: "week-warrior", title: "Week Warrior", reason: "Logged every day for 7 days",
    check: ({ activities }) => consecutiveDays(activities, 7) },
  { type: "variety", title: "Variety", reason: "Used 5 different categories in one day",
    check: ({ activities }) => {
      const byDay = new Map<string, Set<string>>();
      for (const a of activities) {
        const k = new Date(a.timestamp).toDateString();
        if (!byDay.has(k)) byDay.set(k, new Set());
        byDay.get(k)!.add(a.category);
      }
      return Array.from(byDay.values()).some((s) => s.size >= 5);
    } },
  { type: "century", title: "Century", reason: "Logged 100 activities",
    check: ({ activities }) => activities.length >= 100 },
];

export function evaluatePapers(
  ctx: { activities: Activity[]; existing: Paper[]; summariesCount: number; didExport?: boolean; didImport?: boolean }
): Paper[] {
  const earned = new Set(ctx.existing.map((p) => p.type));
  const newPapers: Paper[] = [];
  for (const def of PAPERS) {
    if (earned.has(def.type)) continue;
    if (def.check({
      activities: ctx.activities,
      summariesCount: ctx.summariesCount,
      didExport: ctx.didExport ?? false,
      didImport: ctx.didImport ?? false,
    })) {
      newPapers.push({
        id: crypto.randomUUID(),
        type: def.type,
        title: def.title,
        reason: def.reason,
        earnedAt: new Date().toISOString(),
      });
    }
  }
  return newPapers;
}

// Deterministic gradient from paper id
export function paperGradient(id: string): string {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const hue1 = h % 360;
  const hue2 = (hue1 + 40 + (h % 60)) % 360;
  return `linear-gradient(135deg, hsl(${hue1} 65% 78%) 0%, hsl(${hue2} 70% 70%) 100%)`;
}
export { sameDay };
