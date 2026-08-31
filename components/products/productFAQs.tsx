"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Product } from "@/types";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  translationKey: string;
  faq: FAQItem[];
  product: Product;
}

export default function ProductFAQ({
  translationKey,
  faq,
  product
}: Props) {
  const t = useTranslations("Products.PigIron.Variants");
  const commonT = useTranslations("Common");
  const variantT = useTranslations(`Products.${product.key}.Variants` as any);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        {commonT("FrequentlyAskedQuestions")}
      </h2>

      <div className="space-y-4">
        {faq.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between p-5 text-left font-semibold"
            >
              {variantT(`${translationKey}.FAQ.${item.question}` as any)}

              <ChevronDown
                className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>

            {openIndex === index && (
              <div className="border-t px-5 py-4 text-[#ccd2da]">
                {variantT(`${translationKey}.FAQ.${item.answer}` as any)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}