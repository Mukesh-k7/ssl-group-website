import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBannerSection } from "@/sections/cta-banner";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { articleSchema, breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.key,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const t = await getTranslations("blog");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.key,
              description: post.excerpt,
              slug: post.slug,
              date: post.date,
              category: post.category,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Insights", path: "/blog" },
              { name: post.key, path: `/blog/${post.slug}` },
            ])
          ),
        }}
      />
      <article
        className="
          pt-32 pb-16
        "
      >
        <div
          className="
            container
            max-w-3xl
            mx-auto px-4 md:px-6
          "
        >
          <Button
            variant="ghost" asChild
            className="
              mb-8
            "
          >
            <Link href="/blog">
              <ArrowLeft
                className="
                  h-4 w-4
                "
                /
              >
               {t("Insights")}
            </Link>
          </Button>
          <span
            className="
              text-sm text-[#c35303d1] font-semibold uppercase tracking-wider
            "
          >
            {t(`${post.key}.category`)}
          </span>
          <h1
            className="
              mt-2
              font-heading font-bold text-4xl text-white md:text-5xl
            "
          >
            {t(`${post.key}.Title`)}
          </h1>
          <div
            className="
              flex
              mt-4
              text-sm text-metallic/70
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
                  h-4 w-4
                "
                /
              >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
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
                  h-4 w-4
                "
                /
              >
             {t(`${post.key}.readTime`)} {t("read")}
            </span>
          </div>
          <p
            className="
              mt-8
              text-xl text-metallic/90 leading-relaxed
            "
          >{t(`${post.key}.excerpt`)} </p>
          <div
            className="
              max-w-none
              mt-8
              prose prose-invert
            "
          >
            <p
              className="
                text-lg text-metallic/80 leading-relaxed
              "
            >{t(`${post.key}.content`)} </p>
            <p
              className="
                mt-4
                text-lg text-metallic/80 leading-relaxed
              "
            >
              {t("Detailed")}
              
            </p>
          </div>
        </div>
      </article>
      <CtaBannerSection />
    </>
  );
}
