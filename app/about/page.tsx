"use client"

export default function About() {
    return (
    <main className="flex-1 flex-col">
      <div className="container h-full flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <div className="flex items-start justify-center z-20  max-w-6xl">
          <div className=" pt-28 ">
            <div className="flex items-center justify-center gap-x-5 max-w-4xl">
              {/* <Image
                src="https://cdn.aayus.me/uploads/dpsmisdebatclub.png"
                alt="DPS Modern Indian School Debate Club"
                height={100}
                width={100}
                className="aspect-square"
              /> */}
              <div>
                <h1 className="text-3xl gap-x-3 relative z-50 text-left font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                  <span className="text-red-600 inline-flex">TEDx</span>Youth@DPSMIS
                </h1>
              </div>
            </div>
            <div className="relative flex z-50 items-center justify-center  ">
              <div className="max-w-4xl pt-8">
                <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                TEDxYouth@DPSMIS is a vibrant platform for young minds in Doha, Qatar, where ideas ignite and conversations flourish. Under the banner of DPS Modern Indian School, this esteemed event has been the cornerstone of youth engagement, fostering a community of thought-provoking individuals. 
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
