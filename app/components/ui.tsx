import type { ReactNode } from "react";
import { links, cta } from "../content/home";

export const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const base =
  "inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-semibold transition-colors text-center";

/** Botón principal: siempre lleva a la agenda. */
export function AgendaButton({ label = cta.agenda, className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={links.agenda}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-[#FF6B4A] text-black hover:bg-[#ff8466] ${className}`}
    >
      {label}
    </a>
  );
}

/** Botón secundario: WhatsApp. */
export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border border-white/20 text-[#E5E6EB] hover:bg-white/5 ${className}`}
    >
      <WhatsAppIcon size={18} />
      {cta.whatsapp}
    </a>
  );
}

export function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B4A]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-[#E5E6EB] text-balance">{title}</h2>
      {intro && <p className="mt-4 text-lg text-[#8A8F98]">{intro}</p>}
    </header>
  );
}

/** Marco común de los ejemplos visuales: deja claro que son ejemplos. */
export function ExampleFrame({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <figure
      className={`rounded-xl border border-white/[0.10] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 md:p-6 shadow-2xl shadow-black/40 ${className}`}
    >
      <figcaption className="flex items-center justify-between gap-3 mb-5">
        <span className="text-sm font-semibold text-[#E5E6EB]">{title}</span>
        <span className="rounded-full border border-[#A371F7]/40 bg-[#A371F7]/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-[#A371F7]">
          Ejemplo
        </span>
      </figcaption>
      {children}
    </figure>
  );
}
