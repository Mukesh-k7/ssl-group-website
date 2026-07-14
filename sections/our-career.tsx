"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Careers | SSL Group",
  description: "Explore career opportunities at SSL Group.",
};

export default function CareersPage() {
  const [open, setOpen] = useState(false);
  const t = useTranslations()
  return (
    <section className="text-white bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal">
      <div className="container mx-auto ">
        <section className="px-6 py-24">
          <h1 className="text-5xl font-bold">{t("Careers")} </h1>
          <p className="mt-6 max-w-2xl text-slate-300">
            {t("Build")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/career"
              className="rounded-lg bg-[#0461cfad] px-5 py-3 font-medium"
            >
              {t("ViewOpen")}
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="rounded-lg border border-slate-700 px-5 py-3 hover:bg-white hover:text-black transition"
            >
              {t("ContactHR")}
            </button>
          </div>
        </section>
        <section id="jobs" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">{t("OpenPositions")} </h2>
            <p className="mt-2 text-slate-400">
              {t("Connect")}
            </p>
          </div>
        </section>
      </div>


      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[380px]">
            <h2 className="text-2xl font-bold mb-5">Contact HR</h2>

            <div className="space-y-4">

              <a
                href="tel:+9192174 00795"
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-100 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal"
              >
                <Phone />
                <div>
                  <p className="font-semibold">Call HR</p>
                  <p className="text-gray-500">+91 92174 00795</p>
                </div>
              </a>

              <a
                href="https://wa.me/919217400795"
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-green-50 bg-gradient-to-br from-green-500/40 via-green-600 to-green-700"
              >
                <MessageCircle className="text-green-600" />
                <div>
                  <p className="font-semibold">WhatsApp HR</p>
                  <p className="text-gray-500">Start Chat</p>
                </div>
              </a>

              <a
                href="mailto:shivani.yadav@sslgroup.com"
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-100 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal"
              >
                <Mail />
                <div>
                  <p className="font-semibold">Email HR</p>
                  <p className="text-gray-500">hr@sslgroup.com</p>
                </div>
              </a>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>

  );
}
