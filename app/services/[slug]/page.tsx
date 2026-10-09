import type { Metadata } from "next";
import { infraDisciplines } from "@/content/infrastructure";
import {
  InfraServiceTemplate,
  infraMetadata,
} from "@/components/templates/InfraServiceTemplate";

/**
 * One route for all thirteen infrastructure services. Every page is
 * generated from content/infrastructure.ts, so adding a service there adds
 * its page here — no new file, no duplicated markup.
 */
export function generateStaticParams() {
  return infraDisciplines.map((s) => ({ slug: s.slug }));
}

// Anything outside generateStaticParams is a 404 rather than a
// render-on-request miss: the service list is fixed at build time.
export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  return infraMetadata(slug);
}

export default async function Page(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  return <InfraServiceTemplate slug={slug} />;
}
