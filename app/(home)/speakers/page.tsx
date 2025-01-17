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
            <section className="w-full flex flex-col gap-y-16 pt-12">
              {/* speaker 1: ltr */}
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
                        alt="speaker"
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

              {/* speaker 2: rtl */}
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
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 82.53% 72.02%, 52.4% 68.1%, 61.09% 53.58%, 56.32% 43.94%, 22.42% 68.71%, 31.54% 81.99%, 17.9% 100%, 27.6% 76.8%, 68.93% 90.92%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c7cfa8] to-[#b07373] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/tedx/speaker2.png"
                        alt="speaker"
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
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 77.88% 27.32%, 58.53% 44.84%, 65.18% 51.22%, 60.2% 62.4%, 52.4% 68.1%, 75.5% 46.97%, 71.11% 49.09%, 62.22% 72.75%, 47.66% 74.51%, 64.79% 63.68%, 57.62% 73.28%, 74.98% 73.92%, 74.1% 44.1%)",
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3f79a0] to-[#decbb4] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">Kavach Khanna</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        As a dedicated Student Mentor, Educator, and Content
                        Creator, he has mentored over 6,000 students, guiding
                        them toward making informed career choices and achieving
                        their goals. With a passion for empowering individuals
                        to unlock their full potential, he offers personalized
                        advice and actionable insights. His work as a content
                        creator has further amplified his impact, with his
                        YouTube channel garnering over 15 million views,
                        reflecting the trust and value his audience places in
                        his content. He remains committed to inspiring and
                        transforming lives through mentorship and engaging
                        educational initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* speaker 3: rtl */}
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
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 72.59% 72.53%, 52.4% 68.1%, 73.93% 48.51%, 30.94% 69.71%, 29.52% 89.06%, 55.35% 46.27%, 39.33% 74.84%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d6d0cb] to-[#dedbde] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/tedx/speaker4.png"
                        alt="speaker"
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
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 78.12% 85.68%, 74.1% 44.1%)"
                          }}
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d6d0cb] to-[#dedbde] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">Ali Al-Naama</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Ali Al-Naama is an author who grew up in Qatar and the United Kingdom. His passion for writing was triggered at a very young age while shadowing his grandfather “Abdulla Hussain Al-Naama” a pioneer of the written media in Qatar and establisher of the very first magazine “Al-Ouroba” and the first newspaper “Al-Arab” in the country. Ali’s passion for travel had led him to academically invest in exploring the knowledge and business of tourism and sustainable destination development with having a specialized degree from The George Washington University in Washington DC. Ali is now a PhD researcher at the Queen Mary University or London, the Corporate Strategy Director at Manateq, and the CEO of the 72 ink corporation.

                        Diving into a more creative mindset and forming a fictional universe that allows readers to explore is what interests Ali to start his novel-writing journey. His enthusiasm for storytelling had enabled him to create imaginary worlds and commit to covey valuable messages through his writings. Ali has published &apos;Circus of the Greats&apos; through Hamad Bin Khalifa University Press and is preparing to launch his next work, &apos;The Scenarist,&apos; with the same publisher.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* speaker 4: ltr */}
              <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">
                        Mohammed Al-Qassabi
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Mohammed Al-Qassabi is a pioneering innovator, youth
                        advocate, and cybersecurity specialist from Qatar. He
                        graduated with Honors in Information Systems from
                        Carnegie Mellon University in Qatar and is currently
                        pursuing a Master’s in Artificial Intelligence and
                        Cybersecurity at the University of Doha for Science and
                        Technology. Mohammed is the inventor of OPAS, a
                        groundbreaking AI-based system that enhances fairness
                        and accuracy in football. As the Head of the Robotics
                        and AI Department at Qatar Scientific Club, Mohammed
                        mentors young innovators and inspires future leaders. He
                        has won numerous prestigious awards, including
                        recognition as one of the top Arab inventors in Stars of
                        Science. Mohammed’s journey is a testament to
                        perseverance, creativity, and the power of innovation to
                        drive change.
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
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d9e2ea] to-[#3c4858] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/tedx/speaker7.png"
                        alt="speaker"
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
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#dab29d] to-[#e7e9fb] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              {/* speaker 5: rtl */}
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
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d6d0cb] to-[#dedbde] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                      <Image
                        src="https://cdn.aayus.me/tedx/speaker6.png"
                        alt="speaker"
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
                          className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#25272b] to-[#2a193a] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-5xl pb-4 font-bold">Aditya Jain</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Aditya Jain is a dynamic student leader, author, and
                        aspiring economist with a passion for global economic
                        frameworks and policymaking. A four-time presenter at
                        the Qatar Leadership Conference (QLC) and Deputy
                        Secretary General at MSMUN and THIMUN, he has showcased
                        exceptional leadership and public speaking skills.
                        During the pandemic, Aditya authored the science fiction
                        novel Miles Away from Home, reflecting his creativity
                        and resilience. As Head Boy, he led impactful
                        initiatives to foster collaboration and excellence,
                        while excelling in sports by representing his school in
                        cricket and tennis. With multiple ‘All-Rounder’ and
                        ‘Subject Topper’ awards to his credit, Aditya brings his
                        inspiring journey of leadership, perseverance, and
                        innovation to the TEDx stage.
                      </p>
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
