import { useState } from "react";
import { t, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { readingLayers } from "@/lib/atlas-data";

export function ReadingLayers() {
  const { lang } = useI18n();
  const [active, setActive] = useState(0);
  const layer = readingLayers[active];

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <ol className="grid gap-2 sm:grid-cols-2">
        {readingLayers.map((item, idx) => {
          const on = idx === active;
          return (
            <li key={item.id}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => setActive(idx)}
                className={cn(
                  "flex min-h-20 w-full flex-col rounded-lg border px-4 py-3 text-left transition-[background-color,border-color] duration-200",
                  on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50",
                )}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {item.n}
                </span>
                <span className="mt-2 font-display text-lg leading-tight tracking-tight text-fg">
                  {t(item.name, lang)}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <aside className="rounded-xl border border-border bg-surface p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {t(layer.owner, lang)}
        </p>
        <h3 className="mt-2 font-display text-2xl tracking-tight text-fg">{t(layer.name, lang)}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t(layer.body, lang)}</p>
      </aside>
    </div>
  );
}
