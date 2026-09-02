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
import { useTranslations } from "next-intl";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Truck,
  Globe2,
  FlaskConical,
};

export function WhyChooseUsSection() {
  const t = useTranslations("whychooseus");

  return (
    <AnimatedSection
      className="
        py-24
        bg-linear-to-br from-industrial-blue/40 via-gunmetal to-charcoal
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
            text-lg text-[#F7941D] font-bold tracking-[0.2em] uppercase
            bg-linear-to-b bg-clip-text from-[#F7941D] via-[#C96A00]
            to-[#5B2A00]
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]"
          titleClassName="font-heading font-bold text-3xl text-white md:text-4xl lg:text-5xl
          tracking-tight"
          descriptionClassName="mt-4
            text-lg text-industrial-blue/70 leading-relaxed"

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
              <StaggerItem key={item.key}>
                <div
                  className="h-full p-6 bg-linear-to-br from-slate-700 via-slate-850 to-zinc-900 rounded-xl transition-all group"
                >
                  <div
                    className="
                      flex items-center justify-center
                      h-12 w-12
                      mb-4
                      text-industrial-blue hover:text-white
                      bg-linear-to-br from-industrial-blue/40 via-gunmetal to-charcoal
                      rounded-lg
                      transition-colors
                      group-hover:bg-industrial-blue group-hover:text-white
                    "
                  >
                    <Icon
                      className="
                        h-6 w-6
                        hover:text-[#c96a00] text-[#fcaf1c] text-bold
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
                    {t(`${item.key}.Title`)}
                  </h3>
                  <p
                    className="
                      mt-2
                      text-sm text-metallic/100 leading-relaxed
                    "
                  >
                    {t(`${item.key}.Description`)}
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
