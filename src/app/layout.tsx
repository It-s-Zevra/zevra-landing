import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Diseñamos y construimos negocios que funcionan",
    template: "%s | Zevra",
  },
  description:
    "Zevra combina estrategia, tecnología y ejecución para ayudarte a conseguir clientes, automatizar procesos y escalar tu negocio.",
  keywords: [
    "digital studio",
    "software development",
    "AI solutions",
    "web development",
    "mobile apps",
    "digital transformation",
    "tech agency",
    "startup software",
    "product development",
    "software agency",
  ],
  authors: [{ name: "Zevra" }],
  creator: "Zevra",
  metadataBase: new URL("https://zevra.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://zevra.com",
    siteName: "Zevra",
    title: "Diseñamos y construimos negocios que funcionan",
    description:
      "Zevra combina estrategia, tecnología y ejecución para ayudarte a conseguir clientes, automatizar procesos y escalar tu negocio.",
    images: [
      {
        url: "https://res.cloudinary.com/dg1x0cwdc/image/upload/q_auto/f_auto/v1775265697/Summer_Trail_Run_cbkryb.jpg",
        width: 1200,
        height: 630,
        alt: "Diseñamos y construimos negocios que funcionan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseñamos y construimos negocios que funcionan",
    description:
      "Zevra combina estrategia, tecnología y ejecución para ayudarte a conseguir clientes, automatizar procesos y escalar tu negocio.",
    images: [
      "https://res.cloudinary.com/dg1x0cwdc/image/upload/q_auto/f_auto/v1775265697/Summer_Trail_Run_cbkryb.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${interTight.variable} antialiased`}>
      <body className="min-h-screen overflow-x-clip font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
