import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ChevronRight, o as Play, p as ArrowUpRight, s as Pause } from "../_libs/lucide-react.mjs";
import { a as useI18n, i as t, n as useInsight, o as Button, r as SpeakButton, s as cn } from "./router-0sfaDV0d.mjs";
import { a as closFrontiers, i as closCycle } from "./atlas-data-DzYrtQxq.mjs";
import { a as freedoms, m as methodSteps, p as meaningEnvelope, t as cycleComment } from "./atlas-notes-DxGeIxdX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clos-k-7GM-0p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CX = 160;
var CY = 160;
var R = 118;
var C = 2 * Math.PI * R;
var marks = [
	"🌍",
	"👁",
	"🧩",
	"💾",
	"🪞",
	"🎯",
	"💭",
	"⚖️",
	"🛠",
	"🌊",
	"🔄"
];
function ClosCycle() {
	const { lang } = useI18n();
	const show = useInsight((s) => s.show);
	const [i, setI] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const stage = closCycle[i];
	const n = closCycle.length;
	function go(idx, comment = true) {
		setPlaying(false);
		setI(idx);
		if (comment) {
			const s = closCycle[idx];
			show({
				title: `${marks[idx]} ${t(s.name, lang)}`,
				body: t(cycleComment[idx] ?? s.ask, lang)
			});
		}
	}
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
						onClick: () => go(idx),
						className: "absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full",
						style: {
							left: `${x}%`,
							top: `${y}%`
						}
					}, s.id);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 grid place-items-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl tracking-tight text-fg",
						children: [
							marks[i],
							" ",
							t(stage.name, lang)
						]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: [
					marks[i],
					" ",
					t(stage.name, lang)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-muted",
				children: t(stage.ask, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: `${t(stage.name, lang)}. ${t(cycleComment[i] ?? stage.ask, lang)}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => setPlaying((v) => !v),
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }), playing ? lang === "ru" ? "Пауза" : "Pause" : lang === "ru" ? "Цикл" : "Play"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => go((i + 1) % n),
						children: [lang === "ru" ? "Следующий" : "Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 grid grid-cols-2 gap-1.5 sm:grid-cols-3",
				children: closCycle.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => go(idx),
					className: cn("w-full min-h-10 rounded-sm border px-2 py-2 text-left text-xs transition-colors duration-150", idx === i ? "border-accent bg-elevated text-fg" : "border-border text-muted hover:text-fg"),
					children: [
						marks[idx],
						" ",
						t(s.name, lang)
					]
				}) }, s.id))
			})
		] })]
	});
}
function ClosPage() {
	const { lang } = useI18n();
	const show = useInsight((s) => s.show);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted",
				children: "⚗️ Cognitive Life OS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
				children: "⚗️ CLOS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted",
				children: lang === "ru" ? "Не набор модулей и не конкретный AI-стек. Чертёж того, что должно оставаться осмысленным, если заменить LLM, граф, SQLite или провайдера. Архитектура = различия + обязательства + переходы + границы полномочий." : "Not a module catalog and not a particular AI stack. A blueprint of what must remain meaningful if you replace the LLM, the graph, SQLite, or the provider. Architecture = distinctions + obligations + transitions + authority boundaries."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: lang === "ru" ? "CLOS — research blueprint, не Canon и не runtime. Что должно оставаться осмысленным при полной смене субстрата." : "CLOS is a research blueprint, not Canon and not runtime. What must remain meaningful after a full substrate swap." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://github.com/velantrian/Velantrim-Cognitive-Life-OS-CLOS-",
							target: "_blank",
							rel: "noreferrer",
							children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://app.notion.com/p/3c6ac84d0547814d8a59d3e2719a7d2e",
							target: "_blank",
							rel: "noreferrer",
							children: ["Notion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					})
				]
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
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: lang === "ru" ? "🔬 Метод" : "🔬 Method"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-xl text-sm text-muted",
						children: lang === "ru" ? "REAL PHENOMENON ≠ ARCHITECTURAL GAP. BIOLOGICAL ANALOGUE ≠ ARCHITECTURAL PROOF." : "REAL PHENOMENON ≠ ARCHITECTURAL GAP. BIOLOGICAL ANALOGUE ≠ ARCHITECTURAL PROOF."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
						children: methodSteps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => show({
								title: `${String(idx + 1).padStart(2, "0")}`,
								body: t(step, lang)
							}),
							className: "w-full rounded-lg border border-border bg-surface px-4 py-4 text-left hover:bg-elevated/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] text-subtle",
								children: String(idx + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-fg",
								children: t(step, lang)
							})]
						}) }, idx))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 rounded-xl border border-border bg-surface px-5 py-6 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
						children: "Meaning Envelope"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-base leading-relaxed text-fg",
						children: t(meaningEnvelope, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: t(meaningEnvelope, lang) })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-tight",
					children: lang === "ru" ? "Три свободы" : "Three freedoms"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-3",
					children: freedoms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => show({
							title: t(item.name, lang),
							body: t(item.body, lang)
						}),
						className: "rounded-lg border border-border bg-surface p-5 text-left hover:bg-elevated/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl tracking-tight text-fg",
							children: t(item.name, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: t(item.body, lang)
						})]
					}, t(item.name, "en")))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
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
						children: closFrontiers.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => show({
								title: t(item.name, lang),
								body: t(item.status, lang)
							}),
							className: "w-full rounded-lg border border-border bg-surface px-4 py-4 text-left hover:bg-elevated/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg",
								children: t(item.name, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
								children: t(item.status, lang)
							})]
						}) }, t(item.name, "en")))
					})
				]
			})
		]
	});
}
//#endregion
export { ClosPage as component };
