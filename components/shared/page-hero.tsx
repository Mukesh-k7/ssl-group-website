"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-charcoal pt-32 pb-20">
      <div className="absolute inset-0 bg-industrial-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-blue/20 via-transparent to-charcoal" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-industrial-blue/10 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-industrial-blue">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-metallic/90 md:text-xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
