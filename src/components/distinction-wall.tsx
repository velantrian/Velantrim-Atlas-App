import { useState } from "react";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { distinctionComment } from "@/lib/atlas-notes";
import { cn } from "@/lib/utils";
import { distinctions } from "@/lib/atlas-data";

export function DistinctionWall() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {distinctions.map((d, idx) => {
        const on = open === idx;
        return (
          <button
            key={t(d.left, "en") + t(d.right, "en")}
            type="button"
            onClick={() => {
              setOpen(on ? null : idx);
              show({
                title: `${t(d.left, lang)} ≠ ${t(d.right, lang)}`,
                body: t(distinctionComment[idx] ?? d.note, lang),
              });
            }}
            className={cn(
              "min-h-24 rounded-lg border px-4 py-4 text-left transition-[background-color,border-color] duration-200",
              on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50",
            )}
          >
            <p className="font-display text-xl tracking-tight text-fg">
              {t(d.left, lang)}
              <span className="mx-2 text-accent">≠</span>
              {t(d.right, lang)}
            </p>
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed text-muted transition-[opacity,transform] duration-200",
                on ? "translate-y-0 opacity-100" : "pointer-events-none h-0 overflow-hidden opacity-0",
              )}
            >
              {t(d.note, lang)}
            </p>
          </button>
        );
      })}
    </div>
  );
}
