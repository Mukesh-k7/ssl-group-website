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
    <AnimatedSection
      className="
        py-24
        bg-gunmetal/20
      "
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <SectionHeader
          eyebrow="Client Trust"
          title="Trusted by Global Steel Leaders"
          description="Long-term partnerships with procurement teams across the Middle East, Africa, and Europe."
        />
        <StaggerGrid
          className="
            grid md:grid-cols-3
            gap-6
          "
        >
          {testimonials.map((item) => (
            <StaggerItem key={item.author}>
              <blockquote
                className="
                  flex flex-col
                  h-full
                  p-6
                  bg-charcoal/50
                  rounded-xl border border-white/10
                "
              >
                <Quote
                  className="
                    h-8 w-8
                    mb-4
                    text-[#c35303d1]
                  "
                  /
                >
                <p
                  className="
                    flex-1
                    text-sm text-metallic/90 leading-relaxed
                  "
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer
                  className="
                    mt-6 pt-4
                    border-t border-white/10
                  "
                >
                  <p
                    className="
                      font-semibold text-white
                    "
                  >{item.author}</p>
                  <p
                    className="
                      text-sm text-metallic/70
                    "
                  >
                    {item.role}, {item.company}
                  </p>
                  <p
                    className="
                      mt-1
                      text-xs text-[#c35303d1]
                    "
                  >{item.region}</p>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </AnimatedSection>
  );
}
