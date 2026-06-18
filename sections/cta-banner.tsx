"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import { useTranslations } from "next-intl";

export function CtaBannerSection( ) {


  const t = useTranslations()
  return (
    <section
      className="
        py-20
        bg-[#9b5600d1]
      "
    >
      <div
        className="
          container
          mx-auto px-4 md:px-6
        "
      >
        <motion
          .div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden
            p-8 md:p-12 lg:p-16
            bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal
            rounded-2xl border border-industrial-blue/30
          "
        >
          <div
            className="
              absolute
              h-64 w-64
              bg-industrial-blue/20
              rounded-full
              blur-3xl
              -right-20 -top-20
            "
            /
          >
          <div
            className="
              relative
              max-w-2xl
            "
          >
            <h2
              className="
                font-heading font-bold text-3xl text-white md:text-4xl
              "
            >
              {t("title")}
            </h2>
            <p
              className="
                mt-4
                text-lg text-metallic/90
              "
            >{t("description")}</p>
            <div
              className="
                flex flex-wrap
                mt-8
                gap-4
              "
            >
              <Button size="lg" asChild className="bg-[#007aff94] hover:bg-[#007affc9]">
                <Link href="/contact">
                  {t("SubmitExporInquiry")}
                  <ArrowRight
                    className="
                      h-5 w-5
                    "
                    /
                  >
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${company.email}`}>
                  <Mail
                    className="
                      h-5 w-5
                    "
                    /
                  >
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
