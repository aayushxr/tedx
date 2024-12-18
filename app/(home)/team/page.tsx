import DepartmentCard from "@/components/dept-card";
import { curators, departments, lead } from "@/data";

export default function About() {
  return (
    <main className="flex-1 flex-col">
      <div className="container h-full flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <div className="flex items-start justify-center z-20  max-w-[85rem]">
          <div className=" pt-10 md:pt-24 ">
            <div className="flex items-center justify-center gap-x-5 max-w-8xl">
              <div>
                <h1 className="text-5xl gap-x-3 relative z-50 text-left font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                  Our <span className="text-red-600 inline-flex"> Team</span>
                </h1>
              </div>
            </div>
            <div className="relative flex z-50 items-center justify-center  ">
              <div className="max-w-8xl pt-8 grid gap-4 grid-cols-2 lg:grid-cols-3">
                <div className="col-span-2 lg:col-span-3">
                  <DepartmentCard department={lead} />
                </div>
                <div className="col-span-2 lg:col-span-3">
                  <DepartmentCard department={curators} />
                </div>
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
