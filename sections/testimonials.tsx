"use client";

import { Quote } from "lucide-react";
import {
  AnimatedSection,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared/animated-section";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <AnimatedSection className="bg-gunmetal/20 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Client Trust"
          title="Trusted by Global Steel Leaders"
          description="Long-term partnerships with procurement teams across the Middle East, Africa, and Europe."
        />
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.author}>
              <blockquote className="flex h-full flex-col rounded-xl border border-white/10 bg-charcoal/50 p-6">
                <Quote className="mb-4 h-8 w-8 text-industrial-blue/60" />
                <p className="flex-1 text-sm leading-relaxed text-metallic/90">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="text-sm text-metallic/70">
                    {item.role}, {item.company}
                  </p>
                  <p className="mt-1 text-xs text-industrial-blue">{item.region}</p>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </AnimatedSection>
  );
}
