"use client";

import Link from "next/link";
import { Award } from "lucide-react";
import {
  AnimatedSection,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";
import { useTranslations } from "next-intl";

export function CertificationsPreviewSection() {
  const t = useTranslations("Certifications")
  return (
    <AnimatedSection
      id="certifications-preview"
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
          eyebrowClassName="mb-3
            text-lg text-transparent font-bold tracking-[0.2em] uppercase
            bg-gradient-to-b bg-clip-text from-[#F7941D] via-[#C96A00]
            to-[#5B2A00]
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]"
          titleClassName="font-heading font-bold text-3xl text-white md:text-4xl lg:text-5xl
          tracking-tight"
          descriptionClassName="mt-4
            text-lg text-industrial-white/70 leading-relaxed"
        />
        <StaggerGrid
          className="
            grid sm:grid-cols-2 lg:grid-cols-3
            gap-4
          "
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert.key}>
              <div
                className="
                  flex items-start
                  p-5
                  bg-charcoal hover:bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
                  rounded-xl border border-white/10
                  gap-4
                "
              >
                <div
                  className="
                    flex items-center justify-center
                    h-12 w-12
                    bg-industrial-blue/20
                    rounded-lg
                    shrink-0
                  "
                >
                  <Award
                    className="
                      h-6 w-6
                      text-[#fcaf1c] text-bold
                    "
                  /
                  >
                </div>
                <div>
                  <h3
                    className="
                      font-heading font-semibold text-white
                    "
                  >{t(`${cert.key}.Title`)}</h3>
                  <p
                    className="
                      text-xs
                    "
                  >{t(`${cert.key}.issuer`)} · {cert.year}</p>
                  <p
                    className="
                      mt-1
                      text-sm text-metallic/80
                    "
                  >{t(`${cert.key}.Description`)}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
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
              font-bold text-white
              hover:bg-[#0461cf]
            "
            asChild
          >
            <Link href="/certifications"> {t("ViewAllCertifications")}</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
