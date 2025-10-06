import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { MoveLeft } from "lucide-react";
import { myPortableTextComponents } from "@/components/portable-text-components";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  return (
    <>
      <main className="font-sans max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-18">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center">
            <Link
              href="/notes"
              className="flex items-center gap-2 hover:text-paragraph py-2 font-bold text-sm group text-paragraph/50 transition-colors duration-500"
            >
              <MoveLeft
                size={18}
                className="group-hover:-translate-x-1 transition-all duration-300"
              />
              <span className="group-hover:translate-x-0.5 transition-all duration-300">
                All notes
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
            <p className="text-xl font-bold mb-8">{post.author._ref}</p>

            <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
            <div className="prose md:prose-lg max-w-none">
              {Array.isArray(post.body) && (
                <PortableText
                  value={post.body}
                  components={myPortableTextComponents}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
