import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", ru: "Экосистема", en: "Ecosystem" },
  { to: "/cognitive-os", ru: "Cognitive OS", en: "Cognitive OS" },
  { to: "/clos", ru: "CLOS", en: "CLOS" },
  { to: "/routing", ru: "Маршрутизация", en: "Routing" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="atlas-grid min-h-dvh">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid size-8 place-items-center rounded-sm border border-accent/40 bg-elevated">
              <span className="block size-2.5 rotate-45 bg-accent" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-lg leading-none tracking-tight text-fg">
                Velantrim
              </span>
              <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Atlas
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 md:flex">
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

          <div className="ml-auto flex items-center gap-1 md:ml-2">
            <Button
              variant={lang === "ru" ? "outline" : "ghost"}
              size="sm"
              aria-pressed={lang === "ru"}
              onClick={() => setLang("ru")}
            >
              RU
            </Button>
            <Button
              variant={lang === "en" ? "outline" : "ghost"}
              size="sm"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </Button>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:hidden">
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
              ? "Исследовательский атлас. Не Canon, не runtime, не authorization. Источники — GitHub velantrian и Notion Knowledge Atlas."
              : "A research atlas. Not Canon, not runtime, not authorization. Sources — GitHub velantrian and the Notion Knowledge Atlas."}
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
    </div>
  );
}
