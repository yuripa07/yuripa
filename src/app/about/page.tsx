import { ExternalLink, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-3 md:gap-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hello! I&apos;m Yuri.
              </h1>

              <div className="flex flex-col gap-3 md:gap-4">
                <p className="text-base md:text-lg text-paragraph/70 leading-normal">
                  lero lero lalala labubu receba, lero lero lalala labubu
                  receba, lero lero lalala labubu receba, lero lero lalala
                  labubu receba, lero lero lalala labubu receba, lero lero
                  lalala labubu receba, lero lero lalala labubu receba, lero
                  lero lalala labubu receba, lero lero lalala labubu receba.
                </p>
                <p className="text-base md:text-lg text-paragraph/70 leading-normal">
                  lero lero lalala labubu receba, lero lero lalala labubu
                  receba, lero lero lalala labubu receba, lero lero lalala
                  labubu receba, lero lero lalala labubu receba, lero lero
                  lalala labubu receba, lero lero lalala labubu receba, lero
                  lero lalala labubu receba, lero lero lalala labubu receba.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold">Experiences</h2>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://db1global.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/db1.png"
                          alt="DB1 Global Software Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold group-hover:underline group-hover:underline-offset-2 flex gap-1">
                          <span>DB1 Global Software</span>
                          <ExternalLink
                            size={14}
                            className="md:hidden group-hover:block"
                          />
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Maringá, Brazil
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Feb 2025 - Present
                        </span>
                      </div>
                    </Link>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Feb 2025 - Present
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold">Software Developer</h4>

                    <p className="text-paragraph/70 leading-normal">
                      lero lero lalala labubu receba, lero lero lalala labubu
                      receba, lero lero lalala labubu receba, lero lero lalala
                      labubu receba, lero lero lalala labubu receba, lero lero
                      lalala labubu receba, lero lero lalala labubu receba, lero
                      lero lalala labubu receba, lero lero lalala labubu receba.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Tech stack: React, TypeScript, .NET, PostgreSQL, Azure
                      Devops, AWS
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://cadmus.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/cadmus.png"
                          alt="Cadmus Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold group-hover:underline group-hover:underline-offset-2 flex gap-1">
                          <span>Cadmus</span>
                          <ExternalLink
                            size={14}
                            className="md:hidden group-hover:block"
                          />
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Remote
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Nov 2021 - Jul 2022
                        </span>
                      </div>
                    </Link>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Nov 2021 - Jul 2022
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold">
                      Full-stack Developer Intern
                    </h4>

                    <p className="text-paragraph/70 leading-normal">
                      lero lero lalala labubu receba, lero lero lalala labubu
                      receba, lero lero lalala labubu receba, lero lero lalala
                      labubu receba, lero lero lalala labubu receba, lero lero
                      lalala labubu receba, lero lero lalala labubu receba, lero
                      lero lalala labubu receba, lero lero lalala labubu receba.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Tech stack: React, JavaScript, Node.js, MongoDB
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://vgeducacional.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/vg.png"
                          alt="VG Educacional Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold group-hover:underline group-hover:underline-offset-2 flex gap-1">
                          <span>VG Educacional</span>
                          <ExternalLink
                            size={14}
                            className="md:hidden group-hover:block"
                          />
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Maringá, Brazil
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Jul 2021 - Nov 2021
                        </span>
                      </div>
                    </Link>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Jul 2021 - Nov 2021
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold">
                      Front-end Developer Intern
                    </h4>

                    <p className="text-paragraph/70 leading-normal">
                      lero lero lalala labubu receba, lero lero lalala labubu
                      receba, lero lero lalala labubu receba, lero lero lalala
                      labubu receba, lero lero lalala labubu receba, lero lero
                      lalala labubu receba, lero lero lalala labubu receba, lero
                      lero lalala labubu receba, lero lero lalala labubu receba.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Tech stack: Next.js, Figma, Webflow
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold">Education</h2>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/uem.png"
                          alt="Universidade Estadual de Maringá Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold">
                          Universidade Estadual de Maringá
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Maringá, Brazil
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Aug 2020 - Feb 2025
                        </span>
                      </div>
                    </div>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Aug 2020 - Feb 2025
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold">
                      Bachelor&apos;s degree, Software Engineering
                    </h4>

                    <p className="text-paragraph/70 leading-normal">
                      lero lero lalala labubu receba, lero lero lalala labubu
                      receba, lero lero lalala labubu receba, lero lero lalala
                      labubu receba, lero lero lalala labubu receba, lero lero
                      lalala labubu receba, lero lero lalala labubu receba, lero
                      lero lalala labubu receba, lero lero lalala labubu receba.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Tech stack: React, TypeScript, .NET, PostgreSQL, Azure
                      Devops, AWS
                    </p>
                  </div>
                </div>
              </div>
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
                    href="#"
                    className="text-sm text-paragraph/70 hover:text-paragraph transition-colors duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
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
    </>
  );
}
