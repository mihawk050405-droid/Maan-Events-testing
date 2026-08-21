import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("pagodas-tents");

export default function Page() {
  return <ServicePageTemplate slug="pagodas-tents" />;
}
