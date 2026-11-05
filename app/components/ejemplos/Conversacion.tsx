import { FileText } from "lucide-react";
import { servicios } from "../../content/home";
import { ExampleFrame } from "../ui";

export default function ConversacionEjemplo() {
  const { header, messages } = servicios.conversacion;

  return (
    <ExampleFrame title="Conversación con un agente">
      <div className="rounded-lg border border-white/[0.08] bg-black/30 overflow-hidden">
        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B4A]/15 font-mono text-sm text-[#FF6B4A]" aria-hidden="true">
            s_
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#E5E6EB]">{header}</p>
            <p className="text-xs text-[#2EB886]">en línea</p>
          </div>
        </div>

        <ul className="flex flex-col gap-2.5 p-4">
          {messages.map((m, i) => {
            const fromClient = m.from === "cliente";
            return (
              <li
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                  fromClient
                    ? "self-end rounded-br-sm bg-[#FF6B4A] text-black"
                    : "self-start rounded-bl-sm bg-white/[0.07] text-[#E5E6EB]"
                }`}
              >
                <span className="sr-only">{fromClient ? "Cliente: " : "Asistente: "}</span>
                {m.attachment ? (
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#FF6B4A]/15 text-[#FF6B4A]">
                      <FileText size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block">{m.attachment}</span>
                      <span className="block text-xs text-[#8A8F98]">PDF</span>
                    </span>
                  </span>
                ) : (
                  m.text
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </ExampleFrame>
  );
}
