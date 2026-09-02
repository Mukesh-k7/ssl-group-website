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
        [background:#fff]
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
                bg-linear-to-br from-slate-700 via-slate-850 to-zinc-900
                rounded-xl border border-white/10
              "
            >
              <item.icon
                className="
                  h-10 w-10
                  mx-auto mb-4
                  text-[#fcaf1c]
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
              bg-[#0461cf]
              font-bold text-white
              hover:bg-[#0461cfad]
            "
            asChild
          >
            <Link href="/infrastructure" >{t("ExploreInfrastructure")}</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
