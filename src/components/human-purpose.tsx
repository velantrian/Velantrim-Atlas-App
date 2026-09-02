import { useState } from "react";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { purposePoints } from "@/lib/atlas-notes";
import { cn } from "@/lib/utils";

export function HumanPurpose() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {purposePoints.map((item, idx) => {
        const on = open === idx;
        return (
          <li key={t(item.name, "en")}>
            <button
              type="button"
              aria-pressed={on}
              onClick={() => {
                setOpen(on ? null : idx);
                show({
                  title: `${item.mark} ${t(item.name, lang)}`,
                  body: t(item.body, lang),
                });
              }}
              className={cn(
                "flex min-h-28 w-full flex-col rounded-lg border px-4 py-4 text-left transition-colors duration-150",
                on ? "border-accent bg-elevated" : "border-border bg-surface hover:bg-elevated/50",
              )}
            >
              <span className="font-display text-lg tracking-tight text-fg">
                {item.mark} {t(item.name, lang)}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-muted">{t(item.short, lang)}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
