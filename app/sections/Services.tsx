"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  index: number;
  borderColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  badgeColorClass: string;
  price: string;
}

function ServiceCard({
  index,
  borderColor,
  icon,
  title,
  description,
  badge,
  badgeColorClass,
  price,
}: ServiceCardProps): JSX.Element {
  return (
    <motion.div
      className={`bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col justify-between h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${borderColor}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-text-off-white mb-2">
          {title}
        </h3>
        <p className="text-text-cool-grey text-sm leading-relaxed mb-4">
          {description}
        </p>
        <span
          className={`inline-block text-xs px-2 py-1 rounded ${badgeColorClass}`}
        >
          {badge}
        </span>
      </div>
      <p className="text-text-off-white font-medium mt-4">{price}</p>
    </motion.div>
  );
}

// Iconos SVG inline
const TerminalIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-accent-terminal-green"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const BrainIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-accent-synth-purple"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const BookIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-accent-cyan-ray"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

export default function Services(): JSX.Element {
  const services: Omit<ServiceCardProps, "index">[] = [
    {
      borderColor: "border-t-2 border-accent-terminal-green",
      icon: <TerminalIcon />,
      title: "Operational Software",
      description:
        "Desarrollo de software a medida: aplicaciones, dashboards y automatización. De la estrategia al código funcional.",
      badge: "Core Service",
      badgeColorClass:
        "bg-accent-terminal-green/10 text-accent-terminal-green",
      price: "Desde 30 UF",
    },
    {
      borderColor: "border-t-2 border-accent-synth-purple",
      icon: <BrainIcon />,
      title: "Research & Insights",
      description:
        "Inteligencia de mercado y competencia acelerada por IA. Análisis profundo en 72 horas, no semanas.",
      badge: "Entry Point",
      badgeColorClass:
        "bg-accent-synth-purple/10 text-accent-synth-purple",
      price: "6-15 UF",
    },
    {
      borderColor: "border-t-2 border-accent-cyan-ray",
      icon: <BookIcon />,
      title: "Knowledge Assets",
      description:
        "Documentación técnica, tutoriales y activos educativos que preservan el conocimiento de tu sistema.",
      badge: "Support",
      badgeColorClass: "bg-accent-cyan-ray/10 text-accent-cyan-ray",
      price: "Por proyecto",
    },
  ];

  return (
    <motion.section
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Título */}
      <motion.h2
        className="text-3xl font-semibold text-text-off-white text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Plataformas
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-text-cool-grey text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Tres formas de trabajar con sint, según tu necesidad
      </motion.p>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
}
