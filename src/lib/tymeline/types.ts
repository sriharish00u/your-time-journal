export type ActivityCategory =
  | "Study"
  | "Code"
  | "Exercise"
  | "Read"
  | "Meeting"
  | "Entertainment"
  | "Travel"
  | "Food"
  | "Sleep"
  | "Health"
  | "Social"
  | "Finance"
  | "Creative"
  | "Chores"
  | "Custom";

export interface Activity {
  id: string;
  name: string;
  category: ActivityCategory;
  duration?: number; // minutes
  mood?: string;
  timestamp: string; // ISO — start time
  endTime?: string; // ISO — end time
  createdAt: string;
}

export type PaperType =
  | "first-step"
  | "consistent"
  | "deep-diver"
  | "mood-tracker"
  | "reflector"
  | "archivist"
  | "returning"
  | "week-warrior"
  | "variety"
  | "century"
  | "early-bird"
  | "night-owl"
  | "emoji-lover"
  | "chained"
  | "multi-week"
  | "category-explorer"
  | "speed-logger"
  | "half-century"
  | "mood-rainbow"
  | "marathon";

export interface Paper {
  id: string;
  type: PaperType;
  title: string;
  reason: string;
  earnedAt: string;
}

export interface SummaryContent {
  what_you_did: string;
  positives: string;
  negatives: string;
  improvements_must: string;
  improvements_nice: string;
}

export interface Summary {
  id: string;
  period: "week" | "month" | "all";
  generatedAt: string;
  content: string | SummaryContent;
  isAI: boolean;
}

export interface Settings {
  name?: string;
  why?: string;
  aiEnabled: boolean;
  theme: "system" | "light" | "dark";
  onboarded?: boolean;
  notificationsEnabled?: boolean;
}
