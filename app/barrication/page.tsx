import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("barrication");

export default function Page() {
  return <ServicePageTemplate slug="barrication" />;
}
