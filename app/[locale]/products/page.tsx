import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProductsGridSection } from "@/sections/products-grid";
import { CtaBannerSection } from "@/sections/cta-banner";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";

export const metadata: Metadata = createPageMetadata({
  title: "Products",
  description:
    "Export-grade pig iron, ferro alloys, ferro titanium, carbon products, zinc ore, natural graphite, steel pipes, and industrial minerals.",
  path: "/products",
});

export default function ProductsPage() {
  const t = useTranslations("products")
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />
      <PageHero
        eyebrow= {t("ProductPortfolio")}
        title={t("RawMaterials")}
        description={t("EPCcontractors")}
      />
      <ProductsGridSection showAllLink={false} />
      <CtaBannerSection />
    </>
  );
}
