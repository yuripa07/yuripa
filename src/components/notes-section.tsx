import Link from "next/link";

export function NotesSection() {
  return (
    <section className="flex flex-col gap-4 border border-paragraph/10 rounded-lg overflow-hidden px-4 py-7">
      <h2 className="text-xl font-bold px-3">Notes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-2">
        <Link
          href="#"
          className="px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
        >
          <div className="overflow-hidden">
            <h3
              className="text-md font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden"
              title="The day when i got labubu yeah yeah"
            >
              Project Title
            </h3>

            <p className="text-sm text-paragraph/70 overflow-ellipsis whitespace-nowrap overflow-hidden">
              Brief description of the project goes here. Brief description of
              the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
        >
          <div className="overflow-hidden">
            <h3
              className="text-md font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden"
              title="The day when i got labubu yeah yeah"
            >
              Project Title
            </h3>

            <p className="text-sm text-paragraph/70 overflow-ellipsis whitespace-nowrap overflow-hidden">
              Brief description of the project goes here. Brief description of
              the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
        >
          <div className="overflow-hidden">
            <h3
              className="text-md font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden"
              title="The day when i got labubu yeah yeah"
            >
              Project Title
            </h3>

            <p className="text-sm text-paragraph/70 overflow-ellipsis whitespace-nowrap overflow-hidden">
              Brief description of the project goes here. Brief description of
              the project goes here.
            </p>
          </div>
        </Link>

        <Link
          href="#"
          className="px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
        >
          <div className="overflow-hidden">
            <h3
              className="text-md font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden"
              title="The day when i got labubu yeah yeah"
            >
              Project Title
            </h3>

            <p className="text-sm text-paragraph/70 overflow-ellipsis whitespace-nowrap overflow-hidden">
              Brief description of the project goes here. Brief description of
              the project goes here.
            </p>
          </div>
        </Link>
      </div>

      <Link
        href={"#"}
        className="mt-1 flex items-center justify-center p-2 rounded-lg border border-paragraph/7 md:bg-foreground font-semibold text-paragraph hover:text-paragraph/70 hover:border-paragraph/7 transition-colors duration-300"
      >
        View all
      </Link>
    </section>
  );
}
