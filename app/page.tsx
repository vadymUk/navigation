import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Benefits } from "@/components/Benefits";
import { Products } from "@/components/Products";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Applications } from "@/components/Applications";
import { UseCases } from "@/components/UseCases";
import { Mounts } from "@/components/Mounts";
import { VideoSection } from "@/components/VideoSection";
import { HowToOrder } from "@/components/HowToOrder";
import { Contact, FAQ } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { seo } from "@/data/site";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
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
};

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustBar />
        <Benefits />
        <Products />
        <WhatYouGet />
        <Applications />
        <UseCases />
        <Mounts />
        <VideoSection />
        <HowToOrder />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
