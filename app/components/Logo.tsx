/** Logo sint_: el guion parpadea siempre (identidad original de Sint). `animated={false}` lo deja fijo. */
export default function Logo({ className = "", animated = true }: { className?: string; animated?: boolean }) {
  return (
    <span className={`font-mono font-medium tracking-tight ${className}`.trim()}>
      sint<span className={animated ? "logo-cursor text-brand" : "text-brand"}>_</span>
    </span>
  );
}
