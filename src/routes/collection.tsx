import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { usePapers } from "@/lib/tymeline/storage";
import { paperGradient, PAPERS, PAPER_ICONS } from "@/lib/tymeline/papers";
import { format } from "date-fns";
import { X } from "lucide-react";
import type { Paper } from "@/lib/tymeline/types";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Papers — Tymeline" },
      {
        name: "description",
        content: "Your collected papers — small marks of meaningful moments.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const [papers] = usePapers();
  const [open, setOpen] = useState<Paper | null>(null);

  return (
    <div className="px-5 pt-6">
      <header className="mb-2">
        <h1 className="font-serif text-3xl text-foreground">Your Papers</h1>
        <p className="mt-1 text-sm text-text-secondary">A trophy cabinet of your journey</p>
      </header>

      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between text-xs text-text-secondary">
          <span className="font-semibold">
            {papers.length} / {PAPERS.length} papers
          </span>
          <span>{Math.round((papers.length / PAPERS.length) * 100)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-700"
            style={{ width: `${(papers.length / PAPERS.length) * 100}%` }}
          />
        </div>
      </div>

      {papers.length === 0 ? (
        <div className="mt-12 rounded-2xl border-2 border-dashed bg-surface/40 p-8 text-center">
          <div className="mb-2 text-3xl">🏆</div>
          <p className="font-serif text-lg text-foreground">No papers yet</p>
          <p className="mt-1 text-sm text-text-secondary">
            Log moments and reflect — papers find you as you go.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {papers.map((p) => {
            const icon = PAPER_ICONS[p.type] ?? "📜";
            return (
              <button
                key={p.id}
                onClick={() => setOpen(p)}
                className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl border p-5 text-center transition active:scale-95"
                style={{
                  background: paperGradient(p.id),
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/15" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <span className="block text-4xl drop-shadow">{icon}</span>
                  <h3 className="font-serif text-base leading-tight text-white drop-shadow">
                    {p.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-white/80">
                    {format(new Date(p.earnedAt), "MMM d, yyyy")}
                  </p>
                </div>
                <div
                  className="absolute inset-0 z-20 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
                    animation: "shimmer 2s ease-in-out infinite",
                  }}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Unearned papers */}
      {papers.length < PAPERS.length && (
        <div className="mt-10">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Still to earn ({PAPERS.length - papers.length})
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {PAPERS.filter((d) => !papers.some((p) => p.type === d.type)).map((d) => (
              <div
                key={d.type}
                className="flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-border bg-surface/20 p-5 text-center"
              >
                <span className="text-3xl opacity-40">🔒</span>
                <h3 className="font-serif text-base text-foreground/40">{d.title}</h3>
                <p className="text-[10px] text-text-secondary/60">{d.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detail modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal
        >
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />
          <div
            className="relative w-full max-w-xs overflow-hidden rounded-3xl border p-8 text-center"
            style={{
              background: paperGradient(open.id),
              animation: "popIn 280ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 text-white"
            >
              <X size={16} />
            </button>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20" />
            <div className="relative text-white">
              <div className="mb-4 text-8xl leading-none drop-shadow">
                {PAPER_ICONS[open.type] ?? "📜"}
              </div>
              <h2 className="font-serif text-3xl leading-tight drop-shadow">{open.title}</h2>
              <p className="mt-3 text-sm opacity-95">{open.reason}</p>
              <p className="mt-6 text-xs uppercase tracking-wider opacity-80">
                Earned {format(new Date(open.earnedAt), "MMMM d, yyyy")}
              </p>
              <p className="mt-2 font-serif text-lg italic opacity-90">Well earned!</p>
            </div>
            <style>{`@keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: none; } }`}</style>
          </div>
        </div>
      )}
    </div>
  );
}
