/// <reference types="react" />
/// <reference types="react/jsx-runtime" />
/** @jsxImportSource react */
"use client";

import React, { useState } from "react";
import { StatsCounterSection } from "@/sections/stats-counter"
import { Benefits, Jobopening, Recruitments, Culture, Departments, Worktype, Domain } from "@/data/site";
import { } from "react/jsx-runtime";
import { useTranslations } from "next-intl";
// Provide a minimal JSX.IntrinsicElements declaration to avoid
// "JSX element implicitly has type 'any'" when react/jsx-runtime types
// are not available in the environment.

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function CareersPage() {
  const t = useTranslations("careers");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedDomain, setSelectedDomain] = useState("All Domains");

  const filtered = Jobopening.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.domain.toLowerCase().includes(searchQuery.toLowerCase());

    const matchDept =
      selectedDept === "All Departments"
        ? true
        : job.dept === selectedDept;

    const matchType =
      selectedType === "All Types"
        ? true
        : job.type === selectedType;

    const matchDomain =
      selectedDomain === "All Domains"
        ? true
        : job.domain === selectedDomain;

    return matchSearch && matchDept && matchType && matchDomain;
  });

  const STATS = [
    { value: "28+", label: "yearsOfOperations" },
    { value: "45+", label: "countriesServed" },
    { value: "2.4M MT", label: "annualExportVolume" },
    { value: "320+", label: "globalExportPartners" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleJobs = showAll ? filtered : filtered.slice(0, 3)
  return (
    <div className="min-h-screen bg-[#080C14] text-[#E8EDF2] font-sans">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal">
        {/* bg texture */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#080C14] via-[#0D1420] to-[#080C14]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F97316]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EAB308]/5 rounded-full blur-[100px]" />
          {/* grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              background:
                "linear-gradient(to bottom, #F7941D, #C96A00, #5B2A00)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto container px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse" />
              <span className="text-[#F97316] text-xs font-semibold tracking-wider uppercase">
                {t("NowHiring")}  — {Jobopening.length} {t("PositionsOpen")}
              </span>
            </div>
            <h1 className="text-4xl lg:text-4xl font-black leading-[1.05] mb-6">
              <span className="text-white">{t("Team")} </span>
              <br />
              <span className="bg-gradient-to-r from-[#F97316] via-[#EAB308] to-[#F97316] bg-clip-text text-transparent">
                {t("Premier")}
              </span>
              <br />
              <span className="text-white">{t("Metallurgy")} </span>
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-lg">
              {t("Intersection")}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#openings"
                className="bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14] px-8 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                {t("Openings")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#life"
                className="border border-white/10 text-white px-8 py-3.5 rounded font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                {t("Life")}
              </a>
            </div>
          </div>

          {/* Hero stats card */}
          <div className="hidden lg:block">
            <div className="bg-[#0D1520]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {STATS.map((s, index) => (
                  <div key={index} className="bg-[#0A0E1A] rounded-xl p-5 border border-white/5">
                    <div className="text-2xl font-black bg-gradient-to-r from-[#F97316] to-[#EAB308] bg-clip-text text-transparent mb-1">
                      {s.value}
                    </div>
                    <div className="text-[#64748B] text-xs font-medium">{t(`stats.${s.label}`)}  </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#EAB308] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#080C14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold"> {t("GlobalOperations")} </div>
                  <div className="text-[#94A3B8] text-xs"> {t("Locations")} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <StatsCounterSection />

      {/* JOB OPENINGS */}
      <section id="openings" className="py-24 bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-3"> {t("Careers")} </div>
              <h2 className="text-4xl font-black text-white">
                {t("Positions")}
              </h2>
            </div>
            <div className="text-[#FFF] text-sm font-medium">
              <span className="text-[#F97316] font-bold text-lg">{filtered.length}</span> {t("Positionsavailable")}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3 mb-10">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search roles, departments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0D1520] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#F97316]/50 transition-colors"
              />
            </div>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="bg-[#0D1520] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#94A3B8] focus:outline-none focus:border-[#F97316]/50 transition-colors cursor-pointer"
            >
              {Departments.map((d) => (
                <option key={d.value} value={d.value}> {t(`departments.${d.label}`)} </option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-[#0D1520] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#94A3B8] focus:outline-none focus:border-[#F97316]/50 transition-colors cursor-pointer"
            >
              {Worktype.map((type) => (
                <option key={type.value} value={type.value}>{t(`workTypes.${type.label}`)} </option>
              ))}
            </select>

            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="bg-[#0D1520] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#94A3B8] focus:outline-none focus:border-[#F97316]/50 transition-colors cursor-pointer"
            >
              {Domain.map((d) => (
                <option key={d.value} value={d.value}>  {t(`domains.${d.label}`)} </option>
              ))}
            </select>
          </div>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleJobs.map((job, i) => (
              <div
                key={i}
                className={`bg-[#0D1520] border rounded-xl p-6 hover:border-[#F97316]/40 transition-all group  ${i === 0 ? "border-[#F97316]/40 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal" : "border-white/5"
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-white font-bold text-sm mb-1">{t(`jobs.${job.key}.title`)}</div>
                    <div className="text-[#F97316] text-xs font-semibold">{t("title")}</div>
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${i === 0 ? "bg-[#F97316]/20" : "bg-white/5"}`}>
                    <svg className={`w-4 h-4 ${i === 1 ? "text-[#c96a00]" : "text-[#c96a00]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-white/5 text-[#94A3B8] text-xs px-2.5 py-1 rounded-full">{t(`jobs.${job.key}.dept`)} </span>
                  <span className="bg-white/5 text-[#94A3B8] text-xs px-2.5 py-1 rounded-full">{t(`jobs.${job.key}.type`)} </span>
                  <span className="bg-white/5 text-[#94A3B8] text-xs px-2.5 py-1 rounded-full">{t(`jobs.${job.key}.location`)} </span>
                  <span className="bg-white/5 text-[#94A3B8] text-xs px-2.5 py-1 rounded-full">{t(`jobs.${job.key}.domain`)} </span>
                </div>
                <button
                  className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${i === 0
                    ? "bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14]"
                    : "border border-white/10 text-white hover:bg-white/5"
                    }`}
                >
                  {t("ApplyNow")}
                </button>
              </div>
            ))}
          </div>

          {filtered.length > 3 && (
            <>
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="border border-white/10 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors bg-[#0461cfad]"
                >
                  {showAll ? t("ShowLess") : t("Openings")}
                </button>
              </div>
            </>
          )
          }

          {filtered.length === 0 && (
            <>
              <div className="text-center py-16 text-[#475569]">
                <svg className="w-12 h-12 mx-auto mb-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" className="text-[#fff] fw-[bold]" />
                </svg>
                <p className="text-sm text-[#fff] fw-[bold]"> {t("Rolesmatch")} </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-[#fff] transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-4">
                {t("whysslgroup")}
              </div>
              <h2 className="text-4xl font-black text-black leading-tight mb-6">
                {t("Career")}
                <br />
                <span className="bg-gradient-to-r from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">
                  {t("GlobalTrade")}
                </span>
              </h2>
              <p className="text-[#475569] leading-relaxed text-base">
                {t("Supply")}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-8 text-[#f19b5f] font-bold text-sm hover:gap-3 transition-all"
              >
                {t("OurStory")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1  gap-4">
              {Benefits.map((b, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal rounded-xl p-5 hover:border-[#F97316]/30 transition-colors group ${i === 1 ? "border-[#F97316]/30 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal" : "border-white/5"
                    }`}
                >
                  <div className={`mb-4 ${i === 1 ? "text-[#F97316]" : "text-[#475569]"} group-hover:text-[#F97316] transition-colors`}>
                    {/* {(() => {
                      const Icon = b.icon;
                      return typeof Icon === "function" ? <Icon className="w-8 h-8" /> : Icon;
                    })()} */}
                    {/* {b.icon} */}
                    <b.icon />
                  </div>
                  <div className="text-white font-bold text-sm mb-2">{t(`benefits.${b.key}.title`)}</div>
                  <div className="text-white/60 text-xs leading-relaxed">{t(`benefits.${b.key}.description`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIFE AT SSL */}
      <section id="life" className="py-24 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#EAB308]/4 rounded-full blur-[120px]" />
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-4">{t("Culture")} </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t("LifeAt")} <span className="bg-gradient-to-r from-[#F97316] to-[#EAB308] bg-clip-text text-transparent"> {t("title")} </span>
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              {t("Bureaucracy")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Culture.map((card) => (
              <div key={card.key} className="bg-[#0D1520] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[${card.accent}] to-transparent`}
                  style={{ background: `linear-gradient(to right, ${card.accent}, transparent)` }}
                />
                <div className="text-white font-black text-xl mb-4">{t(`culture.${card.key}.title`)} </div>
                <div className="text-[#94A3B8] text-sm leading-relaxed">{t(`culture.${card.key}.description`)} </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITMENT PROCESS */}
      <section className="py-24 bg-[#fff] transition-colors">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-lg text-transparent font-bold tracking-[0.2em] uppercase
            bg-gradient-to-b bg-clip-text from-[#F7941D] via-[#C96A00]
            to-[#5B2A00]
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)] font-bold tracking-widest mb-4">{t("HowWeHire")} </div>
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-4">
              {t("Recruitment")} <span className="bg-gradient-to-r from-[#F97316] to-[#EAB308] bg-clip-text text-transparent"> {t("Process")} </span>
            </h2>
            <p className="text-[#64748B] max-w-xl mx-auto text-sm leading-relaxed">
              {t("Transparent")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Recruitments.map((step, i) => (
              <div key={i} className="relative">
                {i < Recruitments.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-6 h-px bg-gradient-to-r from-[#F97316]/40 to-transparent z-10" />
                )}
                <div className="bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal rounded-2xl p-6 hover:border-[#F97316]/20 transition-colors group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316]/20 to-[#EAB308]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316] group-hover:from-[#F97316]/30 transition-colors">
                      <step.icon />
                    </div>
                    <div className="text-3xl font-black text-[#FFF]">{step.step} </div>
                  </div>
                  <div className="text-white font-bold text-sm mb-2">{t(`process.${step.key}.title`)}</div>
                  <div className="text-[#64748B] text-xs leading-relaxed"> {t(`process.${step.key}.description`)} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-6 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-[#0D1520] via-[#F97316]/10 to-[#0D1520] border border-[#F97316]/20 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F97316]/5" />
            <div className="relative">
              <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-4">{t("ReadytoApply")}?  </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                {t("SourceYour")}
              </h2>
              <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                {t("SendYour")} {" "}
                <a href="mailto:shivani.yadav@sslgroup.in" className="text-[#F97316] hover:underline">
                  careers@sslgroup.in
                </a>{" "}
                {t("Directly")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#openings"
                  className="bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14] px-3 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  {t("Browse")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:shivani.yadav@sslgroup.in"
                  className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  {t("EmailYour")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
