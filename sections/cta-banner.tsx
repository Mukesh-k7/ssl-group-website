"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBannerSection({
  title = "Ready to Source Premium Metallurgy Materials?",
  description = "Connect with our export desk for specifications, pricing, vessel scheduling, and Incoterms consultation.",
}: CtaBannerProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-industrial-blue/30 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal p-8 md:p-12 lg:p-16"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-industrial-blue/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-metallic/90">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Submit Export Inquiry
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${company.email}`}>
                  <Mail className="h-5 w-5" />
                  {company.email}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
