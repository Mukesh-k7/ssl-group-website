"use client";

import { useState } from "react";
import Image from "next/image";
import TechnicalTable from "./TechnicalTable";
import ProductFAQ from "./productFAQs";
import { CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface Props {
    product: Product;
}

export default function ProductGallery({ product }: Props) {
    const commonT = useTranslations("Common");
const variantT = useTranslations(`Products.${product.key}.Variants` as any);
    const [selectedVariant, setSelectedVariant] = useState(
        product.variants[0]
    );

    console.log(
        variantT(`${selectedVariant.translationKey}.Name` as any)
    );
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8">
                {/* Thumbnails */}
                <div className="flex flex-wrap gap-3 mb-5">
                    {product.variants.map((variant) => (
                        <button
                            key={variant.id}
                            onClick={() => setSelectedVariant(variant)}
                            className={`overflow-hidden rounded-lg border-2 w-[146px] h-[138px] transition-all ${selectedVariant.id === variant.id
                                ? "border-orange-500"
                                : "border-gray-600 hover:border-gray-400"
                                }`}
                        >
                            <Image
                                src={variant.image}
                                alt={variantT(`${variant.translationKey}.Name` as any)}
                                width={200}
                                height={109}
                                className="w-full h-[109px] object-cover rounded-lg"
                            />
                            <p className="p-1 text-[11px] font-medium">
                                {variantT(`${variant.translationKey}.Name` as any)}
                            </p>
                        </button>
                    ))}
                </div>
                {/* Main Image */}
                <div className="group overflow-hidden rounded-xl cursor-zoom-in">
                    <Image
                        src={selectedVariant.image}
                        alt={selectedVariant.translationKey}
                        width={900}
                        height={600}
                        className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-125"
                    />
                </div>
                {/* Overview */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">
                        {commonT("Overview")}
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        {variantT(`${selectedVariant.translationKey}.Description` as any)}
                    </p>
                </div>

                {/* Applications */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">
                        {commonT("Applications")}
                    </h2>
                    <ul className="grid grid-cols-2 gap-3">
                        {selectedVariant.applications.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-2"
                            >
                                <CheckCircle className="h-5 w-5 text-orange-500" />
                                {variantT(`${selectedVariant.translationKey}.Applications.${item}` as any)}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Chemical & Physical Tables */}
                <div className="mt-12 space-y-10">
                    {selectedVariant.technicalTables.map((table) => (
                        <TechnicalTable
                            key={table.title}
                            title={variantT(
                                `${selectedVariant.translationKey}.TechnicalTables.${table.title}` as any
                            )}
                            headers={table.headers}
                            rows={table.rows}
                            product={product}
                        />
                    ))}
                </div>

                <div className="mt-12 space-y-10">
                    <ProductFAQ
                        translationKey={selectedVariant.translationKey}
                        faq={selectedVariant.faq}
                        product={product}
                    />
                </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4">
                <div className="sticky top-28">
                    <Card className="rounded-xl">
                        <CardHeader>
                            <CardTitle>
                                {commonT("TechnicalSpecifications")}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {selectedVariant.specifications.map((spec) => (
                                    <div
                                        key={spec.key}
                                        className="flex items-center justify-between border-b pb-3 last:border-none"
                                    >
                                        <span className="text-muted-foreground">
                                            {variantT(`${selectedVariant.translationKey}.Specifications.${spec.key}` as any)}
                                        </span>
                                        <span className="text-muted-foreground">
                                            {variantT(`${selectedVariant.translationKey}.Specifications.${spec.value}` as any)}
                                        </span>

                                    </div>
                                ))}
                            </div>
                            <Button className="mt-6 w-full cursor-pointer bg-[#007affc9]" onClick={() => router.push("/contact")}>
                                {commonT("RequestQuote")}
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}