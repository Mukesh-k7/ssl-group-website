"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import { useTranslations } from 'next-intl';

export const company1 = {
  name: "SSL Group",
  tagline: "Global Metallurgy. Trusted Supply.",
  legalName: "SSL Group International Trading Pvt. Ltd.",
  website: "https://www.sslgroup.in/",
  domain: "www.sslgroup.in",
  email: "support@sslgroup.in",
  salesEmail: "support@sslgroup.in",
  phone: "+91 - 9599053449",
  whatsapp: "+91 - 9599053449",
  address: {
    line1: "Delhi Head Office : Ground Floor, CC-23, AVANTIKA 1, Avantika Main Road, Saini Washing Center, Avantika, Ghaziabad,",
    line2: " Uttar Pradesh 201015, India",
  },
  founded: 2018,
  // catalogUrl: getAbsoluteUrl("/catalog/ssl-product-catalog.pdf"),
};

export function IntroSection() {

  const t = useTranslations('about');

  return (
    <AnimatedSection
      id="about-content"
      className="
        py-24
        bg-linear-to-br from-industrial-blue/40 via-gunmetal to-charcoal
      "
    >
      <div
        className="
          container
          px-4 md:px-6 mx-auto
        "
      >
        <div
          className="
            grid lg:grid-cols-2 items-center
            gap-12
          "
        >
          <div>
            <p
              className="
                mb-3
                text-lg text-transparent font-bold tracking-[0.2em] uppercase
                bg-linear-to-b bg-clip-text from-[#F7941D] via-[#C96A00]
                to-[#5B2A00]
                drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]
              "
            >
              {t("title")}
            </p>
            <h2
              className="
                text-3xl text-white md:text-4xl lg:text-5xl
                font-heading font-bold
              "
            >
              {t("IndiaPremierMetallurgyExportHouse")}
            </h2>
            <p
              className="
                mt-6
                text-lg text-metallic/90 leading-relaxed
              "
            >
              {t("description1")}

            </p>
            <p
              className="
                mt-4
                text-lg text-metallic/80 leading-relaxed
              "
            >
              {t("description2")}

            </p>
          </div>
          <div
            className="
              relative overflow-hidden
              rounded-2xl border border-white/10
              aspect-4/3
            "
          >
            <div
              className="
                absolute inset-0
                bg-cover bg-center
              "
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(63 116 185 / 40%) 0%, rgb(211 194 194 / 90%) 100%), url(/images/products/home.jpg)",
                backgroundColor: "#2A2A2A",
              }}
            />
            <div
              className="
                absolute inset-0 flex items-end
                p-8
              "
            >
              <div
                className="
                  p-4
                  bg-linear-to-r from-[#7C2D12] via-[#EA580C] to-[#FDBA74]
                  rounded-lg border border-white/10
                  backdrop-blur-md
                  shadow-2xl shadow-black/40
                "
              >
                <p
                  className="
                    text-2xl text-white font-heading font-bold
                  "
                >
                  {t("Since")} {company.founded}
                </p>
                <p
                  className="
                    text-sm text-metallic
                  "
                >
                  {t("GhaziabadGlobalExportOperations")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
