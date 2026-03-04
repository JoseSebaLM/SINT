"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScanLine, LayoutTemplate, Code2 } from "lucide-react";

interface StepCardProps {
  index: number;
  iconColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  badgeHref?: string;
}

function StepCard({
  index,
  iconColor,
  icon,
  title,
  description,
  badge,
  badgeHref,
}: StepCardProps): JSX.Element {
  const BadgeWrapper = ({ children }: { children: React.ReactNode }) => {
    if (badgeHref) {
      return (
        <Link
          href={badgeHref}
          className="inline-block mt-4 px-4 py-1.5 text-sm font-medium bg-white/10 text-[#E5E6EB] rounded-full border border-[#FF6B4A]/50 hover:bg-[#FF6B4A]/20 hover:scale-105 transition-all animate-pulse"
        >
          {children}
        </Link>
      );
    }
    return (
      <span className="inline-block mt-4 px-4 py-1.5 text-sm font-medium bg-white/5 text-[#8A8F98] rounded-full border border-white/10">
        {children}
      </span>
    );
  };

  return (
    <motion.div
      className="w-full md:w-80 min-h-[300px] bg-white/5 border border-white/10 rounded-xl p-8 text-center flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="mb-4" style={{ color: iconColor }}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-[#E5E6EB]">{title}</h3>
      <p className="text-[#8A8F98] text-base leading-relaxed flex-grow">{description}</p>
      <div className="mt-auto pt-4">
        <BadgeWrapper>{badge}</BadgeWrapper>
      </div>
    </motion.div>
  );
}

// Conectores con gradientes específicos
const Connector1to2 = (): JSX.Element => (
  <>
    <div className="hidden md:block h-px w-12 bg-gradient-to-r from-[#2EB886] to-[#A371F7]" />
    <div className="md:hidden w-px h-8 bg-gradient-to-b from-[#2EB886] to-[#A371F7]" />
  </>
);

const Connector2to3 = (): JSX.Element => (
  <>
    <div className="hidden md:block h-px w-12 bg-gradient-to-r from-[#A371F7] to-[#FF6B4A]" />
    <div className="md:hidden w-px h-8 bg-gradient-to-b from-[#A371F7] to-[#FF6B4A]" />
  </>
);

export default function Pipeline(): JSX.Element {
  const steps: Omit<StepCardProps, "index">[] = [
    {
      iconColor: "#2EB886",
      icon: <ScanLine size={32} />,
      title: "Diagnóstico",
      description:
        "Completa una evaluación de 3 minutos. Recibes un reporte ejecutivo que identifica exactamente qué fricciones le están costando dinero a tu operación.",
      badge: "Gratuito · Ingresa Aquí",
      badgeHref: "/diagnostico",
    },
    {
      iconColor: "#A371F7",
      icon: <LayoutTemplate size={32} />,
      title: "Estrategia",
      description:
        "Diagnóstico organizacional a medida. Diseñamos la arquitectura de la solución antes de escribir el código. El costo se descuenta del proyecto final si decides implementar.",
      badge: "Paid Discovery",
    },
    {
      iconColor: "#FF6B4A",
      icon: <Code2 size={32} />,
      title: "Implementación",
      description:
        "Construimos el software sobre la especificación aprobada. Sin sorpresas de alcance ni deuda técnica. Entregamos un activo funcional que tu equipo usa desde el día uno.",
      badge: "Invierte en la solución",
    },
  ];

  return (
    <motion.section
      id="pipeline"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.p
        className="text-[#8A8F98] text-sm uppercase tracking-widest text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Cómo trabajamos
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#E5E6EB] text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Software Intelligence. Un proceso claro para tu gerencia
      </motion.h2>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center">
            <StepCard index={index} {...step} />
            {index === 0 && <Connector1to2 />}
            {index === 1 && <Connector2to3 />}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
