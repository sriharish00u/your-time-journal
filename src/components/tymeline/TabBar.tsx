import { Link, useLocation } from "react-router-dom";
import { Home, BarChart3, Sparkles, Layers } from "lucide-react";

const TABS = [
  { to: "/", label: "Timeline", icon: Home },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/summary", label: "Reflect", icon: Sparkles },
  { to: "/collection", label: "Papers", icon: Layers },
] as const;

export function TabBar() {
  const loc = useLocation();
  if (loc.pathname.startsWith("/settings") || loc.pathname.startsWith("/onboarding")) return null;
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {TABS.map((t) => {
          const active = t.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(t.to);
          const Icon = t.icon;
          return (
            <Link
              key={t.to}
              to={t.to}
              className="flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors"
              style={{ color: active ? "var(--accent)" : "var(--text-secondary)" }}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span style={{ fontWeight: active ? 600 : 500 }}>{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
