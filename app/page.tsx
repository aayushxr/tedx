"use client";
import Ex from "@/components/ex";
import ScrambleText from "@/components/scramble";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  console.log(
    "%c Made by Aayush Rajagopalan ",
    "color:white; padding: 2px 4px; border-radius: 4px; background-color: #dc2626",
    "2024 TedxYouth@DPS-MIS, all rights reserved."
  );
  console.log(
    "%c 👀 ",
    "color:white; padding: 2px 4px; border-radius: 4px; background-color: #3be343",
    "If you know what you are doing, contact me https://aayushr.dev/contact"
  );
  return (
    <>
      <main className="justify-center md:h-[100vh] items-center flex-col">
        <div className="container h-full items-center justify-center flex">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
          <div className="flex items-center px-5 justify-center z-20  max-w-6xl">
            <div className=" flex flex-col items-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-[-17rem] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[17rem]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(40.09% 35.86%, 46.02% 35.44%, 18.09% 37.26%, 85.5% 0.1%, 80.7% 2%, 66.66% 37.73%, 54.97% 54.94%, 60.68% 51.62%, 54.79% 32.05%, 12.93% 29.07%, 45.26% 49.38%, 66.98% 29.15%, 61.56% 33.34%, 54.70% 44.44%, 59.93% 40.25%, 66.88% 38.39%)",
                  }}
                  className="relative left-[calc(50%-2rem)] aspect-[1155/678] w-[38.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-red-400 to-red-800 opacity-30 sm:left-[calc(50%-2rem)] sm:w-[72.1875rem]"
                />
              </div>
              <Ex />
              <h1 className="text-3xl md:text-4xl px-10 flex gap-x-1 max-w-5xl relative z-50 text-center font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-7xl xl:leading-tight dark:text-white">
                <ScrambleText text="Beyond" speed={1.3} scrambleIntensity={4} />
                <ScrambleText
                  text="Algorithms"
                  className="inline ml-3 bg-clip-text bg-gradient-to-tr text-transparent from-red-500 to-red-800"
                  speed={1.3}
                  scrambleIntensity={4}
                />
              </h1>
              <p className="pb-2 md:pb-5 px-4 pt-3 text-md md:text-lg max-w-3xl text-center leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                Discover the fusion of AI, sustainability, and human creativity
                in the 10th Edition of TedxYouth@DPSMIS. This edition celebrates
                the harmony of logic and intuition, showcasing how innovation
                transcends precision, driving progress toward a sustainable
                future
              </p>
              <div className="w-full space-x-2 flex justify-center items-center">
                <Link
                  className={buttonVariants({
                    size: "lg",
                    variant: "geist",
                    className: "mt-5",
                  })}
                  href={"https://aayus.me/tedx_register"}
                  target="_blank"
                >
                  Register <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "mt-5 ",
                  })}
                  href="/about"
                  target="_blank"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
