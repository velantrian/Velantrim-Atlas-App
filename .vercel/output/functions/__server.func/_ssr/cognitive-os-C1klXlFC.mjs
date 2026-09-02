import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as useI18n, i as t, n as useInsight, o as Button, r as SpeakButton, s as cn } from "./router-0sfaDV0d.mjs";
import { f as memoryTiers, n as admitRoles, p as planes, r as antiDegradation, u as genomeScenarios, v as specialists } from "./atlas-data-DzYrtQxq.mjs";
import { C as specialistMark, S as rstua, _ as planeMark, g as planeComment, i as evolution, u as interactionFormula, x as researchQuestions } from "./atlas-notes-DxGeIxdX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cognitive-os-C1klXlFC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var verdictCopy = {
	admit: {
		ru: "ADMIT",
		en: "ADMIT"
	},
	hold: {
		ru: "HOLD",
		en: "HOLD"
	},
	review: {
		ru: "REVIEW",
		en: "REVIEW"
	}
};
function GenomeLab() {
	const { lang } = useI18n();
	const show = useInsight((s) => s.show);
	const [human, setHuman] = (0, import_react.useState)(-20);
	const [tech, setTech] = (0, import_react.useState)(15);
	const roles = (0, import_react.useMemo)(() => admitRoles(human, tech), [human, tech]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
				children: "Model Genome"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl tracking-tight text-fg",
				children: lang === "ru" ? "Допуск по роли, не глобально" : "Admit by role, not globally"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: lang === "ru" ? "Профиль, не одно место в лидерборде. +15% coding и −20% Interaction Presence: новый Coder — да; новый Human Interface — нет." : "A profile, not a leaderboard slot. +15% coding and −20% Interaction Presence: new Coder — yes; new Human Interface — no."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: genomeScenarios.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "sm",
					variant: human === s.human && tech === s.tech ? "outline" : "ghost",
					onClick: () => {
						setHuman(s.human);
						setTech(s.tech);
						const line = admitRoles(s.human, s.tech).map((r) => `${t(r.name, lang)}: ${r.verdict}`).join(". ");
						show({
							title: t(s.label, lang),
							body: line
						});
					},
					children: t(s.label, lang)
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: lang === "ru" ? "Human Presence" : "Human Presence",
					value: human,
					onChange: setHuman
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: lang === "ru" ? "Engineering Power" : "Engineering Power",
					value: tech,
					onChange: setTech
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-2 sm:grid-cols-2",
				children: roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex min-h-11 items-center justify-between gap-3 rounded-md border border-border bg-bg px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-fg",
						children: t(role.name, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-mono text-[10px] uppercase tracking-[0.16em]", role.verdict === "admit" && "text-ok", role.verdict === "hold" && "text-warn", role.verdict === "review" && "text-muted"),
						children: t(verdictCopy[role.verdict], lang)
					})]
				}, role.id))
			})
		]
	});
}
function Slider({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-sm tabular-nums text-fg",
				children: [
					value > 0 ? "+" : "",
					value,
					"%"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min: -30,
			max: 30,
			step: 1,
			value,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "mt-3 w-full"
		})]
	});
}
function PlaneDiagram() {
	const { lang } = useI18n();
	const show = useInsight((s) => s.show);
	const [active, setActive] = (0, import_react.useState)("interaction");
	const plane = planes.find((p) => p.id === active);
	function select(id) {
		setActive(id);
		const p = planes.find((x) => x.id === id);
		if (!p) return;
		show({
			title: `${planeMark[id]} ${t(p.name, lang)}`,
			body: t(planeComment[id], lang)
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-surface p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-subtle",
					children: ["👤 ", lang === "ru" ? "человек" : "human"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, { children: ["👤 ", lang === "ru" ? "Пользователь" : "User"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spine, {}),
				planes.filter((p) => p.id !== "memory").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneNode, {
						n: String(i + 1).padStart(2, "0"),
						mark: planeMark[p.id],
						name: t(p.name, lang),
						question: t(p.question, lang),
						on: p.id === active,
						onClick: () => select(p.id)
					}),
					p.id === "control" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spine, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-1.5 sm:grid-cols-3",
						children: specialists.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => select("capability"),
							className: cn("min-h-10 rounded-sm border px-2 py-2 text-center text-xs transition-colors duration-150", active === "capability" ? "border-accent/50 bg-elevated text-fg" : "border-border text-muted hover:text-fg"),
							children: [
								specialistMark[s.id],
								" ",
								t(s.name, lang)
							]
						}, s.id))
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spine, {})
				] }, p.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, { children: ["❤️ ", lang === "ru" ? "Интерпретация → человек" : "Interpretation → human"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spine, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": active === "memory",
					onClick: () => select("memory"),
					className: cn("w-full rounded-lg border px-4 py-4 text-left transition-colors duration-200", active === "memory" ? "border-accent bg-elevated" : "border-border bg-bg hover:bg-elevated/50"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
							children: "05"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-display text-xl tracking-tight text-fg",
							children: "💾 Memory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 grid grid-cols-3 gap-2",
							children: memoryTiers.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-sm border border-border bg-surface px-2 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block font-mono text-[10px] uppercase tracking-[0.14em] text-accent",
									children: [
										tier.id === "hot" ? "🔥" : tier.id === "warm" ? "🌤" : "❄️",
										" ",
										t(tier.name, lang)
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-[11px] leading-snug text-muted",
									children: t(tier.body, lang)
								})]
							}, tier.id))
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
						children: lang === "ru" ? "плоскость" : "plane"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: [
							planeMark[plane.id],
							" ",
							t(plane.name, lang)
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: `${t(plane.name, lang)}. ${t(planeComment[plane.id], lang)}` })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted",
					children: t(plane.body, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2",
					children: plane.duties.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-accent" }), t(d, lang)]
					}, t(d, lang)))
				})
			]
		})]
	});
}
function Spine() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto h-3 w-px bg-border",
		"aria-hidden": "true"
	});
}
function Chip({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-md border border-border bg-bg px-4 py-2 text-center text-sm text-muted",
		children
	});
}
function PlaneNode({ n, mark, name, question, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: cn("flex w-full min-h-14 items-center gap-3 rounded-lg border px-4 py-3 text-left transition-[background-color,border-color] duration-200", on ? "border-accent bg-elevated" : "border-border bg-bg hover:bg-elevated/50"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs text-subtle",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "block font-display text-lg leading-tight tracking-tight text-fg",
				children: [
					mark,
					" ",
					name
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block truncate text-xs text-muted",
				children: question
			})]
		})]
	});
}
function CognitiveOsPage() {
	const { lang } = useI18n();
	const show = useInsight((s) => s.show);
	const [fail, setFail] = (0, import_react.useState)(0);
	const [rst, setRst] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted",
				children: "🚀 Velantrim Version LLM"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
				children: "🚀 Cognitive OS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted",
				children: lang === "ru" ? "Пять сотрудничающих плоскостей. ❤️ Human Presence и ⚙️ Engineering Power измеряются отдельно. Модель принимается в роль, а не глобально. Система переживает замену бэкенда." : "Five cooperating planes. ❤️ Human Presence and ⚙️ Engineering Power are measured separately. A model is admitted by role, not globally. The system survives backend replacement."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: lang === "ru" ? "Cognitive OS. LLM — сменный процессор. Пять плоскостей: Interaction, Control, Capability, Assurance, Memory. Модель принимается в роль, не глобально." : "Cognitive OS. LLM is a replaceable processor. Five planes: Interaction, Control, Capability, Assurance, Memory. A model is admitted by role, not globally." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://github.com/velantrian/Velantrim-Version-LLM-AI-Cognitive-OS",
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
							href: "https://app.notion.com/p/3bfac84d054781db860bf7b1d89f0f89",
							target: "_blank",
							rel: "noreferrer",
							children: ["Notion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneDiagram, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 rounded-xl border border-border bg-surface px-5 py-6 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
						children: "❤️ Interaction"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl font-display text-xl leading-snug tracking-tight text-fg",
						children: t(interactionFormula, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: t(interactionFormula, lang) })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: lang === "ru" ? "🕰️ Эволюция моделей" : "🕰️ Model evolution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-xl text-sm text-muted",
						children: lang === "ru" ? "Это не автоматически «лучше» или «хуже». Часто это смена optimization target." : "This is not automatically “better” or “worse.” Often it is a change of optimization target."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
						children: evolution.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => show({
								title: `${step.mark} ${t(step.name, lang)}`,
								body: lang === "ru" ? `Шаг ${idx + 1} из ${evolution.length}. Прогресс в coding/agency не должен автоматически уничтожать Human Presence.` : `Step ${idx + 1} of ${evolution.length}. Gains in coding/agency must not automatically erase Human Presence.`
							}),
							className: "flex min-h-16 w-full items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-left hover:bg-elevated/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: step.mark
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-fg",
								children: t(step.name, lang)
							})]
						}) }, t(step.name, "en")))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "🏛️ Behavioral Museum"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: lang === "ru" ? "Успешные черты не выбрасываются вместе с чекпоинтом. Диалог, юмор, калибровка, объяснения сохраняются как воспроизводимые примеры и регрессионные тесты — не как ностальгия." : "Successful traits are not discarded with a checkpoint. Dialogue, humor, calibration, explanations are kept as reproducible examples and regression tests — not nostalgia."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "🔐 Local-first"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: lang === "ru" ? "❤️ Interaction остаётся на устройстве. В облако уходит sanitised task. Сырое решение возвращается локальной модели, которая говорит с человеком. Провайдер заменяем." : "❤️ Interaction stays on-device. The cloud receives a sanitized task. The raw solution returns to the local model that speaks to the human. The provider is replaceable."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenomeLab, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: "R ≠ S ≠ T ≠ U ≠ A"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-xl text-sm text-muted",
						children: lang === "ru" ? "Evidence Use Contract. Присутствие в контексте ≠ вклад в ответ ≠ действие." : "Evidence Use Contract. Context presence ≠ contribution ≠ action."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-5",
						children: rstua.map((item, idx) => {
							const on = rst === idx;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": on,
								onClick: () => {
									setRst(idx);
									show({
										title: `${item.mark} · ${t(item.name, lang)}`,
										body: t(item.body, lang)
									});
								},
								className: cn("min-h-24 rounded-lg border px-3 py-4 text-left", on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-fg",
									children: item.mark
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-sm text-muted",
									children: t(item.name, lang)
								})]
							}, item.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: lang === "ru" ? "🛡️ Anti-degradation" : "🛡️ Anti-degradation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-xl text-sm text-muted",
						children: lang === "ru" ? "Не искать вечную идеальную модель. Построить систему так, чтобы отдельная модель могла устареть — а непрерывность интеллекта сохранялась." : "Do not hunt for an eternal perfect model. Build so that a single model can age — and intelligence continuity remains."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
						children: antiDegradation.map((item, idx) => {
							const on = fail === idx;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": on,
								onClick: () => {
									setFail(idx);
									show({
										title: t(item.name, lang),
										body: t(item.body, lang)
									});
								},
								className: cn("min-h-20 rounded-lg border px-4 py-4 text-left transition-colors duration-200", on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-mono text-sm text-fg",
									children: t(item.name, lang)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mt-2 block text-sm leading-relaxed text-muted", on ? "opacity-100" : "opacity-0 h-0 overflow-hidden"),
									children: t(item.body, lang)
								})]
							}, t(item.name, "en"));
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-tight",
					children: lang === "ru" ? "🔑 Исследовательские вопросы" : "🔑 Research questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 grid gap-2",
					children: researchQuestions.map((q, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => show({
							title: `Q${String(idx + 1).padStart(2, "0")}`,
							body: t(q, lang)
						}),
						className: "flex w-full gap-4 rounded-lg border border-border bg-surface px-4 py-3 text-left hover:bg-elevated/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-subtle",
							children: String(idx + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm leading-relaxed text-fg",
							children: t(q, lang)
						})]
					}) }, idx))
				})]
			})
		]
	});
}
//#endregion
export { CognitiveOsPage as component };
