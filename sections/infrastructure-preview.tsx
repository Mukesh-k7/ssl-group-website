"use client";

import Link from "next/link";
import { Warehouse, Ship, Container } from "lucide-react";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";

const facilities = [
  {
    icon: Warehouse,
    title: "Bonded Warehousing",
    description: "50,000+ MT capacity across Ghaziabad, Kandla, and Vizag port facilities.",
  },
  {
    icon: Ship,
    title: "Vessel Loading",
    description: "Dedicated berth access with 5,000–75,000 MT parcel loading capability.",
  },
  {
    icon: Container,
    title: "Container & Bulk",
    description: "Flexible packaging — bulk vessels, containers, and jumbo bag dispatch.",
  },
];

export function InfrastructurePreviewSection() {
  return (
    <AnimatedSection
      id="infrastructure"
      className="
        py-24
        bg-gunmetal/20
        border-y border-white/10
      "
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <SectionHeader
          eyebrow="Infrastructure"
          title="World-Class Export Infrastructure"
          description="Port-side facilities, quality labs, and logistics networks engineered for industrial-scale shipments."
        />
        <div
          className="
            grid md:grid-cols-3
            gap-6
          "
        >
          {facilities.map((item) => (
            <div
              key={item.title}
              className="
                p-8
                text-center
                bg-charcoal/50
                rounded-xl border border-white/10
              "
            >
              <item.icon
                className="
                  h-10 w-10
                  mx-auto mb-4
                  text-[#c96a00]
                "
              />
              <h3
                className="
                  font-heading font-semibold text-lg text-white
                "
              >{item.title}</h3>
              <p
                className="
                  mt-2
                  text-sm text-metallic/80
                "
              >{item.description}</p>
            </div>
          ))}
        </div>
        <div
          className="
            mt-10
            text-center
          "
        >
          <Button
            variant="secondary"
            className="
              bg-[#c35303d1]
            "
            asChild
          >
            <Link href="/infrastructure">Explore Infrastructure</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
