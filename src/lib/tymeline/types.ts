export type ActivityCategory =
  | "Study" | "Code" | "Exercise" | "Read" | "Meeting"
  | "Entertainment" | "Travel" | "Food" | "Sleep" | "Custom";

export interface Activity {
  id: string;
  name: string;
  category: ActivityCategory;
  duration?: number; // minutes
  mood?: string;
  timestamp: string; // ISO
  createdAt: string;
}

export type PaperType =
  | "first-step" | "consistent" | "deep-diver" | "mood-tracker"
  | "reflector" | "archivist" | "returning" | "week-warrior"
  | "variety" | "century";

export interface Paper {
  id: string;
  type: PaperType;
  title: string;
  reason: string;
  earnedAt: string;
}

export interface Summary {
  id: string;
  period: "week" | "month" | "all";
  generatedAt: string;
  content: string;
  isAI: boolean;
}

export interface Settings {
  name?: string;
  why?: string;
  aiEnabled: boolean;
  theme: "system" | "light" | "dark";
  onboarded?: boolean;
}
