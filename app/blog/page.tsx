import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection } from "@/components/shared/animated-section";
import { CtaBannerSection } from "@/sections/cta-banner";
import { blogPosts } from "@/data/blog";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Insights & Blog",
  description:
    "Market intelligence, technical guides, and trade insights from SSL Group's metallurgy export experts.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Insights"
        title="Industry Intelligence"
        description="Market analysis, technical procurement guides, and trade corridor updates for global steel industry professionals."
      />
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-xl border border-white/10 bg-gunmetal/30 overflow-hidden transition-all hover:border-industrial-blue/40"
              >
                <div className="h-2 bg-gradient-to-r from-industrial-blue to-metallic/30" />
                <div className="flex flex-1 flex-col p-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-industrial-blue">
                    {post.category}
                  </span>
                  <h2 className="font-heading mt-2 text-xl font-bold text-white group-hover:text-industrial-blue transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-metallic/80">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-metallic/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-sm text-industrial-blue hover:text-white"
                    >
                      Read <ArrowRight className="h-4 w-4" />
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
