"use client";

import { motion } from "framer-motion";

export default function Manifesto(): JSX.Element {
  return (
    <section
      id="manifesto"
      className="bg-white/[0.03] border-y border-white/[0.08] py-20 md:py-28"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          className="text-[#8A8F98] text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Por qué existimos
        </motion.p>

        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#E5E6EB] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          El mercado corporativo exige certeza. No horas de programación.
        </motion.h2>

        {/* Cita */}
        <motion.div
          className="mt-10 mb-8 bg-white/[0.04] rounded-lg px-6 py-5 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#8A8F98] italic text-base md:text-lg leading-relaxed">
            &quot;Estoy cansado de pagar por procesos largos de desarrollo, para
            recibir un software caro que mi equipo no usa porque los
            programadores nunca entendieron mi negocio.&quot;
          </p>
          <cite className="text-[#8A8F98]/60 text-sm mt-3 block not-italic">
            — El problema que Sint resuelve.
          </cite>
        </motion.div>

        {/* Párrafo 2 */}
        <motion.p
          className="text-[#8A8F98] text-base md:text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Sint resuelve esa fricción. Primero entendemos el problema. Después
          escribimos la solución. En ese orden, siempre.
        </motion.p>

        {/* Línea de cierre */}
        <motion.p
          className="mt-12 border-l-4 border-[#FF6B4A] pl-6 text-lg md:text-xl font-bold text-[#E5E6EB]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          La especificación perfecta es el activo más valioso que le entregamos
          al cliente. El código es simplemente su consecuencia.
        </motion.p>
      </div>
    </section>
  );
}
