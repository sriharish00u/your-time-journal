import { LocalNotifications } from "@capacitor/local-notifications";
import type { Activity } from "./types";

const CHANNEL_ID = "tymeline-reminders";
const ROUTINE_IDS = [2001, 2002, 2003];
const REPEAT_MIN = 1000;
const REPEAT_MAX = 1999;

function nameId(name: string): number {
  let hash = 0;
  const s = name.trim().toLowerCase();
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return REPEAT_MIN + (Math.abs(hash) % (REPEAT_MAX - REPEAT_MIN + 1));
}

function nextAt(hour: number, minute: number): Date {
  const d = new Date();
  d.setHours(hour, minute, 0, 0);
  if (d <= new Date()) d.setDate(d.getDate() + 1);
  return d;
}

export async function setupNotificationChannel() {
  try {
    await LocalNotifications.createChannel({
      id: CHANNEL_ID,
      name: "Tymeline reminders",
      description: "Daily check-ins and gentle nudges",
      importance: 4,
    });
  } catch {
    // Silently noop on web
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  try {
    const perm = await LocalNotifications.requestPermissions();
    return perm.display === "granted";
  } catch {
    return false;
  }
}

async function scheduleRoutine(
  hour: number,
  minute: number,
  id: number,
  title: string,
  body: string,
) {
  try {
    await LocalNotifications.schedule({
      notifications: [
        {
          id,
          title,
          body,
          schedule: { at: nextAt(hour, minute), repeats: true },
          channelId: CHANNEL_ID,
        },
      ],
    });
  } catch {
    // Silently noop on web
  }
}

export async function scheduleRoutineReminders(name?: string) {
  const greeting = name ? `${name.split(/\s+/)[0]}, ` : "";
  await scheduleRoutine(
    7,
    0,
    2001,
    "Good morning",
    `${greeting}What will you do today? Start tracking!`,
  );
  await scheduleRoutine(
    12,
    0,
    2002,
    "Midday check",
    `${greeting}How's your day going? Log your morning activities.`,
  );
  await scheduleRoutine(
    21,
    0,
    2003,
    "Evening reflection",
    `${greeting}What did you do today? Time to reflect.`,
  );
}

export async function scheduleRepeatReminder(activityName: string) {
  try {
    const id = nameId(activityName);
    await LocalNotifications.cancel({ notifications: [{ id }] });
    await LocalNotifications.schedule({
      notifications: [
        {
          id,
          title: "Done that before",
          body: `You've logged "${activityName}" again — maybe try something different?`,
          schedule: { at: new Date(Date.now() + 2 * 3600000) },
          channelId: CHANNEL_ID,
        },
      ],
    });
  } catch {
    // Silently noop on web
  }
}

export async function cancelAllTymelineNotifications() {
  try {
    const pending = await LocalNotifications.getPending();
    const ours = pending.notifications.filter(
      (n) => (n.id >= REPEAT_MIN && n.id <= REPEAT_MAX) || ROUTINE_IDS.includes(n.id),
    );
    if (ours.length > 0) {
      await LocalNotifications.cancel({
        notifications: ours.map((n) => ({ id: n.id })),
      });
    }
  } catch {
    // Silently noop on web
  }
}

export async function rescheduleAllNotifications(activities: Activity[], name?: string) {
  try {
    await cancelAllTymelineNotifications();
    await scheduleRoutineReminders(name);
  } catch {
    // Silently noop on web
  }
}
