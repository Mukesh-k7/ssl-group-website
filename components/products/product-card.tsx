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
      <Card className="group h-full overflow-hidden border-white/10 transition-all hover:border-industrial-blue/40 hover:shadow-2xl hover:shadow-industrial-blue/10">
        <div className="relative aspect-[4/3] overflow-hidden bg-gunmetal">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to top, #111111 0%, transparent 50%), url('${product.image}')`,
              backgroundColor: "#2A2A2A",
            }}
            role="img"
            aria-label={product.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-charcoal/80 px-3 py-1 text-xs font-medium text-metallic backdrop-blur-sm">
            {product.category}
          </span>
        </div>
        <CardContent className="p-6">
          <h3 className="font-heading text-xl font-bold text-white">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-metallic/80">
            {product.shortDescription}
          </p>
          <ul className="mt-4 space-y-1">
            {product.specifications.slice(0, 2).map((spec) => (
              <li key={spec.label} className="flex justify-between text-xs text-metallic/70">
                <span>{spec.label}</span>
                <span className="font-medium text-metallic">{spec.value}</span>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="mt-6 w-full group/btn" asChild>
            <Link href={`/products/${product.slug}`}>
              View Specifications
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
