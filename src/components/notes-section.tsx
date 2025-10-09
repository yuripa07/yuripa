import { client } from "@/lib/sanity";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...4]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export async function NotesSection() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section className="flex flex-col gap-4 border border-paragraph/10 rounded-lg overflow-hidden px-4 py-7">
      <h2 className="text-xl font-bold px-3">Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-2">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/notes/${post.slug.current}`}
            className="px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
            title={post.title}
          >
            <div className="overflow-hidden">
              <h3 className="text-md font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden">
                {post.title}
              </h3>

              <p className="text-sm text-paragraph-secondary overflow-ellipsis whitespace-nowrap overflow-hidden">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/notes"
        className="mt-1 flex items-center justify-center p-2 rounded-lg border border-paragraph/7 md:bg-foreground font-semibold text-paragraph hover:text-paragraph-secondary hover:border-paragraph/7 transition-colors duration-300"
      >
        View all
      </Link>
    </section>
  );
}
