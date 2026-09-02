import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, i as t, n as useInsight, o as Button, r as SpeakButton, s as cn } from "./router-0sfaDV0d.mjs";
import { _ as routingExamples, g as routeTask, s as dualPolicies, t as admissionSteps } from "./atlas-data-DzYrtQxq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routing-BPVsC4NH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DualPolicy() {
	const { lang } = useI18n();
	const show = useInsight((s) => s.show);
	const [id, setId] = (0, import_react.useState)("autonomous");
	const policy = dualPolicies.find((p) => p.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
				children: lang === "ru" ? "одно ядро · две политики" : "one core · two policies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl tracking-tight text-fg",
				children: lang === "ru" ? "🤖 Autonomous и 🧑‍🤝‍🧑 Jarvis" : "🤖 Autonomous and 🧑‍🤝‍🧑 Jarvis"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: lang === "ru" ? "Не два мозга. Различаются interruption, approval, action budget и escalation — не фундаментальный интеллект." : "Not two brains. Interruption, approval, action budget, and escalation differ — not the fundamental intellect."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-2",
				children: dualPolicies.map((p) => {
					const on = p.id === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => {
							setId(p.id);
							show({
								title: t(p.name, lang),
								body: t(p.body, lang)
							});
						},
						className: cn("min-h-11 rounded-md border px-4 py-3 text-left text-sm transition-colors duration-150", on ? "border-accent bg-elevated text-fg" : "border-border text-muted hover:text-fg"),
						children: [p.id === "autonomous" ? "🤖 " : "🧑‍🤝‍🧑 ", t(p.name, lang)]
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed text-fg",
				children: t(policy.body, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4",
				children: policy.knobs.map((knob) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border bg-bg px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-[10px] uppercase tracking-[0.14em] text-subtle",
						children: t(knob.k, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm text-fg",
						children: t(knob.v, lang)
					})]
				}, t(knob.k, "en")))
			})
		]
	});
}
var ladder = [
	"Low",
	"Medium",
	"High",
	"XHigh",
	"Max"
];
function RoutingLab() {
	const { lang } = useI18n();
	const show = useInsight((s) => s.show);
	const [text, setText] = (0, import_react.useState)(t(routingExamples[0].text, lang));
	const plan = (0, import_react.useMemo)(() => routeTask(text), [text]);
	const effortIndex = ladder.indexOf(plan.effort);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.95fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "task",
				className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
				children: lang === "ru" ? "задача" : "task"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: "task",
				value: text,
				onChange: (e) => setText(e.target.value),
				rows: 5,
				className: "mt-2 w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-base leading-relaxed text-fg outline-none transition-colors duration-150 placeholder:text-subtle focus:border-accent/50",
				placeholder: lang === "ru" ? "Опишите задачу…" : "Describe the task…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: routingExamples.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: () => {
						const sample = t(ex.text, lang);
						setText(sample);
						const next = routeTask(sample);
						show({
							title: `${t(ex.label, lang)} → ${t(next.role, lang)}`,
							body: t(next.note, lang)
						});
					},
					children: t(ex.label, lang)
				}, t(ex.label, "en")))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
						children: "execution_plan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: `${t(plan.role, lang)}. ${t(plan.note, lang)}` })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "role",
							v: t(plan.role, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "family",
							v: t(plan.family, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
							children: "effort"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 flex gap-1",
							children: ladder.map((level, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("h-8 flex-1 rounded-sm border text-center text-[10px] leading-8", idx <= effortIndex ? "border-accent/40 bg-accent text-accent-fg" : "border-border text-subtle"),
								children: level
							}, level))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "strategy",
							v: t(plan.strategy, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "verifier",
							v: t(plan.verifier, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "privacy",
							v: t(plan.privacy, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "memory",
							v: t(plan.memory, lang)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted",
					children: t(plan.note, lang)
				})
			]
		})]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right text-fg",
			children: v
		})]
	});
}
function RoutingPage() {
	const { lang } = useI18n();
	const show = useInsight((s) => s.show);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted",
				children: lang === "ru" ? "🧭 лаборатория маршрутизации" : "🧭 routing laboratory"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
				children: lang === "ru" ? "Кто должен думать" : "Who should think"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted",
				children: lang === "ru" ? "Роутер Cognitive OS выбирает роль, усилие, стратегию и верификатор — не просто имя модели. Это демонстрация политики, не production runtime." : "Cognitive OS routing chooses role, effort, strategy, and verifier — not merely a model name. This is a policy demonstration, not a production runtime."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: lang === "ru" ? "Роутер выбирает не имя модели, а конфигурацию: роль, семейство, усилие, стратегия, верификатор, privacy, бюджет." : "The router chooses a configuration, not a model name: role, family, effort, strategy, verifier, privacy, budget." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoutingLab, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualPolicy, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: lang === "ru" ? "🛡️ Authority между доменами" : "🛡️ Cross-domain authority"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-xl text-sm text-muted",
						children: lang === "ru" ? "Источник не выдаёт себе полномочия целевого домена. Candidate ≠ permission." : "A source cannot grant itself the target domain’s authority. Candidate ≠ permission."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
						children: admissionSteps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => show({
								title: `${String(idx + 1).padStart(2, "0")} · ${t(step, lang)}`,
								body: lang === "ru" ? "Admission не повышает authority. DENY даёт Decision Receipt. ALLOW даёт CapabilityLease на bounded operation, затем ConsumptionReceipt." : "Admission does not raise authority. DENY yields a Decision Receipt. ALLOW yields a CapabilityLease for a bounded operation, then a ConsumptionReceipt."
							}),
							className: "w-full rounded-md border border-border bg-surface px-4 py-4 text-left hover:bg-elevated/50",
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
			})
		]
	});
}
//#endregion
export { RoutingPage as component };
