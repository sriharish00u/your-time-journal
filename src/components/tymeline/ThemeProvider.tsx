import { useEffect, type ReactNode } from "react";
import { useSettings } from "@/lib/tymeline/storage";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [settings] = useSettings();
  useEffect(() => {
    const apply = () => {
      const root = document.documentElement;
      const wantDark =
        settings.theme === "dark" ||
        (settings.theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.classList.toggle("dark", wantDark);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", wantDark ? "#141210" : "#FAF7F2");
    };
    apply();
    if (settings.theme === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      mql.addEventListener("change", apply);
      return () => mql.removeEventListener("change", apply);
    }
  }, [settings.theme]);
  return <>{children}</>;
}
