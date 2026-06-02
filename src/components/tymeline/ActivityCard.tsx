import type { Activity } from "@/lib/tymeline/types";
import { CATEGORY_COLORS } from "@/lib/tymeline/categories";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";

export function ActivityCard({
  activity,
  index,
  onDelete,
}: {
  activity: Activity;
  index: number;
  onDelete: (id: string) => void;
}) {
  const color = CATEGORY_COLORS[activity.category];
  return (
    <div
      className="group relative flex items-stretch overflow-hidden rounded-2xl border bg-surface shadow-sm transition-transform active:scale-[0.98]"
      style={{
        animation: `fadeInUp 420ms cubic-bezier(0.16,1,0.3,1) both`,
        animationDelay: `${Math.min(index, 8) * 50}ms`,
      }}
    >
      <div className="w-1.5 shrink-0" style={{ backgroundColor: color }} />
      <div className="flex-1 px-4 py-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg leading-tight text-foreground">{activity.name}</h3>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-text-secondary">
              <span
                className="rounded-full px-2 py-0.5 font-medium"
                style={{ backgroundColor: `${color}22`, color }}
              >
                {activity.category}
              </span>
              {activity.duration ? <span>· {formatDuration(activity.duration)}</span> : null}
              <span>· {format(new Date(activity.timestamp), "h:mm a")}</span>
            </div>
          </div>
          {activity.mood ? (
            <div className="text-3xl leading-none" aria-label="mood">
              {activity.mood}
            </div>
          ) : null}
        </div>
      </div>
      <button
        onClick={() => onDelete(activity.id)}
        aria-label="Delete"
        className="absolute right-2 top-2 rounded-full p-1.5 text-text-secondary opacity-0 transition-opacity hover:bg-accent-soft hover:text-accent group-hover:opacity-100"
      >
        <Trash2 size={14} />
      </button>
      <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}

function formatDuration(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}
