import { metodo } from "../content/home";
import { SectionHeader } from "../components/ui";

export default function Metodo() {
  return (
    <section id="como-trabajamos" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={metodo.eyebrow} title={metodo.title} />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {metodo.steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="bg-[#09090B] p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#8A8F98]">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-white/[0.08]" aria-hidden="true" />
                <Icon size={20} className="text-[#FF6B4A]" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-semibold text-[#E5E6EB]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8A8F98]">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-xl border border-[#2EB886]/25 bg-[#2EB886]/[0.04] p-6 md:p-8">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#2EB886]">{metodo.guaranteesTitle}</h3>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {metodo.guarantees.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-3">
                <Icon size={20} className="mt-0.5 shrink-0 text-[#2EB886]" aria-hidden="true" />
                <p className="text-[#E5E6EB] leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
