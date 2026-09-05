import { createFileRoute } from "@tanstack/react-router";
import { AtlasDomainRouting } from "@/components/atlas-domain-routing";
import { DualPolicy } from "@/components/dual-policy";
import { RoutingLab } from "@/components/routing-lab";
import { SpeakButton } from "@/components/speak-button";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { admissionSteps } from "@/lib/atlas-data";

export const Route = createFileRoute("/routing")({ component: RoutingPage });

function RoutingPage() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {lang === "ru" ? "🧭 два разных routing plane" : "🧭 two different routing planes"}
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
        {lang === "ru" ? "Куда смотреть ≠ кто должен думать" : "Where to look ≠ who should think"}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
        {lang === "ru"
          ? "Atlas domain routing выбирает следующий owning source/domain для проверки. Cognitive OS routing выбирает роль, усилие, стратегию и verifier. Эти плоскости связаны навигацией, но не являются одним механизмом."
          : "Atlas domain routing selects the next owning source/domain to inspect. Cognitive OS routing selects role, effort, strategy, and verifier. These planes are related by navigation but are not one mechanism."}
      </p>
      <div className="mt-6">
        <SpeakButton
          text={
            lang === "ru"
              ? "Atlas отвечает, куда идти за domain truth. Cognitive OS отвечает, какая вычислительная конфигурация должна думать. Route не выдаёт authority."
              : "Atlas answers where to go for domain truth. Cognitive OS answers which compute configuration should think. A route does not grant authority."
          }
        />
      </div>

      <section className="mt-10">
        <AtlasDomainRouting />
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {lang === "ru" ? "🚀 Cognitive OS model / execution policy" : "🚀 Cognitive OS model / execution policy"}
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {lang === "ru" ? "Кто должен думать" : "Who should think"}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {lang === "ru"
            ? "Роутер Cognitive OS выбирает роль, усилие, стратегию и верификатор — не просто имя модели. Это демонстрация политики, не production runtime."
            : "Cognitive OS routing chooses role, effort, strategy, and verifier — not merely a model name. This is a policy demonstration, not a production runtime."}
        </p>
        <div className="mt-6">
          <SpeakButton
            text={
              lang === "ru"
                ? "Роутер выбирает не имя модели, а конфигурацию: роль, семейство, усилие, стратегия, верификатор, privacy, бюджет."
                : "The router chooses a configuration, not a model name: role, family, effort, strategy, verifier, privacy, budget."
            }
          />
        </div>

        <div className="mt-10">
          <RoutingLab />
        </div>
      </section>

      <section className="mt-14">
        <DualPolicy />
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          {lang === "ru" ? "🛡️ Authority между доменами" : "🛡️ Cross-domain authority"}
        </h2>
        <p className="mt-2 mb-6 max-w-xl text-sm text-muted">
          {lang === "ru"
            ? "Источник не выдаёт себе полномочия целевого домена. Candidate ≠ permission."
            : "A source cannot grant itself the target domain’s authority. Candidate ≠ permission."}
        </p>
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((step, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() =>
                  show({
                    title: `${String(idx + 1).padStart(2, "0")} · ${t(step, lang)}`,
                    body:
                      lang === "ru"
                        ? "Admission не повышает authority. DENY даёт Decision Receipt. ALLOW даёт CapabilityLease на bounded operation, затем ConsumptionReceipt."
                        : "Admission does not raise authority. DENY yields a Decision Receipt. ALLOW yields a CapabilityLease for a bounded operation, then a ConsumptionReceipt.",
                  })
                }
                className="w-full rounded-md border border-border bg-surface px-4 py-4 text-left hover:bg-elevated/50"
              >
                <span className="font-mono text-[10px] text-subtle">{String(idx + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm text-fg">{t(step, lang)}</p>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
