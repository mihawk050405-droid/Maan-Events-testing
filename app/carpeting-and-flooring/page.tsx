import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("carpeting-and-flooring");

export default function Page() {
  return <ServicePageTemplate slug="carpeting-and-flooring" />;
}
