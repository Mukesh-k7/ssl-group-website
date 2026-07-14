"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faq: FAQItem[];
}

export default function ProductFAQ({ faq }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        Frequently Asked Questions
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
              {item.question}

              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="border-t px-5 py-4 text-gray-600 dark:text-gray-400">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}