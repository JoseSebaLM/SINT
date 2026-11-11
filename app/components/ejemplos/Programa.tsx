import type { CSSProperties } from "react";
import { Briefcase, Check, Users } from "lucide-react";
import { ejemplos } from "../../content/home";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;
const tagIcons = [Users, Briefcase];

/** Ejemplo de Formación: programa de un taller. Sin horas ni fechas. */
export default function Programa() {
  const { kind, title, badge, modules, tags } = ejemplos.programa;
  return (
    <div className="mock p-5 sm:p-7">
      <div className="border-b border-line pb-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[0.8125rem] text-ink-3">{kind}</p>
          <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-ink">{badge}</span>
        </div>
        <p className="mt-1.5 text-[1.0625rem] font-medium leading-tight tracking-[-0.01em]">{title}</p>
      </div>

      <ol className="mt-2 divide-y divide-line" style={v({ "--step": "0.3s" })}>
        {modules.map((m, i) => (
          <li key={m.title} className="seq flex items-center gap-3.5 py-3.5" style={v({ "--i": i })}>
            {m.state === "done" && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              </span>
            )}
            {m.state === "current" && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-accent font-mono text-xs text-accent-ink">
                {i + 1}
              </span>
            )}
            {m.state === "next" && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-2 font-mono text-xs text-ink-3">
                {i + 1}
              </span>
            )}
            <div className="text-sm leading-snug">
              <p className="font-medium">{m.title}</p>
              <p className="mt-0.5 text-[0.8125rem] text-ink-3">{m.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-2 flex flex-wrap gap-2 border-t border-line pt-4 text-xs text-ink-2">
        {tags.map((t, i) => {
          const Icon = tagIcons[i] ?? Users;
          return (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1">
              <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}
