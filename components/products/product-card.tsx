"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types";
import { useTranslations } from "next-intl";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("Products");

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
      <Card
        className="
          overflow-hidden
          h-full
          text-transparent
          bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
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
            from-[#a75500] via-[#f9884b] to-[#f3d3b0]
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
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              margin: 0,
            }}
            role="img"
            aria-label={product.key}
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
            <span>{t(`${product.key}.Category`)}</span>
          </span >
        </div >
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
            {t(`${product.key}.Name`)}
          </h3>
          <p
            className="
              mt-2
              text-sm text-metallic/80 leading-relaxed line-clamp-2
            "
          >
            {t(`${product.key}.ShortDescription`)}
          </p>
          <ul
            className="
              space-y-1 mt-4
            "
          >
            {product.specification.slice(0, 3).map((spec) => (
              <li
                key={spec.key}
                className="flex justify-between text-xs text-metallic/70"
              >
                <span>
                  {t.has(`${product.key}.Specification.${spec.key}` as any)
                    ? t(`${product.key}.Specification.${spec.key}` as any)
                    : spec.key}
                </span>

                <span className="text-metallic font-medium">
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
              bg-[#1e3a5f]
              group/btn
            "
            asChild
          >
            <Link href={`/products/${product.slug}`}>
              {t("ViewAllProducts")}
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
      </Card >
    </motion.div >
  );
}
