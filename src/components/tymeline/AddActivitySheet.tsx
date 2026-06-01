import { useState, useEffect, useRef } from "react";
import { CATEGORIES, CATEGORY_COLORS, MOODS, QUICK_DURATIONS } from "@/lib/tymeline/categories";
import type { Activity, ActivityCategory } from "@/lib/tymeline/types";
import { X } from "lucide-react";

export function AddActivitySheet({
  open, onClose, onAdd,
}: { open: boolean; onClose: () => void; onAdd: (a: Activity) => void }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ActivityCategory>("Study");
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [customDur, setCustomDur] = useState("");
  const [mood, setMood] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setName(""); setCategory("Study"); setDuration(undefined); setCustomDur(""); setMood(undefined);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  if (!open) return null;

  const submit = () => {
    if (!name.trim()) return;
    const dur = duration ?? (customDur ? Number(customDur) : undefined);
    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      category,
      duration: dur && !Number.isNaN(dur) && dur > 0 ? dur : undefined,
      mood,
      timestamp: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
      <div
        className="relative w-full max-w-md rounded-t-3xl border-t bg-surface p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        style={{ animation: "slideUp 320ms cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" />
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl">Log a moment</h2>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1.5 text-text-secondary hover:bg-accent-soft">
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
          <Label>Category</Label>
          <div className="-mx-5 mt-2 flex gap-2 overflow-x-auto px-5 scrollbar-hide">
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
                >{c}</button>
              );
            })}
          </div>
        </div>

        <div className="mt-4">
          <Label>Duration (optional)</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {QUICK_DURATIONS.map((d) => {
              const active = duration === d;
              return (
                <button
                  key={d}
                  onClick={() => { setDuration(active ? undefined : d); setCustomDur(""); }}
                  className="rounded-full border px-3 py-1.5 text-sm transition"
                  style={{
                    backgroundColor: active ? "var(--accent)" : "transparent",
                    color: active ? "var(--accent-foreground)" : "var(--foreground)",
                    borderColor: active ? "var(--accent)" : "var(--border)",
                  }}
                >{d < 60 ? `${d}m` : `${d / 60}h`}</button>
              );
            })}
            <input
              value={customDur}
              onChange={(e) => { setCustomDur(e.target.value); setDuration(undefined); }}
              placeholder="min"
              type="number"
              className="w-20 rounded-full border bg-transparent px-3 py-1.5 text-sm outline-none focus:border-accent"
            />
          </div>
        </div>

        <div className="mt-4">
          <Label>Mood (optional)</Label>
          <div className="mt-2 flex gap-1.5">
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
                >{m}</button>
              );
            })}
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
  return <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">{children}</label>;
}
