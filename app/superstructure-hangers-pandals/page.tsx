import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("superstructure-hangers-pandals");

export default function Page() {
  return <ServicePageTemplate slug="superstructure-hangers-pandals" />;
}
