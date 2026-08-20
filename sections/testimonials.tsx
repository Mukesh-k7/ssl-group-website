"use client";

import { Quote } from "lucide-react";
import {
  AnimatedSection,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
} from "@/components/shared/animated-section";
import { testimonials } from "@/data/site";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

export function TestimonialsSection() {
  const t = useTranslations("testimonials")
  return (
    <AnimatedSection
      className="
        py-24
        [background:#fff]
      "
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
          titleClassName="font-heading font-bold text-3xl text-black md:text-4xl lg:text-5xl
          tracking-tight"
          descriptionClassName="mt-4
            text-lg text-industrial-blue/70 leading-relaxed"
        />
        <StaggerGrid
          className=""
        >
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              className="pb-14"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <StaggerItem key={item.author} className="flex items-center justify-center">
                    <blockquote
                      className="flex flex-col h-full p-6 w-[700px] bg-gradient-to-br from-slate-600 via-slate-900 to-zinc-950 hover:bg-gradient-to-br from-slate-800 via-slate-800 to-zinc-850 rounded-xl"
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
                        &ldquo;{t(`${item.key}.quote`)}&rdquo;
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
                        >{t(`${item.key}.author`)}</p>
                        <p
                          className="
                      text-sm text-metallic/70
                    "
                        >
                          {t(`${item.key}.role`)},  {t(`${item.key}.company`)}
                        </p>
                        <p
                          className="
                      mt-1
                      text-xs text-[#c35303d1]
                    "
                        >{t(`${item.key}.Title`)}</p>
                      </footer>
                    </blockquote>
                  </StaggerItem>
                </SwiperSlide>

              ))}
            </Swiper>

          </div>

        </StaggerGrid>
      </div>
    </AnimatedSection>
  );
}
