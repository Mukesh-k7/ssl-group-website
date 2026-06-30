"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

export function StaggerGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className={cn(className)}>
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  titleClassName,
  eyebrowClassName,
  descriptionClassName

}: {
  eyebrow?: string;
  title: string;
  description?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left"
      )}
    >
      {eyebrow && (
        <p
          className="
            mb-3
            text-lg text-transparent font-bold tracking-[0.2em] uppercase
            bg-gradient-to-b bg-clip-text from-[#F7941D] via-[#C96A00]
            to-[#5B2A00]
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]
          "
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="
          font-heading font-bold text-3xl text-black md:text-4xl lg:text-5xl
          tracking-tight
        "
      >
        {title}
      </h2>
      {description && (
        <p
          className="
            mt-4
            text-lg text-industrial-blue/70 leading-relaxed
          "
        >{description}</p>
      )}
    </div>
  );
}
