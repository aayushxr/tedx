// A different layout is needed for the slides, as they do not have a navbar or footer

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
  src: "../../public/mono.otf",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Beyond Algorithms",
  description:
    "The 10th edition of TedxYouth@DPSMIS, celebrating a decade of inspiring ideas and transformative stories that push boundaries and spark change.",
  openGraph: {
    title: "Beyond Algorithms - TedxYouth@DPSMIS - 2024",
    description:
      "The 10th edition of TedxYouth@DPSMIS, celebrating a decade of inspiring ideas and transformative stories that push boundaries and spark change.",
    url: "https://tedxyouthdpsmis.com",
    siteName: "TedxYouth@DPSMIS",
    images: [
      {
        url: "https://cdn.aayu.sh/tedx/og.png",
        width: 1200,
        height: 630,
        alt: "TedxYouth@DPSMIS - Beyond Algorithms",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Algorithms - TedxYouth@DPSMIS - 2024",
    description:
      "The 10th edition of TedxYouth@DPSMIS, celebrating a decade of inspiring ideas and transformative stories that push boundaries and spark change.",
    images: [
      "https://cdn.aayu.sh/tedx/og.png",
    ],
  },
  icons: {
    icon: "/favicon.ico", // Replace with actual favicon path
    apple: "/favicon.ico", // Replace with actual Apple touch icon path
    shortcut: "/favicon.ico", // Replace with actual shortcut icon path
  },
  themeColor: "#b91c1c",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tedxyouthdpsmis.com", // Ensure canonical URL for SEO
    languages: {
      "en-US": "https://tedxyouthdpsmis.com",
    },
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
            className="flex font-sans flex-col bg-zinc-100 dark:bg-black text-black dark:text-white h-full min-h-screen dark:bg-dot-white/[0.5] bg-dot-black/[0.9] w-full rounded-md  
    items-center   bg-white/[0.96] dark:bg-black/[0.96] antialiased  relative overflow-hidden"
          >

            {children}
            
          </div>
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
