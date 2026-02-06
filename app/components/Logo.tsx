interface Props {
  className?: string;
  animated?: boolean;
}

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
      <span
        style={{
          color: "#FF6B4A",
          animation: animated ? "blink 1.2s infinite" : undefined,
          opacity: animated ? undefined : 1,
        }}
      >
        _
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </span>
  );
}
