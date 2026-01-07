"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.variable} ${great_vibes.variable} ${nunito.className} ${caveat.variable}`}
      >
        <Providers>
          <div className="relative z-9999 flex max-h-[calc(100vh-1rem)] w-full flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { caveat, great_vibes, inter, nunito } from "./fonts";
