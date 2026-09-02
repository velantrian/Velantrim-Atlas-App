import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/speak-DlpXt_GV.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var cache = /* @__PURE__ */ new Map();
var MAX = 720;
function clean(raw) {
	return raw.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, "").replace(/\s+/g, " ").trim().slice(0, MAX);
}
var speakAltair_createServerFn_handler = createServerRpc({
	id: "3cadf769414460f842f4a8055c12be0f0d535df83db8cc473d6499d7bee8f3eb",
	name: "speakAltair",
	filename: "src/lib/speak.ts"
}, (opts) => speakAltair.__executeServer(opts));
var speakAltair = createServerFn({ method: "POST" }).validator((input) => {
	const text = clean(input.text);
	if (text.length < 8) throw new Error("text too short");
	return {
		text,
		lang: input.lang === "en" ? "en" : "ru"
	};
}).handler(speakAltair_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "unavailable"
	};
	const key = `${data.lang}:${data.text}`;
	const hit = cache.get(key);
	if (hit) return {
		ok: true,
		b64: hit
	};
	const res = await fetch("https://api.x.ai/v1/tts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			text: data.text,
			voice_id: "altair",
			language: data.lang
		}),
		signal: AbortSignal.timeout(2e4)
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI ${res.status}`
	};
	const b64 = Buffer.from(await res.arrayBuffer()).toString("base64");
	if (cache.size > 48) {
		const first = cache.keys().next().value;
		if (first) cache.delete(first);
	}
	cache.set(key, b64);
	return {
		ok: true,
		b64
	};
});
//#endregion
export { speakAltair_createServerFn_handler };
