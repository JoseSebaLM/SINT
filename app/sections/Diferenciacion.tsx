"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  index: number;
  encabezado: string;
  descripcion: string;
}

function Card({ index, encabezado, descripcion }: CardProps): JSX.Element {
  return (
    <motion.div
      className="bg-white/[0.04] rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="font-bold text-[#E5E6EB] text-lg mb-3">{encabezado}</h3>
      <p className="text-[#8A8F98]">{descripcion}</p>
    </motion.div>
  );
}

export default function Diferenciacion(): JSX.Element {
  const cards: Omit<CardProps, "index">[] = [
    {
      encabezado: "La fábrica de software",
      descripcion:
        "Te cobran por hora. El incentivo es tardar. El riesgo de sobrecosto y retrasos es completamente tuyo.",
    },
    {
      encabezado: "La consultora",
      descripcion:
        "Analizan tu empresa durante meses. Entregan un PowerPoint. No implementan nada. El problema sigue.",
    },
    {
      encabezado: "El status quo",
      descripcion:
        "Tu equipo resuelve el problema con parches, trabajo manual y hojas de cálculo. La fricción crece. Y no aparece en el balance.",
    },
  ];

  return (
    <section id="diferenciacion" className="bg-white/[0.02] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          className="text-[#8A8F98] text-sm uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué Sint?
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#E5E6EB] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ¿Qué estás evaluando?
        </motion.h2>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={card.encabezado} index={index} {...card} />
          ))}
        </div>

        {/* Bloque Sint */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#E5E6EB] text-base md:text-lg text-center max-w-2xl mx-auto mb-6">
            Sint asume el riesgo de ejecución. Cobra por fricción resuelta. Y
            garantiza la calidad mediante auditoría de IA antes de entregar
            cualquier línea de código.
          </p>
          <div className="flex justify-center">
            <Link
              href="/diagnostico"
              className="bg-[#FF6B4A] text-black font-bold px-6 py-3 rounded hover:scale-105 transition-transform"
            >
              Hacer el diagnóstico gratuito →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
