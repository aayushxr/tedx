"use client";
import DepartmentCard from "@/components/dept-card";
import { buttonVariants } from "@/components/ui/button";
import departments from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

export default function About() {
  return (
    <main className="flex-1 flex-col">
      <div className="container h-full flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <div className="flex items-start justify-center z-20  max-w-6xl">
          <div className=" pt-28 ">
            <div className="flex items-center justify-center gap-x-5 max-w-8xl">
              {/* <Image
                src="https://cdn.aayus.me/uploads/dpsmisdebatclub.png"
                alt="DPS Modern Indian School Debate Club"
                height={100}
                width={100}
                className="aspect-square"
              /> */}
              <div>
                <h1 className="text-3xl gap-x-3 relative z-50 text-left font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                  Our Team{" "}
                </h1>
              </div>
            </div>
            <div className="relative flex z-50 items-center justify-center  ">
              <div className="max-w-8xl pt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {departments.map((department) => (
                  <DepartmentCard key={department.id} department={department} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
