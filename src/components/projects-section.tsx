import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">New Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          href="#"
          className="bg-foreground border border-paragraph/7 rounded-lg overflow-hidden group"
        >
          <div className="h-56 overflow-hidden">
            <Image
              src="/image.png"
              alt=""
              width="1920"
              height="1080"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>

            <p className="text-sm text-paragraph-secondary">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="bg-foreground border border-paragraph/7 rounded-lg overflow-hidden group"
        >
          <div className="h-56 overflow-hidden">
            <Image
              src="/image.png"
              alt=""
              width="1920"
              height="1080"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>

            <p className="text-sm text-paragraph-secondary">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
