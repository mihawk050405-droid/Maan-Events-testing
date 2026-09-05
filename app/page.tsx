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
