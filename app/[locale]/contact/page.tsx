import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection } from "@/components/shared/animated-section";
import { InquiryForm } from "@/sections/inquiry-form";
import { company } from "@/data/site";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact SSL Group for export inquiries, product specifications, and metallurgy procurement. Delhi head office with global export desk.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;
  const t = useTranslations("contact")

  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <PageHero
        eyebrow={t("Touch")}
        title={t("Contact")}
        description={t("Submit")}
      />
      <AnimatedSection
        className="
          py-24
          bg-[#fff]
          transition-colors
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
              grid lg:grid-cols-5
              gap-12
            "
          >
            <div
              className="
                lg:col-span-3
              "
            >
              <InquiryForm
                title={t("Inquiry")}
                description={t("Specifications")}
                variant="export"
              />
            </div>
            <div
              className="
                space-y-6
                lg:col-span-2
              "
            >
              <div
                className="
                  p-6
                  bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal border-0
                  rounded-xl border border-white/10
                "
              >
                <h3
                  className="
                    font-heading font-semibold text-lg text-white
                  "
                >
                   {t("CompanyDetails")}
                </h3>
                <ul
                  className="
                    mt-4 space-y-4
                  "
                >
                  <li
                    className="
                      flex
                      text-sm text-metallic/80
                      gap-3
                    "
                  >
                    <Link
                      href="https://www.google.com/maps?q=28.67378742741595,77.47962866652804"
                      target="_blank"
                    >
                      <MapPin
                        className="
                        h-5 w-5
                        mt-0.5
                        text-[#ffa00b]
                        shrink-0
                      "
                      /
                      >
                    </Link>

                    <span>
                      <strong
                        className="
                          block
                          text-white
                        "
                      >{t(`${company.key}.legalName`)}</strong>
                      {t("Address1")}
                      <br />
                      {t("Address2")}
                    </span>
                  </li>
                  <li>
                    <a
                      href={`tel:${company.phone}`}
                      className="
                        flex items-center
                        text-sm text-metallic/80 hover:text-white
                        gap-3
                      "
                    >
                      <Phone
                        className="
                          h-5 w-5
                          text-[#ffa00b] text-bold
                        "
                      /
                      >
                      {company.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="
                        flex items-center
                        text-sm text-metallic/80 hover:text-white
                        gap-3
                      "
                    >
                      <Mail
                        className="
                          h-5 w-5
                          text-[#ffa00b] text-bold
                        "
                      />
                      {company.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${company.salesEmail}`}
                      className="
                        flex items-center
                        text-sm text-metallic/80 hover:text-white
                        gap-3
                      "
                    >
                      <Mail
                        className="
                          h-5 w-5
                          text-[#ffa00b] text-bold
                        "
                      />
                      {company.salesEmail}
                    </a>
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center
                  p-6
                  bg-[#25D366] hover:bg-[#25D366]/20
                  rounded-xl border border-[#25D366]/30
                  transition-colors
                  gap-4
                "
              >
                <MessageCircle
                  className="
                    h-8 w-8
                    text-[#fff]
                  "
                />
                <div>
                  <p
                    className="
                      font-semibold text-white
                    "
                  >{t("WhatsApp")}</p>
                  <p
                    className="
                      text-sm text-text/80
                    "
                  >{t("Instant")}</p>
                </div>
              </a>

              <div
                className="
                  p-6
                  bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal border-0
                  rounded-xl border border-white/10
                "
              >
                <h3
                  className="
                    font-heading font-semibold text-lg text-white
                  "
                >
                   {t("Export")}
                </h3>
                <p
                  className="
                    mt-2
                    text-sm text-metallic/80
                  "
                >
                  {t("Timing")} : 9:30 AM – 6:00 PM IST
                  <br />
                  {t("Emergency")}
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              overflow-hidden
              mt-16
              rounded-2xl border border-white/10
            "
          >
            <iframe
              title="SSL Group Delhi Office Location"
              src="https://maps.google.com/maps?q=28.67378742741595,77.47962866652804&z=16&output=embed"
              className="
                h-80 w-full
                bg-gunmetal
                border-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
