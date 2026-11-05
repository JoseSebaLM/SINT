import { diagnostico } from "../../content/home";
import { ExampleFrame } from "../ui";

// Nivel en palabras; la barra solo refuerza visualmente, sin cifras.
const levels: Record<string, { width: string; color: string }> = {
  Inicial: { width: "w-1/3", color: "bg-[#F59E0B]" },
  "En desarrollo": { width: "w-2/3", color: "bg-[#A371F7]" },
};

export default function InformeEjemplo() {
  const { example } = diagnostico;

  return (
    <ExampleFrame title={example.title}>
      <p className="font-mono text-[11px] uppercase tracking-wider text-[#8A8F98] mb-3">Nivel por dimensión</p>
      <ul className="space-y-3">
        {example.dimensions.map((d) => {
          const level = levels[d.level];
          return (
            <li key={d.name}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-[#E5E6EB]">{d.name}</span>
                <span className="text-[#8A8F98]">{d.level}</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-white/[0.06]" aria-hidden="true">
                <div className={`h-full rounded-full ${level.width} ${level.color}`} />
              </div>
            </li>
          );
        })}
      </ul>

      <p className="font-mono text-[11px] uppercase tracking-wider text-[#8A8F98] mt-6 mb-3">Oportunidades priorizadas</p>
      <ol className="space-y-2">
        {example.opportunities.map((o, i) => (
          <li key={o} className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-black/20 px-3 py-2.5 text-sm text-[#E5E6EB]">
            <span className="mt-px font-mono text-xs text-[#FF6B4A]">{String(i + 1).padStart(2, "0")}</span>
            {o}
          </li>
        ))}
      </ol>
    </ExampleFrame>
  );
}
