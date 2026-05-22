"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

export function IntroSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-industrial-blue">
              About {company.name}
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              India&apos;s Premier Metallurgy Export House
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-metallic/90">
              For over two decades, SSL Group has supplied the global steel industry
              with export-grade pig iron, ferro alloys, carbon products, and industrial
              minerals. Our integrated sourcing, bonded warehousing, and port-side
              logistics deliver the consistency that enterprise procurement demands.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-metallic/80">
              From Middle East steel giants to African foundries and European distributors,
              we are the single-window partner for metallurgical raw material excellence.
            </p>
            <Button className="mt-8" asChild>
              <Link href="/about">
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(30,58,95,0.3), rgba(17,17,17,0.8)), url('/images/about-facility.svg')",
                backgroundColor: "#2A2A2A",
              }}
            />
            <div className="absolute inset-0 flex items-end p-8">
              <div className="rounded-lg border border-white/10 bg-charcoal/80 p-4 backdrop-blur-md">
                <p className="font-heading text-2xl font-bold text-white">Since {company.founded}</p>
                <p className="text-sm text-metallic">Mumbai · Global Export Operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
