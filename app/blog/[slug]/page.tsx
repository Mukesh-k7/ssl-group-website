import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBannerSection } from "@/sections/cta-banner";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { createPageMetadata } from "@/lib/seo";

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
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-32 pb-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>
          </Button>
          <span className="text-sm font-semibold uppercase tracking-wider text-industrial-blue">
            {post.category}
          </span>
          <h1 className="font-heading mt-2 text-4xl font-bold text-white md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex gap-4 text-sm text-metallic/70">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} read
            </span>
          </div>
          <p className="mt-8 text-xl leading-relaxed text-metallic/90">{post.excerpt}</p>
          <div className="prose prose-invert mt-8 max-w-none">
            <p className="text-lg leading-relaxed text-metallic/80">{post.content}</p>
            <p className="mt-4 text-lg leading-relaxed text-metallic/80">
              For detailed market reports and procurement consultations, contact our export
              desk at export@sslgroup.in. Our metallurgy specialists provide grade-specific
              guidance tailored to your production requirements.
            </p>
          </div>
        </div>
      </article>
      <CtaBannerSection />
    </>
  );
}
