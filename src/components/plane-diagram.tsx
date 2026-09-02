import { useState } from "react";
import { SpeakButton } from "@/components/speak-button";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { planeComment, planeMark, specialistMark } from "@/lib/atlas-notes";
import { cn } from "@/lib/utils";
import { memoryTiers, planes, specialists, type PlaneId } from "@/lib/atlas-data";

export function PlaneDiagram() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);
  const [active, setActive] = useState<PlaneId>("interaction");
  const plane = planes.find((p) => p.id === active)!;

  function select(id: PlaneId) {
    setActive(id);
    const p = planes.find((x) => x.id === id);
    if (!p) return;
    show({
      title: `${planeMark[id]} ${t(p.name, lang)}`,
      body: t(planeComment[id], lang),
    });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
        <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
          👤 {lang === "ru" ? "человек" : "human"}
        </p>
        <Chip>👤 {lang === "ru" ? "Пользователь" : "User"}</Chip>
        <Spine />
        {planes
          .filter((p) => p.id !== "memory")
          .map((p, i) => (
            <div key={p.id}>
              <PlaneNode
                n={String(i + 1).padStart(2, "0")}
                mark={planeMark[p.id]}
                name={t(p.name, lang)}
                question={t(p.question, lang)}
                on={p.id === active}
                onClick={() => select(p.id)}
              />
              {p.id === "control" ? (
                <>
                  <Spine />
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                    {specialists.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => select("capability")}
                        className={cn(
                          "min-h-10 rounded-sm border px-2 py-2 text-center text-xs transition-colors duration-150",
                          active === "capability"
                            ? "border-accent/50 bg-elevated text-fg"
                            : "border-border text-muted hover:text-fg",
                        )}
                      >
                        {specialistMark[s.id]} {t(s.name, lang)}
                      </button>
                    ))}
                  </div>
                </>
              ) : null}
              <Spine />
            </div>
          ))}
        <Chip>❤️ {lang === "ru" ? "Интерпретация → человек" : "Interpretation → human"}</Chip>
        <Spine />
        <button
          type="button"
          aria-pressed={active === "memory"}
          onClick={() => select("memory")}
          className={cn(
            "w-full rounded-lg border px-4 py-4 text-left transition-colors duration-200",
            active === "memory" ? "border-accent bg-elevated" : "border-border bg-bg hover:bg-elevated/50",
          )}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">05</span>
          <span className="mt-1 block font-display text-xl tracking-tight text-fg">💾 Memory</span>
          <span className="mt-3 grid grid-cols-3 gap-2">
            {memoryTiers.map((tier) => (
              <span key={tier.id} className="rounded-sm border border-border bg-surface px-2 py-2">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {tier.id === "hot" ? "🔥" : tier.id === "warm" ? "🌤" : "❄️"} {t(tier.name, lang)}
                </span>
                <span className="mt-1 block text-[11px] leading-snug text-muted">{t(tier.body, lang)}</span>
              </span>
            ))}
          </span>
        </button>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {lang === "ru" ? "плоскость" : "plane"}
            </p>
            <h2 className="font-display text-2xl tracking-tight">
              {planeMark[plane.id]} {t(plane.name, lang)}
            </h2>
          </div>
          <SpeakButton text={`${t(plane.name, lang)}. ${t(planeComment[plane.id], lang)}`} />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted">{t(plane.body, lang)}</p>
        <ul className="mt-5 space-y-2">
          {plane.duties.map((d) => (
            <li key={t(d, lang)} className="flex gap-3 text-sm text-fg">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              {t(d, lang)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Spine() {
  return <div className="mx-auto h-3 w-px bg-border" aria-hidden="true" />;
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-border bg-bg px-4 py-2 text-center text-sm text-muted">
      {children}
    </div>
  );
}

function PlaneNode({
  n,
  mark,
  name,
  question,
  on,
  onClick,
}: {
  n: string;
  mark: string;
  name: string;
  question: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "flex w-full min-h-14 items-center gap-3 rounded-lg border px-4 py-3 text-left transition-[background-color,border-color] duration-200",
        on ? "border-accent bg-elevated" : "border-border bg-bg hover:bg-elevated/50",
      )}
    >
      <span className="font-mono text-xs text-subtle">{n}</span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-lg leading-tight tracking-tight text-fg">
          {mark} {name}
        </span>
        <span className="mt-0.5 block truncate text-xs text-muted">{question}</span>
      </span>
    </button>
  );
}
