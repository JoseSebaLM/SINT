import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { equipo } from "../content/home";

export default function Equipo() {
  return (
    <section id="equipo" className="container-page py-20 md:py-28">
      <header className="max-w-3xl">
        <p className="eyebrow">{equipo.eyebrow}</p>
        <h2 className="h-section mt-3">{equipo.title}</h2>
      </header>

      <ul className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-12 lg:gap-20">
        {equipo.members.map((m) => (
          <li key={m.name} className="flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <Image
              src={m.photo}
              alt={`Fotografía de ${m.name}`}
              width={160}
              height={160}
              loading="lazy"
              className="h-28 w-28 shrink-0 rounded-2xl object-cover lg:h-40 lg:w-40"
            />
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">{m.name}</h3>
              <p className="mt-1 text-[0.9375rem] font-medium text-accent-ink">{m.role}</p>
              <p className="mt-0.5 text-[0.9375rem] text-ink-3">{m.education}</p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{m.bio}</p>
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow mt-5">
                  LinkedIn<span className="sr-only"> de {m.name}</span>{" "}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
