import type { Metadata } from "next";
import { Award, FileText } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { CtaBannerSection } from "@/sections/cta-banner";
import { certifications } from "@/data/certifications";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";

export const metadata: Metadata = createPageMetadata({
  title: "Certifications",
  description:
    "ISO 9001, ISO 14001, OHSAS, RMI compliance, and export credentials — SSL Group's quality and compliance framework.",
  path: "/certifications",
});

export default function CertificationsPage() {
  const t = useTranslations("Certifications")
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Certifications", path: "/certifications" },
        ]}
      />
      <PageHero
        eyebrow={t("Complaince")}
        title={t("Standards")}
        description={t("Internationally")}
      />
      <AnimatedSection
        className="
          py-24 bg-[#fff]
          transition-colors
        "
      >
        <div
          className="
            container
            mx-auto px-4 md:px-6
          "
        >
          <SectionHeader
            title={t("Credentials")}
            description={t("ThirdParty")}
            titleClassName="font-heading font-bold text-3xl text-black md:text-4xl lg:text-5xl tracking-tight"
            descriptionClassName="mt-4
            text-lg text-industrial-blue/70 leading-relaxed"
            align="center"
          />
          <div
            className="
              grid md:grid-cols-2 lg:grid-cols-3
              gap-6
            "
          >
            {certifications.map((cert) => (
              <article
                key={cert.key}
                className="
                  p-8
                  bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
                  rounded-xl
                "
              >
                <Award
                  className="
                    h-10 w-10
                    mb-4
                    text-[#c96a00]
                  "
                /
                >
                <h2
                  className="
                    font-heading font-bold text-xl text-white
                  "
                >{t(`${cert.key}.Title`)}</h2>
                <p
                  className="
                    mt-1
                    text-sm text-[#c96a00]
                  "
                >
                  {t(`${cert.key}.issuer`)} · {t("Certified")} {cert.year}
                </p>
                <p
                  className="
                    mt-4
                    text-metallic/80
                  "
                >{t(`${cert.key}.Description`)}</p>
              </article>
            ))}
          </div>
          <div
            className="
              flex items-start
              mt-16 p-8
              bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
              rounded-xl
              gap-4
            "
          >
            <FileText
              className="
                h-8 w-8
                text-[#c96a00]
                shrink-0
              "
            /
            >
            <div>
              <h3
                className="
                  font-heading font-semibold text-lg text-white
                "
              >
                {t("Inspection")}
              </h3>
              <p
                className="
                  mt-2
                  text-metallic/80
                "
              >
                {t("Intertek")}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <CtaBannerSection />
    </>
  );
}
