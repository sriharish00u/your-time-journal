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

export async function generateAISummary(input: {
  period: "week" | "month" | "all";
  activities: Array<{
    name: string;
    category: string;
    duration?: number;
    mood?: string;
    timestamp: string;
  }>;
}) {
  const data = InputSchema.parse(input);
  const key = import.meta.env.VITE_AI_API_KEY;
  const endpoint = import.meta.env.VITE_AI_ENDPOINT || "https://api.openai.com/v1/chat/completions";
  const model = import.meta.env.VITE_AI_MODEL || "gpt-4o-mini";

  if (!key) throw new Error("AI not configured. Set VITE_AI_API_KEY in your environment.");

  const prompt = `You are a warm, reflective life coach. Here is a person's activity log for the ${data.period === "all" ? "entire period" : "past " + data.period}: ${JSON.stringify(data.activities)}.

Write a thoughtful, flowing essay (3-5 paragraphs) reflecting on how they spent their time. Write in second person ("You spent..."). Be specific to the actual activities provided. Cover what they did, any patterns or habits that emerge, how their mood trends look, and gentle encouragement. Do NOT use markdown or section headers — just plain paragraphs separated by newlines. Return ONLY the essay text, no JSON.`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
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
  if (!res.ok) throw new Error("AI request failed");

  const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const raw = json.choices?.[0]?.message?.content ?? "";

  return { content: raw };
}
