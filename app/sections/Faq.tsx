import { Plus } from "lucide-react";
import { faq } from "../content/home";
import { SectionHeader } from "../components/ui";

// Plegadas con <details>: sin JavaScript y con el texto completo en el HTML para los buscadores.
export default function Faq() {
  return (
    <section id="preguntas" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faq.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-[#E5E6EB] hover:text-white">
                <h3>{item.q}</h3>
                <Plus size={20} className="faq-icon shrink-0 text-[#FF6B4A] transition-transform" aria-hidden="true" />
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-[#8A8F98]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
