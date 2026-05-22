import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProductsGridSection } from "@/sections/products-grid";
import { CtaBannerSection } from "@/sections/cta-banner";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Products",
  description:
    "Export-grade pig iron, ferro alloys, ferro titanium, carbon products, zinc ore, natural graphite, steel pipes, and industrial minerals.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Portfolio"
        title="Metallurgy & Steel Raw Materials"
        description="Nine core product categories serving integrated steel plants, foundries, EPC contractors, and global industrial procurement teams."
      />
      <ProductsGridSection showAllLink={false} />
      <CtaBannerSection
        title="Need Custom Specifications?"
        description="Our metallurgy team provides grade recommendations, assay reports, and sample dispatch for evaluation."
      />
    </>
  );
}
