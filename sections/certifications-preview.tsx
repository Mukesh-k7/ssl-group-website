"use client";

import Link from "next/link";
import { Award } from "lucide-react";
import {
  AnimatedSection,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";

export function CertificationsPreviewSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Certifications"
          title="Compliance & Quality Assurance"
          description="Internationally recognized standards underpinning every export shipment and supply chain operation."
        />
        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-gunmetal/30 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-industrial-blue/20">
                  <Award className="h-6 w-6 text-industrial-blue" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">{cert.name}</h3>
                  <p className="text-xs text-industrial-blue">{cert.issuer} · {cert.year}</p>
                  <p className="mt-1 text-sm text-metallic/80">{cert.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <div className="mt-10 text-center">
          <Button variant="secondary" asChild>
            <Link href="/certifications">View All Certifications</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
