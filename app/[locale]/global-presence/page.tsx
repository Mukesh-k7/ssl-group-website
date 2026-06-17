import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ExportMapSection } from "@/sections/export-map";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { StatsCounterSection } from "@/sections/stats-counter";
import { CtaBannerSection } from "@/sections/cta-banner";
import { exportRegions } from "@/data/site";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";

export const metadata: Metadata = createPageMetadata({
  title: "Global Presence",
  description:
    "SSL Group export network spanning Middle East, Africa, Europe, and Asia-Pacific — 45+ countries served.",
  path: "/global-presence",
});

export default function GlobalPresencePage() {
  const t = useTranslations('export');
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Global Presence", path: "/global-presence" },
        ]}
      />
      <PageHero
        eyebrow={t("WorldWide")}
        title={t("GlobalPresence")}
        description={t("Continents")}
      />
      <StatsCounterSection />
      <ExportMapSection />
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title={t("Regional")}
            description={t("Teams")}
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {exportRegions.map((region) => (
              <div
                key={region.key}
                className="rounded-xl border border-white/10 bg-charcoal/50 p-8"
              >
                <h3 className="font-heading text-2xl font-bold text-white">{t(`${region.key}.Title`)}</h3>
                <p className="mt-2 text-metallic/80">{t(`${region.key}.Description`)}</p>
                <ul className="mt-4 flex flex-wrap gap-2">

                  {(t.raw(`${region.key}.Countries`) as string[]).map((country) => (
                    <li key={country}
                      className="rounded-md bg-gunmetal px-3 py-1 text-sm text-metallic"
                    >{country}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBannerSection />
    </>
  );
}
