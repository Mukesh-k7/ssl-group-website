import type { Metadata } from "next";
import { Warehouse, FlaskConical, Ship, Container } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { StatsCounterSection } from "@/sections/stats-counter";
import { CtaBannerSection } from "@/sections/cta-banner";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Infrastructure",
  description:
    "Bonded warehousing, quality laboratories, port-side facilities, and logistics infrastructure for metallurgy exports.",
  path: "/infrastructure",
});

const facilities = [
  {
    icon: Warehouse,
    title: "Bonded Warehousing",
    stats: "50,000+ MT",
    description:
      "Climate-controlled storage at Mumbai, Kandla, and Visakhapatnam with inventory management and blending capabilities.",
    locations: ["Mumbai Nhava Sheva", "Kandla", "Vizag"],
  },
  {
    icon: FlaskConical,
    title: "Quality Laboratories",
    stats: "3 Labs",
    description:
      "In-house and partner labs for chemical analysis, sieve testing, and metallurgical property verification before dispatch.",
    locations: ["Mumbai HQ", "Kandla Port", "Vizag Port"],
  },
  {
    icon: Ship,
    title: "Port-Side Operations",
    stats: "4 Major Ports",
    description:
      "Dedicated loading berths, stevedoring contracts, and vessel coordination for bulk and break-bulk shipments.",
    locations: ["JNPT", "Kandla", "Vizag", "Haldia"],
  },
  {
    icon: Container,
    title: "Packaging & Dispatch",
    stats: "Multi-Modal",
    description:
      "Bulk vessel, containerized, jumbo bag, and break-bulk packaging with customizable sizing and labeling.",
    locations: ["Pan-India Network"],
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Infrastructure", path: "/infrastructure" },
        ]}
      />
      <PageHero
        eyebrow="Facilities"
        title="Export Infrastructure"
        description="World-class port-side facilities, quality laboratories, and logistics networks engineered for industrial-scale metallurgy exports."
      />
      <StatsCounterSection />
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Operational Facilities"
            description="Strategic infrastructure investments ensuring consistent quality, capacity, and delivery reliability."
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {facilities.map((facility) => (
              <article
                key={facility.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-gunmetal/30"
              >
                <div className="border-b border-white/10 bg-industrial-blue/10 p-8">
                  <facility.icon className="mb-4 h-10 w-10 text-industrial-blue" />
                  <div className="flex items-end justify-between">
                    <h2 className="font-heading text-2xl font-bold text-white">
                      {facility.title}
                    </h2>
                    <span className="font-heading text-3xl font-bold text-industrial-blue">
                      {facility.stats}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-metallic/90">{facility.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {facility.locations.map((loc) => (
                      <span
                        key={loc}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-metallic"
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
