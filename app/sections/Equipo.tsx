import Image from "next/image";
import { equipo } from "../content/home";
import { SectionHeader } from "../components/ui";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Equipo() {
  return (
    <section id="equipo" className="px-4 sm:px-6 py-20 md:py-28 bg-white/[0.015] border-y border-white/[0.06]">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={equipo.eyebrow} title={equipo.title} />

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {equipo.members.map((m) => (
            <li key={m.name} className="flex flex-col gap-5 rounded-xl border border-white/[0.08] bg-[#09090B] p-6 sm:flex-row sm:gap-6 md:p-8">
              <Image
                src={m.photo}
                alt={`Fotografía de ${m.name}`}
                width={112}
                height={112}
                loading="lazy"
                className="h-24 w-24 shrink-0 rounded-full border border-white/10 object-cover sm:h-28 sm:w-28"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-[#E5E6EB]">{m.name}</h3>
                <p className="text-sm font-medium text-[#FF6B4A]">{m.role}</p>
                <p className="mt-1 text-sm text-[#8A8F98]">{m.education}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#C9CBD2]">{m.bio}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 self-start text-sm text-[#8A8F98] hover:text-[#E5E6EB] transition-colors"
                  >
                    <LinkedInIcon />
                    LinkedIn<span className="sr-only"> de {m.name}</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
