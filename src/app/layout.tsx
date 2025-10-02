import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from "../../theme";
import Link from "next/link";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "YURiPA",
  description: "Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuSans.variable} min-h-screen antialiased`}>
        <aside className="hidden md:block">
          <div className="fixed top-1/2 -translate-y-1/2 left-0 flex flex-col items-center gap-4 px-3 py-6 bg-foreground border border-paragraph/10 rounded-r-lg">
            <ThemeSwitcher />
            <Link
              href="#"
              className="w-8 h-8 bg-neutral-600 rounded-md hover:bg-neutral-500 transition-colors duration-300"
              aria-label="LinkedIn"
            ></Link>
            <Link
              href="#"
              className="w-8 h-8 bg-neutral-600 rounded-md hover:bg-neutral-500 transition-colors duration-300"
              aria-label="GitHub"
            ></Link>
          </div>
        </aside>

        {children}
      </body>
    </html>
  );
}
