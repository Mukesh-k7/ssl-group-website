import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaBannerSection } from "@/sections/cta-banner";
import { products, getProductBySlug } from "@/data/products";
import { breadcrumbSchema, createPageMetadata, productSchema } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

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
  const t = await getTranslations();
  const product = getProductBySlug(slug);
  if (!product) return {};
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
  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

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
          py-16
        "
      >
        <div
          className="
            container
            px-4 md:px-6 mx-auto
          "
        >
          <div
            className="
              grid lg:grid-cols-3
              gap-12
            "
          >
            <div
              className="
                lg:col-span-2
              "
            >
              <div
                className="
                  overflow-hidden
                  mb-8
                  bg-gunmetal
                  rounded-2xl border border-white/10
                  aspect-video
                "
                style={{
                  background: `linear-gradient(to top, rgba(235,224,224,0) 0%, transparent 50%), url(${product.image})`,
                  backgroundColor: "#D07A00",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                  margin: 0,
                }}
              /
              >
              <h2>Overview</h2>

              <p>
                {t(`Products.${product.key}.Description`)}
              </p>
              <h3
                className="
                  mt-10
                  text-xl text-white font-heading font-bold
                "
              >
                {t("Applications")}
              </h3>
              <ul
                className="
                  grid sm:grid-cols-2
                  mt-4
                  gap-3
                "
              >
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="
                      flex items-center
                      text-metallic/90
                      gap-2
                    "
                  >
                    <CheckCircle
                      className="
                        w-5 h-5
                        text-[#c35303d1]
                        shrink-0
                      "
                    /
                    >


                    {t(
                      `Products.${product.key}.Applications.${app}`
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Card
                className="
                  sticky top-28
                "
              >
                <CardHeader>
                  <CardTitle> {t("Specifications")} </CardTitle>
                </CardHeader>
                <CardContent>
                  <dl
                    className="
                      space-y-3
                    "
                  >
                    {product.specifications.map((spec) => (
                      <div
                        key={spec.labelKey}
                        className="
                          flex justify-between
                          pb-3
                          text-sm
                          border-b border-white/10 last:border-0
                        "
                      >
                        <dt
                          className="
                            text-metallic/70
                          "
                        >
                          {t(
                            `Products.${product.key}.Specifications.${spec.labelKey}`
                          )}
                        </dt>
                        <dd
                          className="
                            text-white font-medium
                          "
                        >
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Button
                    className="
                      w-full
                      mt-6
                    "
                    asChild
                  >
                    <Link href="/contact">
                      {t("Request")}
                      <ArrowRight
                        className="
                          w-4 h-4
                        "
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
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
                    {t(`Products.${p.key}.Category`)}
                  </p>
                  <p
                    className="
                      mt-1
                      text-white font-heading font-semibold
                    "
                  >
                    {t(`Products.${p.key}.Name`)}
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
            Back To Products
          </Link>
        </Button>
      </div>
      <CtaBannerSection />
    </>
  );
}
