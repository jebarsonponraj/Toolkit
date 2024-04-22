'use client'
import "@styles/globals.css";
import { TopNav } from "@components/navbar/TopNav";
import HorizontalNavbar from "@components/navbar/HorizontalNavbar";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import Particles from "@components/particles/Particles";

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  const shouldHideTopNav = pathname === "/finder" ? false : true;
  const shouldHideParticles = pathname === "/roadmap/interview" ? false : true;



  return (
    <html lang="en">
       <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tooolkit</title>
      </head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9MBD9WCVQT" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9MBD9WCVQT');
        `}
      </Script>
      <body>
        <main className="app">
          {shouldHideParticles && <Particles/>}
          {shouldHideTopNav && <TopNav />}
          {children}
          <HorizontalNavbar />
          <Analytics />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
