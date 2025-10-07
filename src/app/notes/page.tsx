import { Footer } from "@/components/footer";
import { client } from "@/lib/sanity";
import { MoveLeft } from "lucide-react";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "excerpt": pt::text(body[_type == "block"][0..1])
}`;

const options = { next: { revalidate: 30 } };

export default async function NotesPage() {
  const notes = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <>
      <main className="font-sans max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-18">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-paragraph py-2 font-bold text-sm group text-paragraph/50 transition-colors duration-500"
            >
              <MoveLeft
                size={18}
                className="group-hover:-translate-x-1 transition-all duration-300"
              />
              <span className="group-hover:translate-x-0.5 transition-all duration-300">
                Back home
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">Notes</h2>

            <div className="flex flex-col border border-paragraph/10 rounded-lg">
              {notes.map((note, index) => (
                <Link
                  key={note._id}
                  href={`/notes/${note.slug}`}
                  className={`
                  p-8 flex flex-col gap-2 
                  hover:bg-foreground transition-colors duration-500 group 
                  ${index > 0 ? "border-t border-paragraph/10" : ""}
                `}
                >
                  <h4 className="text-xl font-bold md:text-paragraph-secondary group-hover:text-paragraph transition-colors duration-500">
                    {note.title}
                  </h4>
                  <p className="text-paragraph-secondary group-hover:text-paragraph transition-colors duration-500">
                    {note.excerpt.substring(0, 150)}...
                  </p>
                  <span className="text-sm text-paragraph/50 mt-2">
                    {new Date(note.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
