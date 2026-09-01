import { useEffect, useState } from "react";
import { Pause, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { closCycle } from "@/lib/atlas-data";

const CX = 160;
const CY = 160;
const R = 118;
const C = 2 * Math.PI * R;

export function ClosCycle() {
  const { lang } = useI18n();
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const stage = closCycle[i];
  const n = closCycle.length;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setI((cur) => (cur + 1) % n);
    }, 2400);
    return () => window.clearInterval(id);
  }, [playing, n]);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
      <div className="relative mx-auto size-[280px] sm:size-[320px]">
        <svg viewBox="0 0 320 320" className="absolute inset-0 size-full" aria-hidden="true">
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--color-border)" strokeWidth="1" />
          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C - ((i + 1) / n) * C}
            transform={`rotate(-90 ${CX} ${CY})`}
            className="transition-[stroke-dashoffset] duration-500 ease-out"
            opacity="0.7"
          />
          {closCycle.map((s, idx) => {
            const a = (idx / n) * Math.PI * 2 - Math.PI / 2;
            const x = CX + Math.cos(a) * R;
            const y = CY + Math.sin(a) * R;
            const on = idx === i;
            return (
              <circle
                key={s.id}
                cx={x}
                cy={y}
                r={on ? 8 : 5}
                fill={on ? "var(--color-accent)" : "var(--color-elevated)"}
                stroke={on ? "var(--color-accent)" : "var(--color-border)"}
              />
            );
          })}
        </svg>
        {closCycle.map((s, idx) => {
          const a = (idx / n) * Math.PI * 2 - Math.PI / 2;
          const x = ((CX + Math.cos(a) * R) / 320) * 100;
          const y = ((CY + Math.sin(a) * R) / 320) * 100;
          return (
            <button
              key={s.id}
              type="button"
              aria-label={t(s.name, lang)}
              aria-pressed={idx === i}
              onClick={() => {
                setPlaying(false);
                setI(idx);
              }}
              className="absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          );
        })}
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="font-display text-2xl tracking-tight text-fg">{t(stage.name, lang)}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {lang === "ru" ? "жизненный цикл · не control flow" : "life cycle · not a control flow"}
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-tight">{t(stage.name, lang)}</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{t(stage.ask, lang)}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => setPlaying((v) => !v)}>
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            {playing ? (lang === "ru" ? "Пауза" : "Pause") : lang === "ru" ? "Цикл" : "Play"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setPlaying(false);
              setI((cur) => (cur + 1) % n);
            }}
          >
            {lang === "ru" ? "Следующий" : "Next"}
            <ChevronRight className="size-3.5" />
          </Button>
        </div>
        <ol className="mt-6 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {closCycle.map((s, idx) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => {
                  setPlaying(false);
                  setI(idx);
                }}
                className={cn(
                  "w-full min-h-10 rounded-sm border px-2 py-2 text-left text-xs transition-colors duration-150",
                  idx === i ? "border-accent bg-elevated text-fg" : "border-border text-muted hover:text-fg",
                )}
              >
                {t(s.name, lang)}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
