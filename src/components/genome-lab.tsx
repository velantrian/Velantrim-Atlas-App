import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { t, useI18n } from "@/lib/i18n";
import { useInsight } from "@/lib/insight";
import { cn } from "@/lib/utils";
import { admitRoles, genomeScenarios, type Admit } from "@/lib/atlas-data";

const verdictCopy: Record<Admit, { ru: string; en: string }> = {
  admit: { ru: "ADMIT", en: "ADMIT" },
  hold: { ru: "HOLD", en: "HOLD" },
  review: { ru: "REVIEW", en: "REVIEW" },
};

export function GenomeLab() {
  const { lang } = useI18n();
  const show = useInsight((s) => s.show);
  const [human, setHuman] = useState(-20);
  const [tech, setTech] = useState(15);
  const roles = useMemo(() => admitRoles(human, tech), [human, tech]);

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Model Genome</p>
      <h2 className="mt-2 font-display text-2xl tracking-tight text-fg">
        {lang === "ru" ? "Допуск по роли, не глобально" : "Admit by role, not globally"}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        {lang === "ru"
          ? "Профиль, не одно место в лидерборде. +15% coding и −20% Interaction Presence: новый Coder — да; новый Human Interface — нет."
          : "A profile, not a leaderboard slot. +15% coding and −20% Interaction Presence: new Coder — yes; new Human Interface — no."}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {genomeScenarios.map((s) => (
          <Button
            key={s.id}
            type="button"
            size="sm"
            variant={human === s.human && tech === s.tech ? "outline" : "ghost"}
            onClick={() => {
              setHuman(s.human);
              setTech(s.tech);
              const next = admitRoles(s.human, s.tech);
              const line = next
                .map((r) => `${t(r.name, lang)}: ${r.verdict}`)
                .join(". ");
              show({ title: t(s.label, lang), body: line });
            }}
          >
            {t(s.label, lang)}
          </Button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Slider
          label={lang === "ru" ? "Human Presence" : "Human Presence"}
          value={human}
          onChange={setHuman}
        />
        <Slider
          label={lang === "ru" ? "Engineering Power" : "Engineering Power"}
          value={tech}
          onChange={setTech}
        />
      </div>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {roles.map((role) => (
          <li
            key={role.id}
            className="flex min-h-11 items-center justify-between gap-3 rounded-md border border-border bg-bg px-4 py-3"
          >
            <span className="text-sm text-fg">{t(role.name, lang)}</span>
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-[0.16em]",
                role.verdict === "admit" && "text-ok",
                role.verdict === "hold" && "text-warn",
                role.verdict === "review" && "text-muted",
              )}
            >
              {t(verdictCopy[role.verdict], lang)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Slider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  const sign = value > 0 ? "+" : "";
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">{label}</span>
        <span className="font-mono text-sm tabular-nums text-fg">
          {sign}
          {value}%
        </span>
      </span>
      <input
        type="range"
        min={-30}
        max={30}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full"
      />
    </label>
  );
}
