import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  period: z.enum(["week", "month", "all"]),
  activities: z.array(z.object({
    name: z.string(),
    category: z.string(),
    duration: z.number().optional(),
    mood: z.string().optional(),
    timestamp: z.string(),
  })).max(500),
});

export const generateAISummary = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("AI not configured");

    const prompt = `You are a warm, reflective life coach. Here is a person's activity log for the ${data.period === "all" ? "entire period" : "past " + data.period}: ${JSON.stringify(data.activities)}. Write a short, personal, conversational summary (150-200 words) that: highlights what they spent the most time on, notes any mood patterns, offers one gentle observation, and ends with a single encouraging sentence. Do not use bullet points. Write in second person ("You spent...").`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are a warm, reflective life coach who writes in flowing prose." },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (res.status === 429) throw new Error("Rate limit reached. Please try again in a moment.");
    if (res.status === 402) throw new Error("AI credits exhausted. Add credits in workspace settings.");
    if (!res.ok) throw new Error("AI request failed");

    const json = await res.json() as { choices?: Array<{ message?: { content?: string } }> };
    const content = json.choices?.[0]?.message?.content ?? "";
    return { content };
  });
