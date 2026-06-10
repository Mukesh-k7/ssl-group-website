"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative flex items-center overflow-hidden
        min-h-screen
        bg-[#9b5600d1]
      "
    >
      {/* Animated industrial background */}
      <div
        className="
          absolute inset-0
        "
      >
        <div
          className="
            absolute inset-0
            bg-industrial-grid
            opacity-30
          "
        /
        >
        <motion
          .div
          className="
            absolute inset-0
            bg-gradient-to-br from-industrial-blue/30 via-charcoal to-charcoal
          "
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        /
        >
        <div
          className="
            absolute bottom-0 left-0 right-0
            h-1/2
            bg-gradient-to-t from-charcoal to-transparent
          "
        /
        >
        {/* Steel beam lines */}
        <svg
          className="
            absolute inset-0
            h-full w-full
            opacity-[0.07]
          "
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="steel" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0H0V60" fill="none" stroke="#BFC3C9" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#steel)" />
        </svg>
        <motion
          .div
          className="
            absolute top-1/4
            h-[500px] w-[500px]
            bg-industrial-blue/20
            rounded-full
            blur-[120px]
            -left-1/4
          "
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        /
        >
        <motion
          .div
          className="
            absolute bottom-1/4
            h-[400px] w-[400px]
            bg-metallic/10
            rounded-full
            blur-[100px]
            -right-1/4
          "
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        /
        >
      </div>

      <div
        className="
          container relative z-10
          mx-auto px-4 md:px-6 pb-20 pt-32 md:pt-40
        "
      >
        <div
          className="
            grid lg:grid-cols-2 items-center
            gap-12
          "
        >
          <div>
            <motion
              .div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex items-center
                mb-6 px-4 py-2
                text-sm text-metallic
                bg-gunmetal/60
                rounded-full border border-white/10
                backdrop-blur-md
                gap-2
              "
            >
              <Globe
                className="
                  h-4 w-4
                  text-industrial-blue
                "
              /
              >
              Exporting to 45+ Countries Since {company.founded}
            </motion.div>

            <motion
              .h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                font-heading font-bold
                text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl
                leading-[1.1] tracking-tight
              "
            >
              Global Metallurgy.
              <span
                className="
                  block
                  text-transparent
                  bg-gradient-to-r bg-clip-text from-metallic via-white
                  to-metallic
                "
              >
                Trusted Supply.
              </span>
            </motion.h1>

            <motion
              .p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                max-w-xl
                mt-6
                text-lg text-metallic/90 md:text-xl leading-relaxed
              "
            >
              {company.name} — India&apos;s premier exporter of pig iron, ferro alloys,
              carbon products, and steel industry raw materials to manufacturers
              across the Middle East, Africa, and Europe.
            </motion.p>

            <motion
              .div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                flex flex-wrap
                mt-8
                gap-4
              "
            >
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Export Quote
                  <ArrowRight
                    className="
                      h-5 w-5
                    "
                  /
                  >
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                {/* <a href={company.catalogUrl}>
                  <Download
                    className="
                      h-5 w-5
                    "
                    /
                  >
                  Download Catalog
                </a> */}
                <a href={"https://www.sslgroup.in/images/ssl-brouchser-final.pdf"} target="_blank" rel="noopener noreferrer">
                  <Download
                    className="
                      h-5 w-5
                    "
                  /
                  >
                  Download Catalog
                </a>
              </Button>
            </motion.div>

            <motion
              .div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="
                flex flex-wrap
                mt-10
                gap-6
              "
            >
              {[
                { icon: Shield, label: "ISO Certified Operations" },
                { icon: Globe, label: "45+ Export Markets" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="
                    flex items-center
                    text-sm text-metallic
                    gap-2
                  "
                >
                  <Icon
                    className="
                      h-4 w-4
                      text-industrial-blue
                    "
                  /
                  >
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          <motion
            .div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              relative hidden lg:block
            "
          >
            <div
              className="
                relative overflow-hidden
                bg-gunmetal/40
                rounded-2xl border border-white/10
                shadow-2xl backdrop-blur-sm
                aspect-square
              "
            >
              <div
                className="
                  absolute inset-0
                  h-screen
                  bg-cover bg-center bg-cover bg-center bg-no-repeat bg-[#2a2a2a]
                "
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(30,58,95,0.4) 0%, rgba(17,17,17,0.9) 100%), url('/images/products/banner01.jpg')",
                  backgroundColor: "#2A2A2A",
                }}
              /
              >

              <div
                className="
                  absolute inset-0 flex flex-col justify-end
                  p-8
                "
              >
                <div
                  className="
                    grid grid-cols-2
                    gap-4
                  "
                >
                  {[
                    { value: "2.4M+", label: "MT Exported Annually" },
                    { value: "320+", label: "Global Partners" },
                    { value: "9", label: "Product Categories" },
                    { value: "28+", label: "Years Excellence" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="
                        p-4 py-3
                        bg-gradient-to-r from-[#7C2D12] via-[#EA580C]
                        to-[#FDBA74]
                        rounded-lg border-0
                        backdrop-blur-md backdrop-blur-xl
                        shadow-2xl shadow-black/40
                      "
                    >
                      <p
                        className="
                          font-heading font-bold text-2xl text-white
                        "
                      >
                        {stat.value}
                      </p>
                      <p
                        className="
                          text-xs text-metallic/80
                        "
                      >{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion
        .div
        className="
          absolute bottom-8 left-1/2
          -translate-x-1/2
        "
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className="
            h-12 w-7
            p-1
            rounded-full border-2 border-white/20
          "
        >
          <motion
            .div
            className="
              h-2 w-1
              mx-auto
              bg-metallic
              rounded-full
            "
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          /
          >
        </div>
      </motion.div>
    </section>
  );
}
