import type { Activity, Paper, PaperType, ActivityCategory } from "./types";

interface PaperDef {
  type: PaperType;
  title: string;
  reason: string;
  check: (ctx: {
    activities: Activity[];
    summariesCount: number;
    didExport: boolean;
    didImport: boolean;
  }) => boolean;
}

function sameDay(a: string, b: string) {
  const da = new Date(a),
    db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
}

function normalizeDate(ts: string): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function uniqueDays(activities: Activity[]): number[] {
  return Array.from(new Set(activities.map((a) => normalizeDate(a.timestamp)))).sort();
}

function consecutiveDays(activities: Activity[], n: number): boolean {
  const days = uniqueDays(activities);
  let streak = 1;
  for (let i = 1; i < days.length; i++) {
    if (days[i] - days[i - 1] === 86400000) {
      streak++;
      if (streak >= n) return true;
    } else {
      streak = 1;
    }
  }
  return false;
}

export const PAPERS: PaperDef[] = [
  {
    type: "first-step",
    title: "First Step",
    reason: "Logged your first activity",
    check: ({ activities }) => activities.length >= 1,
  },
  {
    type: "consistent",
    title: "Consistent",
    reason: "Logged 3 days in a row",
    check: ({ activities }) => consecutiveDays(activities, 3),
  },
  {
    type: "deep-diver",
    title: "Deep Diver",
    reason: "Logged an activity over 2 hours",
    check: ({ activities }) => activities.some((a) => (a.duration ?? 0) >= 120),
  },
  {
    type: "mood-tracker",
    title: "Mood Tracker",
    reason: "Added mood to 5 activities",
    check: ({ activities }) => activities.filter((a) => a.mood).length >= 5,
  },
  {
    type: "reflector",
    title: "Reflector",
    reason: "Generated your first summary",
    check: ({ summariesCount }) => summariesCount >= 1,
  },
  {
    type: "archivist",
    title: "Archivist",
    reason: "Exported a backup",
    check: ({ didExport }) => didExport,
  },
  {
    type: "returning",
    title: "Returning",
    reason: "Imported data",
    check: ({ didImport }) => didImport,
  },
  {
    type: "week-warrior",
    title: "Week Warrior",
    reason: "Logged every day for 7 days",
    check: ({ activities }) => consecutiveDays(activities, 7),
  },
  {
    type: "variety",
    title: "Variety",
    reason: "Used 5 different categories in one day",
    check: ({ activities }) => {
      const byDay = new Map<string, Set<string>>();
      for (const a of activities) {
        const k = new Date(a.timestamp).toDateString();
        if (!byDay.has(k)) byDay.set(k, new Set());
        byDay.get(k)!.add(a.category);
      }
      return Array.from(byDay.values()).some((s) => s.size >= 5);
    },
  },
  {
    type: "century",
    title: "Century",
    reason: "Logged 100 activities",
    check: ({ activities }) => activities.length >= 100,
  },
  {
    type: "early-bird",
    title: "Early Bird",
    reason: "Logged an activity before 7 AM",
    check: ({ activities }) => activities.some((a) => new Date(a.timestamp).getHours() < 7),
  },
  {
    type: "night-owl",
    title: "Night Owl",
    reason: "Logged an activity after 11 PM",
    check: ({ activities }) => activities.some((a) => new Date(a.timestamp).getHours() >= 23),
  },
  {
    type: "emoji-lover",
    title: "Mood Lover",
    reason: "Added mood to 10 activities",
    check: ({ activities }) => activities.filter((a) => a.mood).length >= 10,
  },
  {
    type: "chained",
    title: "Chained",
    reason: "Logged 5 back-to-back activities using time chaining",
    check: ({ activities }) => activities.filter((a) => a.endTime).length >= 5,
  },
  {
    type: "multi-week",
    title: "Multi-Week",
    reason: "Logged activities across 3 different calendar weeks",
    check: ({ activities }) => {
      function isoWeek(ts: string): string {
        const d = new Date(ts);
        const jan1 = new Date(d.getFullYear(), 0, 1);
        const days = Math.round((d.getTime() - jan1.getTime()) / 86400000);
        const weekNum = Math.ceil((days + jan1.getDay() + 1) / 7);
        return `${d.getFullYear()}-W${String(weekNum).padStart(2, "0")}`;
      }
      const weeks = new Set(activities.map((a) => isoWeek(a.timestamp)));
      return weeks.size >= 3;
    },
  },
  {
    type: "category-explorer",
    title: "Explorer",
    reason: "Used every category at least once",
    check: ({ activities }) => {
      const used = new Set(activities.map((a) => a.category));
      const required: ActivityCategory[] = [
        "Study",
        "Code",
        "Exercise",
        "Read",
        "Meeting",
        "Entertainment",
        "Travel",
        "Food",
        "Sleep",
        "Health",
        "Social",
        "Finance",
        "Creative",
        "Chores",
      ];
      return required.every((c) => used.has(c));
    },
  },
  {
    type: "speed-logger",
    title: "Speed Logger",
    reason: "Logged 5 activities in one day",
    check: ({ activities }) => {
      const byDay = new Map<string, number>();
      for (const a of activities) {
        const k = new Date(a.timestamp).toDateString();
        byDay.set(k, (byDay.get(k) ?? 0) + 1);
      }
      return Array.from(byDay.values()).some((n) => n >= 5);
    },
  },
  {
    type: "half-century",
    title: "Half Century",
    reason: "Logged 50 activities",
    check: ({ activities }) => activities.length >= 50,
  },
  {
    type: "mood-rainbow",
    title: "Mood Rainbow",
    reason: "Used every mood emoji at least once",
    check: ({ activities }) => {
      const used = new Set(activities.map((a) => a.mood).filter(Boolean));
      return used.size >= 8;
    },
  },
  {
    type: "marathon",
    title: "Marathon",
    reason: "Accumulated 24 total hours of logged time",
    check: ({ activities }) => {
      const totalMin = activities.reduce((s, a) => s + (a.duration ?? 0), 0);
      return totalMin >= 1440;
    },
  },
];

