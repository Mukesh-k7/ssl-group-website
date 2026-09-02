import type { Metadata } from "next";
import { HeroSection } from "@/sections/hero";
import { StatsCounterSection } from "@/sections/stats-counter";
import { WhyChooseUsSection } from "@/sections/why-choose-us";
import { TestimonialsSection } from "@/sections/testimonials";
import OurCareer from "@/sections/our-career";
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
      <StatsCounterSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <OurCareer />
      <CtaBannerSection />
    </>
  );
}