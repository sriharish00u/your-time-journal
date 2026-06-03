import type { Activity, ActivityCategory, ClosedDiary } from "./types";

export function buildDiaryAnalytics(activities: Activity[]): {
  totalHours: number;
  topCategories: { category: ActivityCategory; minutes: number }[];
} {
  const catMap = new Map<ActivityCategory, number>();
  let totalMin = 0;
  for (const a of activities) {
    const min = a.duration ?? 0;
    totalMin += min;
    catMap.set(a.category, (catMap.get(a.category) ?? 0) + min);
  }
  const topCategories = Array.from(catMap.entries())
    .map(([category, minutes]) => ({ category, minutes }))
    .sort((a, b) => b.minutes - a.minutes)
    .slice(0, 5);
  return {
    totalHours: Math.round(totalMin / 60),
    topCategories,
  };
}

export function getYearToSeal(activities: Activity[], closedDiaries: ClosedDiary[]): number | null {
  const sealedYears = new Set(closedDiaries.map((d) => d.year));
  const currentYear = new Date().getFullYear();
  const years = new Set(activities.map((a) => new Date(a.timestamp).getFullYear()));
  for (const y of years) {
    if (y < currentYear && !sealedYears.has(y)) return y;
  }
  return null;
}

export function sealYear(
  year: number,
  activities: Activity[],
  summaryText?: string,
): { diary: ClosedDiary; remaining: Activity[] } {
  const yearActs = activities.filter((a) => new Date(a.timestamp).getFullYear() === year);
  const remaining = activities.filter((a) => new Date(a.timestamp).getFullYear() !== year);
  const { totalHours, topCategories } = buildDiaryAnalytics(yearActs);
  const diary: ClosedDiary = {
    id: `diary-${year}`,
    year,
    sealedAt: new Date().toISOString(),
    activities: yearActs,
    summary: summaryText,
    totalHours,
    topCategories,
  };
  return { diary, remaining };
}

export function buildLocalYearSummary(year: number, activities: Activity[]): string {
  if (activities.length === 0) return `Nothing logged in ${year}.`;

  const { totalHours, topCategories } = buildDiaryAnalytics(activities);
  const daysLogged = new Set(activities.map((a) => new Date(a.timestamp).toDateString())).size;
  const top = topCategories[0];
  const moodCounts = activities.filter((a) => a.mood).length;

  const lines: string[] = [];
  lines.push(`In ${year}, you logged ${activities.length} moments across ${daysLogged} days.`);
  lines.push(`That's roughly ${totalHours} hours of tracked time.`);
  if (top) lines.push(`Your most common activity was ${top.category} (${Math.round(top.minutes / 60)} hrs).`);
  if (moodCounts > 0) lines.push(`You noted your mood ${moodCounts} times.`);

  const longestActivity = activities.reduce((best, a) =>
    (a.duration ?? 0) > (best.duration ?? 0) ? a : best,
  );
  if ((longestActivity.duration ?? 0) >= 60) {
    lines.push(`Longest session: "${longestActivity.name}" at ${Math.round((longestActivity.duration ?? 0) / 60)} hours.`);
  }

  return lines.join(" ");
}
