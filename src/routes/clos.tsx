import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ClosCycle } from "@/components/clos-cycle";
import { SpeakButton } from "@/components/speak-button";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { closFrontiers } from "@/lib/atlas-data";
import { freedoms, meaningEnvelope, methodSteps } from "@/lib/atlas-notes";

export const Route = createFileRoute("/clos")({ component: ClosPage });

function ClosPage() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        ⚗️ Cognitive Life OS
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">⚗️ CLOS</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        {lang === "ru"
          ? "Не набор модулей и не конкретный AI-стек. Чертёж того, что должно оставаться осмысленным, если заменить LLM, граф, SQLite или провайдера. Архитектура = различия + обязательства + переходы + границы полномочий."
          : "Not a module catalog and not a particular AI stack. A blueprint of what must remain meaningful if you replace the LLM, the graph, SQLite, or the provider. Architecture = distinctions + obligations + transitions + authority boundaries."}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <SpeakButton
          text={
            lang === "ru"
              ? "CLOS — research blueprint, не Canon и не runtime. Что должно оставаться осмысленным при полной смене субстрата."
              : "CLOS is a research blueprint, not Canon and not runtime. What must remain meaningful after a full substrate swap."
          }
        />
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com/velantrian/Velantrim-Cognitive-Life-OS-CLOS-"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="https://app.notion.com/p/3c6ac84d0547814d8a59d3e2719a7d2e" target="_blank" rel="noreferrer">
            Notion
            <ArrowUpRight className="size-3.5" />
          </a>
        </Button>
      </div>

      <section className="mt-12 rounded-xl border border-border bg-surface p-5 sm:p-8">
        <ClosCycle />
      </section>

      <section className="mt-10 grid gap-3 sm:grid-cols-3">
        {[
          {
            k: lang === "ru" ? "статус" : "status",
            v:
              lang === "ru"
                ? "ACTIVE RESEARCH BLUEPRINT · не Canon · не runtime"
                : "ACTIVE RESEARCH BLUEPRINT · not Canon · not runtime",
          },
          {
            k: lang === "ru" ? "метод" : "method",
            v:
              lang === "ru"
                ? "Не изобретать. Crosswalk. Fixture. Разрушить gap. Затем решать."
                : "Don't invent. Crosswalk. Fixture. Try to destroy the gap. Then decide.",
          },
          {
            k: lang === "ru" ? "синтез" : "synthesis",
            v:
              lang === "ru"
                ? "Действовать на неполном представлении, не выдавая его дыры за свойства мира."
                : "Act on incomplete representation without treating its holes as properties of the world.",
          },
        ].map((card) => (
          <article key={card.k} className="rounded-lg border border-border bg-surface p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{card.k}</p>
            <p className="mt-3 text-sm leading-relaxed text-fg">{card.v}</p>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "🔬 Метод" : "🔬 Method"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "REAL PHENOMENON ≠ ARCHITECTURAL GAP. BIOLOGICAL ANALOGUE ≠ ARCHITECTURAL PROOF."
            : "REAL PHENOMENON ≠ ARCHITECTURAL GAP. BIOLOGICAL ANALOGUE ≠ ARCHITECTURAL PROOF."}
        </p>
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() =>
                  show({
                    title: `${String(idx + 1).padStart(2, "0")}`,
                    body: t(step, lang),
                  })
                }
                className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-left hover:bg-elevated/50"
              >
                <span className="font-mono text-[10px] text-subtle">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm text-fg">{t(step, lang)}</p>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface px-5 py-6 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Meaning Envelope</p>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-fg">{t(meaningEnvelope, lang)}</p>
        <div className="mt-5">
          <SpeakButton text={t(meaningEnvelope, lang)} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "Три свободы" : "Three freedoms"}
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {freedoms.map((item) => (
            <button
              key={t(item.name, "en")}
              type="button"
              onClick={() => show({ title: t(item.name, lang), body: t(item.body, lang) })}
              className="rounded-lg border border-border bg-surface p-5 text-left hover:bg-elevated/50"
            >
              <h3 className="font-display text-xl tracking-tight text-fg">{t(item.name, lang)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t(item.body, lang)}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "Исследовательский фронтир" : "Research frontier"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Не расширять архитектуру по умолчанию. Если существующий словарь уже выражает поведение — MERGE / REFINE / NO NEW CONSTRUCT."
            : "Do not expand the architecture by default. If existing vocabulary already expresses the behavior — MERGE / REFINE / NO NEW CONSTRUCT."}
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {closFrontiers.map((item) => (
            <li key={t(item.name, "en")}>
              <button
                type="button"
                onClick={() =>
                  show({ title: t(item.name, lang), body: t(item.status, lang) })
                }
                className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-left hover:bg-elevated/50"
              >
                <p className="text-sm text-fg">{t(item.name, lang)}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {t(item.status, lang)}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
