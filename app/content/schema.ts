// Datos estructurados (JSON-LD) de la página principal: Organization/ProfessionalService + FAQPage.
// Fuente: specs/sint-v4/content.md [SCHEMA]
import { equipo, faq, links, servicios, site } from "./home";

const orgId = `${site.url}/#organizacion`;

const service = (name: string, description: string) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description, provider: { "@id": orgId } },
});

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: site.name,
      alternateName: site.fullName,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/og-image.png`,
      description: site.canon,
      slogan: site.tagline,
      email: links.email,
      telephone: "+56956303337",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      areaServed: { "@type": "Country", name: "Chile" },
      founder: {
        "@type": "Person",
        name: "José Latorre",
        sameAs: [links.linkedinJose],
      },
      employee: equipo.members.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role })),
      sameAs: [links.linkedinSint],
      knowsAbout: [
        "Diagnóstico organizacional",
        "Investigación social",
        "Gestión del cambio",
        "Capacitación en IA",
        "Franquicia SENCE",
        "Agentes de IA",
        "Desarrollo web",
        "SEO y AEO",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Sint",
        itemListElement: servicios.lineas.map((linea) => ({
          "@type": "OfferCatalog",
          name: linea.name,
          description: linea.phrase,
          itemListElement: linea.services.map((s) => service(s.title, s.text)),
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#sitio`,
      url: site.url,
      name: site.fullName,
      inLanguage: "es-CL",
      publisher: { "@id": orgId },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#preguntas`,
      inLanguage: "es-CL",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};
