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
