"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight, Feather, Info } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar";
import { Suspense, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "./theme-toggle";
import Contact from "./contact";
import MobileNav from "./mobile-nav";
import { toast } from "sonner";

const LandingNavbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <nav className="sticky h-[4rem] flex items-center inset-x-0 top-0 z-30 w-full bg-transparent backdrop-blur-lg transition-all">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 h-14 items-center">
          <Link
            href="/"
            className=" left-8 top-8 z-20 flex items-center text-lg font-bold tracking-tight"
          >
            <span className="flex items-center space-x-2 text-2xl text-emerald-700 dark:text-zinc-100">
              <span className="text-red-600">
                TED<sup>x</sup>
                <span className="inline text-xl text-white font-normal">
                  Youth@DPSMIS
                </span>
              </span>
            </span>
          </Link>
          <div className="hidden md:block">
            <Menu setActive={setActive}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Information"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/about">About us</HoveredLink>
                  <HoveredLink href="/about">The Team</HoveredLink>
                  <HoveredLink href="/about/org">Previous Editions</HoveredLink>
                </div>
              </MenuItem>
              <Link href="/speakers">Speakers</Link>
              {/* <Link href="/speakers">
                <MenuItem setActive={setActive} active={active} item="Speakers">
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/references/briefings">
                      Resources
                    </HoveredLink>
                    <HoveredLink href="/references/samples">
                      Sample Debates
                    </HoveredLink>
                    <HoveredLink href="/references">
                      Other References
                    </HoveredLink>
                  </div>
                </MenuItem>
              </Link> */}
            </Menu>
          </div>

          <div className="hidden justify-end items-center space-x-4 sm:flex">
            <div className="space-x-1  flex items-center justify-center">
              <Link
                href="https://aayus.me/tedx_insta"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                <FaInstagram className="h-4 w-4" />
              </Link>
              {/* <Link
                href="https://aayus.me/wwdc_fb"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                <FaFacebook className="h-4 w-4" />
              </Link> */}
            </div>

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
              </Link>{" "}
          </div>

          <div className="md:hidden ml-auto">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
