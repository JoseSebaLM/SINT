import { servicios } from "../../content/home";
import { ExampleFrame } from "../ui";

const sourceX = [52, 160, 268];
const bars = [38, 52, 30, 64, 46, 58];

export default function IntegracionEjemplo() {
  const { sources, hub, target } = servicios.integracion;

  return (
    <ExampleFrame title="Integración de sistemas">
      <svg
        viewBox="0 0 320 290"
        className="w-full h-auto"
        role="img"
        aria-label={`${sources.join(", ")} conectados a un nodo de ${hub} que alimenta un ${target}.`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <style>{`
          .flow { stroke-dasharray: 4 6; animation: flow 1.6s linear infinite; }
          @keyframes flow { to { stroke-dashoffset: -20; } }
        `}</style>

        {/* Conexiones */}
        {sourceX.map((x) => (
          <path
            key={x}
            className="flow"
            d={`M${x} 46 C ${x} 80, 160 72, 160 104`}
            fill="none"
            stroke="#FF6B4A"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
        ))}
        <path className="flow" d="M160 144 L160 184" stroke="#FF6B4A" strokeOpacity="0.7" strokeWidth="1.5" />

        {/* Fuentes */}
        {sources.map((s, i) => (
          <g key={s}>
            <rect x={sourceX[i] - 46} y="8" width="92" height="38" rx="8" fill="#141418" stroke="rgba(255,255,255,0.14)" />
            <text x={sourceX[i]} y="32" textAnchor="middle" fontSize="13" fill="#E5E6EB">
              {s}
            </text>
          </g>
        ))}

        {/* Nodo de integración */}
        <rect x="88" y="104" width="144" height="40" rx="20" fill="#FF6B4A" fillOpacity="0.12" stroke="#FF6B4A" />
        <text x="160" y="129" textAnchor="middle" fontSize="13" fontWeight="600" fill="#FF6B4A">
          {hub}
        </text>

        {/* Tablero */}
        <rect x="24" y="184" width="272" height="98" rx="10" fill="#141418" stroke="rgba(255,255,255,0.14)" />
        <text x="40" y="206" fontSize="12" fontWeight="600" fill="#E5E6EB">
          {target}
        </text>
        <circle cx="276" cy="202" r="4" fill="#2EB886" />
        {bars.map((h, i) => (
          <rect key={i} x={44 + i * 22} y={272 - h} width="14" height={h} rx="2" fill="#A371F7" fillOpacity={0.45 + i * 0.08} />
        ))}
        <polyline
          points="190,262 212,248 234,252 256,232 278,226"
          fill="none"
          stroke="#2EB886"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ExampleFrame>
  );
}
