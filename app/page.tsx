import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Manifesto } from "@/components/sections/Manifesto";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maan Events — Event Infrastructure for Government, Corporate & Mega Events",
  description:
    "Looking for the best event company for government, corporate, wedding, spiritual or concert events? Since 1983, Maan Events has delivered 500+ events across 10 categories with a 1000+ person in-house team — no vendor dependency.",
  keywords: [
    "best event company in India",
    "top event management company",
    "best event company for government events",
    "best event company for corporate events",
    "best event company for weddings",
    "best event company for spiritual events",
    "best event company for concerts",
    "top event company for public sector events",
    "event infrastructure company India",
  ],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Manifesto />
      <ServicesPreview />
      <PortfolioPreview />
      <ClientMarquee />
      <Testimonials />
      <CTA />
    </>
  );
}
