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
    <AnimatedSection className="bg-gunmetal/20 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Industries Served"
          title="Powering Global Industrial Supply Chains"
          description="From integrated steel plants to EPC contractors — tailored metallurgical supply solutions for every sector."
        />
        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Factory;
            return (
              <StaggerItem key={industry.slug}>
                <Link
                  href="/industries"
                  className="group flex h-full flex-col rounded-xl border border-white/10 bg-charcoal/50 p-6 transition-all hover:border-industrial-blue/40 hover:bg-charcoal"
                >
                  <Icon className="mb-4 h-8 w-8 text-industrial-blue transition-transform group-hover:scale-110" />
                  <h3 className="font-heading font-semibold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-metallic/80 line-clamp-3">
                    {industry.description}
                  </p>
                  <p className="mt-4 text-xs text-industrial-blue">
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
