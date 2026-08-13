"use client";

import Link from "next/link";
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  AnimatedSection,
  SectionHeader,
} from "@/components/shared/animated-section";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import type { Product } from "@/types";
import { useTranslations } from "next-intl";

interface ProductsGridSectionProps {
  limit?: number;
  showAllLink?: boolean;
  items?: Product[];
}

export function ProductsGridSection({
  limit,
  showAllLink = true,
  items = products,
}: ProductsGridSectionProps) {
  const displayProducts = limit ? items.slice(0, 9) : items;

  const t = useTranslations('products');

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal" id="products">
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="relative">
          <button className="custom-prev absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#0461cfad] text-white">
            <ArrowBigLeft size={20} />
          </button>

          <button className="custom-next absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#0461cfad] text-white">
            <ArrowBigRight size={20} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            // navigation
            pagination={{
              clickable: true,
            }}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-14"
          >
            {displayProducts.map((product) => (
              <SwiperSlide key={product.slug}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {showAllLink && (
          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-[#0461cfad] hover:bg-[#0461cf] border-0 text-white font-medium"
              asChild
            >
              <Link href="/products"> {t("ViewAllProducts")}</Link>
            </Button>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}