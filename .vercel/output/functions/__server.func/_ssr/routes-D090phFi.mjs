import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowRight, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as cn, i as Button, n as t, r as useI18n } from "./router-3ss9daO1.mjs";
import { b as thesisBody, c as edges, d as mapCaption, h as readingLayers, l as formula, m as projects, o as distinctions, y as thesis } from "./atlas-data-fcAQLGB7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D090phFi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var W = 1e3;
var H = 720;
function pos(p) {
	return {
		x: p.x / 100 * W,
		y: p.y / 100 * H
	};
}
function Constellation() {
	const { lang } = useI18n();
	const [active, setActive] = (0, import_react.useState)("cogos");
	const current = projects.find((p) => p.id === active) ?? projects[0];
	const related = (0, import_react.useMemo)(() => {
		const ids = /* @__PURE__ */ new Set([active]);
		for (const e of edges) {
			if (e.from === active) ids.add(e.to);
			if (e.to === active) ids.add(e.from);
		}
		return ids;
	}, [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.9fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-xl border border-border bg-surface p-2 sm:p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative hidden md:block",
				style: { aspectRatio: `${W} / ${H}` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: `0 0 ${W} ${H}`,
					className: "absolute inset-0 h-full w-full",
					"aria-hidden": "true",
					children: [edges.map((e) => {
						const a = projects.find((p) => p.id === e.from);
						const b = projects.find((p) => p.id === e.to);
						if (!a || !b) return null;
						const pa = pos(a);
						const pb = pos(b);
						const lit = related.has(e.from) && related.has(e.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: pa.x,
							y1: pa.y,
							x2: pb.x,
							y2: pb.y,
							className: "transition-[stroke,stroke-opacity] duration-250",
							stroke: lit ? "var(--color-accent)" : "var(--color-border)",
							strokeOpacity: lit ? .9 : .7,
							strokeWidth: lit ? 1.6 : 1
						}, `${e.from}-${e.to}`);
					}), projects.map((p) => {
						const { x, y } = pos(p);
						const on = p.id === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							transform: `translate(${x} ${y})`,
							children: [on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								r: "26",
								fill: "none",
								stroke: "var(--color-accent)",
								strokeOpacity: "0.35",
								className: "node-pulse"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								r: on ? 10 : 7,
								fill: on ? "var(--color-accent)" : "var(--color-elevated)",
								stroke: on ? "var(--color-accent)" : "var(--color-border)",
								strokeWidth: "1.5",
								opacity: related.has(p.id) ? 1 : .4
							})]
						}, p.id);
					})]
				}), projects.map((p) => {
					const on = p.id === active;
					const dim = !related.has(p.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => setActive(p.id),
						className: cn("absolute flex min-h-11 min-w-11 -translate-x-1/2 flex-col items-center pt-3 text-center transition-opacity duration-200", dim ? "opacity-45 hover:opacity-100" : "opacity-100"),
						style: {
							left: `${p.x}%`,
							top: `${p.y}%`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 text-sm leading-tight text-fg",
							children: t(p.map, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted",
							children: t(p.short, lang)
						})]
					}, p.id);
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 md:hidden",
				children: projects.map((p) => {
					const on = p.id === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => setActive(p.id),
						className: cn("min-h-11 rounded-md border px-3 py-3 text-left transition-colors duration-150", on ? "border-accent bg-elevated" : "border-border bg-bg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-fg",
							children: t(p.name, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
							children: t(p.short, lang)
						})]
					}, p.id);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "flex flex-col rounded-xl border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted",
					children: t(current.status, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl tracking-tight text-fg",
					children: t(current.name, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: t(current.role, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-md border border-border bg-bg px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
						children: lang === "ru" ? "Не становится" : "Must not become"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg",
						children: t(current.not, lang)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex flex-wrap gap-2 pt-6",
					children: [
						current.id === "cogos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cognitive-os",
								children: lang === "ru" ? "Плоскости" : "Planes"
							})
						}) : null,
						current.id === "clos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/clos",
								children: lang === "ru" ? "Цикл" : "Cycle"
							})
						}) : null,
						current.github ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: current.github,
								target: "_blank",
								rel: "noreferrer",
								children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})
						}) : null,
						current.notion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: current.notion,
								target: "_blank",
								rel: "noreferrer",
								children: ["Notion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})
						}) : null
					]
				})
			]
		})]
	});
}
function DistinctionWall() {
	const { lang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
		children: distinctions.map((d, idx) => {
			const on = open === idx;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(on ? null : idx),
				className: cn("min-h-24 rounded-lg border px-4 py-4 text-left transition-[background-color,border-color] duration-200", on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-xl tracking-tight text-fg",
					children: [
						t(d.left, lang),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-accent",
							children: "≠"
						}),
						t(d.right, lang)
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-2 text-sm leading-relaxed text-muted transition-[opacity,transform] duration-200", on ? "translate-y-0 opacity-100" : "pointer-events-none h-0 overflow-hidden opacity-0"),
					children: t(d.note, lang)
				})]
			}, t(d.left, "en") + t(d.right, "en"));
		})
	});
}
function ReadingLayers() {
	const { lang } = useI18n();
	const [active, setActive] = (0, import_react.useState)(0);
	const layer = readingLayers[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-2 sm:grid-cols-2",
			children: readingLayers.map((item, idx) => {
				const on = idx === active;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": on,
					onClick: () => setActive(idx),
					className: cn("flex min-h-20 w-full flex-col rounded-lg border px-4 py-3 text-left transition-[background-color,border-color] duration-200", on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
						children: item.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 font-display text-lg leading-tight tracking-tight text-fg",
						children: t(item.name, lang)
					})]
				}) }, item.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-xl border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
					children: t(layer.owner, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl tracking-tight text-fg",
					children: t(layer.name, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: t(layer.body, lang)
				})
			]
		})]
	});
}
function Home() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stagger-in max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted",
						children: lang === "ru" ? "исследовательский атлас" : "research atlas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl leading-[1.08] tracking-tight text-fg sm:text-6xl",
						children: t(thesis, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
						children: t(thesisBody, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cognitive-os",
								children: ["Cognitive OS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/clos",
								children: "CLOS"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-5 flex items-end justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: lang === "ru" ? "Экосистема" : "Ecosystem"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted",
						children: t(mapCaption, lang)
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Constellation, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: lang === "ru" ? "Как читать архитектуру" : "How to read the architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-xl text-sm text-muted",
						children: lang === "ru" ? "Сверху вниз: от устойчивого смысла к сменяемой реализации. TECHNOLOGY ≠ ARCHITECTURE." : "Top down: from durable meaning to replaceable implementation. TECHNOLOGY ≠ ARCHITECTURE."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingLayers, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: lang === "ru" ? "Различия, которые нельзя терять" : "Distinctions that must survive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-xl text-sm text-muted",
						children: lang === "ru" ? "Нажмите карточку. Это не украшения — это инварианты архитектуры." : "Tap a card. These are not slogans — they are architectural invariants."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistinctionWall, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 rounded-xl border border-border bg-surface px-6 py-8 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted",
					children: lang === "ru" ? "формула" : "formula"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl font-display text-2xl leading-snug tracking-tight text-fg sm:text-3xl",
					children: t(formula, lang)
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
