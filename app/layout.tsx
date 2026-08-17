import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { brand } from "@/data/brand";
import { contacts } from "@/data/contacts";
import { seo } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: "%s | TruckTab Europe",
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.url,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Планшет Samsung Galaxy Tab для далекобійників і навігації TIR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TruckTabEurope",
    creator: "@TruckTabEurope",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: brand.name,
    description: brand.description,
    url: seo.url,
    telephone: contacts.phoneDisplay,
    areaServed: "Europe",
    knowsAbout: [
      "Samsung Galaxy Tab for truck drivers",
      "TIR navigation tablet",
      "Truck navigation",
    ],
  };

  return (
    <html lang="uk" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
