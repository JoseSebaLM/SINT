"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, FlaskConical, Layers } from "lucide-react";

interface ServiceCardProps {
  index: number;
  borderColor: string;
  borderWidth?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  badgeColorClass: string;
  price: string;
  ctaText: string;
  ctaHref: string;
  ctaBgColor: string;
  highlighted?: boolean;
}

function ServiceCard({
  index,
  borderColor,
  borderWidth = "border-t-2",
  icon,
  title,
  description,
  badge,
  badgeColorClass,
  price,
  ctaText,
  ctaHref,
  ctaBgColor,
  highlighted = false,
}: ServiceCardProps): JSX.Element {
  return (
    <motion.div
      className={`bg-white/5 border border-white/10 ${borderWidth} ${borderColor} rounded-xl p-8 flex flex-col justify-between h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
        highlighted
          ? "scale-[1.03] shadow-[0_0_40px_rgba(163,113,247,0.15)]"
          : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-[#E5E6EB] mb-2">{title}</h3>
        <p className="text-[#8A8F98] text-base leading-relaxed mb-4">
          {description}
        </p>
        <span
          className={`inline-block text-sm px-3 py-1 rounded ${badgeColorClass}`}
        >
          {badge}
        </span>
      </div>
      <div className="mt-6">
        <p className="text-[#E5E6EB] font-bold text-2xl mb-4">{price}</p>
        <Link
          href={ctaHref}
          className={`inline-block ${ctaBgColor} text-black font-bold px-4 py-2 rounded hover:scale-105 transition-transform`}
        >
          {ctaText}
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services(): JSX.Element {
  const services: Omit<ServiceCardProps, "index">[] = [
    {
      borderColor: "border-[#2EB886]",
      icon: <Activity size={32} color="#2EB886" />,
      title: "Diagnóstico Sint",
      description:
        "Evaluación general de tus fricciones operativas. En 3 minutos recibes un reporte ejecutivo que identifica dónde estás perdiendo eficiencia y capital en tu operación.",
      badge: "Diagnóstico General",
      badgeColorClass: "bg-[#2EB886]/10 text-[#2EB886]",
      price: "Gratuito",
      ctaText: "Iniciar ahora →",
      ctaHref: "/diagnostico",
      ctaBgColor: "bg-[#2EB886]",
    },
    {
      borderColor: "border-[#A371F7]",
      icon: <FlaskConical size={32} color="#A371F7" />,
      title: "Diagnóstico Sint Full",
      description:
        "Investigación profunda de tu empresa, que culmina con la arquitectura exacta de la solución propuesta. El valor invertido se descuenta del proyecto de implementación.",
      badge: "Paid Discovery",
      badgeColorClass: "bg-[#A371F7]/10 text-[#A371F7]",
      price: "Oferta a medida",
      ctaText: "Agendar reunión →",
      ctaHref: "#",
      ctaBgColor: "bg-[#A371F7]",
    },
    {
      borderColor: "border-[#FF6B4A]",
      icon: <Layers size={32} color="#FF6B4A" />,
      title: "Implementación Sint",
      description:
        "Software corporativo construido sobre especificación. Plataformas, integraciones de sistemas legacy y automatizaciones. Proceso preciso y rápido, sin incertidumbre.",
      badge: "Invierte en la solución",
      badgeColorClass: "bg-[#FF6B4A]/10 text-[#FF6B4A]",
      price: "Por proyecto",
      ctaText: "Conversar →",
      ctaHref: "#",
      ctaBgColor: "bg-[#FF6B4A]",
    },
  ];

  return (
    <motion.section
      id="servicios"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Eyebrow */}
      <motion.p
        className="text-[#8A8F98] text-sm uppercase tracking-widest text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Líneas de servicio
      </motion.p>

      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#E5E6EB] text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Invierte en la solución. No en horas facturadas.
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
}
