import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="font-sans min-h-screen max-w-5xl mx-auto px-12 py-24 flex flex-col gap-18">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex flex-col gap-1">
            <h1 className="text-5xl font-bold">Hello! I&apos;m Yuri.</h1>
            <h2 className="text-3xl font-semibold">
              I make <span className="text-paragraph/70 italic">software</span>
            </h2>
          </div>

          <p className="text-lg text-paragraph/70 leading-normal">
            lero lero lalala labubu receba, lero lero lalala labubu receba, lero
            lero lalala labubu receba, lero lero lalala labubu receba
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              className="border border-paragraph/10 bg-button-primary text-neutral-100 px-4 py-2 rounded-md font-bold text-sm hover:bg-neutral-900 transition-colors duration-500"
            >
              About me
            </a>
            <a
              href="#"
              className="border border-paragraph/15 bg-transparent text-paragraph px-4 py-2 rounded-md font-normal text-sm hover:bg-neutral-100 transition-colors duration-500"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
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

                <p className="text-sm text-paragraph/70">
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

                <p className="text-sm text-paragraph/70">
                  Brief description of the project goes here.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border border-paragraph/10 rounded-lg overflow-hidden px-4 py-7">
          <h2 className="text-xl font-bold px-3">Notes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="#"
              className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
            >
              <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

              <div>
                <h3 className="text-md font-semibold">Note Title yeah</h3>

                <p className="text-sm text-paragraph/70">Description</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
            >
              <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

              <div>
                <h3 className="text-md font-semibold">Note Title yeah</h3>

                <p className="text-sm text-paragraph/70">Description</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
            >
              <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

              <div>
                <h3 className="text-md font-semibold">Note Title yeah</h3>

                <p className="text-sm text-paragraph/70">Description</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
            >
              <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

              <div>
                <h3 className="text-md font-semibold">Note Title yeah</h3>

                <p className="text-sm text-paragraph/70">Description</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
            >
              <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

              <div>
                <h3 className="text-md font-semibold">Note Title yeah</h3>

                <p className="text-sm text-paragraph/70">Description</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
            >
              <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

              <div>
                <h3 className="text-md font-semibold">Note Title yeah</h3>

                <p className="text-sm text-paragraph/70">Description</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">What I&apos;m listening to</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-paragraph/10 rounded-xl">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1Epntig5dUgcpM?utm_source=generator&theme=0"
                width="100%"
                height="452"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="border border-paragraph/10 rounded-xl">
              <iframe
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1EpR2Rw6Le4gnH?utm_source=generator&theme=0"
                width="100%"
                height="452"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-foreground border-t border-paragraph/7">
        <div className="max-w-5xl mx-auto px-12 py-48">
          <div className="border-t border-b border-t-paragraph/10 py-8 border-b-paragraph/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center justify-between w-full">
              <p>* Currently working</p>
              <span className="text-8xl text-paragraph/70">17:09</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
