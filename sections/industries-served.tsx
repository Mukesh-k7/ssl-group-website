"use client";

import Link from "next/link";
import {
  Factory,
  Hammer,
  Building2,
  Landmark,
  ClipboardList,
  Layers,
  Flame,
  Fuel,
  type LucideIcon,
} from "lucide-react";
import {
  AnimatedSection,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared/animated-section";
import { industries } from "@/data/industries";

const iconMap: Record<string, LucideIcon> = {
  Factory,
  Hammer,
  Building2,
  Landmark,
  ClipboardList,
  Layers,
  Flame,
  Fuel,
};

export function IndustriesServedSection({ limit }: { limit?: number }) {
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <AnimatedSection
      id="industries"
      className="
        py-24
        bg-gunmetal/20
      "
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <SectionHeader
          eyebrow="Industries Served"
          title="Powering Global Industrial Supply Chains"
          description="From integrated steel plants to EPC contractors — tailored metallurgical supply solutions for every sector."
        />
        <StaggerGrid
          className="
            grid sm:grid-cols-2 lg:grid-cols-4
            gap-4
          "
        >
          {items.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Factory;
            return (
              <StaggerItem key={industry.slug}>
                <Link
                  href="/industries"
                  className="
                    flex flex-col
                    h-full
                    p-6
                    bg-charcoal/50 hover:bg-charcoal
                    rounded-xl
                    border border-white/10 hover:border-industrial-blue/40
                    transition-all
                    group
                  "
                >
                  <Icon
                    className="
                      h-8 w-8
                      mb-4
                      text-[#c96a00]
                      transition-transform
                      group-hover:scale-110
                    "
                  ></Icon>
                  <h3
                    className="
                      font-heading font-semibold text-white
                    "
                  >
                    {industry.name}
                  </h3>
                  <p
                    className="
                      flex-1
                      mt-2
                      text-sm line-clamp-3
                    "
                  >
                    {industry.description}
                  </p>
                  <p
                    className="
                      mt-4
                      text-xs text-[#c96a00]
                    "
                  >
                    {industry.regions.join(" · ")}
                  </p>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </AnimatedSection>
  );
}
