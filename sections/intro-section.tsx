"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

export function IntroSection() {
  return (
    <AnimatedSection
      id="about-content"
      className="
        py-24
        bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
      "
    >
      <div
        className="
          container
          px-4 md:px-6 mx-auto
        "
      >
        <div
          className="
            grid lg:grid-cols-2 items-center
            gap-12
          "
        >
          <div>
            <p
              className="
                mb-3
                text-lg text-transparent font-bold tracking-[0.2em] uppercase
                bg-gradient-to-b bg-clip-text from-[#F7941D] via-[#C96A00]
                to-[#5B2A00]
                drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]
              "
            >
              About {company.name}
            </p>
            <h2
              className="
                text-3xl text-white md:text-4xl lg:text-5xl
                font-heading font-bold
              "
            >
              India&apos;s Premier Metallurgy Export House
            </h2>
            <p
              className="
                mt-6
                text-lg text-metallic/90 leading-relaxed
              "
            >
              For over two decades, SSL Group has supplied the global steel
              industry with export-grade pig iron, ferro alloys, carbon
              products, and industrial minerals. Our integrated sourcing, bonded
              warehousing, and port-side logistics deliver the consistency that
              enterprise procurement demands.
            </p>
            <p
              className="
                mt-4
                text-lg text-metallic/80 leading-relaxed
              "
            >
              From Middle East steel giants to African foundries and European
              distributors, we are the single-window partner for metallurgical
              raw material excellence.
            </p>
            <Button
              className="
                mt-8
              "
              asChild
            >
              <Link href="#about-content">
                Our Story
                <ArrowRight
                  className="
                    w-4 h-4
                  "
                />
              </Link>
            </Button>
          </div>
          <div
            className="
              relative overflow-hidden
              rounded-2xl border border-white/10
              aspect-[4/3]
            "
          >
            <div
              className="
                absolute inset-0
                bg-cover bg-center
              "
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(30,58,95,0.3), rgba(17,17,17,0.8)), url('/images/products/home.jpg')",
                backgroundColor: "#2A2A2A",
              }}
            /
            >
            <div
              className="
                absolute inset-0 flex items-end
                p-8
              "
            >
              <div
                className="
                  p-4
                  bg-gradient-to-r from-[#7C2D12] via-[#EA580C] to-[#FDBA74]
                  rounded-lg rounded-lg border-0 border border-white/10
                  backdrop-blur-md backdrop-blur-xl backdrop-blur-md
                  shadow-2xl shadow-black/40
                "
              >
                <p
                  className="
                    text-2xl text-white font-heading font-bold
                  "
                >
                  Since {company.founded}
                </p>
                <p
                  className="
                    text-sm text-metallic
                  "
                >
                  Ghaziabad · Global Export Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
