import { links } from "../content/home";
import { WhatsAppIcon } from "./ui";

export default function WhatsAppFloat() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-[#FF6B4A] p-3.5 text-black shadow-xl shadow-black/40 transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={24} />
    </a>
  );
}
