"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function DiagnosticoResultadoPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-deep-zinc flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Success Icon */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
        >
          <CheckCircle className="w-16 h-16 text-accent-terminal-green mx-auto" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h1 className="text-text-off-white text-2xl md:text-3xl font-medium mb-4">
          Tu diagnóstico está en camino
        </h1>

        {/* Subtitle */}
        <p className="text-text-cool-grey text-base md:text-lg mb-8">
          Revisa tu bandeja de entrada. ¿No lo ves? Revisa tu carpeta de spam.
        </p>

        {/* Footer text */}
        <p className="text-text-cool-grey/60 text-sm">
          Sint · Diagnóstico operativo
        </p>
      </motion.div>
    </main>
  );
}
