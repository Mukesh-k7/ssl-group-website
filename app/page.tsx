import type { Metadata } from "next";
import { HeroSection } from "@/sections/hero";
import { IntroSection } from "@/sections/intro-section";
import { ProductsGridSection } from "@/sections/products-grid";
import { WhyChooseUsSection } from "@/sections/why-choose-us";
import { IndustriesServedSection } from "@/sections/industries-served";
import { ExportMapSection } from "@/sections/export-map";
import { InfrastructurePreviewSection } from "@/sections/infrastructure-preview";
import { CertificationsPreviewSection } from "@/sections/certifications-preview";
import { StatsCounterSection } from "@/sections/stats-counter";
import { TestimonialsSection } from "@/sections/testimonials";
import { CtaBannerSection } from "@/sections/cta-banner";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "SSL Group",
  description:
    "SSL Group — India's premier exporter of pig iron, ferro alloys, carbon products, and steel industry raw materials. Trusted by manufacturers in 45+ countries.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsCounterSection />
      <ProductsGridSection limit={6} />
      <WhyChooseUsSection />
      <IndustriesServedSection limit={8} />
      <ExportMapSection />
      <InfrastructurePreviewSection />
      <CertificationsPreviewSection />
      <TestimonialsSection />
      <CtaBannerSection />
    </>
  );
}
