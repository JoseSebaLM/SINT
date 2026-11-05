import type { Metadata } from "next";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Evidencia from "./sections/Evidencia";
import Diagnostico from "./sections/Diagnostico";
import Servicios from "./sections/Servicios";
import Metodo from "./sections/Metodo";
import Equipo from "./sections/Equipo";
import Faq from "./sections/Faq";
import Cierre from "./sections/Cierre";
import Footer from "./sections/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { jsonLd } from "./content/schema";

// Solo la página principal declara su URL canónica; /diagnostico hereda el resto del layout.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-[#FF6B4A] focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Evidencia />
        <Diagnostico />
        <Servicios />
        <Metodo />
        <Equipo />
        <Faq />
        <Cierre />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
