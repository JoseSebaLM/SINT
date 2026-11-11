import type { CSSProperties } from "react";
import { FileText } from "lucide-react";
import { ejemplos } from "../../content/home";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

/** Ejemplo de Diagnóstico: informe de punto de partida. */
export default function Informe() {
  const { title, subtitle, dimensionsTitle, dimensions, opportunitiesTitle, opportunities } = ejemplos.informe;
  return (
    <div className="mock p-5 sm:p-7">
      <div className="flex items-center gap-3 border-b border-line pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
          <FileText className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-[0.9375rem] font-medium">{title}</p>
          <p className="mt-0.5 text-[0.8125rem] text-ink-3">{subtitle}</p>
        </div>
      </div>

      <p className="mt-5 text-xs font-medium text-ink-3">{dimensionsTitle}</p>
      <ul className="mt-3 space-y-3">
        {/* Nivel en palabras; los tres tramos solo lo refuerzan. */}
        {dimensions.map((d, i) => (
          <li key={d.name} className="flex items-center gap-4 text-sm">
            <span className="w-20 shrink-0">{d.name}</span>
            <span aria-hidden="true" className="grid flex-1 grid-cols-3 gap-1">
              {[0, 1, 2].map((j) =>
                j < d.steps ? (
                  <span key={j} className="seq-bar h-1.5 rounded-full bg-ink" style={v({ "--i": i + j })} />
                ) : (
                  <span key={j} className="h-1.5 rounded-full bg-line" />
                ),
              )}
            </span>
            <span className="w-24 shrink-0 text-right text-[0.8125rem] text-ink-2">{d.level}</span>
          </li>
        ))}
      </ul>

      <p className="mt-7 text-xs font-medium text-ink-3">{opportunitiesTitle}</p>
      <ol className="mt-3 space-y-2" style={v({ "--step": "0.35s" })}>
        {opportunities.map((o, i) => (
          <li
            key={o}
            className="seq flex items-start gap-3 rounded-xl bg-paper px-3.5 py-3 text-sm"
            style={v({ "--i": i + 3 })}
          >
            <span className="mt-px font-mono text-xs text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
            {o}
          </li>
        ))}
      </ol>
    </div>
  );
}
