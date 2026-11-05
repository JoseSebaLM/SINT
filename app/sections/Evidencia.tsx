import { ArrowUpRight } from "lucide-react";
import { evidencia } from "../content/home";

export default function Evidencia() {
  const { context, main, support, source } = evidencia;

  return (
    <section aria-labelledby="evidencia-titulo" className="px-4 sm:px-6 py-16 md:py-20 border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1.1fr_1.4fr] md:items-center">
        <div>
          <p className="text-[#8A8F98]">{context}</p>
          <h2 id="evidencia-titulo" className="mt-3 flex flex-wrap items-baseline gap-x-3">
            <span className="text-5xl md:text-6xl font-bold tracking-tight text-[#FF6B4A]">{main.value}</span>
            <span className="text-2xl md:text-3xl font-semibold text-[#E5E6EB]">{main.text}</span>
          </h2>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3">
          {support.map((s) => (
            <li key={s.value} className="rounded-lg border border-white/[0.08] bg-[#09090B] p-5">
              <p className="text-3xl font-bold text-[#E5E6EB]">{s.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#8A8F98]">{s.text}</p>
            </li>
          ))}
        </ul>

        <p className="md:col-span-2 text-xs text-[#8A8F98]">
          Fuente:{" "}
          <a
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/20 underline-offset-4 hover:text-[#E5E6EB]"
          >
            {source.label}
            <ArrowUpRight size={12} className="ml-0.5 inline align-baseline" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
