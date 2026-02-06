import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Pipeline from "./sections/Pipeline";
import Services from "./sections/Services";
import Targets from "./sections/Targets";
import Footer from "./sections/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-deep-zinc">
      <Navbar />
      <Hero />
      <Pipeline />
      <Services />
      <Targets />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
