import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection } from "@/components/shared/animated-section";
import { InquiryForm } from "@/sections/inquiry-form";
import { company } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact SSL Group for export inquiries, product specifications, and metallurgy procurement. Mumbai headquarters with global export desk.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Our Export Desk"
        description="Submit your inquiry for product specifications, pricing, vessel scheduling, or partnership discussions. We respond within 24 business hours."
      />
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <InquiryForm
                title="Export Inquiry Form"
                description="Complete the form below for product quotes, specifications, and shipment planning."
                variant="export"
              />
            </div>
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-xl border border-white/10 bg-gunmetal/30 p-6">
                <h3 className="font-heading text-lg font-semibold text-white">
                  Company Details
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex gap-3 text-sm text-metallic/80">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-industrial-blue" />
                    <span>
                      <strong className="block text-white">{company.legalName}</strong>
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                    </span>
                  </li>
                  <li>
                    <a
                      href={`tel:${company.phone}`}
                      className="flex items-center gap-3 text-sm text-metallic/80 hover:text-white"
                    >
                      <Phone className="h-5 w-5 text-industrial-blue" />
                      {company.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-center gap-3 text-sm text-metallic/80 hover:text-white"
                    >
                      <Mail className="h-5 w-5 text-industrial-blue" />
                      {company.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${company.salesEmail}`}
                      className="flex items-center gap-3 text-sm text-metallic/80 hover:text-white"
                    >
                      <Mail className="h-5 w-5 text-industrial-blue" />
                      {company.salesEmail}
                    </a>
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition-colors hover:bg-[#25D366]/20"
              >
                <MessageCircle className="h-8 w-8 text-[#25D366]" />
                <div>
                  <p className="font-semibold text-white">WhatsApp Export Desk</p>
                  <p className="text-sm text-metallic/80">Instant messaging for urgent inquiries</p>
                </div>
              </a>

              <div className="rounded-xl border border-white/10 bg-gunmetal/30 p-6">
                <h3 className="font-heading text-lg font-semibold text-white">
                  Export Inquiry Hours
                </h3>
                <p className="mt-2 text-sm text-metallic/80">
                  Monday – Saturday: 9:00 AM – 7:00 PM IST
                  <br />
                  Sunday: Emergency shipments only
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps placeholder */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-white/10">
            <div className="flex h-80 items-center justify-center bg-gunmetal/50">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-industrial-blue" />
                <p className="mt-4 font-heading text-lg font-semibold text-white">
                  Mumbai Headquarters
                </p>
                <p className="mt-1 text-sm text-metallic/70">{company.address.line2}</p>
                <p className="mt-4 text-xs text-metallic/50">
                  Replace with Google Maps embed: iframe src=&quot;https://maps.google.com/...&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
