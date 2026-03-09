"use client";

import Link from "next/link";
import Logo from "../components/Logo";

export default function Footer(): JSX.Element {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#09090B] border-t border-white/[0.08]">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Columna izquierda: Logo + tagline */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer block mb-1"
              aria-label="Ir al inicio"
            >
              <Logo className="text-xl" animated={false} />
            </button>
            <p className="text-[#8A8F98] text-sm">
              Software basado en diagnóstico organizacional.
            </p>
          </div>

          {/* Columna central: Navegación */}
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => scrollTo("#pipeline")}
              className="text-[#8A8F98] hover:text-[#E5E6EB] transition-colors text-sm text-left"
            >
              Pipeline
            </button>
            <button
              onClick={() => scrollTo("#servicios")}
              className="text-[#8A8F98] hover:text-[#E5E6EB] transition-colors text-sm text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo("#equipo")}
              className="text-[#8A8F98] hover:text-[#E5E6EB] transition-colors text-sm text-left"
            >
              Equipo
            </button>
            <Link
              href="/diagnostico"
              className="text-[#8A8F98] hover:text-[#E5E6EB] transition-colors text-sm"
            >
              Diagnóstico
            </Link>
          </nav>

          {/* Columna derecha: CTA + contacto */}
          <div className="md:text-right flex flex-col gap-4">
            <Link
              href="/diagnostico"
              className="bg-[#FF6B4A] text-black font-bold px-4 py-2 rounded hover:scale-105 transition-transform inline-block text-sm"
            >
              Iniciar Diagnóstico →
            </Link>
            <div className="flex gap-6 md:justify-end mt-2">
              <a
                href="tel:+56956303337"
                aria-label="Llamar por teléfono"
                className="text-[#8A8F98] hover:text-[#E5E6EB] transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 12 19.79 19.79 0 01.22 3.43 2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.61-.61a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/56956303337"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="text-[#8A8F98] hover:text-[#E5E6EB] transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="mailto:jose@sint.cl"
                aria-label="Enviar email"
                className="text-[#8A8F98] hover:text-[#E5E6EB] transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08] mt-12 pt-6 max-w-6xl mx-auto px-6 pb-8">
        <p className="text-[#8A8F98] text-sm">
          © 2026 Sint · Todos los derechos reservados.
        </p>
        <p className="text-[#8A8F98] text-xs mt-1">
          Sint opera bajo estricta confidencialidad. Tu información no es
          compartida con terceros.
        </p>
      </div>
    </footer>
  );
}
