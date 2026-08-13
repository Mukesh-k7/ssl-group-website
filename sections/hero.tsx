"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Globe, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

export function HeroSection() {
  const t = useTranslations("hero");

  const stats = [
    { value: "2.4M+", label: t("MTExportedAnnually") },
    { value: "320+", label: t("GlobalPartners") },
    { value: "9", label: t("ProductCategories") },
    { value: "28+", label: t("YearsExcellence") },
  ];

  const highlights = [
    { icon: Shield, label: t("ISOCertifiedOperations") },
    { icon: Globe, label: t("45PlusExportMarkets") },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden min-h-screen bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-industrial-grid opacity-30" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-industrial-blue/30 via-charcoal to-charcoal"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-charcoal to-transparent" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="steel" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0H0V60" fill="none" stroke="#BFC3C9" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#steel)" />
        </svg>

        <motion.div
          className="absolute top-16 left-[-6rem] h-[420px] w-[420px] rounded-full bg-industrial-blue/20 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 right-[-5rem] h-[340px] w-[340px] rounded-full bg-metallic/10 blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pb-20 pt-28 md:pt-36">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gunmetal/60 px-4 py-2 text-sm text-metallic backdrop-blur-md"
            >
              <Globe className="h-4 w-4 text-[#f38203]" />
              {t("ExportingTo45PlusCountriesSince")} {company.founded}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-3xl text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl"
            >
              {t("GlobalMetallurgy")} {t("TrustedSupply")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-metallic/90 md:text-xl"
            >
              {company.name} - {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button size="lg" asChild className="bg-[#007aff94] hover:bg-[#007affc9]">
                <Link href="/contact">
                  {t("RequestExportQuote")}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button size="lg" variant="secondary" asChild>
                <a href="https://www.sslgroup.in/images/ssl-brouchser-final.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  {t("DownloadCatalog")}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-gunmetal/70 px-4 py-3 text-sm text-metallic">
                  <Icon className="h-5 w-5 text-[#f38203]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gunmetal/40 shadow-2xl backdrop-blur-sm">
              <div
                className="h-[650px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(30,58,95,0.4) 0%, rgba(17,17,17,0.9) 100%), url('/images/products/banner.png')",
                }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl bg-gradient-to-r from-[#7C2D12] via-[#EA580C] to-[#FDBA74] p-5 shadow-black/40">
                      <p className="text-2xl font-heading font-bold text-white">{stat.value}</p>
                      <p className="mt-1 text-xs text-[#d6d8ff]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-12 w-7 rounded-full border-2 border-white/20 bg-charcoal/80 p-1">
          <motion.div className="mx-auto h-2 w-1 rounded-full bg-metallic" animate={{ y: [0, 16, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
