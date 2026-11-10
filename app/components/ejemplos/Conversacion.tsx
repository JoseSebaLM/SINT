import type { CSSProperties } from "react";
import { ArrowUp, FileText } from "lucide-react";
import { ejemplos } from "../../content/home";

const v = (vars: Record<string, string | number>) => vars as CSSProperties;
const bubble = "seq max-w-[82%] rounded-2xl text-sm leading-snug";

/** Ejemplo de Agentes IA: conversación con un asistente. */
export default function Conversacion() {
  const { header, status, messages, placeholder } = ejemplos.conversacion;
  return (
    <div className="mock max-w-[26rem] overflow-hidden">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-sm text-white"
        >
          s<span className="text-accent">_</span>
        </span>
        <div className="leading-tight">
          <p className="text-[0.9375rem] font-medium">{header}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ok">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            {status}
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-2.5 bg-paper/60 px-4 py-5" style={v({ "--step": "0.9s" })}>
        {messages.map((m, i) => {
          const who = <span className="sr-only">{m.from === "cliente" ? "Cliente: " : "Asistente: "}</span>;
          if (m.from === "cliente") {
            return (
              <li key={i} className={`${bubble} self-end rounded-br-md bg-ink px-4 py-2.5 text-white`} style={v({ "--i": i })}>
                {who}
                {m.text}
              </li>
            );
          }
          if (m.attachment) {
            return (
              <li
                key={i}
                className={`${bubble} flex items-center gap-3 self-start rounded-bl-md border border-line bg-surface px-3 py-2.5`}
                style={v({ "--i": i })}
              >
                {who}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                  <FileText className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-medium">{m.attachment}</span>
                  <span className="block text-xs text-ink-3">PDF</span>
                </span>
              </li>
            );
          }
          return (
            <li
              key={i}
              className={`${bubble} self-start rounded-bl-md border border-line bg-surface px-4 py-2.5`}
              style={v({ "--i": i })}
            >
              {who}
              {m.text}
            </li>
          );
        })}
      </ul>

      <div aria-hidden="true" className="flex items-center gap-2 border-t border-line px-4 py-3">
        <span className="flex h-10 flex-1 items-center rounded-full bg-paper-2 px-4 text-sm text-ink-3">{placeholder}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
          <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>
    </div>
  );
}
