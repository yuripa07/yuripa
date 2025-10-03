import { Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-2 max-w-2xl">
      <h1 className="text-5xl font-bold">Hello! I&apos;m Yuri.</h1>

      <p className="text-lg text-paragraph/70 leading-normal">
        Software Developer focused on building high-impact web solutions with
        modern technologies. I turn business challenges into efficient and
        scalable apps.
      </p>

      <div className="flex items-center gap-4 mt-4">
        <Link
          href="/about"
          className="border border-paragraph/10 bg-button-primary text-neutral-100 px-4 py-2 rounded-md font-bold text-sm hover:bg-neutral-700 transition-colors duration-500"
        >
          About me
        </Link>
        <Link
          href="mailto:yuripiresalves@gmail.com"
          className="flex items-center gap-3 border border-paragraph/15 bg-transparent text-paragraph px-4 py-2 rounded-md font-normal text-sm hover:bg-foreground transition-colors duration-500"
        >
          <Mail size={18} />
          <span className="font-semibold text-paragraph/90">Get in touch</span>
        </Link>
      </div>
    </section>
  );
}
