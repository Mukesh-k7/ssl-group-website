import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { TimelineSection } from "@/sections/timeline";
import { StatsCounterSection } from "@/sections/stats-counter";
import { CtaBannerSection } from "@/sections/cta-banner";
import { createPageMetadata } from "@/lib/seo";
import { company } from "@/data/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about SSL Group — India's trusted metallurgy and steel raw materials exporter with 28+ years of global trade excellence.",
  path: "/about",
});

const values = [
  {
    title: "Integrity in Trade",
    description:
      "Transparent pricing, documented compliance, and ethical sourcing across every transaction.",
  },
  {
    title: "Technical Excellence",
    description:
      "Metallurgical expertise guiding grade selection, specification alignment, and quality assurance.",
  },
  {
    title: "Global Reliability",
    description:
      "On-time vessel loading, consistent chemistry, and responsive export desk support worldwide.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Responsible minerals initiative compliance and ESG-aligned supply chain development.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SSL Group"
        title="Forging Global Metallurgy Partnerships"
        description={`Since ${company.founded}, SSL Group has grown from a Mumbai trading house into a premier international exporter of steel industry raw materials — trusted by manufacturers across 45+ countries.`}
      />
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Our Mission"
                title="Connecting Indian Metallurgy to the World"
                align="left"
              />
              <p className="text-lg leading-relaxed text-metallic/90">
                We exist to bridge the gap between India&apos;s world-class metallurgical
                production capacity and the global steel industry&apos;s demand for reliable,
                export-grade raw materials. Every shipment reflects our commitment to quality,
                documentation, and long-term partnership.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-metallic/80">
                Our team of metallurgists, trade specialists, and logistics coordinators
                work as an extension of your procurement department — from specification
                review to port delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-white/10 bg-gunmetal/30 p-5"
                >
                  <h3 className="font-heading font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm text-metallic/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      <StatsCounterSection />
      <TimelineSection />
      <CtaBannerSection />
    </>
  );
}
