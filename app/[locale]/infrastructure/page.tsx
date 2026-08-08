import type { Metadata } from "next";
import { Warehouse, FlaskConical, Ship, Container } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { StatsCounterSection } from "@/sections/stats-counter";
import { CtaBannerSection } from "@/sections/cta-banner";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";
import { facilitiess } from "@/data/site";

export const metadata: Metadata = createPageMetadata({
  title: "Infrastructure",
  description:
    "Bonded warehousing, quality laboratories, port-side facilities, and logistics infrastructure for metallurgy exports.",
  path: "/infrastructure",
});

export default function InfrastructurePage() {
  const t = useTranslations("facilitiess")
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Infrastructure", path: "/infrastructure" },
        ]}
      />
      <PageHero
        eyebrow={t("Eyebrow")}
        title={t("Title")}
        description={t("Facilities")}
      />
      <StatsCounterSection />
      <AnimatedSection
        className="
          py-24
        "
      >
        <div
          className="
            container
            mx-auto px-4 md:px-6
          "
        >
          <SectionHeader
            title={t("Operational")}
            description={t("Strategic")}
            align="center"
          />
          <div
            className="
              grid md:grid-cols-2
              gap-8
            "
          >
            {facilitiess.map((facility) => (
              <article
                key={facility.key}
                className="
                  overflow-hidden
                  bg-gunmetal/30
                  rounded-2xl border border-white/10
                "
              >
                <div
                  className="
                    p-8
                    bg-industrial-blue/10
                    border-b border-white/10
                  "
                >
                  <facility
                    .icon
                    className="
                      h-10 w-10
                      mb-4
                      text-[#c96a00]
                    "
                  /
                  >
                  <div
                    className="
                      flex items-end justify-between
                    "
                  >
                    <h2
                      className="
                        font-heading font-bold text-2xl text-white
                      "
                    >
                      {t(`${facility.key}.Title`)}
                    </h2>
                    <span
                      className="
                        font-heading font-bold text-3xl text-[#c96a00]
                      "
                    >
                      {t(`${facility.key}.stats`)}
                    </span>
                  </div>
                </div>
                <div
                  className="
                    p-8
                  "
                >
                  <p
                    className="
                      text-metallic/90
                    "
                  >{t(`${facility.key}.Description`)}</p>
                  <div
                    className="
                      flex flex-wrap
                      mt-4
                      gap-2
                    "
                  >

                    {(t.raw(`${facility.key}.Locations`) as string[]).map((loc) => (
                      <span
                        key={loc}
                        className="
                          px-3 py-1
                          text-xs text-metallic
                          rounded-full border border-white/10
                        "
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBannerSection />
    </>
  );
}
