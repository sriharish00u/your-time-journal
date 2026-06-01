import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { usePapers } from "@/lib/tymeline/storage";
import { paperGradient, PAPERS } from "@/lib/tymeline/papers";
import { format } from "date-fns";
import { X } from "lucide-react";
import type { Paper } from "@/lib/tymeline/types";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Papers — Tymeline" },
      { name: "description", content: "Your collected papers — small marks of meaningful moments." },
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
        <p className="mt-1 text-sm text-text-secondary">Collected for moments that matter</p>
      </header>
      <p className="mb-6 text-sm font-medium text-accent">
        {papers.length} paper{papers.length === 1 ? "" : "s"} collected · {PAPERS.length} total
      </p>

      {papers.length === 0 ? (
        <div className="mt-12 rounded-2xl border-2 border-dashed bg-surface/40 p-8 text-center">
          <div className="mb-2 text-3xl">📜</div>
          <p className="font-serif text-lg text-foreground">No papers yet</p>
          <p className="mt-1 text-sm text-text-secondary">
            Log moments and reflect — papers find you as you go.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {papers.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setOpen(p)}
              className="float-soft relative aspect-[3/4] overflow-hidden rounded-2xl border p-3 text-left transition active:scale-95"
              style={{
                background: paperGradient(p.id),
                transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)`,
                animationDelay: `${i * 150}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/15" />
              <div className="relative flex h-full flex-col justify-between text-white">
                <div className="text-2xl drop-shadow">📜</div>
                <div>
                  <h3 className="font-serif text-base leading-tight drop-shadow">{p.title}</h3>
                  <p className="mt-1 text-[10px] leading-snug opacity-90">{p.reason}</p>
                  <p className="mt-1.5 text-[9px] uppercase tracking-wider opacity-75">
                    {format(new Date(p.earnedAt), "MMM d")}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Locked previews */}
      {papers.length > 0 && papers.length < PAPERS.length && (
        <div className="mt-10">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">Still to earn</h3>
          <div className="grid grid-cols-2 gap-3">
            {PAPERS.filter((d) => !papers.some((p) => p.type === d.type)).map((d) => (
              <div key={d.type} className="aspect-[3/4] rounded-2xl border-2 border-dashed border-border bg-surface/30 p-3">
                <div className="flex h-full flex-col justify-between opacity-50">
                  <div className="text-2xl grayscale">📜</div>
                  <div>
                    <h3 className="font-serif text-base text-foreground">{d.title}</h3>
                    <p className="mt-1 text-[10px] text-text-secondary">{d.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" role="dialog" aria-modal>
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setOpen(null)} />
          <div
            className="relative w-full max-w-xs overflow-hidden rounded-3xl border p-6"
            style={{ background: paperGradient(open.id), animation: "popIn 280ms cubic-bezier(0.16,1,0.3,1)" }}
          >
            <button onClick={() => setOpen(null)} className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 text-white">
              <X size={16} />
            </button>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20" />
            <div className="relative text-white">
              <div className="mb-4 text-5xl">📜</div>
              <h2 className="font-serif text-3xl leading-tight drop-shadow">{open.title}</h2>
              <p className="mt-3 text-sm opacity-95">{open.reason}</p>
              <p className="mt-6 text-[10px] uppercase tracking-wider opacity-80">
                Earned {format(new Date(open.earnedAt), "MMMM d, yyyy")}
              </p>
            </div>
            <style>{`@keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: none; } }`}</style>
          </div>
        </div>
      )}
    </div>
  );
}
