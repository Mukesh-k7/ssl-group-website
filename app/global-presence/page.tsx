import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ExportMapSection } from "@/sections/export-map";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { StatsCounterSection } from "@/sections/stats-counter";
import { CtaBannerSection } from "@/sections/cta-banner";
import { exportRegions } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Global Presence",
  description:
    "SSL Group export network spanning Middle East, Africa, Europe, and Asia-Pacific — 45+ countries served.",
  path: "/global-presence",
});

export default function GlobalPresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Worldwide"
        title="Global Presence"
        description="Strategic trade corridors connecting Indian metallurgical production to steel manufacturers and industrial buyers across four continents."
      />
      <StatsCounterSection />
      <ExportMapSection />
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Regional Export Desks"
            description="Dedicated teams with local market knowledge, language support, and timezone-aligned responsiveness."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {exportRegions.map((region) => (
              <div
                key={region.name}
                className="rounded-xl border border-white/10 bg-charcoal/50 p-8"
              >
                <h3 className="font-heading text-2xl font-bold text-white">{region.name}</h3>
                <p className="mt-2 text-metallic/80">{region.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {region.countries.map((c) => (
                    <li
                      key={c}
                      className="rounded-md bg-gunmetal px-3 py-1 text-sm text-metallic"
                    >
                      {c}
                    </li>
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
