// The Layout is where the dotted background, navbar, and footer are defined. 
// Analytics and Toaster components are also included here.


import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LandingNavbar from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

// Import the fonts

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
});
const geist = localFont({
  src: "../../public/mono.otf",
  variable: "--font-geist",
});


// Define the metadata for the site
// This is used for SEO and social media sharing

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
        url: "https://cdn.aayus.me/tedx/og.png",
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
      "https://cdn.aayus.me/tedx/og.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  themeColor: "#b91c1c",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tedxyouthdpsmis.com",
    languages: {
      "en-US": "https://tedxyouthdpsmis.com",
    },
  },
};

// Define the JSON-LD schema for the event
// This is used for event schema markup to show up in Google Events 
// https://developers.google.com/search/docs/appearance/structured-data/event

const jsonLd =
{
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Beyond Algorithms - TedxYouth@DPSMIS - 2024",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  description:
    "The 10th edition of TedxYouth@DPSMIS, celebrating a decade of inspiring ideas and transformative stories.",
  startDate: "2024-12-15T17:00:00+03:00", // Replace with the event date and time
  endDate: "2024-12-15T20:00:00+03:00", // Replace with the event date and time
  location: {
    "@type": "Place",
    name: "DPS Modern Indian School",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near pearl Roundabout",
      addressLocality: "Al Wakrah",
      addressRegion: "Qatar",
      addressCountry: "QA",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "DPS Modern Indian School",
    url: "https://www.dpsmisdoha.com", // Replace with actual school URL
  },
  image: [
    "https://cdn.aayus.me/tedx/og.png",
  ],
}



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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*  The Theme is set to dark by default with no way to change it. 
             To test it in light mode, one can change the class of the html
              tag to `light` */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* The Dot Background with the fade to the black background */}
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
            </footer>
          </div>
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
