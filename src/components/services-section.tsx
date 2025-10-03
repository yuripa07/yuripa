import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="#"
          className="bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:bg-foreground/50"
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Landing Page</h3>

            <p className="text-sm text-paragraph/70">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:bg-foreground/50"
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Website</h3>

            <p className="text-sm text-paragraph/70">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:shadow-none dark:hover:border-paragraph/10 dark:hover:bg-foreground/50"
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 overflow-ellipsis whitespace-nowrap overflow-hidden">
              Software Development
            </h3>

            <p className="text-sm text-paragraph/70">
              Brief description of the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:shadow-none dark:hover:border-paragraph/10 dark:hover:bg-foreground/50"
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 overflow-ellipsis whitespace-nowrap overflow-hidden">
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
