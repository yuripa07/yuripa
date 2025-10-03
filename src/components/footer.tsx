import Link from "next/link";
import { Clock } from "./clock";
import { CurrentlyStatus } from "./currently-status";
import { ThemeSelector } from "./theme-selector";

export function Footer() {
  return (
    <footer className="bg-foreground border-t border-paragraph/7">
      <div className="max-w-5xl mx-auto p-12 flex flex-col-reverse sm:flex-col gap-12">
        <div className="grid grid-cols-2 gap-8 mx-auto sm:mx-0 sm:grid-cols-4 md:flex justify-between">
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
            <h3 className="font-bold">Contact</h3>
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
            <CurrentlyStatus />
            <Clock />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-8 sm:flex-row items-center justify-between text-paragraph/45 text-sm">
          <Link
            href="https://www.youtube.com/watch?v=dJ-Px0dZH8A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-balance hover:underline hover:underline-offset-3 hover:text-paragraph/70 transition-colors duration-500"
          >
            May the love and happiness last forever.
          </Link>

          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:inline">
              2025
              {new Date().getFullYear() === 2025
                ? null
                : ` - ${new Date().getFullYear()}`}
            </span>

            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  );
}
