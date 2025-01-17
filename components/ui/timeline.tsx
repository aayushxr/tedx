// Timeline component is used to display the previous events of TEDxYouth@DPSMIS.
// Uses framer-motion for animations and tailwindcss for styling.

"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: any;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Adjust the transform to ensure color visibility across more elements
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.01, 1, 1],
    [0, 1, 1, 1]
  );

  return (
    <div className="w-full" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <div>
          <h1 className="text-3xl gap-x-3 relative  text-left font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Previous <span className="text-red-600 inline-flex">TEDx</span>
            Youth@DPSMIS Events
          </h1>
        </div>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-200">
                {item.title}
              </h3>
              <div>
                <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
                  {item.content.title}
                </h3>
                <div className="">
                  <p>{item.content.desc}</p>
                  <div className="grid grid-cols-2 h-full mt-10 gap-4">
                    {item.content.images.map((image:string, index:any) => (
                      <Image
                        src={image}
                        alt="image"
                        width={500}
                        key={index}                 
                        height={500}
                        className="rounded-lg object-cover  md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-700 via-rose-700 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
