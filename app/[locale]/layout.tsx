import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import ScrollToSection from "@/components/shared/scroll-to-top";
import { Chatbot } from "@/components/chatbot/chat";
import { RegionProvider } from "@/components/region/region-context";


import {
  defaultMetadata,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "hi" },
    { locale: "ar" },
  ];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;

  try {
    messages =
      (await import(`../../messages/${locale}.json`))
        .default;
  } catch {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema()
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteSchema()
            ),
          }}
        />
      </head>

      <body className="min-h-screen bg-charcoal font-sans text-white antialiased">
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <RegionProvider>
            <Navbar />
            <main>{children}</main>
            <Chatbot />
            <Footer />
            <div className="flex items-center justify-center">
              <ScrollToSection />
              <WhatsAppButton />
            </div>
          </RegionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
