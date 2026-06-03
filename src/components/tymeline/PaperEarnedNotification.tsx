import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PAPER_ICONS } from "@/lib/tymeline/papers";
import type { Paper } from "@/lib/tymeline/types";

interface QueuedPaper {
  paper: Paper;
  id: number;
}

export function PaperEarnedNotification() {
  const navigate = useNavigate();
  const [queue, setQueue] = useState<QueuedPaper[]>([]);
  const [current, setCurrent] = useState<QueuedPaper | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idRef = useRef(0);

  const dismiss = useCallback(() => {
    setCurrent(null);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  useEffect(() => {
    if (current !== null) return;
    if (queue.length === 0) return;
    const next = queue[0];
    setQueue((prev) => prev.slice(1));
    setCurrent(next);
    try {
      window.navigator.vibrate?.([100, 50, 100]);
    } catch {
      /* no-op */
    }
    timerRef.current = setTimeout(dismiss, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, queue, dismiss]);

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ paper: Paper }>;
      const paper = ce.detail?.paper;
      if (!paper) return;
      idRef.current += 1;
      setQueue((prev) => [...prev, { paper, id: idRef.current }]);
    };
    window.addEventListener("tymeline:paper-earned", handler);
    return () => window.removeEventListener("tymeline:paper-earned", handler);
  }, []);

  const handleOpen = () => {
    dismiss();
    navigate("/collection");
  };

  if (!current) return null;

  const icon = PAPER_ICONS[current.paper.type] ?? "📜";

  return (
    <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-4">
      <button
        onClick={handleOpen}
        className="flex items-center gap-3 rounded-full border bg-surface px-5 py-3 shadow-lg transition active:scale-95"
        style={{
          animation:
            "notificationSlideUp 320ms cubic-bezier(0.16,1,0.3,1), notificationShake 400ms ease-in-out 320ms",
        }}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-serif text-sm text-foreground whitespace-nowrap">
          You earned <strong>{current.paper.title}</strong>!
        </span>
        <span className="text-xs font-medium text-accent">Open</span>
      </button>
      <style>{`
        @keyframes notificationSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes notificationShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
        }
      `}</style>
    </div>
  );
}
