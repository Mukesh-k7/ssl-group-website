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

interface Props {
    product: Product;
}

export default function ProductGallery({ product }: Props) {
    const [selectedVariant, setSelectedVariant] = useState(
        product.variants[0]
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
                                alt={variant.translationKey}
                                width={200}
                                height={109}
                                className="w-full h-[109px] object-cover rounded-lg"
                            />
                            <p className="p-1 text-[11px] font-medium">
                                {variant.translationKey}
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
                        Overview
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        {selectedVariant.description}
                    </p>
                </div>

                {/* Applications */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">
                        Applications
                    </h2>
                    <ul className="grid grid-cols-2 gap-3">
                        {selectedVariant.applications.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-2"
                            >
                                <CheckCircle className="h-5 w-5 text-orange-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Chemical & Physical Tables */}
                <div className="mt-12 space-y-10">
                    {selectedVariant.technicalTables.map((table) => (
                        <TechnicalTable
                            key={table.title}
                            title={table.title}
                            headers={table.headers}
                            rows={table.rows}
                        />
                    ))}
                </div>

                <div className="mt-12 space-y-10">
                    <ProductFAQ faq={selectedVariant.faq} />
                </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4">
                <div className="sticky top-28">
                    <Card className="rounded-xl">
                        <CardHeader>
                            <CardTitle>
                                Technical Specifications
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
                                            {spec.key}
                                        </span>

                                        <span className="font-semibold">
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <Button className="mt-6 w-full cursor-pointer" onClick={() => router.push("/contact")}>
                                Request Quote
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}