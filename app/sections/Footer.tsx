import Logo from "../components/Logo";
import { links, nav, site } from "../content/home";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-4 sm:px-6 pt-14 pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="text-xl">
            <Logo animated={false} />
          </p>
          <p className="mt-2 font-semibold text-[#E5E6EB]">{site.fullName}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#8A8F98]">{site.canon}</p>
          <p className="mt-3 text-sm text-[#8A8F98]">{site.city}</p>
        </div>

        <nav aria-label="Secciones">
          <p className="font-mono text-xs uppercase tracking-widest text-[#8A8F98]">Secciones</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...nav, { label: "Preguntas frecuentes", href: "#preguntas" }].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[#C9CBD2] hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#8A8F98]">Contacto</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={links.agenda} target="_blank" rel="noopener noreferrer" className="text-[#C9CBD2] hover:text-white">
                Agenda una conversación
              </a>
            </li>
            <li>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#C9CBD2] hover:text-white">
                WhatsApp · {links.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${links.email}`} className="text-[#C9CBD2] hover:text-white">
                {links.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-white/[0.06] pt-6 text-xs text-[#8A8F98]">© 2026 Sint.</p>
    </footer>
  );
}
