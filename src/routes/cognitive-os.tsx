import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { GenomeLab } from "@/components/genome-lab";
import { PlaneDiagram } from "@/components/plane-diagram";
import { SpeakButton } from "@/components/speak-button";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { antiDegradation } from "@/lib/atlas-data";
import {
  evolution,
  interactionFormula,
  researchQuestions,
  rstua,
} from "@/lib/atlas-notes";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cognitive-os")({ component: CognitiveOsPage });

function CognitiveOsPage() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);
  const [fail, setFail] = useState(0);
  const [rst, setRst] = useState(0);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        🚀 Velantrim Version LLM
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">🚀 Cognitive OS</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        {lang === "ru"
          ? "Пять сотрудничающих плоскостей. ❤️ Human Presence и ⚙️ Engineering Power измеряются отдельно. Модель принимается в роль, а не глобально. Система переживает замену бэкенда."
          : "Five cooperating planes. ❤️ Human Presence and ⚙️ Engineering Power are measured separately. A model is admitted by role, not globally. The system survives backend replacement."}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <SpeakButton
          text={
            lang === "ru"
              ? "Cognitive OS. LLM — сменный процессор. Пять плоскостей: Interaction, Control, Capability, Assurance, Memory. Модель принимается в роль, не глобально."
              : "Cognitive OS. LLM is a replaceable processor. Five planes: Interaction, Control, Capability, Assurance, Memory. A model is admitted by role, not globally."
          }
        />
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com/velantrian/Velantrim-Version-LLM-AI-Cognitive-OS"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="https://app.notion.com/p/3bfac84d054781db860bf7b1d89f0f89" target="_blank" rel="noreferrer">
            Notion
            <ArrowUpRight className="size-3.5" />
          </a>
        </Button>
      </div>

      <section className="mt-12">
        <PlaneDiagram />
      </section>

      <section className="mt-14 rounded-xl border border-border bg-surface px-5 py-6 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">❤️ Interaction</p>
        <p className="mt-3 max-w-3xl font-display text-xl leading-snug tracking-tight text-fg">
          {t(interactionFormula, lang)}
        </p>
        <div className="mt-5">
          <SpeakButton text={t(interactionFormula, lang)} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "🕰️ Эволюция моделей" : "🕰️ Model evolution"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Это не автоматически «лучше» или «хуже». Часто это смена optimization target."
            : "This is not automatically “better” or “worse.” Often it is a change of optimization target."}
        </p>
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {evolution.map((step, idx) => (
            <li key={t(step.name, "en")}>
              <button
                type="button"
                onClick={() =>
                  show({
                    title: `${step.mark} ${t(step.name, lang)}`,
                    body:
                      lang === "ru"
                        ? `Шаг ${idx + 1} из ${evolution.length}. Прогресс в coding/agency не должен автоматически уничтожать Human Presence.`
                        : `Step ${idx + 1} of ${evolution.length}. Gains in coding/agency must not automatically erase Human Presence.`,
                  })
                }
                className="flex min-h-16 w-full items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-left hover:bg-elevated/50"
              >
                <span className="text-lg">{step.mark}</span>
                <span className="text-sm text-fg">{t(step.name, lang)}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 grid gap-3 sm:grid-cols-2">
        <article className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-display text-2xl tracking-tight">🏛️ Behavioral Museum</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {lang === "ru"
              ? "Успешные черты не выбрасываются вместе с чекпоинтом. Диалог, юмор, калибровка, объяснения сохраняются как воспроизводимые примеры и регрессионные тесты — не как ностальгия."
              : "Successful traits are not discarded with a checkpoint. Dialogue, humor, calibration, explanations are kept as reproducible examples and regression tests — not nostalgia."}
          </p>
        </article>
        <article className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-display text-2xl tracking-tight">🔐 Local-first</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {lang === "ru"
              ? "❤️ Interaction остаётся на устройстве. В облако уходит sanitised task. Сырое решение возвращается локальной модели, которая говорит с человеком. Провайдер заменяем."
              : "❤️ Interaction stays on-device. The cloud receives a sanitized task. The raw solution returns to the local model that speaks to the human. The provider is replaceable."}
          </p>
        </article>
      </section>

      <section className="mt-6">
        <GenomeLab />
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">R ≠ S ≠ T ≠ U ≠ A</h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Evidence Use Contract. Присутствие в контексте ≠ вклад в ответ ≠ действие."
            : "Evidence Use Contract. Context presence ≠ contribution ≠ action."}
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {rstua.map((item, idx) => {
            const on = rst === idx;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setRst(idx);
                  show({ title: `${item.mark} · ${t(item.name, lang)}`, body: t(item.body, lang) });
                }}
                className={cn(
                  "min-h-24 rounded-lg border px-3 py-4 text-left",
                  on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50",
                )}
              >
                <span className="font-display text-2xl text-fg">{item.mark}</span>
                <span className="mt-2 block text-sm text-muted">{t(item.name, lang)}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "🛡️ Anti-degradation" : "🛡️ Anti-degradation"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Не искать вечную идеальную модель. Построить систему так, чтобы отдельная модель могла устареть — а непрерывность интеллекта сохранялась."
            : "Do not hunt for an eternal perfect model. Build so that a single model can age — and intelligence continuity remains."}
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {antiDegradation.map((item, idx) => {
            const on = fail === idx;
            return (
              <button
                key={t(item.name, "en")}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setFail(idx);
                  show({ title: t(item.name, lang), body: t(item.body, lang) });
                }}
                className={cn(
                  "min-h-20 rounded-lg border px-4 py-4 text-left transition-colors duration-200",
                  on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50",
                )}
              >
                <span className="block font-mono text-sm text-fg">{t(item.name, lang)}</span>
                <span
                  className={cn(
                    "mt-2 block text-sm leading-relaxed text-muted",
                    on ? "opacity-100" : "opacity-0 h-0 overflow-hidden",
                  )}
                >
                  {t(item.body, lang)}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "🔑 Исследовательские вопросы" : "🔑 Research questions"}
        </h2>
        <ol className="mt-6 grid gap-2">
          {researchQuestions.map((q, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() => show({ title: `Q${String(idx + 1).padStart(2, "0")}`, body: t(q, lang) })}
                className="flex w-full gap-4 rounded-lg border border-border bg-surface px-4 py-3 text-left hover:bg-elevated/50"
              >
                <span className="font-mono text-xs text-subtle">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed text-fg">{t(q, lang)}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
