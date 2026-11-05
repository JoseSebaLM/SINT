import { Mail } from "lucide-react";
import { cierre, links } from "../content/home";
import { AgendaButton, WhatsAppButton, WhatsAppIcon } from "../components/ui";

export default function Cierre() {
  return (
    <section id="contacto" className="px-4 sm:px-6 pb-20 md:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/[0.10] bg-gradient-to-br from-[#FF6B4A]/[0.12] via-white/[0.02] to-[#A371F7]/[0.08] px-6 py-14 md:px-14 md:py-20">
        <h2 className="max-w-2xl text-3xl md:text-5xl font-bold leading-tight text-[#E5E6EB] text-balance">{cierre.title}</h2>
        <p className="mt-4 max-w-xl text-lg text-[#C9CBD2]">{cierre.text}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <AgendaButton />
          <WhatsAppButton />
        </div>

        <ul className="mt-10 flex flex-col gap-3 text-sm text-[#8A8F98] sm:flex-row sm:gap-8">
          <li>
            <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 hover:text-[#E5E6EB]">
              <Mail size={16} aria-hidden="true" />
              Correo · {links.email}
            </a>
          </li>
          <li>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#E5E6EB]">
              <WhatsAppIcon size={16} />
              WhatsApp · {links.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
