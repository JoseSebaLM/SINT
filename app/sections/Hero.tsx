"use client";

import { motion } from "framer-motion";

const WhatsAppIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero(): JSX.Element {
  return (
    <motion.section
      className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-16 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}
      <motion.div
        className="inline-flex mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="inline-flex items-center border border-brand-flux-orange/30 rounded-full px-3 py-1 text-xs text-brand-flux-orange">
          sint — Software Intelligence
        </span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-text-off-white tracking-tight leading-tight"
        style={{ fontFamily: "var(--font-inter)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Inteligencia Operativa
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="text-xl md:text-2xl text-text-cool-grey max-w-2xl mt-6 leading-relaxed"
        style={{ fontFamily: "var(--font-inter)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Transformamos tu estrategia de negocio directamente en sistemas de
        software funcionales. Sin informes teóricos.
      </motion.p>

      {/* CTA WhatsApp */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a
          href="https://wa.me/56987791156?text=Hola%20sint,%20quiero%20iniciar%20un%20sprint"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-flux-orange text-deep-zinc font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300"
        >
          <WhatsAppIcon />
          Hablar por WhatsApp
        </a>
      </motion.div>
    </motion.section>
  );
}
