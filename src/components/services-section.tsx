import {
  GitCompareArrows,
  Monitor,
  MousePointer2,
  SplinePointer,
} from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="#"
          className="group flex items-center gap-4 p-4 bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:bg-foreground/50"
        >
          <div className="aspect-square h-10 w-10 grid place-content-center bg-neutral-700 rounded-md">
            <Monitor
              className="text-neutral-50 group-hover:scale-110 transition-transform duration-300"
              size={20}
            />
          </div>

          <div>
            <h3 className="text-md font-semibold">Landing Page</h3>

            <p className="text-sm text-paragraph/70">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="group flex items-center gap-4 p-4 bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:shadow-none dark:hover:border-paragraph/10 dark:hover:bg-foreground/50"
        >
          <div className="aspect-square h-10 w-10 grid place-content-center bg-neutral-700 rounded-md">
            <GitCompareArrows
              className="text-neutral-50 group-hover:scale-110 transition-transform duration-300"
              size={20}
            />
          </div>

          <div>
            <h3 className="text-md font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden">
              Software Development
            </h3>

            <p className="text-sm text-paragraph/70">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="group flex items-center gap-4 p-4 bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:bg-foreground/50"
        >
          <div className="aspect-square h-10 w-10 grid place-content-center bg-neutral-700 rounded-md">
            <MousePointer2
              className="text-neutral-50 group-hover:scale-110 transition-transform duration-300"
              size={20}
            />
          </div>

          <div>
            <h3 className="text-md font-semibold">Website</h3>

            <p className="text-sm text-paragraph/70">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="group flex items-center gap-4 p-4 bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:shadow-none dark:hover:border-paragraph/10 dark:hover:bg-foreground/50"
        >
          <div className="aspect-square h-10 w-10 grid place-content-center bg-neutral-700 rounded-md">
            <SplinePointer
              className="text-neutral-50 group-hover:scale-110 transition-transform duration-300"
              size={20}
            />
          </div>

          <div>
            <h3 className="text-md font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden">
              Web Design
            </h3>

            <p className="text-sm text-paragraph/70">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
