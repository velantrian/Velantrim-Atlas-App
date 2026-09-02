import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as Square, c as LoaderCircle, d as FlaskConical, i as Sun, l as Gem, n as Volume2, r as TriangleAlert, t as X, u as Frame } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-0sfaDV0d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "text-muted hover:bg-elevated hover:text-fg",
			outline: "border border-border bg-transparent text-fg hover:bg-elevated",
			quiet: "text-muted hover:text-fg"
		},
		size: {
			sm: "h-9 rounded-sm px-3 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var useI18n = create()(persist((set) => ({
	lang: "ru",
	setLang: (lang) => set({ lang })
}), { name: "velantrim-atlas-lang" }));
function t(copy, lang) {
	return copy[lang];
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var MAX = 720;
function clean(raw) {
	return raw.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, "").replace(/\s+/g, " ").trim().slice(0, MAX);
}
var speakAltair = createServerFn({ method: "POST" }).validator((input) => {
	const text = clean(input.text);
	if (text.length < 8) throw new Error("text too short");
	return {
		text,
		lang: input.lang === "en" ? "en" : "ru"
	};
}).handler(createSsrRpc("3cadf769414460f842f4a8055c12be0f0d535df83db8cc473d6499d7bee8f3eb"));
function SpeakButton({ text, className }) {
	const { lang } = useI18n();
	const [status, setStatus] = (0, import_react.useState)("idle");
	const audioRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		audioRef.current?.pause();
		audioRef.current = null;
		setStatus("idle");
		return () => {
			audioRef.current?.pause();
			audioRef.current = null;
		};
	}, [text, lang]);
	async function toggle() {
		if (status === "play") {
			audioRef.current?.pause();
			audioRef.current = null;
			setStatus("idle");
			return;
		}
		if (status === "load") return;
		setStatus("load");
		try {
			const res = await speakAltair({ data: {
				text,
				lang
			} });
			if (!res.ok) {
				setStatus("err");
				return;
			}
			const url = `data:audio/mpeg;base64,${res.b64}`;
			const audio = new Audio(url);
			audioRef.current = audio;
			audio.onended = () => setStatus("idle");
			audio.onerror = () => setStatus("err");
			await audio.play();
			setStatus("play");
		} catch {
			setStatus("err");
		}
	}
	const label = status === "load" ? "Altair…" : status === "play" ? lang === "ru" ? "Стоп" : "Stop" : status === "err" ? lang === "ru" ? "Нет голоса" : "No voice" : "Altair";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: status === "play" ? "primary" : "outline",
		size: "sm",
		onClick: toggle,
		disabled: status === "load",
		className: cn("shrink-0", className),
		"aria-label": lang === "ru" ? "Озвучить голосом Altair" : "Speak with Altair",
		children: [status === "load" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : status === "play" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3 fill-current" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5" }), label]
	});
}
var useInsight = create()((set) => ({
	current: null,
	show: (insight) => set({ current: insight }),
	clear: () => set({ current: null })
}));
function InsightDock() {
	const { lang } = useI18n();
	const current = useInsight((s) => s.current);
	const clear = useInsight((s) => s.clear);
	if (!current) return null;
	const speech = `${current.title}. ${current.body}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "pointer-events-auto mx-auto max-w-6xl rounded-xl border border-border bg-surface/95 p-4 shadow-lg backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
							children: lang === "ru" ? "пояснение" : "note"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-xl tracking-tight text-fg",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: current.body
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1 self-end sm:self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: speech }, speech), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						onClick: clear,
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				})]
			})
		})
	});
}
var themes = [
	{
		id: "lab",
		ru: "Лаб",
		en: "Lab"
	},
	{
		id: "paper",
		ru: "Бумага",
		en: "Paper"
	},
	{
		id: "crystal",
		ru: "Кристалл",
		en: "Crystal"
	},
	{
		id: "desk",
		ru: "Стол",
		en: "Desk"
	}
];
var useTheme = create()(persist((set) => ({
	theme: "lab",
	setTheme: (theme) => set({ theme })
}), { name: "velantrim-atlas-theme" }));
var icons = {
	lab: FlaskConical,
	paper: Sun,
	crystal: Gem,
	desk: Frame
};
function ThemeSwitch() {
	const { lang } = useI18n();
	const theme = useTheme((s) => s.theme);
	const setTheme = useTheme((s) => s.setTheme);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex shrink-0 items-center gap-0.5 rounded-md border border-border bg-bg p-0.5",
		children: themes.map((item) => {
			const Icon = icons[item.id];
			const on = theme === item.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": on,
				title: lang === "ru" ? item.ru : item.en,
				onClick: () => setTheme(item.id),
				className: cn("grid size-8 place-items-center rounded-sm transition-colors duration-150 sm:size-9", on ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-4",
					strokeWidth: 1.75
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: lang === "ru" ? item.ru : item.en
				})]
			}, item.id);
		})
	});
}
var nav = [
	{
		to: "/",
		ru: "🗺️ Экосистема",
		en: "🗺️ Ecosystem"
	},
	{
		to: "/cognitive-os",
		ru: "🚀 Cognitive OS",
		en: "🚀 Cognitive OS"
	},
	{
		to: "/clos",
		ru: "⚗️ CLOS",
		en: "⚗️ CLOS"
	},
	{
		to: "/routing",
		ru: "🧭 Маршрутизация",
		en: "🧭 Routing"
	}
];
var themeColor = {
	lab: "#0b0c0d",
	paper: "#f3eee4",
	crystal: "#071015",
	desk: "#2a2118"
};
function Shell({ children }) {
	const { lang, setLang } = useI18n();
	const theme = useTheme((s) => s.theme);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.theme = theme;
		document.querySelector("meta[name=\"theme-color\"]")?.setAttribute("content", themeColor[theme] ?? themeColor.lab);
	}, [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-theme": theme,
		className: "atlas-grid min-h-dvh pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-w-0 shrink-0 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 place-items-center rounded-sm border border-accent/40 bg-elevated",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block size-2.5 rotate-45 bg-accent" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg leading-none tracking-tight text-fg",
									children: "Velantrim"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:block",
									children: "Atlas"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ml-auto hidden items-center gap-1 lg:flex",
							children: nav.map((item) => {
								const active = pathname === item.to;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: cn("rounded-sm px-3 py-2 text-sm transition-colors duration-150", active ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
									children: lang === "ru" ? item.ru : item.en
								}, item.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex shrink-0 items-center gap-1 lg:ml-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSwitch, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-8 items-center rounded-md border border-border bg-bg p-0.5 sm:h-9",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": lang === "ru",
									onClick: () => setLang("ru"),
									className: cn("h-full rounded-sm px-2 text-xs font-medium sm:px-2.5", lang === "ru" ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
									children: "RU"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": lang === "en",
									onClick: () => setLang("en"),
									className: cn("h-full rounded-sm px-2 text-xs font-medium sm:px-2.5", lang === "en" ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
									children: "EN"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-1 overflow-x-auto px-3 pb-2.5 lg:hidden",
					children: nav.map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("shrink-0 rounded-sm px-3 py-2 text-sm", active ? "bg-elevated text-fg" : "text-muted"),
							children: lang === "ru" ? item.ru : item.en
						}, item.to);
					})
				})]
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/80 px-4 py-8 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-lg text-sm leading-relaxed text-muted",
						children: lang === "ru" ? "Исследовательский атлас. Не Canon, не runtime, не authorization. Источники — GitHub velantrian и Notion Knowledge Atlas. Голос: Altair · xAI." : "A research atlas. Not Canon, not runtime, not authorization. Sources — GitHub velantrian and the Notion Knowledge Atlas. Voice: Altair · xAI."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/velantrian",
						target: "_blank",
						rel: "noreferrer",
						className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle hover:text-fg",
						children: "github.com/velantrian"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightDock, {})
		]
	});
}
var styles_default = "/assets/styles-EINyqSuu.css";
var APP_NAME = "Velantrim Atlas";
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Interactive atlas of Velantrim Cognitive OS and the research ecosystem."
			},
			{
				name: "theme-color",
				content: "#0b0c0d"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ru",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$3 = () => import("./routes-BhrtMIvW.mjs");
var Route$3 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./clos-k-7GM-0p.mjs");
var Route$2 = createFileRoute("/clos")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./cognitive-os-C1klXlFC.mjs");
var Route$1 = createFileRoute("/cognitive-os")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./routing-BPVsC4NH.mjs");
var Route = createFileRoute("/routing")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	ClosRoute: Route$2.update({
		id: "/clos",
		path: "/clos",
		getParentRoute: () => Route$4
	}),
	CognitiveOsRoute: Route$1.update({
		id: "/cognitive-os",
		path: "/cognitive-os",
		getParentRoute: () => Route$4
	}),
	RoutingRoute: Route.update({
		id: "/routing",
		path: "/routing",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useI18n as a, t as i, useInsight as n, Button as o, SpeakButton as r, cn as s, router_exports as t };
