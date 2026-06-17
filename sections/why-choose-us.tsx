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
        [background:linear-gradient(135deg,#3D3F38,#6B8FA0,#9B6E7C,#C8B87A,#9DA09A)]
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
            grid md:grid-cols-2 lg:grid-cols-4
            gap-6
          "
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={item.key}>
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
                    {t(`${item.key}.Title`)}
                  </h3>
                  <p
                    className="
                      mt-2
                      text-sm text-metallic/80 leading-relaxed
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
