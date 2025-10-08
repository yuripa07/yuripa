import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  description:
    "Software Developer focused on building high-impact web solutions with modern technologies. I turn business challenges into efficient and scalable apps.",
  keywords:
    "Software Developer, Software, Developer, Yuri, Yuri Pires Alves, Yuri Alves, Yuri Pires, yuripa, YURiPA, yuripa07, React, Frontend, Front-end, React, ReactJS, Next, Next.js, Node, Node.js, TypeScript, JavaScript, HTML, CSS, Web Design, Design, Web Developer, Desenvolvedor de Software, Desenvolvedor, Programador, App, Aplicativo, Landing Page, Site, Website, Maringá, Paraná, Maringá Paraná, Brasil, Brazil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KL8CN8G2');
          `}
        </Script>
      </head>

      <body className={`${ubuntuSans.variable} min-h-screen antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KL8CN8G2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
