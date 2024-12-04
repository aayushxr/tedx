import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            Art of <span className="text-red-600">Flaws</span>
          </h3>
          <div className="">
            <p>
              Our imperfections are like strokes on a canvas, creating a
              tapestry of authenticity that celebrates vulnerability and the
              strength of embracing our true selves. TEDxYouth@DPSMIS explores
              how challenges and mistakes become opportunities for growth,
              transforming our lives into masterpieces painted with resilience
              and self-discovery.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            Tangential <span className="text-red-600">Thoughts</span>
          </h3>
          <div className="">
            <p>
              Solving life’s problems often requires introspection, combining
              knowledge, and adapting to new situations. Tangential thinking
              sparks transformative ideas, while holistic education fosters
              curiosity and interdisciplinary learning. By embracing
              interconnected skills, we can solve complex challenges and better
              understand ourselves and the world.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            Changing <span className="text-red-600">Currents</span>
          </h3>
          <div className="">
            <p>
              Changing Currents captures life&apos;s unpredictability, showing
              how even in the harshest times, humanity rises to adapt and
              innovate. From reinventing entrenched beliefs to driving global
              progress in climate, infrastructure, and social justice, we evolve
              alongside the deepest tides. This event invites you to shape these
              currents for a better future.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2021",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            Addressing <span className="text-red-600">Adversity</span>
          </h3>
          <div className="">
            <p>
              Adversity, as Mark Manson highlights, gives purpose to life’s
              inevitable suffering. It serves as a catalyst for growth, teaching
              lessons and inspiring change. While its uncertainty can be
              daunting, addressing adversity requires introspection and action.
              By understanding its roots and impact, we can transform challenges
              into opportunities for personal and collective strength.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2019",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            The Resolve To <span className="text-red-600">Reform</span>
          </h3>
          <div className="">
            <p>
              Adversity, as Mark Manson highlights, gives purpose to life’s
              inevitable suffering. It serves as a catalyst for growth, teaching
              lessons and inspiring change. While its uncertainty can be
              daunting, addressing adversity requires introspection and action.
              By understanding its roots and impact, we can transform challenges
              into opportunities for personal and collective strength.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2018",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            Decoding <span className="text-red-600">Deceptions</span>
          </h3>
          <div className="">
            <p>
              Adversity, as Mark Manson highlights, gives purpose to life’s
              inevitable suffering. It serves as a catalyst for growth, teaching
              lessons and inspiring change. While its uncertainty can be
              daunting, addressing adversity requires introspection and action.
              By understanding its roots and impact, we can transform challenges
              into opportunities for personal and collective strength.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2017",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            Breaking Through <span className="text-red-600">Inhibitions</span>
          </h3>
          <div className="">
            <p>
              Adversity, as Mark Manson highlights, gives purpose to life’s
              inevitable suffering. It serves as a catalyst for growth, teaching
              lessons and inspiring change. While its uncertainty can be
              daunting, addressing adversity requires introspection and action.
              By understanding its roots and impact, we can transform challenges
              into opportunities for personal and collective strength.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2016",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            Transcend and <span className="text-red-600">Include</span>
          </h3>
          <div className="">
            <p>
              Adversity, as Mark Manson highlights, gives purpose to life’s
              inevitable suffering. It serves as a catalyst for growth, teaching
              lessons and inspiring change. While its uncertainty can be
              daunting, addressing adversity requires introspection and action.
              By understanding its roots and impact, we can transform challenges
              into opportunities for personal and collective strength.
            </p>
            <div className="grid grid-cols-2 mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2015",
      content: (
        <div>
          <h3 className="text-xl mb-5 md:text-5xl font-bold text-neutral-500 dark:text-neutral-200 ">
            The Power of <span className="text-red-600">Uncertainty</span>
          </h3>
          <div className="">
            <p>
              Adversity, as Mark Manson highlights, gives purpose to life’s
              inevitable suffering. It serves as a catalyst for growth, teaching
              lessons and inspiring change. While its uncertainty can be
              daunting, addressing adversity requires introspection and action.
              By understanding its roots and impact, we can transform challenges
              into opportunities for personal and collective strength.
            </p>
            <div className="grid grid-cols-2 h-full mt-10 gap-4">
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover  md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://cdn.aayus.me/wallpaper.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },


  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
