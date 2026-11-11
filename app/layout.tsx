import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "./content/home";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], axes: ["opsz"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

// Imagen para redes: PNG estático (con extensión, para que Cloudflare Pages lo sirva como image/png).
const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${site.fullName}. ${site.tagline}`,
};

// Metadatos por defecto del sitio.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.fullName,
  keywords: site.keywords,
  openGraph: {
    title: site.fullName,
    description: site.tagline,
    url: site.url,
    siteName: site.fullName,
    locale: "es_CL",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.tagline,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
