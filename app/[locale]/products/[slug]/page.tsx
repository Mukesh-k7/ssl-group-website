import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBannerSection } from "@/sections/cta-banner";
import { products, getProductBySlug } from "@/data/products";
import { breadcrumbSchema, createPageMetadata, productSchema } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import ProductGallery from "@/components/products/product-gallary";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  console.log("Slug:", slug);
  const product = getProductBySlug(slug);
  console.log("Product:", product);
  if (!product) {
    console.log("Product Not Found");
    notFound();
  }
  const t = await getTranslations();
  return createPageMetadata({
    title: t(`Products.${product.key}.Name`),
    description: t(`Products.${product.key}.ShortDescription`),
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const t = await getTranslations();
  const related = products.filter((p) => p.slug !== slug).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema({
            name: product.key,
            description: product.description,
            slug: product.slug,
          })),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: product.key, path: `/products/${product.slug}` },
            ]),
          ),
        }}
      />

      <PageHero
        eyebrow={t(`Products.${product.key}.Category`)}
        title={t(`Products.${product.key}.Name`)}
        description={t(`Products.${product.key}.ShortDescription`)}
      />

      <section
        className="
          py-12
          container
          px-4 md:px-6 mx-auto
        "
      >
        <ProductGallery product={product} />
        {/* <ProductFAQ faq={product.variants[0].faq} /> */}
      </section>

      {related.length > 0 && (
        <section
          className="
            py-16
            border-t border-white/10
          "
        >
          <div
            className="
              container
              px-4 md:px-6 mx-auto
            "
          >
            <h2
              className="
                mb-8
                text-2xl text-white font-heading font-bold
              "
            >
              {t("RelatedProducts")}
            </h2>
            <div
              className="
                grid sm:grid-cols-3
                gap-4
              "
            >
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="
                    p-5
                    bg-gunmetal/30
                    rounded-xl
                    border border-white/10 hover:border-industrial-blue/40
                    transition-colors
                  "
                >
                  <p
                    className="
                      text-xs text-[#c35303d1]
                    "
                  >
                    {p.category}
                  </p>
                  <p
                    className="
                      mt-1
                      text-white font-heading font-semibold
                    "
                  >
                    {p.key}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div
        className="
          container
          px-4 md:px-6 pb-8 mx-auto
        "
      >
        <Button variant="ghost" asChild>
          <Link href="/products">
            <ArrowLeft
              className="
                w-4 h-4
              "
            />
            {t("BackToProducts")}
          </Link>
        </Button>
      </div>

      <CtaBannerSection />
    </>
  );
}
