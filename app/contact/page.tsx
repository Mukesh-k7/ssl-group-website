import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection } from "@/components/shared/animated-section";
import { InquiryForm } from "@/sections/inquiry-form";
import { company } from "@/data/site";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact SSL Group for export inquiries, product specifications, and metallurgy procurement. Delhi head office with global export desk.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Our Export Desk"
        description="Submit your inquiry for product specifications, pricing, vessel scheduling, or partnership discussions. We respond within 24 business hours."
      />
      <AnimatedSection
        className="
          py-24
          bg-[#9b5600d1] hover:bg-[#B56825]/[0.78]
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
                title="Export Inquiry Form"
                description="Complete the form below for product quotes, specifications, and shipment planning."
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
                  bg-gunmetal/30
                  rounded-xl border border-white/10
                "
              >
                <h3
                  className="
                    font-heading font-semibold text-lg text-white
                  "
                >
                  Company Details
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
                    <MapPin
                      className="
                        h-5 w-5
                        mt-0.5
                        text-[#c96a00] text-bold
                        shrink-0
                      "
                    /
                    >
                    <span>
                      <strong
                        className="
                          block
                          text-white
                        "
                      >{company.legalName}</strong>
                      {company.address.line1}
                      <br />
                      {company.address.line2}
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
                          text-[#c96a00] text-bold
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
                          text-[#c96a00] text-bold
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
                          text-[#c96a00] text-bold
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
                  bg-[#25D366]/10 hover:bg-[#25D366]/20
                  rounded-xl border border-[#25D366]/30
                  transition-colors
                  gap-4
                "
              >
                <MessageCircle
                  className="
                    h-8 w-8
                    text-[#25D366]
                  "
                />
                <div>
                  <p
                    className="
                      font-semibold text-white
                    "
                  >WhatsApp Export Desk</p>
                  <p
                    className="
                      text-sm text-metallic/80
                    "
                  >Instant messaging for urgent inquiries</p>
                </div>
              </a>

              <div
                className="
                  p-6
                  bg-gunmetal/30
                  rounded-xl border border-white/10
                "
              >
                <h3
                  className="
                    font-heading font-semibold text-lg text-white
                  "
                >
                  Export Inquiry Hours
                </h3>
                <p
                  className="
                    mt-2
                    text-sm text-metallic/80
                  "
                >
                  Monday – Saturday: 9:30 AM – 6:00 PM IST
                  <br />
                  Sunday: Emergency shipments only
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
            {/* <iframe
              title="SSL Group Delhi Office Location"
              src="https://maps.google.com/maps?q=Ground+Floor+CC-23+AVANTIKA+1+Avantika+Main+Road+Saini+Washing+Center+Avantika+Ghaziabad+Uttar+Pradesh+201015+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="
                h-80 w-full
                bg-gunmetal
                border-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            /> */}

            <iframe
              title="SSL Group Delhi Office Location"
              src="https://maps.google.com/maps?q=Ground%20Floor,%20CC-23,%20AVANTIKA%201,%20Avantika%20Main%20Road,%20Saini%20Washing%20Center,%20Avantika,%20Ghaziabad,%20Uttar%20Pradesh%20201015,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              className="rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* <iframe
              title="SSL Group Delhi Office Location"
              src="https://maps.google.com/maps?q=SSL%20Group&t=k&z=15&ie=UTF8&iwloc=&output=embed"
              className="
                h-80 w-full
                bg-gunmetal
                border-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            /> */}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
