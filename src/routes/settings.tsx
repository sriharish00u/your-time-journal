import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  useSettings,
  useActivities,
  usePapers,
  useSummaries,
  exportAll,
  importAll,
  clearAll,
} from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { paperGradient, PAPERS, PAPER_ICONS } from "@/lib/tymeline/papers";
import {
  rescheduleAllNotifications,
  requestNotificationPermission,
  cancelAllTymelineNotifications,
} from "@/lib/tymeline/notifications";
import { ChevronLeft, Download, Upload, Trash2, FileText, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { showRewardedInterstitial } from "@/lib/tymeline/ads";
import { format } from "date-fns";
import type { Paper, Activity } from "@/lib/tymeline/types";

function formatDur(min: number) {
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

export function SettingsPage() {
  const [settings, setSettings] = useSettings();
  const [activities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const [openPaper, setOpenPaper] = useState<Paper | null>(null);
  const [unlockedHints, setUnlockedHints] = useState<Set<string>>(new Set());
  const [settingsPdfPending, setSettingsPdfPending] = useState(false);
  const [hintAdPending, setHintAdPending] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof typeof settings>(k: K, v: (typeof settings)[K]) =>
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
    const newPapers = evaluatePapers({
      activities,
      existing: papers,
      summariesCount: summaries.length,
      didExport: true,
    });
    if (newPapers.length) setPapers([...papers, ...newPapers]);
    toast.success("Backup exported");
  };

  const onImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const newPapers = evaluatePapers({
        activities: data.activities ?? [],
        existing: data.papers ?? [],
        summariesCount: (data.summaries ?? []).length,
        didImport: true,
      });
      importAll({
        ...data,
        papers: [...(data.papers ?? []), ...newPapers],
      });
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

  const onExportPdf = async () => {
    if (settingsPdfPending) return;
    setSettingsPdfPending(true);
    const rewarded = await showRewardedInterstitial();
    setSettingsPdfPending(false);
    if (!rewarded) {
      toast.error("Watch the full ad to export your diary as PDF.");
      return;
    }
    if (settings.pdfExportTarget === "diary") {
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;

      const dayMap = new Map<string, Activity[]>();
      for (const a of activities) {
        const k = new Date(a.timestamp).toDateString();
        if (!dayMap.has(k)) dayMap.set(k, []);
        dayMap.get(k)!.push(a);
      }
      const days = Array.from(dayMap.entries()).sort(
        (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime(),
      );

      const rows = days
        .map(([dateKey, acts]) => {
          const sorted = [...acts].sort(
            (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
          );
          const entries = sorted
            .map(
              (a) =>
                `<tr>
                  <td style="color:#888;font-family:monospace;font-size:11px;padding:4px 8px 4px 0;white-space:nowrap">${format(new Date(a.timestamp), "HH:mm")}</td>
                  <td style="font-size:13px;padding:4px 0">${a.emoji ?? ""} ${a.name}</td>
                  <td style="color:#aaa;font-size:11px;padding:4px 8px;text-align:right">${a.duration ? formatDur(a.duration) : ""}</td>
                  <td style="font-size:16px;padding:4px 0;text-align:right">${a.mood ?? ""}</td>
                </tr>`,
            )
            .join("");
          return `
            <div style="margin-bottom:32px;page-break-inside:avoid">
              <div style="display:flex;justify-content:space-between;border-bottom:1px solid #e0e0e0;margin-bottom:8px;padding-bottom:4px">
                <strong style="font-family:Georgia,serif;font-size:16px">${format(new Date(dateKey), "EEEE, MMMM d")}</strong>
                <span style="font-family:monospace;font-size:20px;font-weight:bold;color:#D4622A">${format(new Date(dateKey), "dd")}</span>
              </div>
              <table style="width:100%;border-collapse:collapse">${entries}</table>
            </div>`;
        })
        .join("");

      printWindow.document.write(`<!DOCTYPE html>
        <html><head><title>Tymeline Diary ${new Date().getFullYear()}</title>
        <style>
          body { font-family: -apple-system, sans-serif; max-width: 600px; margin: 40px auto; color: #1a1a1a; }
          h1 { font-family: Georgia, serif; font-size: 32px; color: #D4622A; margin-bottom: 4px; }
          @media print { @page { margin: 1.5cm; } }
        </style>
        </head><body>
        <h1>Tymeline</h1>
        <p style="color:#888;font-size:12px;margin-bottom:32px">Exported ${format(new Date(), "MMMM d, yyyy")}</p>
        ${rows}
        </body></html>`);
      printWindow.document.close();
      printWindow.print();
    } else {
      window.print();
    }
  };

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 flex items-center gap-3">
        <Link to="/" className="rounded-full border bg-surface p-2">
          <ChevronLeft size={18} />
        </Link>
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
          help="Uses an AI service to write reflective summaries. Off uses a local stats summary."
          value={settings.aiEnabled}
          onChange={(v) => update("aiEnabled", v)}
        />
      </Section>

      <Section title="Notifications">
        <ToggleRow
          label="Daily reminders"
          help="Morning, midday, and evening reminders to log your day."
          value={settings.notificationsEnabled ?? true}
          onChange={async (v) => {
            update("notificationsEnabled", v);
            if (v) {
              await requestNotificationPermission();
              rescheduleAllNotifications(activities, settings.name).catch(() => {});
            } else {
              cancelAllTymelineNotifications().catch(() => {});
            }
          }}
        />
      </Section>

      <Section title="Achievements">
        <div className="mb-2 flex items-center justify-between text-xs text-text-secondary">
          <span className="font-semibold">{papers.length} / {PAPERS.length} earned</span>
          <span>{Math.round((papers.length / PAPERS.length) * 100)}%</span>
        </div>
        <div className="mb-3 h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-700"
            style={{ width: `${(papers.length / PAPERS.length) * 100}%` }}
          />
        </div>
        {papers.length === 0 ? (
          <p className="text-sm text-text-secondary italic">No papers yet — log moments to earn them.</p>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {papers.map((p) => (
              <button
                key={p.id}
                onClick={() => setOpenPaper(p)}
                className="relative flex flex-col items-center gap-1 overflow-hidden rounded-xl p-3 text-center transition active:scale-95"
                style={{ background: paperGradient(p.id) }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20" />
                <span className="relative z-10 text-2xl drop-shadow">{PAPER_ICONS[p.type] ?? "📜"}</span>
                <span className="relative z-10 font-serif text-[11px] leading-tight text-white drop-shadow">
                  {p.title}
                </span>
              </button>
            ))}
          </div>
        )}
        {papers.length < PAPERS.length && (
          <details className="mt-2">
            <summary className="cursor-pointer text-xs text-text-secondary">
              {PAPERS.length - papers.length} more to unlock
            </summary>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {PAPERS.filter((d) => !papers.some((p) => p.type === d.type)).map((d) => (
                <div
                  key={d.type}
                  className="flex flex-col items-center gap-1 rounded-xl border-2 border-dashed border-border p-3 text-center"
                >
                  <span className="text-xl">🔒</span>
                  <span className="font-serif text-[10px] text-foreground/60">{d.title}</span>
                  {unlockedHints.has(d.type) ? (
                    <p className="mt-1 text-[9px] leading-tight text-text-secondary">{d.reason}</p>
                  ) : (
                    <button
                      className="mt-1 rounded-full bg-accent-soft px-2 py-0.5 text-[9px] text-accent disabled:opacity-50"
                      disabled={hintAdPending === d.type}
                      onClick={async () => {
                        if (hintAdPending) return;
                        setHintAdPending(d.type);
                        const rewarded = await showRewardedInterstitial();
                        setHintAdPending(null);
                        if (rewarded) {
                          setUnlockedHints((prev) => new Set([...prev, d.type]));
                        } else {
                          toast.error("Watch the full ad to reveal the hint.");
                        }
                      }}
                    >
                      Reveal hint
                    </button>
                  )}
                </div>
              ))}
            </div>
          </details>
        )}
      </Section>

      <Section title="Export">
        <ToggleRow
          label="PDF export target"
          help={
            settings.pdfExportTarget === "diary"
              ? "Exporting full diary when you tap Export PDF."
              : "Exporting current summary when you tap Export PDF."
          }
          value={settings.pdfExportTarget === "diary"}
          onChange={(v) => update("pdfExportTarget", v ? "diary" : "summary")}
        />
        <button
          onClick={onExportPdf}
          disabled={settingsPdfPending}
          className="flex w-full items-center justify-between rounded-xl border bg-surface px-4 py-3 text-sm disabled:opacity-40"
        >
          <span className="flex items-center gap-3">
            {settingsPdfPending ? <Loader2 size={16} className="animate-spin" /> : <FileText size={16} />}
            {settingsPdfPending ? "Loading ad…" : "Export as PDF"}
            {!settingsPdfPending && (
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] text-accent">
                Watch ad
              </span>
            )}
          </span>
          <span className="text-xs text-text-secondary">
            {settings.pdfExportTarget === "diary" ? "Full diary" : "Reflect summary"}
          </span>
        </button>
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
              >
                {t}
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Data">
        <button
          onClick={onExport}
          className="flex w-full items-center justify-between rounded-xl border bg-surface px-4 py-3 text-sm"
        >
          <span className="flex items-center gap-3">
            <Download size={16} /> Export backup
          </span>
          <span className="text-xs text-text-secondary">{activities.length} items</span>
        </button>
        <button
          onClick={() => fileRef.current?.click()}
          className="mt-2 flex w-full items-center gap-3 rounded-xl border bg-surface px-4 py-3 text-sm"
        >
          <Upload size={16} /> Import backup
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          onChange={onImport}
          className="hidden"
        />
        <button
          onClick={onClear}
          className="mt-2 flex w-full items-center gap-3 rounded-xl border border-destructive/30 bg-surface px-4 py-3 text-sm text-destructive"
        >
          <Trash2 size={16} /> Clear all data
        </button>
      </Section>

      <Section title="About">
        <p className="text-sm text-text-secondary">Tymeline v0.1</p>
        <p className="mt-1 text-sm text-text-secondary">
          Built with care. No accounts. No cloud. Just you.
        </p>
      </Section>

      {openPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" role="dialog" aria-modal>
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setOpenPaper(null)} />
          <div
            className="relative w-full max-w-xs overflow-hidden rounded-3xl border p-8 text-center"
            style={{ background: paperGradient(openPaper.id), animation: "popIn 280ms cubic-bezier(0.16,1,0.3,1)" }}
          >
            <button onClick={() => setOpenPaper(null)} className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 text-white">
              <X size={16} />
            </button>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20" />
            <div className="relative text-white">
              <div className="mb-4 text-7xl leading-none drop-shadow">{PAPER_ICONS[openPaper.type] ?? "📜"}</div>
              <h2 className="font-serif text-2xl leading-tight drop-shadow">{openPaper.title}</h2>
              <p className="mt-2 text-sm opacity-95">{openPaper.reason}</p>
              <p className="mt-5 text-xs uppercase tracking-wider opacity-80">
                Earned {format(new Date(openPaper.earnedAt), "MMMM d, yyyy")}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
        {title}
      </h2>
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

function ToggleRow({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help?: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
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
