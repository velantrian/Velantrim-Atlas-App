import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ClosCycle } from "@/components/clos-cycle";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { closFrontiers } from "@/lib/atlas-data";

export const Route = createFileRoute("/clos")({ component: ClosPage });

function ClosPage() {
  const { lang } = useI18n();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        Cognitive Life OS
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">CLOS</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        {lang === "ru"
          ? "Не набор модулей и не конкретный AI-стек. Чертёж того, что должно оставаться осмысленным, если заменить LLM, граф, SQLite или провайдера. Архитектура = различия + обязательства + переходы + границы полномочий."
          : "Not a module catalog and not a particular AI stack. A blueprint of what must remain meaningful if you replace the LLM, the graph, SQLite, or the provider. Architecture = distinctions + obligations + transitions + authority boundaries."}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
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

      <section className="mt-10">
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
            <li key={t(item.name, "en")} className="rounded-lg border border-border bg-surface px-4 py-4">
              <p className="text-sm text-fg">{t(item.name, lang)}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {t(item.status, lang)}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
