import { useState, useEffect, useRef, useMemo } from "react";
import {
  CATEGORIES,
  CATEGORY_COLORS,
  MOODS,
  detectCategory,
  detectMood,
  detectDuration,
} from "@/lib/tymeline/categories";
import type { Activity, ActivityCategory } from "@/lib/tymeline/types";
import { X } from "lucide-react";

function fmtTime(d: Date): string {
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function parseTime(val: string, base: Date): Date {
  const [h, m] = val.split(":").map(Number);
  const d = new Date(base);
  d.setHours(h, m, 0, 0);
  return d;
}

function calcDuration(start: string, end: string, base: Date): number {
  const s = parseTime(start, base).getTime();
  let e = parseTime(end, base).getTime();
  if (e <= s) e += 86400000;
  return Math.round((e - s) / 60000);
}

function formatDuration(min: number): string {
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function withinHours(iso: string, hours: number): boolean {
  const diff = Date.now() - new Date(iso).getTime();
  return diff >= 0 && diff < hours * 3600000;
}

export function AddActivitySheet({
  open,
  onClose,
  onAdd,
  defaultDate,
  lastEndTime,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (a: Activity) => void;
  defaultDate?: Date;
  lastEndTime?: string;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ActivityCategory>("Study");
  const [mood, setMood] = useState<string | undefined>();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const userEditedEnd = useRef(false);

  const baseDate = useMemo(() => defaultDate ?? new Date(), [defaultDate, open]);

  // Reset on open
  useEffect(() => {
    if (!open) return;
    userEditedEnd.current = false;
    const n = new Date();
    let start = fmtTime(n);
    if (lastEndTime && withinHours(lastEndTime, 16)) {
      start = fmtTime(new Date(lastEndTime));
    }
    const end = fmtTime(new Date(n.getTime() + 60 * 60000));
    setName("");
    setCategory("Study");
    setMood(undefined);
    setStartTime(start);
    setEndTime(end);
    setShowCategoryPicker(false);
    setShowMoodPicker(false);
    setTimeout(() => inputRef.current?.focus(), 200);
  }, [open, lastEndTime, baseDate]);

  // Auto-detect category, mood, and duration from name
  useEffect(() => {
    if (!name) return;
    const cat = detectCategory(name);
    if (cat) {
      setCategory(cat);
      setShowCategoryPicker(false);
    }
    const mo = detectMood(name);
    if (mo) {
      setMood(mo);
      setShowMoodPicker(false);
    }
    const dur = detectDuration(name);
    if (dur && !userEditedEnd.current) {
      const parsed = parseTime(startTime, baseDate);
      parsed.setMinutes(parsed.getMinutes() + dur);
      setEndTime(fmtTime(parsed));
    }
  }, [name, startTime, baseDate]);

  // Duration from time range
  const duration = useMemo(
    () => calcDuration(startTime, endTime, baseDate),
    [startTime, endTime, baseDate],
  );

  // Detect duration from name (supplementary)
  const detectedDuration = useMemo(() => (name ? detectDuration(name) : null), [name]);

  if (!open) return null;

  const submit = () => {
    if (!name.trim()) return;
    const base = new Date(baseDate);
    const ts = parseTime(startTime, base);
    const te = parseTime(endTime, base);
    if (te <= ts) te.setDate(te.getDate() + 1);
    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      category,
      duration: duration > 0 ? duration : undefined,
      mood,
      timestamp: ts.toISOString(),
      endTime: te.toISOString(),
      createdAt: new Date().toISOString(),
    });
    onClose();
  };

  const detectedCat = detectCategory(name);
  const detectedMo = detectMood(name);
  const showCatBadge = detectedCat && !showCategoryPicker && name.length > 0;
  const showMoodBadge = detectedMo && !showMoodPicker && name.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal>
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-md rounded-t-3xl border-t bg-surface p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        style={{ animation: "slideUp 320ms cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" />
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl">Log a moment</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-text-secondary hover:bg-accent-soft"
          >
            <X size={18} />
          </button>
        </div>

        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="What did you do?"
          className="w-full rounded-xl border bg-background px-4 py-3 text-base outline-none focus:border-accent"
        />

        <div className="mt-4">
          <Label>Time</Label>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex-1">
              <span className="text-[10px] text-text-secondary">Start</span>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="mt-0.5 w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
            <span className="mt-5 text-text-secondary">→</span>
            <div className="flex-1">
              <span className="text-[10px] text-text-secondary">End</span>
              <input
                type="time"
                value={endTime}
                onChange={(e) => {
                  userEditedEnd.current = true;
                  setEndTime(e.target.value);
                }}
                className="mt-0.5 w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-right text-sm font-medium text-text-secondary">
            <span>{formatDuration(duration)}</span>
            {detectedDuration && detectedDuration !== duration && (
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px]">
                ~{formatDuration(detectedDuration)} from name
              </span>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label>Mood</Label>
          <div className="mt-2">
            {showMoodBadge ? (
              <div className="flex items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-3xl">
                  {mood}
                </span>
                <button
                  onClick={() => setShowMoodPicker(true)}
                  className="text-xs text-text-secondary underline transition hover:text-accent"
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="flex gap-1.5">
                {MOODS.map((m) => {
                  const active = mood === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setMood(active ? undefined : m)}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-xl transition"
                      style={{
                        backgroundColor: active ? "var(--accent-soft)" : "transparent",
                        border: active ? "1.5px solid var(--accent)" : "1.5px solid transparent",
                      }}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label>Category</Label>
          <div className="mt-2">
            {showCatBadge ? (
              <div className="flex items-center gap-2">
                <span
                  className="inline-block rounded-full px-3.5 py-1.5 text-sm font-medium text-white"
                  style={{ backgroundColor: CATEGORY_COLORS[category] }}
                >
                  {category}
                </span>
                <button
                  onClick={() => setShowCategoryPicker(true)}
                  className="text-xs text-text-secondary underline transition hover:text-accent"
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 scrollbar-hide">
                {CATEGORIES.map((c) => {
                  const active = category === c;
                  const col = CATEGORY_COLORS[c];
                  return (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className="shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition"
                      style={{
                        backgroundColor: active ? col : "transparent",
                        color: active ? "#fff" : "var(--foreground)",
                        borderColor: active ? col : "var(--border)",
                      }}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={submit}
          disabled={!name.trim()}
          className="mt-6 w-full rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground transition active:scale-[0.98] disabled:opacity-40"
        >
          Log it
        </button>
        <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: none; } }`}</style>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
      {children}
    </label>
  );
}
