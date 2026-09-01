import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Constellation } from "@/components/constellation";
import { DistinctionWall } from "@/components/distinction-wall";
import { ReadingLayers } from "@/components/reading-layers";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { formula, mapCaption, thesis, thesisBody } from "@/lib/atlas-data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { lang } = useI18n();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="stagger-in max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {lang === "ru" ? "исследовательский атлас" : "research atlas"}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-fg sm:text-6xl">
          {t(thesis, lang)}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t(thesisBody, lang)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/cognitive-os">
              Cognitive OS
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/clos">CLOS</Link>
          </Button>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl tracking-tight">
              {lang === "ru" ? "Экосистема" : "Ecosystem"}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">{t(mapCaption, lang)}</p>
          </div>
        </div>
        <Constellation />
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "Как читать архитектуру" : "How to read the architecture"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Сверху вниз: от устойчивого смысла к сменяемой реализации. TECHNOLOGY ≠ ARCHITECTURE."
            : "Top down: from durable meaning to replaceable implementation. TECHNOLOGY ≠ ARCHITECTURE."}
        </p>
        <ReadingLayers />
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "Различия, которые нельзя терять" : "Distinctions that must survive"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Нажмите карточку. Это не украшения — это инварианты архитектуры."
            : "Tap a card. These are not slogans — they are architectural invariants."}
        </p>
        <DistinctionWall />
      </section>

      <section className="mt-16 rounded-xl border border-border bg-surface px-6 py-8 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {lang === "ru" ? "формула" : "formula"}
        </p>
        <p className="mt-4 max-w-3xl font-display text-2xl leading-snug tracking-tight text-fg sm:text-3xl">
          {t(formula, lang)}
        </p>
      </section>
    </main>
  );
}
