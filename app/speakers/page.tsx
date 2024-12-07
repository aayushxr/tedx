"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="flex-1 flex-col">
      <div className="container h-full flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <div className="flex items-center justify-center z-20  max-w-6xl">
          <div className=" pt-12 md:pt-28 ">
            <div className="flex items-center justify-center gap-x-5 max-w-6xl">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-5xl sm:text-5xl flex gap-x-3 relative z-50 text-center font-bold font-sans leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-7xl xl:leading-tight dark:text-white">
                  Our
                  <span className="text-red-600 inline-flex"> Speakers</span>
                </h1>
              </div>
            </div>
            <section
              id="learnmore"
              className="w-full flex flex-col gap-y-16 pt-12"
            >
              <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">
                        Dr. Avantika Tomar
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Dr. Avantika Tomar is a Partner in EY-Parthenon’s
                        education sector practice, and is based in Bangalore. As
                        a strategy and transactions consultant, she advises
                        education operators, multi-national corporates,
                        governments, foundations and private equity firms across
                        India, MENA and SE Asia. Her areas of expertise within
                        the education sector are K12, test prep and higher
                        education (with a focus on TNE). Avantika holds a PhD in
                        strategy and HR from IIM Calcutta, and is currently a
                        Visiting Professor at various business schools (IIMC, U,
                        T, BITSoM, Masters Union etc.) in India. She has
                        previously taught at UNSW and UTS in Sydney, Australia.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative isolate">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#412D26] to-[#A7A093] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/tedx/speaker1"
                        alt="product preview"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2B2D31] to-[#7E7460] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                  <div>
                    <div className="relative isolate">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#412D26] to-[#A7A093] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/tedx/speaker1"
                        alt="product preview"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2B2D31] to-[#7E7460] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">
                        Dr. Avantika Tomar
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Dr. Avantika Tomar is a Partner in EY-Parthenon’s
                        education sector practice, and is based in Bangalore. As
                        a strategy and transactions consultant, she advises
                        education operators, multi-national corporates,
                        governments, foundations and private equity firms across
                        India, MENA and SE Asia. Her areas of expertise within
                        the education sector are K12, test prep and higher
                        education (with a focus on TNE). Avantika holds a PhD in
                        strategy and HR from IIM Calcutta, and is currently a
                        Visiting Professor at various business schools (IIMC, U,
                        T, BITSoM, Masters Union etc.) in India. She has
                        previously taught at UNSW and UTS in Sydney, Australia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">
                        Dr. Avantika Tomar
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Dr. Avantika Tomar is a Partner in EY-Parthenon’s
                        education sector practice, and is based in Bangalore. As
                        a strategy and transactions consultant, she advises
                        education operators, multi-national corporates,
                        governments, foundations and private equity firms across
                        India, MENA and SE Asia. Her areas of expertise within
                        the education sector are K12, test prep and higher
                        education (with a focus on TNE). Avantika holds a PhD in
                        strategy and HR from IIM Calcutta, and is currently a
                        Visiting Professor at various business schools (IIMC, U,
                        T, BITSoM, Masters Union etc.) in India. She has
                        previously taught at UNSW and UTS in Sydney, Australia.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative isolate">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#158276] to-[#27f4dd] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/uploads/20231104_140232.jpg"
                        alt="product preview"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#158276] to-[#27f4dd] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                  <div>
                    <div className="relative isolate">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#158276] to-[#27f4dd] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/uploads/20231104_140232.jpg"
                        alt="product preview"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#158276] to-[#27f4dd] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">
                        Dr. Avantika Tomar
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Dr. Avantika Tomar is a Partner in EY-Parthenon’s
                        education sector practice, and is based in Bangalore. As
                        a strategy and transactions consultant, she advises
                        education operators, multi-national corporates,
                        governments, foundations and private equity firms across
                        India, MENA and SE Asia. Her areas of expertise within
                        the education sector are K12, test prep and higher
                        education (with a focus on TNE). Avantika holds a PhD in
                        strategy and HR from IIM Calcutta, and is currently a
                        Visiting Professor at various business schools (IIMC, U,
                        T, BITSoM, Masters Union etc.) in India. She has
                        previously taught at UNSW and UTS in Sydney, Australia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">
                        Dr. Avantika Tomar
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Dr. Avantika Tomar is a Partner in EY-Parthenon’s
                        education sector practice, and is based in Bangalore. As
                        a strategy and transactions consultant, she advises
                        education operators, multi-national corporates,
                        governments, foundations and private equity firms across
                        India, MENA and SE Asia. Her areas of expertise within
                        the education sector are K12, test prep and higher
                        education (with a focus on TNE). Avantika holds a PhD in
                        strategy and HR from IIM Calcutta, and is currently a
                        Visiting Professor at various business schools (IIMC, U,
                        T, BITSoM, Masters Union etc.) in India. She has
                        previously taught at UNSW and UTS in Sydney, Australia.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative isolate">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#412D26] to-[#A7A093] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/tedx/speaker1"
                        alt="product preview"
                        width={1920}
                        height={1080}
                        quality={100}
                        className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2B2D31] to-[#7E7460] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
