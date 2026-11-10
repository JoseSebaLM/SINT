import type { Metadata } from "next";
import { hero } from "./content/home";
import { jsonLd } from "./content/schema";

// La página principal declara su URL canónica.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
      >
        Saltar al contenido
      </a>
      <main id="contenido">
        <h1 className="h-display container-page py-20">{hero.title}</h1>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
