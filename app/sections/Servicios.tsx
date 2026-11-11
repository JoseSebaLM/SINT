import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader, Stage } from "../components/ui";
import Informe from "../components/ejemplos/Informe";
import Programa from "../components/ejemplos/Programa";
import Conversacion from "../components/ejemplos/Conversacion";
import Buscador from "../components/ejemplos/Buscador";
import { ejemplos, links, servicios, type LineaId } from "../content/home";

// Un ejemplo por línea. Si una línea no tiene, su texto ocupa todo el ancho.
const examples: Partial<Record<LineaId, { label: string; node: ReactNode }>> = {
  diagnostico: { label: ejemplos.informe.label, node: <Informe /> },
  formacion: { label: ejemplos.programa.label, node: <Programa /> },
  agentes: { label: ejemplos.conversacion.label, node: <Conversacion /> },
  plataformas: { label: ejemplos.buscador.label, node: <Buscador /> },
};

export default function Servicios() {
  const { lineas } = servicios;
  return (
    <section id="servicios" className="container-page pt-20 md:pt-28 lg:pt-32">
      <SectionHeader eyebrow={servicios.eyebrow} title={servicios.title} intro={servicios.intro} />

      <div className="mt-12 md:mt-16">
        {lineas.map((linea, i) => {
          const example = examples[linea.id];
          const last = i === lineas.length - 1;
          return (
            <article
              key={linea.id}
              id={linea.id}
              aria-labelledby={`${linea.id}-titulo`}
              className={`grid gap-10 ${last ? "border-y" : "border-t"} border-line py-12 lg:grid-cols-12 lg:gap-12 lg:py-20`}
            >
              <div className={example ? "lg:col-span-5" : "max-w-2xl lg:col-span-12"}>
                <p className="index">{String(i + 1).padStart(2, "0")}</p>
                <h3 id={`${linea.id}-titulo`} className="h-line mt-2">
                  {linea.name}
                </h3>
                <p className="mt-3 text-lg text-ink-2">{linea.phrase}</p>

                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {linea.services.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex gap-4 py-5">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      <div>
                        <h4 className="font-medium">{title}</h4>
                        <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {"note" in linea && linea.note && <p className="mt-5 text-sm leading-relaxed text-ink-3">{linea.note}</p>}
                <a
                  href={links.agenda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`link-arrow ${"note" in linea && linea.note ? "mt-6" : "mt-7"}`}
                >
                  {linea.cta} <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </div>

              {example && (
                <Stage label={example.label} className="lg:sticky lg:top-24 lg:col-span-7 lg:self-start">
                  {example.node}
                </Stage>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
