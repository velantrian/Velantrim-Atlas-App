import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ChevronRight, i as Pause, r as Play, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as cn, i as Button, n as t, r as useI18n } from "./router-3ss9daO1.mjs";
import { a as closFrontiers, i as closCycle } from "./atlas-data-fcAQLGB7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clos-DC4Jt3xi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CX = 160;
var CY = 160;
var R = 118;
var C = 2 * Math.PI * R;
function ClosCycle() {
	const { lang } = useI18n();
	const [i, setI] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const stage = closCycle[i];
	const n = closCycle.length;
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		const id = window.setInterval(() => {
			setI((cur) => (cur + 1) % n);
		}, 2400);
		return () => window.clearInterval(id);
	}, [playing, n]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-center gap-8 lg:grid-cols-[320px_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto size-[280px] sm:size-[320px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 320 320",
					className: "absolute inset-0 size-full",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: CX,
							cy: CY,
							r: R,
							fill: "none",
							stroke: "var(--color-border)",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: CX,
							cy: CY,
							r: R,
							fill: "none",
							stroke: "var(--color-accent)",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeDasharray: C,
							strokeDashoffset: C - (i + 1) / n * C,
							transform: `rotate(-90 ${CX} ${CY})`,
							className: "transition-[stroke-dashoffset] duration-500 ease-out",
							opacity: "0.7"
						}),
						closCycle.map((s, idx) => {
							const a = idx / n * Math.PI * 2 - Math.PI / 2;
							const x = CX + Math.cos(a) * R;
							const y = CY + Math.sin(a) * R;
							const on = idx === i;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: x,
								cy: y,
								r: on ? 8 : 5,
								fill: on ? "var(--color-accent)" : "var(--color-elevated)",
								stroke: on ? "var(--color-accent)" : "var(--color-border)"
							}, s.id);
						})
					]
				}),
				closCycle.map((s, idx) => {
					const a = idx / n * Math.PI * 2 - Math.PI / 2;
					const x = (CX + Math.cos(a) * R) / 320 * 100;
					const y = (CY + Math.sin(a) * R) / 320 * 100;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": t(s.name, lang),
						"aria-pressed": idx === i,
						onClick: () => {
							setPlaying(false);
							setI(idx);
						},
						className: "absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full",
						style: {
							left: `${x}%`,
							top: `${y}%`
						}
					}, s.id);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 grid place-items-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl tracking-tight text-fg",
						children: t(stage.name, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
						children: [
							String(i + 1).padStart(2, "0"),
							" / ",
							String(n).padStart(2, "0")
						]
					})] })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted",
				children: lang === "ru" ? "жизненный цикл · не control flow" : "life cycle · not a control flow"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: t(stage.name, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-muted",
				children: t(stage.ask, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => setPlaying((v) => !v),
					children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }), playing ? lang === "ru" ? "Пауза" : "Pause" : lang === "ru" ? "Цикл" : "Play"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => {
						setPlaying(false);
						setI((cur) => (cur + 1) % n);
					},
					children: [lang === "ru" ? "Следующий" : "Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 grid grid-cols-2 gap-1.5 sm:grid-cols-3",
				children: closCycle.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setPlaying(false);
						setI(idx);
					},
					className: cn("w-full min-h-10 rounded-sm border px-2 py-2 text-left text-xs transition-colors duration-150", idx === i ? "border-accent bg-elevated text-fg" : "border-border text-muted hover:text-fg"),
					children: t(s.name, lang)
				}) }, s.id))
			})
		] })]
	});
}
function ClosPage() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted",
				children: "Cognitive Life OS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
				children: "CLOS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted",
				children: lang === "ru" ? "Не набор модулей и не конкретный AI-стек. Чертёж того, что должно оставаться осмысленным, если заменить LLM, граф, SQLite или провайдера. Архитектура = различия + обязательства + переходы + границы полномочий." : "Not a module catalog and not a particular AI stack. A blueprint of what must remain meaningful if you replace the LLM, the graph, SQLite, or the provider. Architecture = distinctions + obligations + transitions + authority boundaries."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://github.com/velantrian/Velantrim-Cognitive-Life-OS-CLOS-",
						target: "_blank",
						rel: "noreferrer",
						children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://app.notion.com/p/3c6ac84d0547814d8a59d3e2719a7d2e",
						target: "_blank",
						rel: "noreferrer",
						children: ["Notion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12 rounded-xl border border-border bg-surface p-5 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosCycle, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10 grid gap-3 sm:grid-cols-3",
				children: [
					{
						k: lang === "ru" ? "статус" : "status",
						v: lang === "ru" ? "ACTIVE RESEARCH BLUEPRINT · не Canon · не runtime" : "ACTIVE RESEARCH BLUEPRINT · not Canon · not runtime"
					},
					{
						k: lang === "ru" ? "метод" : "method",
						v: lang === "ru" ? "Не изобретать. Crosswalk. Fixture. Разрушить gap. Затем решать." : "Don't invent. Crosswalk. Fixture. Try to destroy the gap. Then decide."
					},
					{
						k: lang === "ru" ? "синтез" : "synthesis",
						v: lang === "ru" ? "Действовать на неполном представлении, не выдавая его дыры за свойства мира." : "Act on incomplete representation without treating its holes as properties of the world."
					}
				].map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
						children: card.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-fg",
						children: card.v
					})]
				}, card.k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: lang === "ru" ? "Исследовательский фронтир" : "Research frontier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-xl text-sm text-muted",
						children: lang === "ru" ? "Не расширять архитектуру по умолчанию. Если существующий словарь уже выражает поведение — MERGE / REFINE / NO NEW CONSTRUCT." : "Do not expand the architecture by default. If existing vocabulary already expresses the behavior — MERGE / REFINE / NO NEW CONSTRUCT."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2 sm:grid-cols-2",
						children: closFrontiers.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-border bg-surface px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg",
								children: t(item.name, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
								children: t(item.status, lang)
							})]
						}, t(item.name, "en")))
					})
				]
			})
		]
	});
}
//#endregion
export { ClosPage as component };
