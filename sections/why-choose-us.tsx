"use client";

import {
  ShieldCheck,
  Truck,
  Globe2,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import {
  AnimatedSection,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared/animated-section";
import { whyChooseUs } from "@/data/site";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Truck,
  Globe2,
  FlaskConical,
};

export function WhyChooseUsSection() {
  return (
    <AnimatedSection
      className="
        py-24
        bg-[#9b5600d1]
      "
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <SectionHeader
          eyebrow="Why SSL Group"
          title="Enterprise-Grade Export Partnership"
          description="Decades of metallurgical expertise combined with global logistics infrastructure — built for steel manufacturers and industrial procurement at scale."
        />
        <StaggerGrid
          className="
            grid md:grid-cols-2 lg:grid-cols-4
            gap-6
          "
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={item.title}>
                <div
                  className="
                    h-full
                    p-6
                    bg-gunmetal/30 hover:bg-gunmetal/50
                    rounded-xl
                    border border-white/10 hover:border-industrial-blue/40
                    transition-all
                    group
                  "
                >
                  <div
                    className="
                      flex items-center justify-center
                      h-12 w-12
                      mb-4
                      text-industrial-blue hover:text-white
                      bg-industrial-blue/20
                      rounded-lg
                      transition-colors
                      group-hover:bg-industrial-blue group-hover:text-white
                    "
                  >
                    <Icon
                      className="
                        h-6 w-6
                        hover:text-[#c96a00] text-[#f38203] text-bold
                        transition-colors duration-200
                      "
                      /
                    >
                  </div>
                  <h3
                    className="
                      font-heading font-semibold text-lg text-white
                    "
                  >
                    {item.title}
                  </h3>
                  <p
                    className="
                      mt-2
                      text-sm text-metallic/80 leading-relaxed
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </AnimatedSection>
  );
}
