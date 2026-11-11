import Logo from "../components/Logo";
import { SinOfuscar } from "../components/ui";
import { cta, footer, links, nav, site } from "../content/home";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;
const linkClass = "text-ink-2 transition-colors hover:text-ink";

export default function Footer() {
  return (
    <footer className="container-page pb-10 pt-16 md:pt-20">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
          <p className="text-xl">
            <Logo />
          </p>
          <p className="mt-3 font-medium">{site.fullName}</p>
          <p className="mt-1 text-ink-2">{site.tagline}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-3">{site.canon}</p>
          <p className="mt-3 text-sm text-ink-3">{site.city}</p>
        </div>

        <nav aria-label="Secciones" className="md:col-span-3">
          <p className="text-sm font-medium text-ink-3">{footer.sectionsTitle}</p>
          <ul className="mt-4 space-y-3 text-[0.9375rem]">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.href === "#preguntas" ? "Preguntas frecuentes" : l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="text-sm font-medium text-ink-3">{footer.contactTitle}</p>
          <ul className="mt-4 space-y-3 text-[0.9375rem]">
            <li>
              <a href={links.agenda} {...external} className={linkClass}>
                {cta.agenda}
              </a>
            </li>
            <li>
              <a href={links.whatsapp} {...external} className={linkClass}>
                WhatsApp · {links.phone}
              </a>
            </li>
            <li>
              <SinOfuscar>
                <a href={`mailto:${links.email}`} className={linkClass}>
                  {links.email}
                </a>
              </SinOfuscar>
            </li>
            <li>
              <a href={links.linkedinSint} {...external} className={linkClass}>
                {footer.linkedin}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-14 border-t border-line pt-6 text-sm text-ink-3">{footer.copyright}</p>
    </footer>
  );
}
