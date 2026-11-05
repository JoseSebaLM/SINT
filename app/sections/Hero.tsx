import { hero } from "../content/home";
import { AgendaButton, WhatsAppButton } from "../components/ui";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[88svh] items-center overflow-hidden px-4 sm:px-6 pt-24 pb-16">
      {/* Fotografía de fondo: versión liviana en celular, más grande en escritorio */}
      <picture className="absolute inset-0 -z-10">
        <source media="(min-width: 768px)" srcSet="/images/hero-1920.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element -- export estático: <picture> sirve un tamaño por pantalla */}
        <img
          src="/images/hero-960.webp"
          alt=""
          width={960}
          height={540}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-[#09090B]/70" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#09090B] to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="rise text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl font-bold tracking-tight text-[#E5E6EB] text-balance">
            {hero.title}
          </h1>
          <p className="rise mt-5 max-w-2xl text-lg md:text-xl text-[#C9CBD2]" style={{ animationDelay: "0.1s" }}>
            {hero.lead}
          </p>

          <ul className="rise mt-6 flex flex-wrap gap-2" style={{ animationDelay: "0.15s" }} aria-label="Capacidades">
            {hero.capabilities.map((c) => (
              <li
                key={c}
                className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-xs text-[#E5E6EB] backdrop-blur-sm"
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="rise mt-8 flex flex-col sm:flex-row gap-3" style={{ animationDelay: "0.2s" }}>
            <AgendaButton />
            <WhatsAppButton className="bg-black/30 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
