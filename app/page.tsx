import Navbar          from "./sections/Navbar";
import Hero            from "./sections/Hero";
import Pipeline        from "./sections/Pipeline";
import Manifesto       from "./sections/Manifesto";
import Services        from "./sections/Services";
import Targets         from "./sections/Targets";
import Diferenciacion  from "./sections/Diferenciacion";
import Equipo          from "./sections/Equipo";
import Footer          from "./sections/Footer";
// import WhatsAppFloat from "./components/WhatsAppFloat"; // DESACTIVADO

export default function Home() {
  return (
    <main className="bg-[#09090B] min-h-screen">
      <Navbar />
      <Hero />
      <Pipeline />
      <Manifesto />
      <Services />
      <Targets />
      <Diferenciacion />
      <Equipo />
      <Footer />
    </main>
  );
}
