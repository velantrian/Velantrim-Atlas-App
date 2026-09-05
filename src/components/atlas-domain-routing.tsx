import { AlertTriangle, ArrowRight } from "lucide-react";
import { t, type Copy, useI18n } from "@/lib/i18n";
import { atlasRoutingContract } from "@/lib/atlas-routing-contract";

const destinationMark: Record<string, string> = {
  "unified-cognitive-architecture": "🧠",
  "mentaury-soul": "🌀",
  crystal: "💠",
  "native-kernel": "🧬",
  "mentaury-kernel": "🪁",
  titan: "🗿",
  continuum: "🌎",
  "cognitive-os": "🚀",
  clos: "⚗️",
  "system-os": "🧭",
};

const routeTitle: Record<string, Copy> = {
  "substrate-neutral-cognition": {
    ru: "Общая / субстрат-нейтральная cognition",
    en: "General / substrate-neutral cognition",
  },
  "soul-owner-domain": {
    ru: "Beliefs, identity, relationships, commitments",
    en: "Beliefs, identity, relationships, commitments",
  },
  "trusted-memory-evidence": { ru: "Память, evidence, provenance", en: "Memory, evidence, provenance" },
  "semantic-invariants": { ru: "Семантические инварианты", en: "Semantic invariants" },
  "cross-domain-composition": { ru: "Композиция между доменами", en: "Cross-domain composition" },
  "orchestration-execution": { ru: "Оркестрация и bounded execution", en: "Orchestration and bounded execution" },
  "process-continuity": { ru: "Непрерывность процесса", en: "Process continuity" },
  "model-reasoning-routing": { ru: "Модели, reasoning и assurance", en: "Models, reasoning, and assurance" },
  "cognitive-life-research-blueprint": { ru: "CLOS research blueprint", en: "CLOS research blueprint" },
  "ecosystem-system-orientation": { ru: "Системная ориентация", en: "System orientation" },
};

export function AtlasDomainRouting() {
  const { lang } = useI18n();

  if (!atlasRoutingContract.ok) {
    return (
      <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-fg" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {lang === "ru" ? "контракт недоступен" : "contract unavailable"}
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-fg">
              {lang === "ru" ? "Atlas не выбирает маршрут" : "Atlas does not select a route"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {lang === "ru"
                ? "Machine-readable routing contract не прошёл локальную проверку. UI fail-closed: никакой default owner не подставляется."
                : "The machine-readable routing contract failed local validation. The UI fails closed: no default owner is substituted."}
            </p>
            <ul className="mt-4 space-y-1 font-mono text-[11px] text-subtle">
              {atlasRoutingContract.errors.map((error) => (
                <li key={error}>• {error}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  const ambiguity = atlasRoutingContract.ambiguityCases[0];

  return (
    <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {lang === "ru" ? "🗺️ Atlas domain/source routing" : "🗺️ Atlas domain/source routing"}
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-fg">
            {lang === "ru" ? "Куда идти за ответом" : "Where to go for the answer"}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {lang === "ru"
              ? "Это read-only проекция atlas/routes.json. Она выбирает следующий owning source/domain для проверки — не валидирует claim, не выдаёт permission и не исполняет действие."
              : "This is a read-only projection of atlas/routes.json. It selects the next owning source/domain to inspect; it does not validate a claim, grant permission, or execute an action."}
          </p>
        </div>
        <div className="shrink-0 rounded-md border border-border bg-bg px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
          v{atlasRoutingContract.schemaVersion} · {atlasRoutingContract.status}
        </div>
      </div>

      <div className="mt-6 rounded-md border border-border bg-bg px-4 py-3 font-mono text-[11px] leading-relaxed text-fg">
        ATLAS DOMAIN ROUTING ≠ COGNITIVE OS MODEL / EXECUTION ROUTING
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {atlasRoutingContract.routes.map((route) => {
          const project = atlasRoutingContract.projectById[route.destination];
          const title = routeTitle[route.id] ?? { ru: route.id, en: route.id };
          return (
            <article key={route.id} className="rounded-lg border border-border bg-bg p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{t(title, lang)}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-fg">
                <ArrowRight className="size-4 shrink-0 text-subtle" />
                <span className="text-base">{destinationMark[route.destination] ?? "🧭"}</span>
                <span className="font-medium">{project?.name ?? route.destination}</span>
              </div>
              {project ? <p className="mt-2 text-xs leading-relaxed text-muted">{project.kind}</p> : null}
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                {lang === "ru" ? "contract intents" : "contract intents"}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{route.intents.slice(0, 3).join(" · ")}</p>
              {route.negative_boundary?.[0] ? (
                <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-fg">
                  ≠ {route.negative_boundary[0]}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>

      {ambiguity ? (
        <div className="mt-6 rounded-lg border border-border bg-elevated/40 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {lang === "ru" ? "неоднозначный случай" : "ambiguity case"}
          </p>
          <p className="mt-2 text-sm font-medium text-fg">“{ambiguity.query_shape}” → DISAMBIGUATE</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {lang === "ru"
              ? "Общая функциональная cognition → Unified Cognitive System Architecture. Beliefs / identity / relationships / commitments / owner-local cognition state → Mentaury Soul."
              : ambiguity.rule}
          </p>
        </div>
      ) : null}

      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
        authority ceiling: {atlasRoutingContract.authority}
      </p>
    </section>
  );
}
