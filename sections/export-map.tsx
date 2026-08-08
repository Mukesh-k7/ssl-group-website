"use client";

import { MapPin } from "lucide-react";
import {
  AnimatedSection,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared/animated-section";
import { exportRegions } from "@/data/site";
import { useTranslations } from "next-intl";
export function ExportMapSection() {
  const t = useTranslations('export');

  return (
    <AnimatedSection
      id="export"
      className="py-24 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal"
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <SectionHeader
          eyebrow={t("Eyebrow")}
          title={t("Title")}
          description={t("Description")}
          eyebrowClassName="mb-3
            text-lg text-transparent font-bold tracking-[0.2em] uppercase
            bg-gradient-to-b bg-clip-text from-[#F7941D] via-[#C96A00]
            to-[#5B2A00]
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]"
          titleClassName="font-heading font-bold text-3xl text-white md:text-4xl lg:text-5xl
          tracking-tight"
          descriptionClassName="mt-4
            text-lg text-industrial-white/70 leading-relaxed"
        />
        <div
          className="
            grid lg:grid-cols-2
            gap-8
          "
        >
          <StaggerGrid
            className="
              grid sm:grid-cols-2
              gap-4
            "
          >
            {exportRegions.map((region) => (
              <StaggerItem key={region.key}>
                <div
                  className="
                    p-6
                    bg-gunmetal/30
                    rounded-xl border border-white/10
                  "
                >
                  <div
                    className="
                      flex items-center
                      mb-3
                      gap-2
                    "
                  >
                    <MapPin
                      className="
                        h-5 w-5
                        text-[#f38203] text-bold
                      "
                    /
                    >
                    <h3
                      className="
                        font-heading font-semibold text-lg text-white
                      "
                    >
                      {t(`${region.key}.Title`)}
                    </h3>
                  </div>
                  <p
                    className="
                      text-sm text-metallic/80
                    "
                  >{t(`${region.key}.Description`)}</p>
                  <div
                    className="
                      flex flex-wrap
                      mt-4
                      gap-2
                    "
                  >
                    {(t.raw(`${region.key}.Countries`) as string[]).map((country) => (
                      <span
                        key={country}
                        className="px-3 py-1 text-xs text-metallic bg-charcoal/60 rounded-full border border-white/10"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <div
            className="
              relative flex items-center justify-center overflow-hidden
              min-h-[400px]
              bg-gunmetal/40
              rounded-2xl border border-white/10
            "
          >
            <div
              className="
                absolute inset-0
                bg-industrial-grid
                opacity-20
              "
            /
            >
            {/* Stylized world map placeholder */}
            <svg
              viewBox="0 0 800 400"
              className="
                h-full w-full
                p-8
                opacity-60
              "
              aria-hidden
            >
              <ellipse cx="400" cy="200" rx="350" ry="180" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4 4" />
              {[
                { cx: 520, cy: 180, label: "ME" },
                { cx: 480, cy: 240, label: "AF" },
                { cx: 380, cy: 150, label: "EU" },
                { cx: 600, cy: 200, label: "AP" },
                { cx: 350, cy: 200, label: "IN" },
              ].map((point) => (
                <g key={point.label}>
                  <circle
                    cx={point.cx} cy={point.cy} r="8" fill="#fff"
                    className="
                      text-bold
                    "
                  /
                  >
                  <circle cx={point.cx} cy={point.cy} r="16" fill="#fff" opacity="0.3">
                    <animate attributeName="r" values="16;24;16" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x={point.cx} y={point.cy - 20} textAnchor="middle" fill="#BFC3C9" fontSize="12">
                    {point.label}
                  </text>
                </g>
              ))}
              <line x1="350" y1="200" x2="520" y2="180" stroke="#fff" strokeWidth="1" opacity="0.5" />
              <line x1="350" y1="200" x2="480" y2="240" stroke="#fff" strokeWidth="1" opacity="0.5" />
              <line x1="350" y1="200" x2="380" y2="150" stroke="#fff" strokeWidth="1" opacity="0.5" />
              <line x1="350" y1="200" x2="600" y2="200" stroke="#fff" strokeWidth="1" opacity="0.5" />
            </svg>
            <p
              className="
                absolute bottom-4
                text-xs text-metallic/50
              "
            >
              {t("Interactive")}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
