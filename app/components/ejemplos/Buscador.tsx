import type { CSSProperties } from "react";
import { Globe, Sparkles } from "lucide-react";
import { ejemplos } from "../../content/home";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

/** Barra gris que representa un dato propio de cada organización; el lector de pantalla oye el texto. */
function Dato({ width, text }: { width: string; text: string }) {
  return (
    <>
      <span aria-hidden="true" className={`inline-block h-2.5 ${width} rounded-full bg-line align-middle`} />{" "}
      <span className="sr-only">{text}</span>
    </>
  );
}

/** Ejemplo de Plataformas: tu sitio, bien descrito por un asistente de IA. No imita a ningún asistente real. */
export default function Buscador() {
  const { organization, answerTitle, source, scoresTitle, scores } = ejemplos.buscador;
  return (
    <div className="mock p-5 sm:p-7">
      <div className="flex justify-end">
        <p className="seq max-w-[85%] rounded-2xl rounded-br-md bg-paper-2 px-4 py-2.5 text-sm" style={v({ "--i": 0 })}>
          ¿Qué hace <span className="font-medium">{organization}</span>?
        </p>
      </div>

      <div className="seq mt-5 flex gap-3" style={v({ "--i": 1 })}>
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink"
        >
          <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-ink-3">{answerTitle}</p>
          <p className="mt-2 text-sm leading-[1.9]">
            <span className="font-medium">{organization}</span> es una empresa chilena que ofrece{" "}
            <Dato width="w-24" text="sus servicios" /> a <Dato width="w-16" text="sus clientes" /> en todo el país. Atiende
            por <Dato width="w-20" text="sus canales" /> y mantiene su información al día.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-2.5 py-1 text-xs text-ink-2">
            <Globe className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            Fuente: <span className="font-mono">{source}</span>
          </p>
        </div>
      </div>

      <p className="mt-7 border-t border-line pt-5 text-xs font-medium text-ink-3">{scoresTitle}</p>
      <ul className="mt-4 grid grid-cols-2 gap-x-2 gap-y-5 text-center sm:grid-cols-4">
        {scores.map((s, i) => {
          // r = 15.915: la circunferencia mide 100, así dashoffset = 100 − puntaje.
          const off = 100 - s.value;
          return (
            <li key={s.label}>
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center text-[0.9375rem] font-medium sm:h-16 sm:w-16 sm:text-base">
                <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden="true">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgb(var(--line))" strokeWidth="2.5" />
                  <circle
                    className="seq-ring"
                    style={v({ "--i": i + 2, "--off": off })}
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="rgb(var(--ok))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="100"
                    strokeDashoffset={off}
                  />
                </svg>
                {s.value}
              </span>
              <span className="mt-2 block text-xs leading-tight text-ink-2">{s.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
