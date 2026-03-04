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
            <Logo className="text-xl mb-1" animated={false} />
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

          {/* Columna derecha: CTA */}
          <div className="md:text-right">
            <Link
              href="/diagnostico"
              className="bg-[#FF6B4A] text-black font-bold px-4 py-2 rounded hover:scale-105 transition-transform inline-block text-sm"
            >
              Iniciar Diagnóstico →
            </Link>
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
