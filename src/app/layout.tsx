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
    default: "Zevra — Digital Studio for Bold Brands",
    template: "%s | Zevra",
  },
  description:
    "Zevra is a digital studio building AI-powered software, apps, and digital products that scale. Startup speed, enterprise precision.",
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
    locale: "en_US",
    url: "https://zevra.com",
    siteName: "Zevra",
    title: "Zevra — Digital Studio for Bold Brands",
    description:
      "Zevra is a digital studio building AI-powered software, apps, and digital products that scale. Startup speed, enterprise precision.",
    images: [
      {
        url: "https://res.cloudinary.com/dg1x0cwdc/image/upload/q_auto/f_auto/v1775265697/Summer_Trail_Run_cbkryb.jpg",
        width: 1200,
        height: 630,
        alt: "Zevra — Digital Studio for Bold Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zevra — Digital Studio for Bold Brands",
    description:
      "Zevra is a digital studio building AI-powered software, apps, and digital products that scale.",
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
    <html lang="en" className={`${interTight.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
