import { breadcrumbSchema } from "@/lib/seo";

interface PageBreadcrumbJsonLdProps {
  items: { name: string; path: string }[];
}

export function PageBreadcrumbJsonLd({ items }: PageBreadcrumbJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema(items)),
      }}
    />
  );
}
