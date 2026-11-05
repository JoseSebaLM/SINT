interface Props {
  className?: string;
  animated?: boolean;
}

// Sin styled-jsx para poder usarlo en componentes de servidor; la animación vive en globals.css
export default function Logo({ className = "", animated = true }: Props) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-jetbrains-mono)",
        color: "#E5E6EB",
      }}
    >
      sint
      <span className={animated ? "logo-cursor" : undefined} style={{ color: "#FF6B4A" }}>
        _
      </span>
    </span>
  );
}
