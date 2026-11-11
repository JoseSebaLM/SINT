"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../components/Logo";
import { AgendaButton } from "../components/ui";
import { cta, nav } from "../content/home";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <nav aria-label="Principal" className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Sint, ir al inicio" className="text-[1.375rem] text-ink">
          <Logo animated />
        </a>

        <ul className="hidden items-center gap-8 text-[0.9375rem] text-ink-2 md:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <AgendaButton label={cta.nav} className="btn-sm" />
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="h-[calc(100svh-4rem)] border-t border-line bg-paper px-5 pb-8 pt-2 md:hidden">
          <ul>
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-lg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <AgendaButton label={cta.nav} className="mt-8 w-full" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
