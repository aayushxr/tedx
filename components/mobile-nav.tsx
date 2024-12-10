"use client";

import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { HoveredLink, MenuItem, MobileMenu, ProductItem } from "./navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Contact from "./contact";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

const MobileNav = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="relative z-50 h-5 w-5" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader></SheetHeader>
        <div className="space-y-4 py-4 flex flex-col h-full dark:bg-black dark:text-white">
          <div className="px-3 py-2 flex-1">
            <Link href="/" className="flex items-center pl-3 mb-8">
              <span className="flex items-center space-x-2 text-2xl  dark:text-zinc-100">
                <span className="font-semibold text-red-600">
                  TED<sup>x</sup>
                  <span className="inline text-xl text-white font-normal">
                    Youth@DPSMIS
                  </span>
                </span>
              </span>
            </Link>
            <div className="space-y-1">
              <div className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 text-zinc-900 dark:text-zinc-300 rounded-lg transition items-center flex-1">
                <>
                  <div className="space-x-1 flex items-center justify-center">
                    <Link
                      href="https://aayus.me/tedx_insta"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <FaInstagram className="h-4 w-4" />
                    </Link>

                    {/* <ThemeToggle /> */}
                    {/* <Contact /> */}
                    <Link
                      className={buttonVariants({
                        size: "sm",
                        variant: "geist",
                      })}
                      href={"https://aayus.me/tedx_register"}
                      target="_blank"
                    >
                      Register <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </>
              </div>
              <Link
                href={"/about"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">About</span>
                </div>
              </Link>
              <Link
                href={"/team"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">The Team</span>
                </div>
              </Link>
              <Link
                href={"/editions"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">Previous Editions</span>
                </div>
              </Link>
              <Link
                href={"/speakers"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">Speakers</span>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
