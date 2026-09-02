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

  const t = useTranslations("industries");


  return (
    <AnimatedSection
      id="industries"
      className="
        py-24
        [background:#fff]
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
          eyebrowClassName="mb-3
            text-lg text-transparent font-bold tracking-[0.2em] uppercase
            bg-linear-to-b bg-clip-text from-[#F7941D] via-[#C96A00]
            to-[#5B2A00]
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]"
          titleClassName="font-heading font-bold text-3xl text-black md:text-4xl lg:text-5xl
          tracking-tight"
          descriptionClassName="mt-4
            text-lg text-industrial-blue/70 leading-relaxed"

        />
        <StaggerGrid
          className="
            grid sm:grid-cols-2 lg:grid-cols-4
            gap-4
          "
        >
          {items.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Factory;
            const regions = t.raw(
              `${industry.key}.Regions`
            ) as string[];
            return (
              <StaggerItem key={industry.slug}>
                <Link
                  href="/industries"
                  className="
                    flex flex-col
                    h-full
                    p-6
                    bg-linear-to-br from-slate-700 via-slate-850 to-zinc-900
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
                      text-[#fcaf1c]
                      transition-transform
                      group-hover:scale-110
                    "
                  ></Icon>
                  <h3
                    className="
                      font-heading font-semibold text-white
                    "
                  >
                    {t(`${industry.key}.Title`)}
                  </h3>
                  <p
                    className="
                      flex-1
                      mt-2
                      text-sm line-clamp-3
                    "
                  >
                    {t(`${industry.key}.Description`)}
                  </p>
                  <p
                    className="
                      mt-4
                      text-xs text-[#fcaf1c]
                    "
                  >
                    {regions
                      .map((region) =>
                        t(`${industry.key}.RegionLabels.${region}`)
                      )
                      .join(" · ")}
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
