"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Anima un ejemplo una sola vez, al entrar en pantalla.
 * Por defecto todo está en su estado final: sin JavaScript o con movimiento reducido se ve completo.
 */
export default function Secuencia({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.dataset.seq = "wait";
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.seq = "run";
          io.unobserve(e.target);
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure ref={ref} className={className}>
      {children}
    </figure>
  );
}
