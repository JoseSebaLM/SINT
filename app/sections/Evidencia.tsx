import { ArrowUpRight } from "lucide-react";
import { evidencia } from "../content/home";

export default function Evidencia() {
  const { eyebrow, context, main, support, source } = evidencia;
  return (
    <section aria-labelledby="evidencia-titulo" className="night px-2 sm:px-4">
      <div className="mx-auto max-w-[90rem] rounded-[1.75rem] bg-ink text-on-night sm:rounded-[2rem]">
        <div className="container-page py-14 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="text-sm font-medium text-on-night-2">{eyebrow}</p>
              <p className="mt-5 max-w-md text-lg leading-snug text-on-night-2 md:text-xl">{context}</p>
              <h2 id="evidencia-titulo" className="mt-4">
                <span className="block text-[4.5rem] font-semibold leading-none tracking-[-0.045em] text-accent md:text-[7rem]">
                  {main.value}
                </span>
                <span className="mt-2 block text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] md:text-[2.5rem]">
                  {main.text}
                </span>
              </h2>
              {/* 9 de 100: la barra refuerza la cifra */}
              <div aria-hidden="true" className="mt-8 h-1.5 max-w-md rounded-full bg-line-night">
                <div className="h-full w-[9%] rounded-full bg-accent" />
              </div>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7 lg:self-end">
              {support.map((s, i) => (
                <li
                  key={s.value}
                  className={`flex items-baseline gap-5 ${i === support.length - 1 ? "border-y" : "border-t"} border-line-night py-5 md:gap-8 md:py-6`}
                >
                  <span className="w-[4.5rem] shrink-0 text-[2rem] font-semibold leading-none tracking-[-0.03em] md:w-24 md:text-[2.5rem]">
                    {s.value}
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-on-night-2 md:text-base">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-[0.8125rem] leading-relaxed text-on-night-2 md:mt-14">
            Fuente:{" "}
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line-night underline-offset-4 transition-colors hover:text-on-night"
            >
              {source.label}
              <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5 align-[-2px]" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
