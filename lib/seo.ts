import type { Metadata } from "next";
import { getAbsoluteUrl, SITE_URL } from "@/lib/site-url";
import { company } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;
const siteName = company.name;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: "SSL Group | Metallurgy & Steel Raw Materials Exporter",
    template: "%s | SSL Group",
  },
  description:
    "Premium Indian metallurgy and steel industry raw material supplier. Pig iron, ferro alloys, carbon products, industrial minerals — trusted global export partner.",
  keywords: [
    "SSL Group",
    "pig iron exporter",
    "ferro alloys supplier",
    "steel raw materials India",
    "metallurgy export",
    "industrial minerals",
    "sslgroup.in",
  ],
  authors: [{ name: "SSL Group", url: `${siteUrl}/` }],
  creator: "SSL Group",
  publisher: "SSL Group",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/`,
    siteName,
    title: "SSL Group | Global Metallurgy & Steel Raw Materials",
    description:
      "Enterprise-grade export of pig iron, ferro alloys, carbon products, and steel industry raw materials to manufacturers worldwide.",
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "SSL Group — Industrial Metallurgy Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSL Group | Metallurgy Export Corporation",
    description: "Trusted global supplier of steel industry raw materials from India.",
    images: [`${siteUrl}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  applicationName: "SSL Group",
};

export function createPageMetadata({
  title,
  description,
  path = "",
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const canonical = getAbsoluteUrl(path);

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: canonical,
      siteName,
      type,
      locale: "en_IN",
      ...(publishedTime && type === "article" ? { publishedTime } : {}),
      images: [
        {
          url: `${siteUrl}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: "SSL Group — Industrial Metallurgy Export",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [`${siteUrl}/og-image.svg`],
    },
    alternates: {
      canonical,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Indian metallurgy and steel industry raw material supplier and global exporter.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201002",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.email,
      telephone: company.phone,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: ["https://www.sslgroup.in/", "https://www.linkedin.com/company/ssl-group"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: `${siteUrl}/`,
    description:
      "Premium metallurgy and steel industry raw materials exporter from India.",
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: `${siteUrl}/`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: getAbsoluteUrl(`/products/${product.slug}`),
    brand: {
      "@type": "Brand",
      name: company.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: company.name,
      url: `${siteUrl}/`,
    },
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: getAbsoluteUrl(`/blog/${article.slug}`),
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: company.name,
      url: `${siteUrl}/`,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: getAbsoluteUrl(`/blog/${article.slug}`),
    articleSection: article.category,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}
