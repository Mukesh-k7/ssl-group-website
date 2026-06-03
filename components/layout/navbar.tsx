"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, navigation } from "@/data/site";
import { cn } from "@/lib/utils";

const homeAnchorIds: Record<string, string> = {
  "/": "home",
  "/about": "about-content",
  "/products": "products",
  "/industries": "industries",
  "/export-logistics": "export",
  "/certifications": "certifications",
  "/infrastructure": "infrastructure",
};

function getNavHref(pathname: string, itemHref: string) {
  if (pathname === "/") {
    const anchorId = homeAnchorIds[itemHref];
    if (anchorId) {
      return `#${anchorId}`;
    }
  }

  // if (pathname === "/about" && itemHref === "/about") {
  //   return "#about-content";
  // }

  return itemHref;
}

function getActiveHref(pathname: string, itemHref: string) {
  if (pathname === "/") {
    const anchorId = homeAnchorIds[itemHref];
    if (anchorId) {
      return `#${anchorId}`;
    }
  }

  // if (pathname === "/about" && itemHref === "/about") {
  //   return "#about-content";
  // }

  return itemHref;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-gradient-to-l from-[#7C2D12] via-[#EA580C] to-[#FDBA74] py-3 shadow-2xl shadow-black/40 backdrop-blur-xl"
          : "bg-white py-5 text-black"
      )}
    >
      <nav
        className="
          container flex items-center justify-between
          mx-auto
        "
      >
        <Link
          href="/"
          className="
            flex items-center
            group gap-3
          "
        >
          <div
            className="
              flex items-center
              h-15 w-50
              ml-[18px]
              from-gunmetal to-charcoal
              rounded-lg
            "
          >
            <Image
              src="/images/products/logo-1.png"
              alt="SSL Group Logo"
              width={120}
              height={110}
              className="
                object-cover
                group-hover:brightness-110
              "
              priority
            ></Image>
          </div>
        </Link>

        <div
          className="
            hidden items-center xl:flex
            gap-1
          "
        >
          {navigation.slice(0, 8).map((item) => {
            const href = getNavHref(pathname, item.href);
            const activeHref = getActiveHref(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  activeHref === href
                    ? scrolled
                      ? "text-white"
                      : "bg-gradient-to-b from-[#FFD27A] via-[#b16100] to-[#5B2A00] bg-clip-text text-transparent"
                    : scrolled
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className="
              relative
              group
            "
          >
            <button
              type="button"
              className="
                flex items-center
                px-3 py-2
                text-sm text-metallic/80 hover:text-white font-medium
                rounded-md
                transition-colors
                gap-1
              "
            >
              More
              <ChevronDown
                className="
                  h-4 w-4
                "
              ></ChevronDown>
            </button>

            <div
              className="
                invisible absolute right-0 top-full
                pt-2
                opacity-0 transition-all
                group-hover:visible group-hover:opacity-100
              "
            >
              <div
                className="
                  min-w-[180px]
                  p-2
                  bg-gunmetal/95
                  rounded-lg border border-white/10
                  shadow-xl backdrop-blur-xl
                "
              >
                {navigation.slice(8).map((item) => {
                  const href = getNavHref(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={href}
                      className="
                        block
                        px-3 py-2
                        text-sm text-metallic hover:text-white
                        hover:bg-white/5
                        rounded-md
                      "
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            hidden items-center lg:flex
            gap-3
          "
        >
          <Button variant="ghost" size="sm" asChild>
            <a href={company.catalogUrl} download>
              <Download
                className="
                  h-4 w-4
                "
              ></Download>
              Catalog
            </a>
          </Button>
          <Button asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="
            xl:hidden
            p-2
            text-white
            rounded-md
          "
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X
            className="
              h-6 w-6
              text-[#0a0300]
            "
          ></X> : <Menu
            className="
              h-6 w-6
              text-[#0a0300]
            "
          ></Menu>}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="
              xl:hidden
              bg-charcoal/98
              border-t border-white/10
              backdrop-blur-xl
            "
          >
            <div
              className="
                container flex flex-col
                mx-auto px-4 py-4
                gap-1
              "
            >
              {navigation.map((item) => {
                const href = getNavHref(pathname, item.href);
                const isActive =
                  pathname === item.href || (pathname === "/" && href.startsWith("#"));

                return (
                  <Link
                    key={item.href}
                    href={href}
                    className={cn(
                      "rounded-md px-4 py-3 text-base font-medium",
                      isActive ? "bg-industrial-blue/20 text-white" : "text-metallic hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div
                className="
                  flex flex-col
                  mt-4 pt-4
                  border-t border-white/10
                  gap-2
                "
              >
                <Button variant="secondary" asChild>
                  <a href={company.catalogUrl} download>
                    Download Catalog
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/contact">Get Export Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
