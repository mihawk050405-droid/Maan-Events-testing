import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("exhibition-facades-and-stall-designs");

export default function Page() {
  return <ServicePageTemplate slug="exhibition-facades-and-stall-designs" />;
}
