import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { TimelineSection } from "@/sections/timeline";
import { StatsCounterSection } from "@/sections/stats-counter";
import { CtaBannerSection } from "@/sections/cta-banner";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { company, Values } from "@/data/site";
import { useTranslations } from "next-intl";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about SSL Group — India's trusted metallurgy and steel raw materials exporter with 28+ years of global trade excellence.",
  path: "/about",
});

export default function AboutPage() {
  const t = useTranslations("about")
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      <PageHero
        eyebrow={t("title")}
        title={t("Title")}
        description={t("SSLGroup")}
      />
      <AnimatedSection
        id="about-content"
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
          <div
            className="
              grid lg:grid-cols-2
              gap-12
            "
          >
            <div>
              <SectionHeader
                eyebrow={t("Eyebrow")}
                title={t("Globals")}
                titleClassName="font-heading font-bold text-3xl text-white md:text-4xl lg:text-5xl
                  tracking-tight"
                eyebrowClassName="mb-3
                  text-lg text-transparent font-bold tracking-[0.2em] uppercase
                bg-gradient-to-b bg-clip-text from-[#F7941D] via-[#fcaf1c]
                to-[#5B2A00] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]"
                align="left"
              />
              <p
                className="
                  text-lg text-metallic/90 leading-relaxed
                "
              >
                {t("Documentation")}
              </p>
              <p
                className="
                  mt-4
                  text-lg text-metallic/80 leading-relaxed
                "
              >
                {t("OurTeam")}
              </p>
            </div>
            <div
              className="
                grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1
                gap-4
              "
            >
              {Values.map((value) => (
                <div
                  key={value.key}
                  className="
                    p-5
                    bg-gunmetal/30
                    rounded-xl border border-white/10
                  "
                >
                  <h3
                    className="
                      font-heading font-semibold text-white
                    "
                  > {t(`${value.key}.Title`)} </h3>
                  <p
                    className="
                      mt-2
                      text-sm text-metallic/80
                    "
                  >{t(`${value.key}.Description`)}</p>
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
