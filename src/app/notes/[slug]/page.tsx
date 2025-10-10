import { PortableText, PortableTextBlock } from "next-sanity";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { MoveLeft } from "lucide-react";
import { myPortableTextComponents } from "@/components/portable-text-components";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { notFound } from "next/navigation";

const options = { next: { revalidate: 30 } };

export interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  body: PortableTextBlock[];
  author: {
    name: string;
    slug: string;
    image: SanityImageSource;
  };
  categories: {
    _id: string;
    title: string;
  }[];
}

async function getPost(slug: string): Promise<Post> {
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  ...,
  "author": author->{
    name,
    "slug": slug.current,
    image
  },
  "categories": categories[]->{
    _id,
    title
  }
}`;

  const post = await client.fetch(POST_QUERY, { slug }, options);
  return post;
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post: Post = await getPost((await params).slug);

  if (!post) {
    notFound();
  }

  const publishedAt = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const updatedAt = new Date(post._updatedAt).toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

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
            <div className="flex flex-col gap-2">
              {post.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category._id}
                      className="bg-foreground border border-paragraph/10 text-paragraph/80 text-xs font-medium px-3 py-1 rounded-lg mb-1"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <p className="text-sm text-paragraph-secondary">
                  Published: {publishedAt}
                </p>
                {/* <p className="text-sm text-paragraph-secondary">
                  {post.author.name}
                </p> */}

                {/* {post._updatedAt !== post.publishedAt && (
                  <p className="text-sm text-paragraph-secondary">
                    Updated: {updatedAt}
                  </p>
                )} */}
              </div>
            </div>

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
