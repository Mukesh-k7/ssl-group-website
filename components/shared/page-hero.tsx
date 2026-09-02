"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section
      className="
        relative overflow-hidden
        pt-32 pb-20
        bg-white via-transparent to-charcoal
        border-b border-white/10
      "
    >
      <div
        className="
          absolute inset-0
          bg-industrial-grid
          opacity-40
        "
      />
      <div
        className="
          absolute inset-0
          bg-linear-to-b from-industrial-blue/20 via-transparent to-charcoal
        "
      />
      <div
        className="
          absolute top-0
          h-96 w-96
          bg-industrial-blue/10
          rounded-full
          blur-3xl
          -right-32
        "
      />

      <div
        className="
          container relative
          mx-auto px-4 md:px-6
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            max-w-3xl
          "
        >
          {eyebrow && (
            <p
              className="
                mb-4
                text-sm text-[#fcaf1c] font-semibold uppercase
                tracking-[0.2em]
              "
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="
              font-heading font-bold text-4xl text-[#3b3b3ba8]  md:text-5xl lg:text-6xl
              tracking-tight
            "
          >
            {title}
          </h1>
          <p
            className="
              mt-6
              text-lg text-[#424040a8]  md:text-xl leading-relaxed
            "
          >
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
