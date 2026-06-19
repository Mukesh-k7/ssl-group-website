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
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("industries")
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
      <PageHero
        eyebrow={t("Industrie")}
        title={t("IndustriesWeServe")}
        description={t("Tailored")}
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
            title={t("SectorExpertise")}
            description={t("logistics")}
            align="center"
          />
          <div
            className="
              grid md:grid-cols-2
              gap-6
            "
          >
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Factory;
              const regions = t.raw(
                `${industry.key}.Regions`
              ) as string[];
              return (
                <article
                  key={industry.slug}
                  className="
                    flex
                    p-8
                    bg-gunmetal/30
                    rounded-xl border border-white/10
                    gap-6
                  "
                >
                  <div
                    className="
                      flex items-center justify-center
                      h-14 w-14
                      bg-industrial-blue/20
                      rounded-xl
                      shrink-0
                    "
                  >
                    <Icon
                      className="
                        h-7 w-7
                        text-[#c96a00]
                      "
                    /
                    >
                  </div>
                  <div>
                    <h2
                      className="
                        font-heading font-bold text-xl text-white
                      "
                    >
                      {t(`${industry.key}.Title`)}
                    </h2>
                    <p
                      className="
                        mt-2
                        leading-relaxed text-metallic/90
                      "
                    >
                      {t(`${industry.key}.Description`)}
                    </p>
                    <p
                      className="
                        mt-4
                        text-sm text-[#c96a00]
                      "
                    >
                       {t("KeyMarkets")}: {regions
                      .map((region) =>
                        t(`${industry.key}.RegionLabels.${region}`)
                      )
                      .join(" · ")} 
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
      <CtaBannerSection />
    </>
  );
}
