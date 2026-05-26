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

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return createPageMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: product.name, path: `/products/${product.slug}` },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.shortDescription}
      />
      <section
        className="
          py-16
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
                  backgroundImage: `linear-gradient(135deg, rgba(30,58,95,0.4), rgba(17,17,17,0.9)), url('${product.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#2A2A2A",
                }}
              /
              >
              <h2
                className="
                  font-heading font-bold text-2xl text-white
                "
              >Overview</h2>
              <p
                className="
                  mt-4
                  text-lg text-metallic/90 leading-relaxed
                "
              >
                {product.description}
              </p>
              <h3
                className="
                  mt-10
                  font-heading font-bold text-xl text-white
                "
              >Applications</h3>
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
                        h-5 w-5
                        text-industrial-blue
                        shrink-0
                      "
                      /
                    >
                    {app}
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
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl
                    className="
                      space-y-3
                    "
                  >
                    {product.specifications.map((spec) => (
                      <div
                        key={spec.label}
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
                        >{spec.label}</dt>
                        <dd
                          className="
                            font-medium text-white
                          "
                        >{spec.value}</dd>
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
                      Request Quote
                      <ArrowRight
                        className="
                          h-4 w-4
                        "
                        /
                      >
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
              mx-auto px-4 md:px-6
            "
          >
            <h2
              className="
                mb-8
                font-heading font-bold text-2xl text-white
              "
            >Related Products</h2>
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
                      text-xs text-industrial-blue
                    "
                  >{p.category}</p>
                  <p
                    className="
                      mt-1
                      font-heading font-semibold text-white
                    "
                  >{p.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div
        className="
          container
          mx-auto px-4 md:px-6 pb-8
        "
      >
        <Button variant="ghost" asChild>
          <Link href="/products">
            <ArrowLeft
              className="
                h-4 w-4
              "
              /
            >
            Back to Products
          </Link>
        </Button>
      </div>
      <CtaBannerSection />
    </>
  );
}
