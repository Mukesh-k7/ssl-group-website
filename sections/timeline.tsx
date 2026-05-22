"use client";

import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { timeline } from "@/data/certifications";

export function TimelineSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Our Journey"
          title="Building Global Metallurgy Leadership"
          align="center"
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-industrial-blue/40 md:left-1/2 md:-translate-x-px" />
          {timeline.map((event, index) => (
            <div
              key={event.year}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2" />
              <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-industrial-blue bg-charcoal md:left-1/2">
                <span className="text-xs font-bold text-industrial-blue">{event.year.slice(2)}</span>
              </div>
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="font-heading text-2xl font-bold text-industrial-blue">
                  {event.year}
                </span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-metallic/80">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