export function evaluatePapers(ctx: {
  activities: Activity[];
  existing: Paper[];
  summariesCount: number;
  didExport?: boolean;
  didImport?: boolean;
}): Paper[] {
  const earned = new Set(ctx.existing.map((p) => p.type));
  const sorted = [...ctx.activities].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  );
  const newPapers: Paper[] = [];
  for (const def of PAPERS) {
    if (earned.has(def.type)) continue;
    if (
      def.check({
        activities: sorted,
        summariesCount: ctx.summariesCount,
        didExport: ctx.didExport ?? false,
        didImport: ctx.didImport ?? false,
      })
    ) {
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

export const PAPER_ICONS: Record<PaperType, string> = {
  "first-step": "👣",
  consistent: "🔥",
  "deep-diver": "🧠",
  "mood-tracker": "💭",
  reflector: "✨",
  archivist: "📦",
  returning: "🔁",
  "week-warrior": "🏆",
  variety: "🎨",
  century: "🥇",
  "early-bird": "🌅",
  "night-owl": "🦉",
  "emoji-lover": "😍",
  chained: "⛓️",
  "multi-week": "📅",
  "category-explorer": "🧭",
  "speed-logger": "⚡",
  "half-century": "🎯",
  "mood-rainbow": "🌈",
  marathon: "🏅",
};

// Deterministic gradient from paper id
export function paperGradient(id: string): string {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const hue1 = h % 360;
  const hue2 = (hue1 + 40 + (h % 60)) % 360;
  return `linear-gradient(135deg, hsl(${hue1} 65% 78%) 0%, hsl(${hue2} 70% 70%) 100%)`;
}
export { sameDay };
