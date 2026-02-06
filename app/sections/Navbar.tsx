"use client";

import Logo from "../components/Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-16 bg-deep-zinc/80 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center h-full px-6 md:px-12">
        {/* Left: Logo */}
        <Logo className="text-2xl" animated={true} />

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#pipeline"
            className="text-sm text-text-cool-grey hover:text-text-off-white transition-colors"
          >
            Pipeline
          </a>
          <a
            href="#servicios"
            className="text-sm text-text-cool-grey hover:text-text-off-white transition-colors"
          >
            Servicios
          </a>
          <a
            href="#targets"
            className="text-sm text-text-cool-grey hover:text-text-off-white transition-colors"
          >
            Targets
          </a>
        </div>

        {/* Right: CTA Button */}
        <button className="border border-text-cool-grey/30 text-text-off-white rounded-full px-6 py-2 text-sm transition-all duration-300 hover:border-brand-flux-orange hover:text-brand-flux-orange">
          Iniciar Sprint
        </button>
      </div>
    </nav>
  );
}
