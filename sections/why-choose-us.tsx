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
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Why SSL Group"
          title="Enterprise-Grade Export Partnership"
          description="Decades of metallurgical expertise combined with global logistics infrastructure — built for steel manufacturers and industrial procurement at scale."
        />
        <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-xl border border-white/10 bg-gunmetal/30 p-6 transition-all hover:border-industrial-blue/40 hover:bg-gunmetal/50">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-industrial-blue/20 text-industrial-blue transition-colors group-hover:bg-industrial-blue group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-metallic/80">
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
