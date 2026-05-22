import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sslgroup.in";
const siteName = "SSL Group";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  ],
  authors: [{ name: "SSL Group" }],
  creator: "SSL Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "SSL Group | Global Metallurgy & Steel Raw Materials",
    description:
      "Enterprise-grade export of pig iron, ferro alloys, carbon products, and steel industry raw materials to manufacturers worldwide.",
    images: [
      {
        url: "/og-image.svg",
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
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: `${siteUrl}${path}`,
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SSL Group",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Indian metallurgy and steel industry raw material supplier and global exporter.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "export@sslgroup.in",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/ssl-group",
    ],
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
    url: `${siteUrl}/products/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "SSL Group",
    },
    manufacturer: {
      "@type": "Organization",
      name: "SSL Group",
    },
  };
}
