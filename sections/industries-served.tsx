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
import { useTranslations } from "next-intl";

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

  const t = useTranslations("industries")

  return (
    <AnimatedSection
      id="industries"
      className="
        py-24
        bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
      "
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <SectionHeader
          eyebrow={t("Eyebrow")}
          title={t("Title")}
          description={t("Description")}
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
                    {industry.key}
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
