import { X } from "lucide-react";
import { SpeakButton } from "@/components/speak-button";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";

export function InsightDock() {
  const { lang } = useI18n();
  const current = useInsight((s) => s.current);
  const clear = useInsight((s) => s.clear);

  if (!current) return null;

  const speech = `${current.title}. ${current.body}`;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6">
      <aside className="pointer-events-auto mx-auto max-w-6xl rounded-xl border border-border bg-surface/95 p-4 shadow-lg backdrop-blur-md">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {lang === "ru" ? "пояснение" : "note"}
            </p>
            <h2 className="mt-1 font-display text-xl tracking-tight text-fg">{current.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{current.body}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1 self-end sm:self-start">
            <SpeakButton key={speech} text={speech} />
            <Button type="button" variant="ghost" size="icon" onClick={clear} aria-label="Close">
              <X className="size-4" />
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
