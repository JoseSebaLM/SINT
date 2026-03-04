"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../components/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Pipeline", href: "#pipeline" },
    { label: "Servicios", href: "#servicios" },
    { label: "Equipo", href: "#equipo" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B] backdrop-blur-sm border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-16 px-6 md:px-12">
        {/* Left: Logo */}
        <Logo className="text-2xl" animated={true} />

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8A8F98] hover:text-[#E5E6EB] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/diagnostico"
            className="text-sm text-[#8A8F98] hover:text-[#E5E6EB] transition-colors"
          >
            Diagnóstico
          </Link>
        </div>

        {/* Right: CTA Button (Desktop) */}
        <Link
          href="/diagnostico"
          className="hidden md:block bg-[#FF6B4A] text-black font-bold px-4 py-2 rounded hover:scale-105 transition-transform text-sm"
        >
          Iniciar Diagnóstico →
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#E5E6EB] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#09090B] z-40 flex flex-col items-center justify-start pt-12 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-[#8A8F98] hover:text-[#E5E6EB] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/diagnostico"
            className="text-lg text-[#8A8F98] hover:text-[#E5E6EB] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Diagnóstico
          </Link>
          <Link
            href="/diagnostico"
            className="bg-[#FF6B4A] text-black font-bold px-6 py-3 rounded hover:scale-105 transition-transform text-base mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Iniciar Diagnóstico →
          </Link>
        </div>
      )}
    </nav>
  );
}
