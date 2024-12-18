"use client";

export default function About() {
  return (
    <main className="flex-1 flex-col">
      <div className="container h-full flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <div className="flex items-start justify-center z-20  max-w-6xl">
          <div className=" pt-12 md:pt-28 ">
            <div className="flex items-center justify-center gap-x-5 max-w-4xl">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-3xl sm:text-5xl flex gap-x-3 relative z-50 text-center font-bold font-geist leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-7xl xl:leading-tight dark:text-white">
                  Beyond
                  <span className="text-red-600 inline-flex"> Algorithms</span>
                </h1>
                <h1 className="text-xl relative z-50 text-center font-normal leading-snug tracking-tight text-zinc-900 lg:text-xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
                  10th Edition of
                  <span className="text-red-600 ml-1 font-bold inline-flex">TEDx</span>
                  Youth@DPSMIS
                </h1>
              </div>
            </div>
            <div className="relative flex z-50 items-center justify-center  ">
              <div className="max-w-4xl pt-8">
                <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                  Inside codes and calculations lie the human soul that must
                  stop for a while, reflect, and experience its reality before
                  one sees algorithms shape life through their code.
                  <br />
                  <br />
                  Beyond Algorithms takes the human mind on its desired journey
                  to technology, highlighting issues of creativity, empathy, and
                  human instinct. Human thought is endowed with unique
                  faculties, including imagination, storytelling, and emotional
                  intelligence, the likes of which do not appear in any
                  algorithm.
                  <br />
                  <br />
                  More than that, the ideogram seems to usher in welcome changes
                  in technology, relating to the way technology and
                  relationships are perceived within personal and social spheres
                  or decisions. Living through that prism will be a reminder to
                  stories that showcase new ethical, inclusive, and purposive
                  innovations.
                  <br />
                  <br />
                  Beyond being a factor of pure accuracy, progress can be
                  defined in ways beyond convenience. This angle has a much
                  wider sway in redefining education though finding solutions to
                  climate change and introducing health into the 21st century.
                  <br />
                  <br />
                  This is what Beyond Algorithms proclaimed while ushering
                  humanity into an age when technology will support instead of
                  hinder the best and most human aspects of society. Let us then
                  combine our efforts to bring together the digital and the
                  human in a world where algorithms serve, but humanity leads.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
