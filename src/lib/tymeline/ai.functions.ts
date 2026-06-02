import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  period: z.enum(["week", "month", "all"]),
  activities: z
    .array(
      z.object({
        name: z.string(),
        category: z.string(),
        duration: z.number().optional(),
        mood: z.string().optional(),
        timestamp: z.string(),
      }),
    )
    .max(500),
});

export const generateAISummary = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("AI not configured");

    const prompt = `You are a warm, reflective life coach. Here is a person's activity log for the ${data.period === "all" ? "entire period" : "past " + data.period}: ${JSON.stringify(data.activities)}.

Write a thoughtful, flowing essay (3-5 paragraphs) reflecting on how they spent their time. Write in second person ("You spent..."). Be specific to the actual activities provided. Cover what they did, any patterns or habits that emerge, how their mood trends look, and gentle encouragement. Do NOT use markdown or section headers — just plain paragraphs separated by newlines. Return ONLY the essay text, no JSON.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content:
              "You are a warm, reflective life coach who writes in flowing prose. Write plain paragraphs only, no markdown or formatting.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (res.status === 429) throw new Error("Rate limit reached. Please try again in a moment.");
    if (res.status === 402)
      throw new Error("AI credits exhausted. Add credits in workspace settings.");
    if (!res.ok) throw new Error("AI request failed");

    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const raw = json.choices?.[0]?.message?.content ?? "";

    return { content: raw };
  });
