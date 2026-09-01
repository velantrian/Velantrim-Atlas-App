import { useState } from "react";
import { t, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { dualPolicies } from "@/lib/atlas-data";

export function DualPolicy() {
  const { lang } = useI18n();
  const [id, setId] = useState<"autonomous" | "jarvis">("autonomous");
  const policy = dualPolicies.find((p) => p.id === id)!;

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {lang === "ru" ? "одно ядро · две политики" : "one core · two policies"}
      </p>
      <h2 className="mt-2 font-display text-2xl tracking-tight text-fg">
        {lang === "ru" ? "Autonomous и Jarvis" : "Autonomous and Jarvis"}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        {lang === "ru"
          ? "Не два мозга. Различаются interruption, approval, action budget и escalation — не фундаментальный интеллект."
          : "Not two brains. Interruption, approval, action budget, and escalation differ — not the fundamental intellect."}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        {dualPolicies.map((p) => {
          const on = p.id === id;
          return (
            <button
              key={p.id}
              type="button"
              aria-pressed={on}
              onClick={() => setId(p.id)}
              className={cn(
                "min-h-11 rounded-md border px-4 py-3 text-left text-sm transition-colors duration-150",
                on ? "border-accent bg-elevated text-fg" : "border-border text-muted hover:text-fg",
              )}
            >
              {t(p.name, lang)}
            </button>
          );
        })}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-fg">{t(policy.body, lang)}</p>
      <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {policy.knobs.map((knob) => (
          <div key={t(knob.k, "en")} className="rounded-md border border-border bg-bg px-3 py-3">
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
              {t(knob.k, lang)}
            </dt>
            <dd className="mt-1 text-sm text-fg">{t(knob.v, lang)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
