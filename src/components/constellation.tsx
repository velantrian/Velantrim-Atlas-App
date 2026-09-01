import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { edges, projects, type Project, type ProjectId } from "@/lib/atlas-data";

const W = 1000;
const H = 720;

function pos(p: Project) {
  return { x: (p.x / 100) * W, y: (p.y / 100) * H };
}

export function Constellation() {
  const { lang } = useI18n();
  const [active, setActive] = useState<ProjectId>("cogos");
  const current = projects.find((p) => p.id === active) ?? projects[0];

  const related = useMemo(() => {
    const ids = new Set<ProjectId>([active]);
    for (const e of edges) {
      if (e.from === active) ids.add(e.to);
      if (e.to === active) ids.add(e.from);
    }
    return ids;
  }, [active]);

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.9fr)]">
      <div className="overflow-hidden rounded-xl border border-border bg-surface p-2 sm:p-4">
        <div className="relative hidden md:block" style={{ aspectRatio: `${W} / ${H}` }}>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {edges.map((e) => {
              const a = projects.find((p) => p.id === e.from);
              const b = projects.find((p) => p.id === e.to);
              if (!a || !b) return null;
              const pa = pos(a);
              const pb = pos(b);
              const lit = related.has(e.from) && related.has(e.to);
              return (
                <line
                  key={`${e.from}-${e.to}`}
                  x1={pa.x}
                  y1={pa.y}
                  x2={pb.x}
                  y2={pb.y}
                  className="transition-[stroke,stroke-opacity] duration-250"
                  stroke={lit ? "var(--color-accent)" : "var(--color-border)"}
                  strokeOpacity={lit ? 0.9 : 0.7}
                  strokeWidth={lit ? 1.6 : 1}
                />
              );
            })}
            {projects.map((p) => {
              const { x, y } = pos(p);
              const on = p.id === active;
              return (
                <g key={p.id} transform={`translate(${x} ${y})`}>
                  {on ? (
                    <circle
                      r="26"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeOpacity="0.35"
                      className="node-pulse"
                    />
                  ) : null}
                  <circle
                    r={on ? 10 : 7}
                    fill={on ? "var(--color-accent)" : "var(--color-elevated)"}
                    stroke={on ? "var(--color-accent)" : "var(--color-border)"}
                    strokeWidth="1.5"
                    opacity={related.has(p.id) ? 1 : 0.4}
                  />
                </g>
              );
            })}
          </svg>
          {projects.map((p) => {
            const on = p.id === active;
            const dim = !related.has(p.id);
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(p.id)}
                className={cn(
                  "absolute flex min-h-11 min-w-11 -translate-x-1/2 flex-col items-center pt-3 text-center transition-opacity duration-200",
                  dim ? "opacity-45 hover:opacity-100" : "opacity-100",
                )}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span className="mt-3 text-sm leading-tight text-fg">{t(p.map, lang)}</span>
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {t(p.short, lang)}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2 md:hidden">
          {projects.map((p) => {
            const on = p.id === active;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(p.id)}
                className={cn(
                  "min-h-11 rounded-md border px-3 py-3 text-left transition-colors duration-150",
                  on ? "border-accent bg-elevated" : "border-border bg-bg",
                )}
              >
                <span className="block text-sm text-fg">{t(p.name, lang)}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {t(p.short, lang)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <aside className="flex flex-col rounded-xl border border-border bg-surface p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {t(current.status, lang)}
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-fg">{t(current.name, lang)}</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">{t(current.role, lang)}</p>
        <div className="mt-5 rounded-md border border-border bg-bg px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
            {lang === "ru" ? "Не становится" : "Must not become"}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-fg">{t(current.not, lang)}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {current.id === "cogos" ? (
            <Button size="sm" asChild>
              <Link to="/cognitive-os">{lang === "ru" ? "Плоскости" : "Planes"}</Link>
            </Button>
          ) : null}
          {current.id === "clos" ? (
            <Button size="sm" asChild>
              <Link to="/clos">{lang === "ru" ? "Цикл" : "Cycle"}</Link>
            </Button>
          ) : null}
          {current.github ? (
            <Button variant="outline" size="sm" asChild>
              <a href={current.github} target="_blank" rel="noreferrer">
                GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          ) : null}
          {current.notion ? (
            <Button variant="ghost" size="sm" asChild>
              <a href={current.notion} target="_blank" rel="noreferrer">
                Notion
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
