"use client";

import { AnimatedSection, SectionHeader } from "@/components/shared/animated-section";
import { timeline } from "@/data/certifications";

export function TimelineSection() {
  return (
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
          eyebrow="Our Journey"
          title="Building Global Metallurgy Leadership"
          align="center"
        />
        <div
          className="
            relative
            max-w-3xl
            mx-auto
          "
        >
          <div
            className="
              absolute left-4 md:left-1/2 top-0
              h-full w-px
              bg-[#c96a00]/40
              md:-translate-x-px
            "
            /
          >
          {timeline.map((event, index) => (
            <div
              key={event.year}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className="
                  md:w-1/2
                "
                /
              >
              <div
                className="
                  absolute left-4 md:left-1/2 flex items-center justify-center
                  h-8 w-8
                  bg-charcoal
                  rounded-full border-2 border-[#c96a00]
                  -translate-x-1/2
                "
              >
                <span
                  className="
                    text-xs text-[#c96a00] font-bold
                  "
                >{event.year.slice(2)}</span>
              </div>
              <div
                className={`ml-12 md:ml-0 md:w-1/2 mr-[45px] p-[0px] ${
                  index % 2 === 0 ? "md:text-right" : "md:pl-12"
                }`}
              >
                <span
                  className="
                    font-heading font-bold text-2xl text-[#c96a00]
                  "
                >
                  {event.year}
                </span>
                <h3
                  className="
                    mt-1
                    font-heading font-semibold text-lg text-white
                  "
                >
                  {event.title}
                </h3>
                <p
                  className="
                    mt-2
                    text-sm text-metallic/80
                  "
                >{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
