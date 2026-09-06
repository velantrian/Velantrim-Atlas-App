import { createServerFn } from "@tanstack/react-start";

const cache = new Map<string, string>();
const MAX = 720;

function clean(raw: string) {
  return raw
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/[\u{FE0F}\u{200D}]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX);
}

export const speakAltair = createServerFn({ method: "POST" })
  .validator((input: { text: string; lang: "ru" | "en" }) => {
    const text = clean(input.text);
    if (text.length < 8) throw new Error("text too short");
    return { text, lang: input.lang === "en" ? "en" : ("ru" as const) };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "unavailable" };

    const key = `${data.lang}:${data.text}`;
    const hit = cache.get(key);
    if (hit) return { ok: true as const, b64: hit };

    const res = await fetch("https://api.x.ai/v1/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        text: data.text,
        voice_id: "altair",
        language: data.lang,
      }),
      signal: AbortSignal.timeout(20_000),
    });

    if (!res.ok) {
      return { ok: false as const, error: `xAI ${res.status}` };
    }

    const b64 = Buffer.from(await res.arrayBuffer()).toString("base64");
    if (cache.size > 48) {
      const first = cache.keys().next().value;
      if (first) cache.delete(first);
    }
    cache.set(key, b64);
    return { ok: true as const, b64 };
  });
