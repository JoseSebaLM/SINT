import { diagnostico } from "../content/home";
import { AgendaButton, SectionHeader } from "../components/ui";
import InformeEjemplo from "../components/ejemplos/Informe";

export default function Diagnostico() {
  const { eyebrow, title, intro, stagesTitle, stages, deliverablesTitle, deliverables } = diagnostico;

  return (
    <section id="diagnostico" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8F98]">{stagesTitle}</h3>
            <ol className="mt-5 grid gap-4 sm:grid-cols-3">
              {stages.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between">
                    <Icon size={20} className="text-[#FF6B4A]" aria-hidden="true" />
                    <span className="font-mono text-xs text-[#8A8F98]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-4 font-semibold text-[#E5E6EB]">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#8A8F98]">{text}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-12 font-mono text-xs uppercase tracking-widest text-[#8A8F98]">{deliverablesTitle}</h3>
            <ul className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {deliverables.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B4A]/10 text-[#FF6B4A]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#E5E6EB]">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#8A8F98]">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <AgendaButton className="mt-10 w-full sm:w-auto" />
          </div>

          <div className="lg:pt-9">
            <InformeEjemplo />
          </div>
        </div>
      </div>
    </section>
  );
}
