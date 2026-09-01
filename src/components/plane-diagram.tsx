import { useState } from "react";
import { Brain, Compass, Database, Heart, ShieldCheck } from "lucide-react";
import { t, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { memoryTiers, planes, specialists, type PlaneId } from "@/lib/atlas-data";

const icons = {
  interaction: Heart,
  control: Compass,
  capability: Brain,
  assurance: ShieldCheck,
  memory: Database,
};

export function PlaneDiagram() {
  const { lang } = useI18n();
  const [active, setActive] = useState<PlaneId>("interaction");
  const plane = planes.find((p) => p.id === active)!;
  const Icon = icons[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
        <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
          {lang === "ru" ? "человек" : "human"}
        </p>
        <Chip>{lang === "ru" ? "Пользователь" : "User"}</Chip>
        <Spine />
        {planes
          .filter((p) => p.id !== "memory")
          .map((p, i) => (
            <div key={p.id}>
              <PlaneNode
                n={String(i + 1).padStart(2, "0")}
                name={t(p.name, lang)}
                question={t(p.question, lang)}
                on={p.id === active}
                onClick={() => setActive(p.id)}
              />
              {p.id === "control" ? (
                <>
                  <Spine />
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                    {specialists.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActive("capability")}
                        className={cn(
                          "min-h-10 rounded-sm border px-2 py-2 text-center text-xs transition-colors duration-150",
                          active === "capability"
                            ? "border-accent/50 bg-elevated text-fg"
                            : "border-border text-muted hover:text-fg",
                        )}
                      >
                        {t(s.name, lang)}
                      </button>
                    ))}
                  </div>
                </>
              ) : null}
              <Spine />
            </div>
          ))}
        <Chip>{lang === "ru" ? "Интерпретация → человек" : "Interpretation → human"}</Chip>
        <Spine />
        <button
          type="button"
          aria-pressed={active === "memory"}
          onClick={() => setActive("memory")}
          className={cn(
            "w-full rounded-lg border px-4 py-4 text-left transition-colors duration-200",
            active === "memory" ? "border-accent bg-elevated" : "border-border bg-bg hover:bg-elevated/50",
          )}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">05</span>
          <span className="mt-1 block font-display text-xl tracking-tight text-fg">
            {lang === "ru" ? "Memory" : "Memory"}
          </span>
          <span className="mt-3 grid grid-cols-3 gap-2">
            {memoryTiers.map((tier) => (
              <span key={tier.id} className="rounded-sm border border-border bg-surface px-2 py-2">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {t(tier.name, lang)}
                </span>
                <span className="mt-1 block text-[11px] leading-snug text-muted">{t(tier.body, lang)}</span>
              </span>
            ))}
          </span>
        </button>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md border border-accent/40 text-accent">
            <Icon className="size-5" strokeWidth={1.75} />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {lang === "ru" ? "плоскость" : "plane"}
            </p>
            <h2 className="font-display text-2xl tracking-tight">{t(plane.name, lang)}</h2>
          </div>
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
  name,
  question,
  on,
  onClick,
}: {
  n: string;
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
        <span className="block font-display text-lg leading-tight tracking-tight text-fg">{name}</span>
        <span className="mt-0.5 block truncate text-xs text-muted">{question}</span>
      </span>
    </button>
  );
}
