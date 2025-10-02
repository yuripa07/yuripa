import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      {/* <aside className="w-64 bg-foreground border-r min-h-screen border-paragraph/10 p-6 hidden md:flex flex-col items-center gap-8">
        oi
      </aside> */}

      <div className="w-full">
        <main className="font-sans max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-10 md:gap-18">
          {/* intro */}
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex flex-col gap-1">
              <h1 className="text-5xl font-bold">Hello! I&apos;m Yuri.</h1>
              <h2 className="text-3xl font-semibold">
                I make{" "}
                <span className="text-paragraph/70 italic">software</span>
              </h2>
            </div>

            <p className="text-lg text-paragraph/70 leading-normal">
              lero lero lalala labubu receba, lero lero lalala labubu receba,
              lero lero lalala labubu receba, lero lero lalala labubu receba
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
                <span>Reach out</span>
              </Link>
            </div>
          </div>

          {/* projects */}
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

          {/* services */}
          <div className="flex flex-col gap-4 border border-paragraph/10 rounded-lg overflow-hidden px-4 py-7">
            <h2 className="text-xl font-bold px-3">Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-2">
              <Link
                href="#"
                className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
              >
                <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

                <div>
                  <h3 className="text-md font-semibold">Landing Page</h3>

                  <p className="text-sm text-paragraph/70">Description</p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
              >
                <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

                <div>
                  <h3 className="text-md font-semibold">Website</h3>

                  <p className="text-sm text-paragraph/70">Description</p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
              >
                <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

                <div>
                  <h3 className="text-md font-semibold">
                    Software Development
                  </h3>

                  <p className="text-sm text-paragraph/70">Description</p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 px-3 py-3 rounded-lg border md:border-transparent md:bg-transparent border-paragraph/7 bg-foreground hover:border-paragraph/7 hover:bg-foreground transition-colors duration-500"
              >
                <div className="aspect-square h-10 w-10 bg-neutral-600 rounded-md"></div>

                <div>
                  <h3 className="text-md font-semibold">Web Design</h3>

                  <p className="text-sm text-paragraph/70">Description</p>
                </div>
              </Link>
            </div>

            <Link
              href={"#"}
              className="mt-1 flex items-center justify-center p-2 rounded-lg border border-paragraph/7 md:bg-foreground font-semibold text-paragraph hover:text-paragraph/70 hover:border-paragraph/7 transition-colors duration-300"
            >
              View all
            </Link>
          </div>

          {/* notes */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Notes</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="#"
                className="bg-foreground border border-paragraph/7 rounded-lg hover:shadow-lg/5 transition-all duration-300 dark:hover:bg-foreground/50"
              >
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Project Title</h3>

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
                  <h3 className="text-xl font-semibold mb-2">Project Title</h3>

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
                  <h3
                    className="text-xl font-semibold mb-2 overflow-ellipsis whitespace-nowrap overflow-hidden"
                    title="The day when i got labubu yeah yeah"
                  >
                    The day when i got labubu yeah yeah this is spam ltes see
                    the title and aaaa
                  </h3>

                  <p className="text-sm text-paragraph/70">
                    Brief description of the project goes here.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* spotify */}
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
          <div className="max-w-5xl mx-auto p-12 flex flex-col-reverse sm:flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-start">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Index</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Notes
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Services</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Landing page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Website
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Web Design
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Social</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/yuripa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.github.com/yuripa07/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://wa.me/+554488299154"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      WhatsApp
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:yuripiresalves@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      E-mail
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Legal</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-b border-t-paragraph/10 py-10 border-b-paragraph/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col gap-4 sm:flex-row items-center justify-between w-full">
                <p className="font-semibold">* Currently working</p>
                <span className="text-8xl text-paragraph/70">
                  {new Date().getHours()}:
                  {new Date().getMinutes() < 10
                    ? `0${new Date().getMinutes()}`
                    : new Date().getMinutes()}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row items-center justify-between text-paragraph/45 text-sm">
              <Link
                href="https://www.youtube.com/watch?v=dJ-Px0dZH8A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-balance hover:underline hover:underline-offset-3 hover:text-paragraph/70 transition-colors duration-500"
              >
                May the love and happiness last forever.
              </Link>

              <span className="hidden sm:inline">
                2025
                {new Date().getFullYear() === 2025
                  ? null
                  : ` - ${new Date().getFullYear()}`}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
