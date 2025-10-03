import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Clarity from "@microsoft/clarity";

import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "YURiPA",
  description: "Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== "undefined") {
    const projectId = "tkk6cu6lj7";
    Clarity.init(projectId);
  }

  return (
    <html lang="en">
      <body className={`${ubuntuSans.variable} min-h-screen antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tkk6cu6lj7");
            `}
        </Script>
      </body>
    </html>
  );
}
