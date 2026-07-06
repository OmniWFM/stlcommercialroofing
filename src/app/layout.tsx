import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://stlcommercialroofing.com"),
  title: {
    default: "STL Commercial Roofing | Commercial Roofing Contractor in St. Louis",
    template: "%s | STL Commercial Roofing",
  },
  description:
    "STL Commercial Roofing installs, repairs, and restores commercial roof systems across St. Louis and the metro. TPO, EPDM, metal, coatings, and 24/7 emergency service. Free roof inspections.",
  keywords: [
    "commercial roofing St. Louis",
    "commercial roof repair",
    "TPO roofing",
    "flat roof contractor",
    "roof restoration",
    "emergency roof repair St. Louis",
  ],
  openGraph: {
    title: "STL Commercial Roofing | Commercial Roofing Contractor in St. Louis",
    description:
      "Commercial roof systems installed, repaired, and restored across the St. Louis metro. Free inspections and 24/7 emergency response.",
    url: "https://stlcommercialroofing.com",
    siteName: "STL Commercial Roofing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "STL Commercial Roofing",
    description:
      "Commercial roofing contractor serving the St. Louis metro. Free inspections, 24/7 emergency response.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "STL Commercial Roofing",
    image: "https://stlcommercialroofing.com/og.png",
    telephone: "+1-855-509-1922",
    email: "info@stlcommercialroofing.com",
    url: "https://stlcommercialroofing.com",
    areaServed: "St. Louis Metropolitan Area",
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Louis",
      addressRegion: "MO",
      addressCountry: "US",
    },
    description:
      "Commercial roofing contractor serving St. Louis and the surrounding metro with installation, repair, restoration, and 24/7 emergency service.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
