// This Page was displayed on stage during the entire event
// https://tedxyouthdpsmis.com/slide


"use client";
import Ex from "@/components/ex";
import RotatingScrambleText from "@/components/ro-scramble";
import ScrambleText from "@/components/scramble";
import Image from "next/image";
import { useEffect } from "react";

export default function LandingPage() {

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
              <h1 className="text-3xl md:text-6xl px-15 mt-10 flex gap-x-1 max-w-5xl relative z-50 text-center font-bold leading-snug tracking-tight text-zinc-900 lg:text-6xl lg:leading-tight xl:text-8xl xl:leading-tight dark:text-white">
                <RotatingScrambleText text="Beyond" speed={0.5} scrambleIntensity={4} />
                <RotatingScrambleText
                  text="Algorithms"
                  className="inline ml-3 bg-clip-text bg-gradient-to-tr text-transparent from-red-500 to-red-800"
                  speed={0.5}
                  scrambleIntensity={4}
                />
              </h1>
              <Image
                src="https://cdn.aayus.me/tedx/white.png"
                width={800}
                height={200}
                alt="logo"
                className="absolute bottom-0 right-0 w-80 h-16 object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
