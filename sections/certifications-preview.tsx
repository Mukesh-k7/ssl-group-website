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
                  bg-gunmetal/30
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
                      text-[#f38203] text-bold
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
              bg-[#1e3a5f]
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
