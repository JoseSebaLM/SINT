import type { Metadata } from "next";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Evidencia from "./sections/Evidencia";
import Servicios from "./sections/Servicios";
import PorQue from "./sections/PorQue";
import Metodo from "./sections/Metodo";
import Equipo from "./sections/Equipo";
import { jsonLd } from "./content/schema";

// La página principal declara su URL canónica.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Evidencia />
        <Servicios />
        <PorQue />
        <Metodo />
        <Equipo />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
