"use client";

import { motion } from "framer-motion";

interface TargetCardProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  role: string;
  pain: string;
}

function TargetCard({
  index,
  icon,
  title,
  role,
  pain,
}: TargetCardProps): JSX.Element {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-brand-flux-orange/50 hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon Container */}
      <div className="w-10 h-10 rounded-full bg-brand-flux-orange/10 flex items-center justify-center mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text-off-white mb-2">
        {title}
      </h3>

      {/* Role */}
      <p className="text-text-cool-grey text-xs mb-2">{role}</p>

      {/* Pain Point */}
      <p className="text-text-cool-grey text-sm leading-relaxed">{pain}</p>
    </motion.div>
  );
}

// Iconos SVG inline
const BuildingIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-flux-orange"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

const MountainIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-flux-orange"
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    <path d="M4.1 4.1 8 8" />
    <path d="m12 12 4 4" />
    <circle cx="9" cy="9" r="2" />
  </svg>
);

const MegaphoneIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-flux-orange"
  >
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

const TrendingUpIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-flux-orange"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default function Targets(): JSX.Element {
  const targets: Omit<TargetCardProps, "index">[] = [
    {
      icon: <BuildingIcon />,
      title: "PropTech",
      role: "Dueños y Gerentes de Operaciones",
      pain: "Ceguera de datos de stock y precios real-time",
    },
    {
      icon: <MountainIcon />,
      title: "Minería & Industria",
      role: "Gerentes Comerciales y HSEQ",
      pain: "Burocracia de reportes y datos de terreno sin digitalizar",
    },
    {
      icon: <MegaphoneIcon />,
      title: "Agencias",
      role: "Directores de Marketing y PR",
      pain:
        "Necesidad de ofrecer Tech/IA de marca blanca sin equipo técnico",
    },
    {
      icon: <TrendingUpIcon />,
      title: "VC & Family Offices",
      role: "Analistas y Partners",
      pain: "Lentitud en el Due Diligence técnico de startups",
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
        ¿Para quién trabajamos?
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-text-cool-grey text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Especialización por industria. Soluciones específicas.
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {targets.map((target, index) => (
          <TargetCard key={target.title} index={index} {...target} />
        ))}
      </div>
    </motion.section>
  );
}
