import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/lib/sanity";

interface Props {
  page: LegalPage;
}

export const LegalPageLayout = ({ page }: Props) => {
  return (
    <>
      <main className="font-sans max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-12">
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

        <div>
          <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
          <p className="text-paragraph/60 mb-8">
            Last Updated:{" "}
            {new Date(page.lastUpdated).toLocaleDateString("en-US", {
              timeZone: "UTC",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <PortableText value={page.body} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
