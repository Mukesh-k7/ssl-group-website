import type { Metadata } from "next";
import {
  Factory,
  Hammer,
  Building2,
  Landmark,
  ClipboardList,
  Layers,
  Flame,
  Fuel,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { CtaBannerSection } from "@/sections/cta-banner";
import { industries } from "@/data/industries";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Industries Served",
  description:
    "SSL Group supplies metallurgy raw materials to steel manufacturers, foundries, EPC contractors, infrastructure, and global procurement companies.",
  path: "/industries",
});

const iconMap: Record<string, LucideIcon> = {
  Factory,
  Hammer,
  Building2,
  Landmark,
  ClipboardList,
  Layers,
  Flame,
  Fuel,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        description="Tailored metallurgical supply solutions for every segment of the global steel and industrial ecosystem."
      />
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Sector Expertise"
            description="Deep industry knowledge ensures the right grades, packaging, and logistics for your operational requirements."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Factory;
              return (
                <article
                  key={industry.slug}
                  className="flex gap-6 rounded-xl border border-white/10 bg-gunmetal/30 p-8"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-industrial-blue/20">
                    <Icon className="h-7 w-7 text-industrial-blue" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-white">
                      {industry.name}
                    </h2>
                    <p className="mt-2 leading-relaxed text-metallic/90">
                      {industry.description}
                    </p>
                    <p className="mt-4 text-sm text-industrial-blue">
                      Key Markets: {industry.regions.join(", ")}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
      <CtaBannerSection
        title="Procurement for Your Industry?"
        description="Speak with our sector specialists for tailored grade recommendations and contract supply programs."
      />
    </>
  );
}
