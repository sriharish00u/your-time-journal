import { useEffect, useState, useCallback } from "react";
import type { Activity, Paper, Settings, Summary } from "./types";

const KEYS = {
  activities: "tymeline:activities",
  papers: "tymeline:papers",
  summaries: "tymeline:summaries",
  settings: "tymeline:settings",
  skippedDays: "tymeline:skipped-days",
} as const;

const DEFAULT_SETTINGS: Settings = {
  aiEnabled: true,
  theme: "system",
  onboarded: false,
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("tymeline:change", { detail: { key } }));
}

function useLocal<T>(key: string, fallback: T): [T, (v: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => read(key, fallback));

  useEffect(() => {
    // Re-read on mount in case localStorage changed between lazy init and effect
    setValue(read(key, fallback));
    const onChange = (e: Event) => {
      const ce = e as CustomEvent<{ key: string }>;
      if (ce.detail?.key === key) setValue(read(key, fallback));
    };
    window.addEventListener("tymeline:change", onChange);
    return () => window.removeEventListener("tymeline:change", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        write(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, update];
}

export function useActivities() {
  return useLocal<Activity[]>(KEYS.activities, []);
}
export function usePapers() {
  return useLocal<Paper[]>(KEYS.papers, []);
}
export function useSummaries() {
  return useLocal<Summary[]>(KEYS.summaries, []);
}
export function useSkippedDays() {
  return useLocal<string[]>(KEYS.skippedDays, []);
}
export function useSettings() {
  return useLocal<Settings>(KEYS.settings, DEFAULT_SETTINGS);
}

export function exportAll() {
  return {
    activities: read<Activity[]>(KEYS.activities, []),
    papers: read<Paper[]>(KEYS.papers, []),
    summaries: read<Summary[]>(KEYS.summaries, []),
    settings: read<Settings>(KEYS.settings, DEFAULT_SETTINGS),
    skippedDays: read<string[]>(KEYS.skippedDays, []),
    exportedAt: new Date().toISOString(),
  };
}

export function importAll(data: {
  activities?: Activity[];
  papers?: Paper[];
  summaries?: Summary[];
  settings?: Settings;
  skippedDays?: string[];
}) {
  if (data.activities) write(KEYS.activities, data.activities);
  if (data.papers) write(KEYS.papers, data.papers);
  if (data.summaries) write(KEYS.summaries, data.summaries);
  if (data.settings) write(KEYS.settings, data.settings);
  if (data.skippedDays) write(KEYS.skippedDays, data.skippedDays);
}

export function clearAll() {
  if (typeof window === "undefined") return;
  Object.values(KEYS).forEach((k) => window.localStorage.removeItem(k));
  window.dispatchEvent(new CustomEvent("tymeline:change", { detail: { key: "*" } }));
}

export { KEYS };
