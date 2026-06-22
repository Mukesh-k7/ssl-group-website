/// <reference types="react" />
/// <reference types="react/jsx-runtime" />
/** @jsxImportSource react */
"use client";

import React, { useState } from "react";
import { } from "react/jsx-runtime";

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


const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global Exposure",
    desc: "Work with export operations spanning Africa, Middle East, and European markets across 45+ countries.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Industry Certifications",
    desc: "Access ISO 9001, BIS, and international trade compliance training to grow your professional credentials.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Ghaziabad HQ",
    desc: "Modern office at the heart of India's industrial corridor with excellent NCR connectivity.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Learning & Development",
    desc: "Sponsored certifications, metallurgy domain workshops, and cross-functional rotations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    title: "Performance Rewards",
    desc: "Quarterly bonuses tied to trade volumes, ESOPs for senior roles, and annual recognition awards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Collaborative Culture",
    desc: "Flat hierarchy, cross-border teams, and a culture built on trade expertise and mutual growth.",
  },
];

const JOB_OPENINGS = [
  { title: "Export Documentation Executive", dept: "Operations", type: "Full-time", location: "Ghaziabad" },
  { title: "International Trade Manager", dept: "Trade", type: "Full-time", location: "Ghaziabad" },
  { title: "Admin Executive", dept: "Admin Office", type: "Full-time", location: "Ghaziabad" },
  { title: "Logistics Coordinator", dept: "Logistics", type: "Full-time", location: "Ghaziabad" },
  { title: "Business Development Executive", dept: "Sales", type: "Full-time", location: "Ghaziabad" },
  { title: "Account Executive", dept: "Account", type: "Full-time", location: "Ghaziabad" },
  { title: "Account Manager", dept: "Account", type: "Full-time", location: "Ghaziabad" },
  { title: "HR Executive", dept: "Human Resource", type: "Full-time", location: "Ghaziabad" },
  { title: "HR Manager", dept: "Human Resource", type: "Full-time", location: "Ghaziabad" },
  { title: "IT Executive", dept: "IT", type: "Full-time", location: "Ghaziabad" },
  { title: "Co-operate Laywer", dept: "Legal", type: "Full-time", location: "Ghaziabad" },

];

const STATS = [
  { value: "28+", label: "Years of Operations" },
  { value: "45+", label: "Countries Served" },
  { value: "2.4M MT", label: "Annual Export Volume" },
  { value: "320+", label: "Global Export Partners" },
];

