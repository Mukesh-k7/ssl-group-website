import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ExportMapSection } from "@/sections/export-map";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { CtaBannerSection } from "@/sections/cta-banner";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { services } from "@/data/site";
import { useTranslations } from "next-intl";

export const metadata: Metadata = createPageMetadata({
  title: "Export & Logistics",
  description:
    "Global export logistics for metallurgy raw materials — vessel loading, Incoterms flexibility, documentation, and trade finance support.",
  path: "/export-logistics",
});


const incoterms = ["FOB", "CFR", "CIF", "CIP", "DAP", "EXW"];

export default function ExportLogisticsPage() {
  const t = useTranslations("services")
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Export & Logistics", path: "/export-logistics" },
        ]}
      />
      <PageHero
        eyebrow={t("Eyebrow")}
        title={t("LogisticsExcellence")}
        description={t("reliability")}
      />
      <AnimatedSection
        className="
          py-24
          bg-[#fff]
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
            title={t("Integrated")}
            description={t("coordinators")}
            titleClassName="font-heading font-bold text-3xl text-black md:text-4xl lg:text-5xl
          tracking-tight"
            descriptionClassName="mt-4
            text-lg text-industrial-blue/70 leading-relaxed"
            align="center"
          />
          <div
            className="
              grid md:grid-cols-2 lg:grid-cols-4
              gap-6
            "
          >
            {services.map((service) => (
              <div
                key={service.key}
                className="
                  p-6
                  bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
                  rounded-xl
                "
              >
                <service
                  .icon
                  className="
                    h-8 w-8
                    mb-4
                    text-[#c96a00]
                  "
                /
                >
                <h3
                  className="
                    font-heading font-semibold text-white
                  "
                >{t(`${service.key}.Title`)} </h3>
                <p
                  className="
                    mt-2
                    text-sm text-metallic/80
                  "
                >{t(`${service.key}.Description`)} </p>
              </div>
            ))}
          </div>
          <div
            className="
              mt-16 p-8
              bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
              rounded-xl border border-white/10
              gap-4
            "
          >
            <h3
              className="
                font-heading font-bold text-xl text-white
              "
            >{t("Supported")} </h3>
            <div
              className="
                flex flex-wrap
                mt-4
                gap-3
              "
            >
              {incoterms.map((term) => (
                <span
                  key={term}
                  className="
                    px-4 py-2
                    font-mono text-sm text-metallic
                    bg-industrial-blue/10
                    rounded-lg border border-industrial-blue/60
                  "
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      <ExportMapSection />
      <CtaBannerSection />
    </>
  );
}
