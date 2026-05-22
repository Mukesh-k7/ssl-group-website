"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, company } from "@/data/site";
import { cn } from "@/lib/utils";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-charcoal/95 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-metallic/30 bg-gradient-to-br from-gunmetal to-charcoal">
            <span className="font-heading text-lg font-bold text-metallic">SSL</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading text-lg font-bold leading-none text-white">
              {company.name}
            </p>
            <p className="text-xs text-metallic/70">Metallurgy Export</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.slice(0, 8).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-white",
                pathname === item.href
                  ? "text-white"
                  : "text-metallic/80"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-metallic/80 transition-colors hover:text-white"
            >
              More <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute right-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="min-w-[180px] rounded-lg border border-white/10 bg-gunmetal/95 p-2 shadow-xl backdrop-blur-xl">
                {navigation.slice(8).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-metallic hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href={company.catalogUrl} download>
              <Download className="h-4 w-4" />
              Catalog
            </a>
          </Button>
          <Button asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-charcoal/98 backdrop-blur-xl xl:hidden"
          >
            <div className="container flex flex-col gap-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-3 text-base font-medium",
                    pathname === item.href
                      ? "bg-industrial-blue/20 text-white"
                      : "text-metallic hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Button variant="secondary" asChild>
                  <a href={company.catalogUrl}>Download Catalog</a>
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
