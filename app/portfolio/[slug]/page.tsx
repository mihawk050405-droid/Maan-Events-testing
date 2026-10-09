import type { Metadata } from "next";
import { eventCategories } from "@/content/event-categories";
import {
  CategoryPageTemplate,
  categoryMetadata,
} from "@/components/templates/CategoryPageTemplate";

/**
 * One page per event category, generated from content/event-categories.ts.
 * These used to live under /services/ — next.config.ts redirects the old
 * URLs here.
 */
export function generateStaticParams() {
  return eventCategories.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/portfolio/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  return categoryMetadata(slug);
}

export default async function Page(props: PageProps<"/portfolio/[slug]">) {
  const { slug } = await props.params;
  return <CategoryPageTemplate slug={slug} />;
}
