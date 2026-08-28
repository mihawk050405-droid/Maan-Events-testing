import type { Metadata } from "next";
import { services } from "@/content/services";
import {
  ServicePageTemplate,
  serviceMetadata,
} from "@/components/templates/ServicePageTemplate";

/**
 * One route for all ten services. Every page is generated from
 * content/services.ts, so adding a service there adds its page here —
 * no new file, no duplicated markup.
 */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Anything outside generateStaticParams is a 404 rather than a
// render-on-request miss: the service list is fixed at build time.
export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  return serviceMetadata(slug);
}

export default async function Page(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  return <ServicePageTemplate slug={slug} />;
}
