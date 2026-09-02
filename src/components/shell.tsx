import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { InsightDock } from "@/components/insight-dock";
import { ThemeSwitch } from "@/components/theme-switch";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", ru: "🗺️ Экосистема", en: "🗺️ Ecosystem" },
  { to: "/cognitive-os", ru: "🚀 Cognitive OS", en: "🚀 Cognitive OS" },
  { to: "/clos", ru: "⚗️ CLOS", en: "⚗️ CLOS" },
  { to: "/routing", ru: "🧭 Маршрутизация", en: "🧭 Routing" },
] as const;

const themeColor: Record<string, string> = {
  lab: "#0b0c0d",
  paper: "#f3eee4",
  crystal: "#071015",
  desk: "#2a2118",
};

export function Shell({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useI18n();
  const theme = useTheme((s) => s.theme);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColor[theme] ?? themeColor.lab);
  }, [theme]);

  return (
    <div data-theme={theme} className="atlas-grid min-h-dvh pb-28">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-3">
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-sm border border-accent/40 bg-elevated">
              <span className="block size-2.5 rotate-45 bg-accent" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-lg leading-none tracking-tight text-fg">
                Velantrim
              </span>
              <span className="mt-0.5 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:block">
                Atlas
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-sm px-3 py-2 text-sm transition-colors duration-150",
                    active ? "bg-elevated text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {lang === "ru" ? item.ru : item.en}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1 lg:ml-2">
            <ThemeSwitch />
            <div className="flex h-8 items-center rounded-md border border-border bg-bg p-0.5 sm:h-9">
              <button
                type="button"
                aria-pressed={lang === "ru"}
                onClick={() => setLang("ru")}
                className={cn(
                  "h-full rounded-sm px-2 text-xs font-medium sm:px-2.5",
                  lang === "ru" ? "bg-elevated text-fg" : "text-muted hover:text-fg",
                )}
              >
                RU
              </button>
              <button
                type="button"
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
                className={cn(
                  "h-full rounded-sm px-2 text-xs font-medium sm:px-2.5",
                  lang === "en" ? "bg-elevated text-fg" : "text-muted hover:text-fg",
                )}
              >
                EN
              </button>
            </div>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-2.5 lg:hidden">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "shrink-0 rounded-sm px-3 py-2 text-sm",
                  active ? "bg-elevated text-fg" : "text-muted",
                )}
              >
                {lang === "ru" ? item.ru : item.en}
              </Link>
            );
          })}
        </nav>
      </header>
      {children}
      <footer className="border-t border-border/80 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            {lang === "ru"
              ? "Исследовательский атлас. Не Canon, не runtime, не authorization. Источники — GitHub velantrian и Notion Knowledge Atlas. Голос: Altair · xAI."
              : "A research atlas. Not Canon, not runtime, not authorization. Sources — GitHub velantrian and the Notion Knowledge Atlas. Voice: Altair · xAI."}
          </p>
          <a
            href="https://github.com/velantrian"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle hover:text-fg"
          >
            github.com/velantrian
          </a>
        </div>
      </footer>
      <InsightDock />
    </div>
  );
}
