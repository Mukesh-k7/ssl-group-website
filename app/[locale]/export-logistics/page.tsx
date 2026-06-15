import type { Metadata } from "next";
import { Ship, FileCheck, Anchor, Truck } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ExportMapSection } from "@/sections/export-map";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { CtaBannerSection } from "@/sections/cta-banner";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Export & Logistics",
  description:
    "Global export logistics for metallurgy raw materials — vessel loading, Incoterms flexibility, documentation, and trade finance support.",
  path: "/export-logistics",
});

const services = [
  {
    icon: Ship,
    title: "Bulk Vessel Chartering",
    description:
      "5,000–75,000 MT parcel sizes with FOB, CFR, and CIF terms. Experienced chartering desk for timely laycan scheduling.",
  },
  {
    icon: Anchor,
    title: "Port Operations",
    description:
      "Dedicated operations at Mumbai, Kandla, Vizag, and Haldia with berth access and stevedoring partnerships.",
  },
  {
    icon: FileCheck,
    title: "Trade Documentation",
    description:
      "Full LC compliance, COO, inspection certificates, bill of lading, and customs documentation for seamless clearance.",
  },
  {
    icon: Truck,
    title: "Inland Logistics",
    description:
      "Rail and road connectivity from mine and smelter to port with bonded warehousing for inventory management.",
  },
];

const incoterms = ["FOB", "CFR", "CIF", "CIP", "DAP", "EXW"];

export default function ExportLogisticsPage() {
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Export & Logistics", path: "/export-logistics" },
        ]}
      />
      <PageHero
        eyebrow="Export Operations"
        title="Global Export & Logistics Excellence"
        description="End-to-end export management from Indian ports to steel plants worldwide — engineered for reliability at industrial scale."
      />
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
            title="Integrated Export Services"
            description="Every shipment managed by dedicated export coordinators with real-time tracking and documentation control."
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
                key={service.title}
                className="
                  p-6
                  bg-gunmetal/30
                  rounded-xl border border-white/10
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
                >{service.title}</h3>
                <p
                  className="
                    mt-2
                    text-sm text-metallic/80
                  "
                >{service.description}</p>
              </div>
            ))}
          </div>
          <div
            className="
              mt-16 p-8
              bg-charcoal/50
              rounded-xl border border-white/10
            "
          >
            <h3
              className="
                font-heading font-bold text-xl text-white
              "
            >Supported Incoterms</h3>
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
                    rounded-lg border border-industrial-blue/30
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
