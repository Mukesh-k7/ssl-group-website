"use client";

import Link from "next/link";
import {
  AnimatedSection,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
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
  const displayProducts = limit ? items.slice(0, limit) : items;

  return (
    <AnimatedSection
      className="
        py-24
      "
      id="products"
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <SectionHeader
          eyebrow="Our Products"
          title="Metallurgy & Steel Raw Materials"
          description="Comprehensive export portfolio for integrated steel plants, foundries, and industrial procurement worldwide."
        />
        <StaggerGrid
          className="
            grid sm:grid-cols-2 lg:grid-cols-3
            gap-6
          "
        >
          {displayProducts.map((product) => (
            <StaggerItem key={product.slug}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerGrid>
        {showAllLink && (
          <div
            className="
              mt-12
              text-center
            "
          >
            <Button
              size="lg" variant="secondary"
              className="
                bg-[#c35303d1]
              "
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
