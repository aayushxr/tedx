import type { Metadata } from "next";
import { Inter, Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import { VercelToolbar } from "@vercel/toolbar/next";
import LandingNavbar from "@/components/nav";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
});
const geist = localFont({
  src: "../public/mono.otf",
  variable: "--font-geist",
});
export const metadata: Metadata = {
  title: "TedxYouth@DPSMIS - 2024",
  description:
    "An interschool debate tournament organised by DPS MIS for all high school students in Qatar ",
  openGraph: {
    title: "TedxYouth@DPSMIS - 2024",
    description:
      "An interschool debate tournament organised by DPS MIS for all high school students in Qatar ",
  },
  twitter: {
    title: "TedxYouth@DPSMIS - 2024",
    description:
      "An interschool debate tournament organised by DPS MIS for all high school students in Qatar ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-sans antialiased", inter.className, geist.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="flex font-sans flex-col bg-zinc-100 dark:bg-black text-black dark:text-white h-full min-h-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2] w-full rounded-md  
    items-center   bg-white/[0.96] dark:bg-black/[0.96] antialiased  relative overflow-hidden"
          >
            <LandingNavbar />

            {children}
            <footer className="relative z-20 justify-start container bg-transparent flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 ">
              <p className="text-xs text-zinc-800 dark:text-zinc-200 ">
                2024 DPS Modern Indian School. All rights reserved.
              </p>
              {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-zinc-700 dark:text-zinc-300">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="https://aayushr.dev"
              >
                Made by Aayush Rajagopalan
              </Link>
            </nav> */}
            </footer>
          </div>
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
