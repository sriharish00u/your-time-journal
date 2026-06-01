import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { useSettings, useActivities, usePapers, useSummaries, exportAll, importAll, clearAll } from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { ChevronLeft, Download, Upload, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Tymeline" },
      { name: "description", content: "Configure Tymeline." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [settings, setSettings] = useSettings();
  const [activities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const fileRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof typeof settings>(k: K, v: typeof settings[K]) =>
    setSettings({ ...settings, [k]: v });

  const onExport = () => {
    const data = exportAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tymeline-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    const newPapers = evaluatePapers({ activities, existing: papers, summariesCount: summaries.length, didExport: true });
    if (newPapers.length) setPapers([...papers, ...newPapers]);
    toast.success("Backup exported");
  };

  const onImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      importAll(data);
      const newPapers = evaluatePapers({
        activities: data.activities ?? [], existing: data.papers ?? [],
        summariesCount: (data.summaries ?? []).length, didImport: true,
      });
      if (newPapers.length) {
        importAll({ papers: [...(data.papers ?? []), ...newPapers] });
      }
      toast.success("Data imported");
    } catch {
      toast.error("Invalid backup file");
    }
  };

  const onClear = () => {
    if (confirm("Erase ALL Tymeline data? This cannot be undone.")) {
      clearAll();
      toast.success("All data cleared");
    }
  };

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 flex items-center gap-3">
        <Link to="/" className="rounded-full border bg-surface p-2"><ChevronLeft size={18} /></Link>
        <h1 className="font-serif text-3xl">Settings</h1>
      </header>

      <Section title="Profile">
        <Field label="Name">
          <input
            value={settings.name ?? ""}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Optional"
            className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </Field>
        <Field label="Why I track">
          <textarea
            value={settings.why ?? ""}
            onChange={(e) => update("why", e.target.value)}
            placeholder="A line for yourself…"
            rows={2}
            className="w-full resize-none rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </Field>
      </Section>

      <Section title="AI Reflection">
        <ToggleRow
          label="Enable AI summaries"
          help="Uses Lovable AI to write reflective summaries. Off uses a local stats summary."
          value={settings.aiEnabled}
          onChange={(v) => update("aiEnabled", v)}
        />
      </Section>

      <Section title="Theme">
        <div className="grid grid-cols-3 gap-2">
          {(["system", "light", "dark"] as const).map((t) => {
            const active = settings.theme === t;
            return (
              <button
                key={t}
                onClick={() => update("theme", t)}
                className="rounded-xl border bg-surface py-2.5 text-sm capitalize transition"
                style={{
                  borderColor: active ? "var(--accent)" : "var(--border)",
                  color: active ? "var(--accent)" : "var(--foreground)",
                  fontWeight: active ? 600 : 400,
                }}
              >{t}</button>
            );
          })}
        </div>
      </Section>

      <Section title="Data">
        <button onClick={onExport} className="flex w-full items-center justify-between rounded-xl border bg-surface px-4 py-3 text-sm">
          <span className="flex items-center gap-3"><Download size={16} /> Export backup</span>
          <span className="text-xs text-text-secondary">{activities.length} items</span>
        </button>
        <button onClick={() => fileRef.current?.click()} className="mt-2 flex w-full items-center gap-3 rounded-xl border bg-surface px-4 py-3 text-sm">
          <Upload size={16} /> Import backup
        </button>
        <input ref={fileRef} type="file" accept="application/json" onChange={onImport} className="hidden" />
        <button onClick={onClear} className="mt-2 flex w-full items-center gap-3 rounded-xl border border-destructive/30 bg-surface px-4 py-3 text-sm text-destructive">
          <Trash2 size={16} /> Clear all data
        </button>
      </Section>

      <Section title="About">
        <p className="text-sm text-text-secondary">Tymeline v0.1</p>
        <p className="mt-1 text-sm text-text-secondary">Built with care. No accounts. No cloud. Just you.</p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-medium text-text-secondary">{label}</div>
      {children}
    </label>
  );
}

function ToggleRow({ label, help, value, onChange }: { label: string; help?: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border bg-surface px-4 py-3">
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium">{label}</div>
        {help && <div className="mt-0.5 text-xs text-text-secondary">{help}</div>}
      </div>
      <button
        onClick={() => onChange(!value)}
        role="switch"
        aria-checked={value}
        className="relative h-6 w-11 shrink-0 rounded-full transition"
        style={{ backgroundColor: value ? "var(--accent)" : "var(--border)" }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform"
          style={{ transform: value ? "translateX(22px)" : "translateX(2px)" }}
        />
      </button>
    </div>
  );
}
