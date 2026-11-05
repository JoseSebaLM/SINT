import type { MetadataRoute } from "next";
import { site } from "./content/home";

export const dynamic = "force-static";

// Solo la página principal: /diagnostico queda fuera hasta decidir si se mantiene (specs/sint-v3/spec.md §6).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
