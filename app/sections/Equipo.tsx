"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MiembroCardProps {
  index: number;
  nombre: string;
  cargo: string;
  bio: string;
  fotoSrc: string;
  linkedInHref?: string;
  iniciales: string;
}

function MiembroCard({
  index,
  nombre,
  cargo,
  bio,
  fotoSrc,
  linkedInHref,
  iniciales,
}: MiembroCardProps): JSX.Element {
  return (
    <motion.div
      className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-8 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Foto circular */}
      <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/[0.10] mb-4">
        <Image
          src={fotoSrc}
          alt={nombre}
          fill
          className="object-cover object-top"
          onError={(e) => {
            // Fallback si la imagen no carga
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Fallback visual */}
        <div className="absolute inset-0 bg-white/[0.05] flex items-center justify-center text-[#FF6B4A] text-3xl font-bold -z-10">
          {iniciales}
        </div>
      </div>

      {/* Nombre */}
      <h3 className="text-xl font-bold text-[#E5E6EB]">{nombre}</h3>

      {/* Cargo */}
      <p className="text-[#8A8F98] text-sm mb-4">{cargo}</p>

      {/* Bio */}
      <p className="text-[#8A8F98] text-sm leading-relaxed mb-6 whitespace-pre-line">{bio}</p>

      {/* LinkedIn — solo si existe */}
      {linkedInHref && (
        <a
          href={linkedInHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#8A8F98] hover:text-[#E5E6EB] text-sm transition-colors mt-auto"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      )}
    </motion.div>
  );
}

export default function Equipo(): JSX.Element {
  const miembros: Omit<MiembroCardProps, "index">[] = [
    {
      nombre: "José Latorre",
      cargo: "Founder",
      bio: "Sociólogo | PUC\n\nAntes de Sint, trabajó en consultoría, research y marketing estratégico para empresas de distintos tamaños e industrias. Su convicción: la mayoría de los problemas que se resuelven con tecnología son primero problemas humanos y organizacionales. Sint es la consecuencia directa de esa premisa.",
      fotoSrc: "/José Latorre Sint.png",
      linkedInHref: "https://www.linkedin.com/in/joselatorrem",
      iniciales: "J",
    },
    {
      nombre: "Carlos Martínez",
      cargo: "Tech Lead",
      bio: "Sistemas de Información | U Chile\n\nDesarrollador Frontend especializado en arquitectura de interfaces y estándares web de producción. Ha liderado proyectos desde el diseño hasta el deploy en React y Next.js. En Sint, es responsable de la ejecución técnica bajo estándar SDD, integrando herramientas de IA como Claude Code en el flujo de desarrollo.",
      fotoSrc: "/Carlos Martínez Sint.png",
      iniciales: "C",
    },
  ];

  return (
    <section id="equipo" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.p
          className="text-[#8A8F98] text-sm uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Quiénes somos
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#E5E6EB] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          El negocio primero. El código después.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {miembros.map((miembro, index) => (
            <MiembroCard key={miembro.nombre} index={index} {...miembro} />
          ))}
        </div>
      </div>
    </section>
  );
}