const RECRUITMENT_STEPS = [
  {
    step: "01",
    title: "Application Submission",
    desc: "Submit your resume and cover letter through our portal. Our team reviews every application with care.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Domain Assessment",
    desc: "A short task or test relevant to your role — trade knowledge, technical skills, or case analysis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "HR Screening Call",
    desc: "A 20-minute conversation about your background, expectations, and fit with SSL Group's culture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Final Interview",
    desc: "Meet with department heads and leadership. Offer letter issued within 5 working days post-interview.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const DEPARTMENTS = ["All Departments", "Operations", "Trade", "Quality", "Logistics", "Sales", "Marketing", "IT", "Legal"];
const WORK_TYPES = ["All Types", "Full-time", "Contract", "Remote", "Hybrid"];

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedType, setSelectedType] = useState("All Types");

  const filtered = JOB_OPENINGS.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.dept.toLowerCase().includes(searchQuery.toLowerCase());
    const matchDept = selectedDept === "All Departments" || job.dept === selectedDept;
    const matchType = selectedType === "All Types" || job.type === selectedType;
    return matchSearch && matchDept && matchType;
  });

  return (
    <div className="min-h-screen bg-[#080C14] text-[#E8EDF2] font-sans">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse" />
              <span className="text-[#F97316] text-xs font-semibold tracking-wider uppercase">
                Now Hiring — {JOB_OPENINGS.length} Positions Open
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] mb-6">
              <span className="text-white">Join the Team Behind</span>
              <br />
              <span className="bg-gradient-to-r from-[#F97316] via-[#EAB308] to-[#F97316] bg-clip-text text-transparent">
                India's Premier
              </span>
              <br />
              <span className="text-white">Metallurgy Export</span>
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-lg">
              Work at the intersection of industrial trade, global logistics, and emerging markets. SSL Group
              moves millions of metric tons across 45+ countries — be part of that.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#openings"
                className="bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14] px-8 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                View All Openings
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#life"
                className="border border-white/10 text-white px-8 py-3.5 rounded font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                Life at SSL Group
              </a>
            </div>
          </div>

          {/* Hero stats card */}
          <div className="hidden lg:block">
            <div className="bg-[#0D1520]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-[#0A0E1A] rounded-xl p-5 border border-white/5">
                    <div className="text-2xl font-black bg-gradient-to-r from-[#F97316] to-[#EAB308] bg-clip-text text-transparent mb-1">
                      {s.value}
                    </div>
                    <div className="text-[#64748B] text-xs font-medium">{s.label}</div>
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
                  <div className="text-white text-sm font-semibold">Global Operations Since 2018</div>
                  <div className="text-[#94A3B8] text-xs">Ghaziabad, UP · Africa · Middle East · Europe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 [background:linear-gradient(135deg,#3D3F38,#6B8FA0,#9B6E7C,#C8B87A,#9DA09A)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-4">
                Why SSL Group
              </div>
              <h2 className="text-4xl font-black text-white leading-tight mb-6">
                Your Career in
                <br />
                <span className="bg-gradient-to-r from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">
                  Global Trade
                </span>
              </h2>
              <p className="text-[#d6e1f1] leading-relaxed text-base">
                SSL Group has supplied ferrous and non-ferrous materials to steel plants, foundries, and EPC
                contractors worldwide since 2018. When you join our team, you become part of supply chains that
                feed real infrastructure — bridges, factories, and energy grids across continents.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-8 text-[#f19b5f] font-semibold text-sm hover:gap-3 transition-all"
              >
                Read Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <div
                  key={i}
                  className={`bg-[#0D1520] border rounded-xl p-5 hover:border-[#F97316]/30 transition-colors group ${i === 1 ? "border-[#F97316]/30 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal" : "border-white/5"
                    }`}
                >
                  <div className={`mb-4 ${i === 1 ? "text-[#F97316]" : "text-[#475569]"} group-hover:text-[#F97316] transition-colors`}>
                    {b.icon}
                  </div>
                  <div className="text-white font-bold text-sm mb-2">{b.title}</div>
                  <div className="text-[#64748B] text-xs leading-relaxed">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIFE AT SSL */}
      <section id="life" className="py-24 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#EAB308]/4 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-4">Culture</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Life at <span className="bg-gradient-to-r from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">SSL Group</span>
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              We are a lean, expert-driven organization. Every team member owns a piece of a global operation —
              there's no bureaucracy between your work and its real-world impact across supply chains worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Ownership Culture",
                body:
                  "Junior analysts work directly with senior traders. Your decisions affect real export volumes — you'll feel it from day one.",
                gradient: "from-[#F97316]/20 to-transparent",
                accent: "#F97316",
              },
              {
                label: "Global Perspective",
                body:
                  "Coordinate with counterparts in Dubai, Lagos, Rotterdam, and Seoul. Every week brings a new market, a new conversation.",
                gradient: "from-[#EAB308]/20 to-transparent",
                accent: "#EAB308",
              },
              {
                label: "Domain Mastery",
                body:
                  "Specialize in materials science, trade compliance, logistics, or digital infrastructure — and become the company's best in your space.",
                gradient: "from-[#F97316]/20 to-transparent",
                accent: "#F97316",
              },
            ].map((card) => (
              <div key={card.label} className="bg-[#0D1520] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[${card.accent}] to-transparent`}
                  style={{ background: `linear-gradient(to right, ${card.accent}, transparent)` }}
                />
                <div className="text-white font-black text-xl mb-4">{card.label}</div>
                <div className="text-[#94A3B8] text-sm leading-relaxed">{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section id="openings" className="py-24 [background:linear-gradient(135deg,#3D3F38,#6B8FA0,#9B6E7C,#C8B87A,#9DA09A)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-3">Careers</div>
              <h2 className="text-4xl font-black text-white">
                Open Positions
              </h2>
            </div>
            <div className="text-[#FFF] text-sm font-medium">
              <span className="text-[#F97316] font-bold text-lg">{filtered.length}</span> positions available
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
              {DEPARTMENTS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-[#0D1520] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#94A3B8] focus:outline-none focus:border-[#F97316]/50 transition-colors cursor-pointer"
            >
              {WORK_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((job, i) => (
              <div
                key={i}
                className={`bg-[#0D1520] border rounded-xl p-6 hover:border-[#F97316]/40 transition-all group cursor-pointer ${i === 1 ? "border-[#F97316]/40 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal" : "border-white/5"
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-white font-bold text-sm mb-1">{job.title}</div>
                    <div className="text-[#F97316] text-xs font-semibold">SSL Group</div>
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${i === 1 ? "bg-[#F97316]/20" : "bg-white/5"}`}>
                    <svg className={`w-4 h-4 ${i === 1 ? "text-[#c96a00]" : "text-[#c96a00]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-white/5 text-[#94A3B8] text-xs px-2.5 py-1 rounded-full">{job.dept}</span>
                  <span className="bg-white/5 text-[#94A3B8] text-xs px-2.5 py-1 rounded-full">{job.type}</span>
                  <span className="bg-white/5 text-[#94A3B8] text-xs px-2.5 py-1 rounded-full">{job.location}</span>
                </div>
                <button
                  className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all ${i === 1
                    ? "bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14]"
                    : "border border-white/10 text-white hover:bg-white/5"
                    }`}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#475569]">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <p className="text-sm text-[#fff] fw-[bold]">No roles match your search. Try different filters.</p>
            </div>
          )}

          <div className="text-center mt-10">
            <button className="border border-white/10 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors bg-[#0461cfad]">
              View All Openings
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-0">
        <div className="bg-[#fff] py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "70+", label: "Team Members" },
              { value: "45+", label: "Export Countries" },
              { value: "2.4M MT", label: "Annual Volume" },
              { value: "Since 2018", label: "In Operation" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-[#080C14] mb-1"
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
                  {s.value}

                </div>
                <div className="text-[#080C14]/70 text-sm font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITMENT PROCESS */}
      <section className="py-24 [background:linear-gradient(135deg,#3D3F38,#6B8FA0,#9B6E7C,#C8B87A,#9DA09A)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-4">How We Hire</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Our Recruitment <span className="bg-gradient-to-r from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-[rgb(199, 213, 235)] max-w-xl mx-auto text-sm leading-relaxed">
              A transparent, fast hiring process. Most candidates hear back within 72 hours of applying.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RECRUITMENT_STEPS.map((step, i) => (
              <div key={i} className="relative">
                {i < RECRUITMENT_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-6 h-px bg-gradient-to-r from-[#F97316]/40 to-transparent z-10" />
                )}
                <div className="bg-[#0D1520] border border-white/5 rounded-2xl p-6 hover:border-[#F97316]/20 transition-colors group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316]/20 to-[#EAB308]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316] group-hover:from-[#F97316]/30 transition-colors">
                      {step.icon}
                    </div>
                    <div className="text-3xl font-black text-[#FFF]">{step.step}</div>
                  </div>
                  <div className="text-white font-bold text-sm mb-2">{step.title}</div>
                  <div className="text-[#64748B] text-xs leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0D1520] via-[#F97316]/10 to-[#0D1520] border border-[#F97316]/20 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F97316]/5" />
            <div className="relative">
              <div className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-4">Ready to Apply?</div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Source Your Career From SSL Group
              </h2>
              <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                Send your resume to{" "}
                <a href="mailto:shivani.yadav@sslgroup.in" className="text-[#F97316] hover:underline">
                  careers@sslgroup.in
                </a>{" "}
                or apply directly through any of our open positions above.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#openings"
                  className="bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14] px-8 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Browse Open Roles
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:shivani.yadav@sslgroup.in"
                  className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  Email Your CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
