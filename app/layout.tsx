import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "./content/home";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
  keywords: [
    "capacitación en IA para empresas",
    "franquicia tributaria SENCE",
    "agentes de IA",
    "asistente de WhatsApp",
    "desarrollo de software a medida",
    "integración de sistemas",
    "diagnóstico organizacional",
    "Santiago, Chile",
  ],
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
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
