"use client";

import Link from "next/link";

interface Perfil {
  industria: string;
  cargo: string;
  dolor: string;
}

export default function Targets(): JSX.Element {
  const perfiles: Perfil[] = [
    {
      industria: "Servicios Profesionales y Consultoría",
      cargo: "CEO / COO",
      dolor: "Mis consultores usan Excel para lo que debería hacer el sistema.",
    },
    {
      industria: "Manufactura y Logística",
      cargo: "COO / Gerente de Operaciones",
      dolor: "No sé dónde se pierden los tiempos entre mis departamentos.",
    },
    {
      industria: "Finanzas y Seguros",
      cargo: "CTO / CEO",
      dolor: "Cada cambio en las reglas de negocio requiere semanas de desarrollo.",
    },
    {
      industria: "Tecnología y Agencias Digitales",
      cargo: "CEO",
      dolor: "Mis propios sistemas internos son el cuello de botella de mi crecimiento.",
    },
    {
      industria: "Salud y Clínicas",
      cargo: "Gerente General / Director Médico",
      dolor: "Coordino turnos, fichas y stock con tres sistemas que no se hablan entre sí.",
    },
  ];

  return (
    <section id="targets" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-[#8A8F98] text-sm uppercase tracking-widest mb-3">
          Perfiles que atendemos
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#E5E6EB] mb-16">
          ¿Tu operación se reconoce aquí?
        </h2>

        {/* Lista de perfiles */}
        <div className="divide-y divide-white/[0.08]">
          {perfiles.map((perfil, i) => (
            <div
              key={i}
              className="py-8 flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 group"
            >
              {/* Etiqueta industria + cargo — columna izquierda, fija */}
              <div className="md:w-52 shrink-0">
                <p className="text-[#8A8F98] text-xs uppercase tracking-wider">
                  {perfil.industria}
                </p>
                <p className="text-[#FF6B4A] text-sm font-medium mt-0.5">
                  {perfil.cargo}
                </p>
              </div>

              {/* Dolor — columna derecha, dominante */}
              <p className="text-[#E5E6EB] text-lg md:text-xl font-medium leading-snug">
                &ldquo;{perfil.dolor}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA al pie */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#E5E6EB] mb-4">
            Si la operación falla, el software optimiza.
          </h3>
          <p className="text-[#8A8F98] text-lg md:text-xl mb-8">
            Descubre en 3 minutos las principales fricciones operativas de tu empresa.
          </p>
          <Link
            href="/diagnostico"
            className="bg-[#FF6B4A] text-black font-bold px-6 py-3 rounded hover:scale-105 transition-transform inline-block"
          >
            Iniciar Diagnóstico Gratuito →
          </Link>
        </div>
      </div>
    </section>
  );
}
