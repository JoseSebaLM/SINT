import type { ReactNode } from "react";
import { ArrowDownRight, CircleCheck, CircleDot, FileText, Globe } from "lucide-react";
import { AgendaButton, WhatsAppButton } from "../components/ui";
import { hero, servicios, type LineaId } from "../content/home";

const icon = { strokeWidth: 1.75, "aria-hidden": true } as const;

// Viñetas de las tarjetas: decorativas (aria-hidden), su texto vive aquí.
const vignetteBase = "mt-4 hidden h-32 flex-col justify-center rounded-xl bg-paper-2 px-4 sm:flex";

function Barra({ label, width, color = "bg-ink" }: { label: string; width: string; color?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 text-[11px] text-ink-3">{label}</span>
      <span className="h-1.5 flex-1 rounded-full bg-line">
        <span className={`block h-full ${width} rounded-full ${color}`} />
      </span>
    </div>
  );
}

function Anillo({ value }: { value: number }) {
  return (
    <span className="relative flex h-10 w-10 items-center justify-center text-[11px] font-medium">
      <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
        {value < 100 && <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgb(var(--line))" strokeWidth="3" />}
        <circle
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="rgb(var(--ok))"
          strokeWidth="3"
          {...(value < 100 ? { strokeLinecap: "round", strokeDasharray: 100, strokeDashoffset: 100 - value } : {})}
        />
      </svg>
      {value}
    </span>
  );
}

const vignettes: Record<LineaId, ReactNode> = {
  diagnostico: (
    <div aria-hidden="true" className={`${vignetteBase} gap-2.5`}>
      <Barra label="Gobierno" width="w-1/3" />
      <Barra label="Datos" width="w-2/3" />
      <Barra label="Medición" width="w-1/3" color="bg-accent" />
      <Barra label="Formación" width="w-2/3" />
    </div>
  ),
  formacion: (
    <div aria-hidden="true" className={`${vignetteBase} gap-1.5`}>
      <div className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-1.5 text-[11px] text-ink-2">
        <CircleCheck className="h-3.5 w-3.5 text-ink" {...icon} />
        Fundamentos de IA
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-1.5 text-[11px] text-ink-2">
        <CircleCheck className="h-3.5 w-3.5 text-ink" {...icon} />
        Casos de tu área
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-1.5 text-[11px] font-medium text-ink ring-1 ring-accent">
        <CircleDot className="h-3.5 w-3.5 text-accent" {...icon} />
        Práctica con tus datos
      </div>
    </div>
  ),
  agentes: (
    <div aria-hidden="true" className={`${vignetteBase} gap-1.5`}>
      <span className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-ink px-3 py-1.5 text-[11px] leading-snug text-white">
        ¿Me cotizan 40 sillas?
      </span>
      <span className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-surface px-3 py-1.5 text-[11px] leading-snug text-ink">
        Claro. Te envío la cotización.
      </span>
      <span className="flex items-center gap-1.5 self-start rounded-2xl rounded-bl-sm bg-surface px-3 py-1.5 text-[11px] text-ink-2">
        <FileText className="h-3.5 w-3.5 text-accent-ink" {...icon} />
        Cotización.pdf
      </span>
    </div>
  ),
  plataformas: (
    <div aria-hidden="true" className={`${vignetteBase} gap-3`}>
      <div className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-1.5 text-[11px] text-ink-2">
        <Globe className="h-3.5 w-3.5 text-ink" {...icon} />
        <span className="font-mono">tusitio.cl</span>
      </div>
      <div className="flex justify-between px-1">
        <Anillo value={98} />
        <Anillo value={100} />
        <Anillo value={100} />
        <Anillo value={100} />
      </div>
    </div>
  ),
};

export default function Hero() {
  return (
    <section id="inicio" className="container-page pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-16">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 className="h-display mt-4 max-w-[20ch] lg:mt-5">{hero.title}</h1>
      <p className="lead mt-5 max-w-[38rem] lg:mt-6">{hero.lead}</p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-8">
        <AgendaButton />
        <WhatsAppButton />
      </div>

      <ul aria-label={hero.lineasLabel} className="mt-9 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-4 lg:mt-14 lg:grid-cols-4">
        {servicios.lineas.map((linea, i) => (
          <li key={linea.id}>
            <a
              href={`#${linea.id}`}
              className="group flex h-full flex-col rounded-xl border border-line bg-surface p-4 transition-shadow duration-300 hover:shadow-card sm:rounded-2xl sm:p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="index">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-0.5 font-medium tracking-[-0.01em] sm:mt-1 sm:text-xl">{linea.name}</p>
                </div>
                <ArrowDownRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-3 transition-colors group-hover:text-ink" {...icon} />
              </div>
              {vignettes[linea.id]}
              <p className="mt-4 hidden text-sm leading-snug text-ink-2 sm:block">{linea.short}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
