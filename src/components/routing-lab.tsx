import { useMemo, useState } from "react";
import { SpeakButton } from "@/components/speak-button";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { cn } from "@/lib/utils";
import { routeTask, routingExamples } from "@/lib/atlas-data";

const ladder = ["Low", "Medium", "High", "XHigh", "Max"] as const;

export function RoutingLab() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);
  const [text, setText] = useState(t(routingExamples[0].text, lang));
  const plan = useMemo(() => routeTask(text), [text]);
  const effortIndex = ladder.indexOf(plan.effort);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.95fr)]">
      <div>
        <label htmlFor="task" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {lang === "ru" ? "задача" : "task"}
        </label>
        <textarea
          id="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="mt-2 w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-base leading-relaxed text-fg outline-none transition-colors duration-150 placeholder:text-subtle focus:border-accent/50"
          placeholder={lang === "ru" ? "Опишите задачу…" : "Describe the task…"}
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {routingExamples.map((ex) => (
            <Button
              key={t(ex.label, "en")}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const sample = t(ex.text, lang);
                setText(sample);
                const next = routeTask(sample);
                show({
                  title: `${t(ex.label, lang)} → ${t(next.role, lang)}`,
                  body: t(next.note, lang),
                });
              }}
            >
              {t(ex.label, lang)}
            </Button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">execution_plan</p>
          <SpeakButton text={`${t(plan.role, lang)}. ${t(plan.note, lang)}`} />
        </div>
        <dl className="mt-4 space-y-3 text-sm">
          <Row k="role" v={t(plan.role, lang)} />
          <Row k="family" v={t(plan.family, lang)} />
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">effort</dt>
            <dd className="mt-2 flex gap-1">
              {ladder.map((level, idx) => (
                <span
                  key={level}
                  className={cn(
                    "h-8 flex-1 rounded-sm border text-center text-[10px] leading-8",
                    idx <= effortIndex
                      ? "border-accent/40 bg-accent text-accent-fg"
                      : "border-border text-subtle",
                  )}
                >
                  {level}
                </span>
              ))}
            </dd>
          </div>
          <Row k="strategy" v={t(plan.strategy, lang)} />
          <Row k="verifier" v={t(plan.verifier, lang)} />
          <Row k="privacy" v={t(plan.privacy, lang)} />
          <Row k="memory" v={t(plan.memory, lang)} />
        </dl>
        <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted">{t(plan.note, lang)}</p>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">{k}</dt>
      <dd className="text-right text-fg">{v}</dd>
    </div>
  );
}
