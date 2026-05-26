"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
      <Card
        className="
          overflow-hidden
          h-full
          text-transparent
          bg-gradient-to-b from-[#FFD27A] via-[#D97A00] to-[#5B2A00]
          border-white/10 hover:border-industrial-blue/40
          transition-all hover:shadow-2xl hover:shadow-industrial-blue/10
          group
        "
      >
        <div
          className="
            relative overflow-hidden
            text-transparent text-transparent
            bg-gunmetal bg-gradient-to-r bg-clip-text bg-gradient-to-r bg-clip-text
            from-[#7C2D12] from-[#7C2D12] via-[#EA580C] via-[#EA580C]
            to-[#FDBA74] to-[#FDBA74]
            aspect-[4/3]
          "
        >
          <div
            className="
              absolute inset-0
              bg-cover bg-center
              transition-transform duration-700
              group-hover:scale-105
            "
            style={{
              background: `linear-gradient(to top, rgba(235,224,224,0) 0%, transparent 50%), url(${product.image})`,
              backgroundColor: "rgb(223 90 20)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "267px",
              width: "100%",
              margin: 0,
            }}
            role="img"
            aria-label={product.name}
          /
          >
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent
            "
            /
          >
          <span
            className="
              absolute top-4 left-4
              px-3 py-1
              text-xs text-metallic font-medium
              bg-charcoal/80
              rounded-full border border-white/20
              backdrop-blur-sm
            "
          >
            {product.category}
          </span>
        </div>
        <CardContent
          className="
            p-6
          "
        >
          <h3
            className="
              text-xl text-white font-heading font-bold
            "
          >
            {product.name}
          </h3>
          <p
            className="
              mt-2
              text-sm text-metallic/80 leading-relaxed line-clamp-2
            "
          >
            {product.shortDescription}
          </p>
          <ul
            className="
              space-y-1 mt-4
            "
          >
            {product.specifications.slice(0, 2).map((spec) => (
              <li
                key={spec.label}
                className="
                  flex justify-between
                  text-xs text-metallic/70
                "
              >
                <span>{spec.label}</span>
                <span
                  className="
                    text-metallic font-medium
                  "
                >
                  {spec.value}
                </span>
              </li>
            ))}
          </ul>
          <Button
            variant="secondary"
            className="
              w-full
              mt-6
              group/btn
            "
            asChild
          >
            <Link href={`/products/${product.slug}`}>
              View Specifications
              <ArrowRight
                className="
                  w-4 h-4
                  transition-transform
                  group-hover/btn:translate-x-1
                "
              />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
