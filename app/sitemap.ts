import type { MetadataRoute } from "next";
import { site } from "./content/home";

export const dynamic = "force-static";

// Solo la página principal.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
