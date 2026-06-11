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

  return (
    <AnimatedSection className="py-24" id="products">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Our Products"
          title="Metallurgy & Steel Raw Materials"
          description="Comprehensive export portfolio for integrated steel plants, foundries, and industrial procurement worldwide."
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
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
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
              className="bg-[#0461cfad] hover:bg-[#0461cf] text-white font-medium"
              asChild
            >
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}