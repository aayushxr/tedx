import LandingNavbar from "@/components/nav";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="justify-center h-full items-center flex-col">
      <div className="container h-full items-center justify-center flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <div className="flex items-center justify-center z-20  max-w-6xl">
          <div className=" ">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-[-2rem] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[1rem]"
            >
              <div
                style={{
                  clipPath:
                    "polygon(40.09% 35.86%, 46.02% 35.44%, 18.09% 37.26%, 85.5% 0.1%, 80.7% 2%, 66.66% 37.73%, 54.97% 54.94%, 60.68% 51.62%, 54.79% 32.05%, 12.93% 29.07%, 45.26% 49.38%, 66.98% 29.15%, 61.56% 33.34%, 54.70% 44.44%, 59.93% 40.25%, 66.88% 38.39%)",
                }}
                className="relative left-[calc(50%-2rem)] aspect-[1155/678] w-[38.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-emerald-400 to-emerald-800 opacity-30 sm:left-[calc(50%-2rem)] sm:w-[72.1875rem]"
              />
            </div>
            <h1 className="text-6xl max-w-5xl relative z-50 text-center font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              War of Words Debate Championship
            </h1>
            <p className="py-5 text-lg text-center leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
              short desc abt the event
            </p>
            <div className="w-full space-x-2 flex justify-center items-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  variant: "geist",
                  className: "mt-5",
                })}
                href={"/"}
                target="_blank"
              >
                Team Registrations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "mt-5",
                })}
                href="/schedule"
                target="_blank"
              >
                Schedule <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
