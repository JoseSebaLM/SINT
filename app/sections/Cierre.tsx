import { Mail, MessageCircle } from "lucide-react";
import { AgendaButton, WhatsAppButton } from "../components/ui";
import { cierre, links } from "../content/home";

const linkClass = "inline-flex items-center gap-2 transition-colors hover:text-on-night";

export default function Cierre() {
  return (
    <section id="contacto" className="night px-2 sm:px-4">
      <div className="mx-auto max-w-[90rem] rounded-[1.75rem] bg-ink text-on-night sm:rounded-[2rem]">
        <div className="container-page py-16 md:py-24 lg:py-28">
          <h2 className="max-w-[16ch] text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.035em] md:text-[3.75rem]">
            {cierre.title}
          </h2>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-on-night-2 md:text-xl md:leading-relaxed">
            {cierre.text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <AgendaButton variant="accent" />
            <WhatsAppButton variant="night" />
          </div>

          <ul className="mt-12 flex flex-col gap-3 border-t border-line-night pt-6 text-[0.9375rem] text-on-night-2 sm:flex-row sm:gap-10 md:mt-16">
            <li>
              <a href={`mailto:${links.email}`} className={linkClass}>
                <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                {cierre.contact.email}
              </a>
            </li>
            <li>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                {cierre.contact.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
