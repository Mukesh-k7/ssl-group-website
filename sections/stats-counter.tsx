"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/site";
import {useTranslations} from 'next-intl';

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  style?: React.CSSProperties;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.floor(display).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function StatsCounterSection() {
  
  const t = useTranslations('stats');

  return (
    <section
      className="
        relative
        py-16
        bg-white
        border-y border-white/10
      "
    >
      <div
        className="
          container
          px-4 md:px-6 mx-auto
        "
      >
        <motion
          .div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-8
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                text-center
              "
            >
              <p
                className="
                  text-3xl text-white md:text-4xl lg:text-5xl
                  font-heading font-bold
                "
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(to bottom, #F7941D, #C96A00, #5B2A00)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.25))",
                }}
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </p>
              <p
                className="
                  mt-2
                  text-sm text-[#e78e03] md:text-base font-bold
                "
              >
                {t(stat.key)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
