import type { ActivityCategory } from "./types";

export const CATEGORIES: ActivityCategory[] = [
  "Study", "Code", "Exercise", "Read", "Meeting",
  "Entertainment", "Travel", "Food", "Sleep", "Custom",
];

export const CATEGORY_COLORS: Record<ActivityCategory, string> = {
  Study: "#4A90D9",
  Code: "#7C4DFF",
  Exercise: "#43A047",
  Read: "#FB8C00",
  Meeting: "#00ACC1",
  Entertainment: "#E91E63",
  Travel: "#009688",
  Food: "#8D6E63",
  Sleep: "#5C6BC0",
  Custom: "#78909C",
};

export const MOODS = ["😊", "😐", "😔", "🤩", "😤", "😴", "🙏", "🎯"];
export const MOOD_SCORE: Record<string, number> = {
  "😔": 1, "😤": 2, "😴": 2, "😐": 3, "🙏": 4, "🎯": 4, "😊": 5, "🤩": 5,
};

export const QUICK_DURATIONS = [15, 30, 45, 60, 120];
