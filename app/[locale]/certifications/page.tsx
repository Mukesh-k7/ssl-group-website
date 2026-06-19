import type { Metadata } from "next";
import { Award, FileText } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { CtaBannerSection } from "@/sections/cta-banner";
import { certifications } from "@/data/certifications";
import { PageBreadcrumbJsonLd } from "@/components/shared/page-breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Certifications",
  description:
    "ISO 9001, ISO 14001, OHSAS, RMI compliance, and export credentials — SSL Group's quality and compliance framework.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <PageBreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Certifications", path: "/certifications" },
        ]}
      />
      <PageHero
        eyebrow="Compliance"
        title="Certifications & Standards"
        description="Internationally recognized quality, environmental, and trade certifications underpinning every export operation."
      />
      <AnimatedSection
        className="
          py-24
        "
      >
        <div
          className="
            container
            mx-auto px-4 md:px-6
          "
        >
          <SectionHeader
            title="Our Credentials"
            description="Third-party audited systems ensuring consistent quality, responsible sourcing, and export compliance."
            align="center"
          />
          <div
            className="
              grid md:grid-cols-2 lg:grid-cols-3
              gap-6
            "
          >
            {certifications.map((cert) => (
              <article
                key={cert.key}
                className="
                  p-8
                  bg-gunmetal/30
                  rounded-xl border border-white/10
                "
              >
                <Award
                  className="
                    h-10 w-10
                    mb-4
                    text-[#c96a00]
                  "
                  /
                >
                <h2
                  className="
                    font-heading font-bold text-xl text-white
                  "
                >{cert.key}</h2>
                <p
                  className="
                    mt-1
                    text-sm text-[#c96a00]
                  "
                >
                  {cert.issuer} · Certified {cert.year}
                </p>
                <p
                  className="
                    mt-4
                    text-metallic/80
                  "
                >{cert.description}</p>
              </article>
            ))}
          </div>
          <div
            className="
              flex items-start
              mt-16 p-8
              bg-industrial-blue/10
              rounded-xl border border-industrial-blue/30
              gap-4
            "
          >
            <FileText
              className="
                h-8 w-8
                text-[#c96a00]
                shrink-0
              "
              /
            >
            <div>
              <h3
                className="
                  font-heading font-semibold text-lg text-white
                "
              >
                Inspection & Testing Partners
              </h3>
              <p
                className="
                  mt-2
                  text-metallic/80
                "
              >
                All export shipments supported by SGS, Bureau Veritas, and Intertek inspection
                protocols. Mill test certificates, assay reports, and pre-shipment inspection
                documentation provided as standard.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <CtaBannerSection />
    </>
  );
}
