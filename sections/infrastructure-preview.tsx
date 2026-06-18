"use client";

import Link from "next/link";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { facilities } from "@/data/site";



export function InfrastructurePreviewSection() {
  const t = useTranslations("infrastructure");

  return (
    <AnimatedSection
      id="infrastructure"
      className="
        py-24
        bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
        border-y border-white/10
      "
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <SectionHeader
          eyebrow= {t("Eyebrow")}
          title={t("Title")}
          description={t("Description")}
        />
        <div
          className="
            grid md:grid-cols-3
            gap-6
          "
        >
          {facilities.map((item) => (
            <div
              key={item.key}
              className="
                p-8
                text-center
                bg-charcoal/50
                rounded-xl border border-white/10
              "
            >
              <item.icon
                className="
                  h-10 w-10
                  mx-auto mb-4
                  text-[#c96a00]
                "
              />
              <h3
                className="
                  font-heading font-semibold text-lg text-white
                "
              >{t(`${item.key}.Title`)}</h3>
              <p
                className="
                  mt-2
                  text-sm text-metallic/80
                "
              >{t(`${item.key}.Description`)}</p>
            </div>
          ))}
        </div>
        <div
          className="
            mt-10
            text-center
          "
        >
          <Button
            variant="secondary"
            className="
              bg-[#0461cfad]
            "
            asChild
          >
            <Link href="/infrastructure">{t("ExploreInfrastructure")}</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
