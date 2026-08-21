import { ServicePageTemplate, serviceMetadata } from "@/components/templates/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = serviceMetadata("weather-sheds");

export default function Page() {
  return <ServicePageTemplate slug="weather-sheds" />;
}
