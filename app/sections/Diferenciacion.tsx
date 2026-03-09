"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TableRow {
  label: string;
  fabrica: string;
  consultora: string;
  statusQuo: string;
  sint: string;
}

const tableData: TableRow[] = [
  {
    label: "Cobro",
    fabrica: "Por hora",
    consultora: "Por proyecto",
    statusQuo: "Costo oculto",
    sint: "Por fricción resuelta",
  },
  {
    label: "¿Quién asume el riesgo?",
    fabrica: "Tú",
    consultora: "Tú",
    statusQuo: "Tú",
    sint: "Sint",
  },
  {
    label: "Diagnóstico previo",
    fabrica: "✗",
    consultora: "Parcial",
    statusQuo: "✗",
    sint: "✓ Siempre primero",
  },
  {
    label: "Velocidad",
    fabrica: "Lenta",
    consultora: "Muy lenta",
    statusQuo: "Nunca termina",
    sint: "Alta",
  },
  {
    label: "Calidad",
    fabrica: "Sin garantía",
    consultora: "Sin garantía",
    statusQuo: "Sin garantía",
    sint: "✓ Auditoría de IA",
  },
  {
    label: "Independencia",
    fabrica: "✗",
    consultora: "✗",
    statusQuo: "✗",
    sint: "✓ El sistema es tuyo",
  },
];

const CheckIcon = () => (
  <span className="text-[#2EB886] font-bold">✓</span>
);

const XIcon = () => (
  <span className="text-[#8A8F98]">✗</span>
);

const renderCell = (value: string) => {
  if (value === "✓") return <CheckIcon />;
  if (value === "✗") return <XIcon />;
  if (value.startsWith("✓ ")) {
    return (
      <>
        <CheckIcon /> <span className="ml-1">{value.slice(2)}</span>
      </>
    );
  }
  return value;
};

export default function Diferenciacion(): JSX.Element {
  return (
    <section id="diferenciacion" className="bg-[#09090B] py-20 md:py-28 px-6">
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
          La diferencia es quién asume el riesgo.
        </motion.h2>

        {/* Tabla comparativa */}
        <motion.div
          className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="min-w-[800px] md:min-w-0">
            {/* Header de la tabla */}
            <div className="grid grid-cols-5 gap-0">
              {/* Celda vacía esquina superior izquierda */}
              <div className="p-4 border-b border-white/10" />
              
              {/* Headers de columnas */}
              <div className="p-4 border-b border-white/10 text-center">
                <span className="text-[#8A8F98] text-sm font-medium">Fábrica de software</span>
              </div>
              <div className="p-4 border-b border-white/10 text-center">
                <span className="text-[#8A8F98] text-sm font-medium">Consultora</span>
              </div>
              <div className="p-4 border-b border-white/10 text-center">
                <span className="text-[#8A8F98] text-sm font-medium">Status quo</span>
              </div>
              
              {/* Header Sint - destacado */}
              <div className="p-4 border-b-2 border-[#FF6B4A] bg-[#FF6B4A]/5 text-center">
                <span className="text-[#FF6B4A] text-sm font-bold">Sint</span>
              </div>
            </div>

            {/* Filas de datos */}
            {tableData.map((row, index) => (
              <motion.div
                key={row.label}
                className="grid grid-cols-5 gap-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {/* Label de fila */}
                <div className="p-4 border-b border-white/5 text-[#E5E6EB] font-medium text-sm">
                  {row.label}
                </div>
                
                {/* Fábrica */}
                <div className="p-4 border-b border-white/5 text-[#8A8F98] text-sm text-center">
                  {renderCell(row.fabrica)}
                </div>
                
                {/* Consultora */}
                <div className="p-4 border-b border-white/5 text-[#8A8F98] text-sm text-center">
                  {renderCell(row.consultora)}
                </div>
                
                {/* Status quo */}
                <div className="p-4 border-b border-white/5 text-[#8A8F98] text-sm text-center">
                  {renderCell(row.statusQuo)}
                </div>
                
                {/* Sint - destacado */}
                <div className="p-4 border-b border-white/5 bg-[#FF6B4A]/[0.02] text-[#E5E6EB] text-sm text-center font-medium">
                  {renderCell(row.sint)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bloque de cierre */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#E5E6EB] text-base md:text-lg text-center max-w-2xl mx-auto mb-6">
            Sint asume el riesgo de ejecución. Cobra por fricción resuelta.
            Y antes de entregar cualquier código, una auditoría de IA certifica
            que hace exactamente lo que tu operación necesita.
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
