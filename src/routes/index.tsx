import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Constellation } from "@/components/constellation";
import { DistinctionWall } from "@/components/distinction-wall";
import { HumanPurpose } from "@/components/human-purpose";
import { ReadingLayers } from "@/components/reading-layers";
import { SpeakButton } from "@/components/speak-button";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { dontDo, humanLead, humanPromise, humanSpeak, humanTitle, nextInquiry } from "@/lib/atlas-notes";
import { formula, mapCaption, thesis } from "@/lib/atlas-data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="stagger-in max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {lang === "ru" ? "👤 для человека" : "👤 in human terms"}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-fg sm:text-6xl">
          {t(humanTitle, lang)}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t(humanLead, lang)}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg sm:text-lg">{t(humanPromise, lang)}</p>
        <p className="mt-5 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-subtle">
          {lang === "ru" ? "исследовательский тезис · " : "research thesis · "}
          {t(thesis, lang)}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <SpeakButton text={t(humanSpeak, lang)} />
          <Button asChild>
            <Link to="/cognitive-os">
              🚀 Cognitive OS
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/clos">⚗️ CLOS</Link>
          </Button>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "Как это устроено простыми словами" : "How it works in plain words"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Нажмите карточку — внизу появится пояснение, откуда это в архитектуре."
            : "Tap a card — a note appears below, tying this back to the architecture."}
        </p>
        <HumanPurpose />
      </section>

      <section className="mt-14">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl tracking-tight">
              {lang === "ru" ? "🗺️ Экосистема" : "🗺️ Ecosystem"}
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
            ? "Нажмите карточку — внизу появится пояснение и кнопка Altair."
            : "Tap a card — a note and the Altair voice button appear below."}
        </p>
        <DistinctionWall />
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "🚫 Чего сейчас не делать" : "🚫 What not to do now"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Из Ecosystem Map. Нажмите строку, чтобы открыть пояснение."
            : "From the Ecosystem Map. Tap a line to open the note."}
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {dontDo.map((item, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() =>
                  show({
                    title: lang === "ru" ? "Граница" : "Boundary",
                    body: t(item, lang),
                  })
                }
                className="w-full rounded-lg border border-border bg-surface px-4 py-4 text-left text-sm leading-relaxed text-fg hover:bg-elevated/50"
              >
                {t(item, lang)}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-xl border border-border bg-surface px-6 py-8 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {lang === "ru" ? "формула" : "formula"}
        </p>
        <p className="mt-4 max-w-3xl font-display text-2xl leading-snug tracking-tight text-fg sm:text-3xl">
          {t(formula, lang)}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">{t(nextInquiry, lang)}</p>
        <div className="mt-6">
          <SpeakButton text={`${t(formula, lang)} ${t(nextInquiry, lang)}`} />
        </div>
      </section>
    </main>
  );
}
