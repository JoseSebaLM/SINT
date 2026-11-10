/** Logo sint_: el guion parpadea tres veces al cargar si `animated`. */
export default function Logo({ className = "", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <span className={`font-mono font-medium tracking-tight ${className}`.trim()}>
      sint<span className={animated ? "logo-cursor text-accent" : "text-accent"}>_</span>
    </span>
  );
}
