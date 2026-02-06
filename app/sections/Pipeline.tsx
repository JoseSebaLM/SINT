"use client";

import { motion } from "framer-motion";

interface StepCardProps {
  index: number;
  color: string;
  colorClass: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StepCard({
  index,
  colorClass,
  icon,
  title,
  description,
}: StepCardProps): JSX.Element {
  return (
    <motion.div
      className="w-full md:w-80 bg-white/5 border border-white/10 rounded-xl p-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={`mb-4 inline-block ${colorClass}`}>{icon}</div>
      <h3 className={`text-xl font-semibold mb-2 ${colorClass}`}>{title}</h3>
      <p className="text-text-cool-grey text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Iconos SVG inline
const SearchIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const LayersIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const RocketIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

// Separador con gradiente
const HorizontalConnector = (): JSX.Element => (
  <div className="hidden md:block h-px w-12 bg-gradient-to-r from-accent-synth-purple via-brand-flux-orange to-accent-terminal-green" />
);

const VerticalConnector = (): JSX.Element => (
  <div className="md:hidden w-px h-12 bg-gradient-to-b from-accent-synth-purple via-brand-flux-orange to-accent-terminal-green" />
);

export default function Pipeline(): JSX.Element {
  const steps: Omit<StepCardProps, "index">[] = [
    {
      color: "#A371F7",
      colorClass: "text-accent-synth-purple",
      icon: <SearchIcon />,
      title: "Decode",
      description: "Traducción de estrategia a requerimientos técnicos",
    },
    {
      color: "#FF6B4A",
      colorClass: "text-brand-flux-orange",
      icon: <LayersIcon />,
      title: "Architect",
      description: "Diseño de sistemas asistido por IA",
    },
    {
      color: "#2EB886",
      colorClass: "text-accent-terminal-green",
      icon: <RocketIcon />,
      title: "Deploy",
      description: "Construcción y entrega del activo funcional",
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
        The Sint Pipeline
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-text-cool-grey text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        De la estrategia al activo funcional en tres pasos
      </motion.p>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center">
            <StepCard index={index} {...step} />
            {index < steps.length - 1 && (
              <>
                <HorizontalConnector />
                <VerticalConnector />
              </>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
