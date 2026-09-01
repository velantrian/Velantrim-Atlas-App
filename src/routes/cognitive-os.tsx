import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { GenomeLab } from "@/components/genome-lab";
import { PlaneDiagram } from "@/components/plane-diagram";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { antiDegradation } from "@/lib/atlas-data";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cognitive-os")({ component: CognitiveOsPage });

function CognitiveOsPage() {
  const { lang } = useI18n();
  const [fail, setFail] = useState(0);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        Velantrim Version LLM
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Cognitive OS</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        {lang === "ru"
          ? "Пять сотрудничающих плоскостей. Человеческое присутствие и инженерная сила измеряются отдельно. Модель принимается в роль, а не глобально. Система переживает замену бэкенда."
          : "Five cooperating planes. Human presence and engineering power are measured separately. A model is admitted by role, not globally. The system survives backend replacement."}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
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

      <section className="mt-14 grid gap-3 sm:grid-cols-2">
        <article className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-display text-2xl tracking-tight">
            {lang === "ru" ? "Behavioral Museum" : "Behavioral Museum"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {lang === "ru"
              ? "Успешные черты не выбрасываются вместе с чекпоинтом. Диалог, юмор, калибровка, объяснения сохраняются как воспроизводимые примеры и регрессионные тесты — не как ностальгия."
              : "Successful traits are not discarded with a checkpoint. Dialogue, humor, calibration, explanations are kept as reproducible examples and regression tests — not nostalgia."}
          </p>
        </article>
        <article className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-display text-2xl tracking-tight">
            {lang === "ru" ? "Local-first" : "Local-first"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {lang === "ru"
              ? "Interaction остаётся на устройстве. В облако уходит sanitised task. Сырое решение возвращается локальной модели, которая говорит с человеком. Провайдер заменяем."
              : "Interaction stays on-device. The cloud receives a sanitized task. The raw solution returns to the local model that speaks to the human. The provider is replaceable."}
          </p>
        </article>
      </section>

      <section className="mt-6">
        <GenomeLab />
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "Anti-degradation" : "Anti-degradation"}
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
                onClick={() => setFail(idx)}
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
    </main>
  );
}
