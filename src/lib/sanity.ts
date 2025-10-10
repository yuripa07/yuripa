import { createClient, PortableTextBlock } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "wverf1lp",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export interface LegalPage {
  title: string;
  lastUpdated: string;
  body: PortableTextBlock[];
}

const LEGAL_PAGE_QUERY = `*[_type == "legalPage" && slug.current == $slug][0]{
  title,
  lastUpdated,
  body
}`;

export async function getLegalPage(slug: string): Promise<LegalPage> {
  const page = await client.fetch(LEGAL_PAGE_QUERY, { slug });
  return page;
}
