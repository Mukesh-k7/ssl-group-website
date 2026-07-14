import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection } from "@/components/shared/animated-section";
import { CtaBannerSection } from "@/sections/cta-banner";
import { blogPosts } from "@/data/blog";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";

export const metadata: Metadata = createPageMetadata({
  title: "Insights & Blog",
  description:
    "Market intelligence, technical guides, and trade insights from SSL Group's metallurgy export experts.",
  path: "/blog",
});

export default function BlogPage() {
  const t = useTranslations("blog")
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
        ]}
      />
      <PageHero
        eyebrow={t("Eyebrow")}
        title={t("Title")}
        description={t("Description")}
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
          <div
            className="
              grid md:grid-cols-2
              gap-8
            "
          >
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="
                  flex flex-col overflow-hidden
                  bg-gunmetal/30
                  rounded-xl
                  border border-white/10 hover:border-industrial-blue/40
                  transition-all
                  group
                "
              >
                <div
                  className="
                    h-2
                    bg-gradient-to-r from-industrial-blue to-metallic/30
                  "
                  /
                >
                <div
                  className="
                    flex flex-1 flex-col
                    p-8
                  "
                >
                  <span
                    className="
                      text-xs text-[#c35303d1] font-semibold uppercase
                      tracking-wider
                    "
                  >
                     {t(`${post.key}.category`)}
                  </span>
                  <h2
                    className="
                      mt-2
                      font-heading font-bold text-xl text-white
                      transition-colors
                      group-hover:text-[#c96a00]
                    "
                  >
                    <Link href={`/blog/${post.slug}`}>{t(`${post.key}.Title`)}</Link>
                  </h2>
                  <p
                    className="
                      flex-1
                      mt-3
                      text-sm text-metallic/80 leading-relaxed
                    "
                  >
                    {t(`${post.key}.excerpt`)}
                  </p>
                  <div
                    className="
                      flex items-center justify-between
                      mt-6
                    "
                  >
                    <div
                      className="
                        flex items-center
                        text-xs text-metallic/60
                        gap-4
                      "
                    >
                      <span
                        className="
                          flex items-center
                          gap-1
                        "
                      >
                        <Calendar
                          className="
                            h-3 w-3
                          "
                          /
                        >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span
                        className="
                          flex items-center
                          gap-1
                        "
                      >
                        <Clock
                          className="
                            h-3 w-3
                          "
                          /
                        >
                        {t(`${post.key}.readTime`)}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="
                        flex items-center
                        text-sm text-[#c96a00] hover:text-white
                        gap-1
                      "
                    >
                      {t("Read")} <ArrowRight
                        className="
                          h-4 w-4
                        "
                        /
                      >
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBannerSection />
    </>
  );
}
