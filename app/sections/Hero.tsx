"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero(): JSX.Element {
  const scrollToPipeline = () => {
    const element = document.getElementById("pipeline");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 overflow-hidden">
      {/* Grain texture background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <p className="font-mono text-[#FF6B4A] text-sm tracking-widest uppercase">
            sint · Software Intelligence
            
          </p>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight text-[#E5E6EB] mt-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          Primero entendemos tu negocio. Después escribimos el código
        </motion.h1>

        {/* Subtítulo */}
        <motion.div
          className="max-w-2xl mt-4 space-y-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
        >
          <p className="text-lg text-[#8A8F98]">
            Sint transforma el diagnóstico organizacional en software a medida.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.36 }}
        >
          <Link
            href="/diagnostico"
            className="bg-[#FF6B4A] text-black font-bold px-6 py-3 rounded hover:scale-105 transition-transform text-center"
          >
            Hacer el diagnóstico gratuito →
          </Link>
          <button
            onClick={scrollToPipeline}
            className="border border-white/20 text-[#E5E6EB] px-6 py-3 rounded hover:bg-white/5 transition-colors cursor-pointer"
          >
            Ver cómo funciona
          </button>
        </motion.div>


      </div>
    </section>
  );
}
