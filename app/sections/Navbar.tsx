"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../components/Logo";
import { cta, links, nav } from "../content/home";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? "bg-[#09090B]/95 backdrop-blur border-b border-white/[0.08]" : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="Sint, ir al inicio" className="text-2xl">
          <Logo />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-[#8A8F98] hover:text-[#E5E6EB] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={links.agenda}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex rounded bg-[#FF6B4A] px-4 py-2 text-sm font-semibold text-black hover:bg-[#ff8466] transition-colors"
        >
          {cta.nav}
        </a>

        <button
          type="button"
          className="md:hidden -mr-2 p-2 text-[#E5E6EB]"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="md:hidden border-t border-white/[0.08] bg-[#09090B] px-4 pb-8 pt-4 h-[calc(100svh-4rem)]">
          <ul className="flex flex-col">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/[0.06] py-4 text-lg text-[#E5E6EB]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={links.agenda}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 flex justify-center rounded bg-[#FF6B4A] px-6 py-3 font-semibold text-black"
          >
            {cta.nav}
          </a>
        </div>
      )}
    </header>
  );
}
