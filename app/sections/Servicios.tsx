import type { ReactNode } from "react";
import { servicios, type Linea } from "../content/home";
import { SectionHeader } from "../components/ui";
import IntegracionEjemplo from "../components/ejemplos/Integracion";
import ConversacionEjemplo from "../components/ejemplos/Conversacion";

// Cada línea puede ir acompañada de un ejemplo visual.
const examples: Record<string, ReactNode> = {
  sistemas: <IntegracionEjemplo />,
  agentes: <ConversacionEjemplo />,
};

function LineaServicio({ linea, index }: { linea: Linea; index: number }) {
  const example = examples[linea.id];

  return (
    <article id={linea.id} aria-labelledby={`${linea.id}-titulo`} className="border-t border-white/[0.08] pt-10">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
        <span className="font-mono text-sm text-[#FF6B4A]">{String(index + 1).padStart(2, "0")}</span>
        <h3 id={`${linea.id}-titulo`} className="text-2xl md:text-3xl font-bold text-[#E5E6EB]">
          {linea.name}
        </h3>
        <p className="text-[#8A8F98] sm:ml-auto">{linea.phrase}</p>
      </header>

      <div className={`mt-8 grid gap-10 ${example ? "lg:grid-cols-[1.2fr_1fr] lg:gap-14" : ""}`}>
        <ul className={`grid gap-4 sm:grid-cols-2 ${example ? "" : "lg:grid-cols-3"}`}>
          {linea.services.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
              <Icon size={20} className="text-[#FF6B4A]" aria-hidden="true" />
              <h4 className="mt-4 font-semibold text-[#E5E6EB]">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#8A8F98]">{text}</p>
            </li>
          ))}
        </ul>
        {example && <div className="lg:self-start">{example}</div>}
      </div>
    </article>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="px-4 sm:px-6 py-20 md:py-28 bg-white/[0.015] border-y border-white/[0.06]">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={servicios.eyebrow} title={servicios.title} />
        <div className="mt-14 space-y-16">
          {servicios.lineas.map((linea, i) => (
            <LineaServicio key={linea.id} linea={linea} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
