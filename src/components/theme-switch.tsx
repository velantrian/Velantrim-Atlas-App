import { FlaskConical, Frame, Gem, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { themes, useTheme, type ThemeId } from "@/lib/theme";
import { cn } from "@/lib/utils";

const icons: Record<ThemeId, typeof Sun> = {
  lab: FlaskConical,
  paper: Sun,
  crystal: Gem,
  desk: Frame,
};

export function ThemeSwitch() {
  const { lang } = useI18n();
  const theme = useTheme((s) => s.theme);
  const setTheme = useTheme((s) => s.setTheme);

  return (
    <div className="flex shrink-0 items-center gap-0.5 rounded-md border border-border bg-bg p-0.5">
      {themes.map((item) => {
        const Icon = icons[item.id];
        const on = theme === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={on}
            title={lang === "ru" ? item.ru : item.en}
            onClick={() => setTheme(item.id)}
            className={cn(
              "grid size-8 place-items-center rounded-sm transition-colors duration-150 sm:size-9",
              on ? "bg-elevated text-fg" : "text-muted hover:text-fg",
            )}
          >
            <Icon className="size-4" strokeWidth={1.75} />
            <span className="sr-only">{lang === "ru" ? item.ru : item.en}</span>
          </button>
        );
      })}
    </div>
  );
}
