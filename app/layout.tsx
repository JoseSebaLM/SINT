import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Sint · Software Intelligence",
  description:
    "Resolvemos fricciones operativas mediante software. Diagnóstico gratuito en 3 minutos. Sin horas facturadas — cobramos por la fricción resuelta.",
  openGraph: {
    title: "Sint — Software basado en diagnóstico organizacional",
    description:
      "Resolvemos fricciones operativas mediante software. Diagnóstico gratuito en 3 minutos. Sin horas facturadas — cobramos por la fricción resuelta.",
    url: "https://sint.cl",
    siteName: "Sint",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sint — Software basado en diagnóstico organizacional",
    description:
      "Resolvemos fricciones operativas mediante software. Diagnóstico gratuito en 3 minutos.",
  },
  metadataBase: new URL("https://sint.cl"),
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
