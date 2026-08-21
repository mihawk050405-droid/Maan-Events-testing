import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("aluminium-structure-and-hangers");

export default function Page() {
  return <ServicePageTemplate slug="aluminium-structure-and-hangers" />;
}
