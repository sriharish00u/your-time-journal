import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useSettings } from "@/lib/tymeline/storage";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

const SLIDES = [
  { title: "Your time, your story", body: "Tymeline is a quiet, private timeline of your moments. No streaks. No goals. Just you." },
  { title: "No pressure, just capture", body: "Log what you did, how long, how you felt. Or skip the details. There's no wrong way." },
  { title: "Reflect with AI", body: "Generate warm, conversational summaries of your weeks and months. Optional — turn it off in Settings." },
];

function OnboardingPage() {
  const [settings, setSettings] = useSettings();
  const [i, setI] = useState(0);
  const [name, setName] = useState("");
  const [why, setWhy] = useState("");
  const [step, setStep] = useState<"slides" | "profile">("slides");
  const nav = useNavigate();

  const next = () => {
    if (i < SLIDES.length - 1) setI(i + 1);
    else setStep("profile");
  };
  const finish = () => {
    setSettings({ ...settings, name: name || undefined, why: why || undefined, onboarded: true });
    nav({ to: "/" });
  };

  return (
    <div className="flex min-h-screen flex-col px-6 pb-8 pt-16">
      {step === "slides" ? (
        <>
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-accent text-3xl text-accent-foreground">
              ✎
            </div>
            <h1 className="font-serif text-4xl leading-tight text-foreground">{SLIDES[i].title}</h1>
            <p className="mt-4 max-w-xs text-base text-text-secondary">{SLIDES[i].body}</p>
          </div>

          <div className="mb-6 flex justify-center gap-1.5">
            {SLIDES.map((_, idx) => (
              <div key={idx} className="h-1.5 rounded-full transition-all"
                style={{ width: idx === i ? 24 : 6, backgroundColor: idx === i ? "var(--accent)" : "var(--border)" }} />
            ))}
          </div>

          <button onClick={next} className="rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground active:scale-[0.98] transition">
            {i < SLIDES.length - 1 ? "Next" : "Get started"}
          </button>
          <button onClick={finish} className="mt-2 py-2 text-sm text-text-secondary">Skip</button>
        </>
      ) : (
        <>
          <div className="flex-1">
            <h1 className="font-serif text-3xl text-foreground">A little about you</h1>
            <p className="mt-2 text-sm text-text-secondary">Both optional. You can change these later.</p>

            <div className="mt-8 space-y-4">
              <div>
                <label className="text-xs font-medium text-text-secondary">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                  className="mt-1 w-full rounded-xl border bg-surface px-4 py-3 outline-none focus:border-accent" />
              </div>
              <div>
                <label className="text-xs font-medium text-text-secondary">Why you track</label>
                <textarea value={why} onChange={(e) => setWhy(e.target.value)} rows={3}
                  placeholder="To understand my days better…"
                  className="mt-1 w-full resize-none rounded-xl border bg-surface px-4 py-3 outline-none focus:border-accent" />
              </div>
            </div>
          </div>
          <button onClick={finish} className="rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground active:scale-[0.98] transition">
            Begin
          </button>
        </>
      )}
    </div>
  );
}
