"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Trophy,
  Globe,
  Users,
  ChevronRight,
  X,
  Mail,
  ArrowRight,
  Image as ImageIcon,
  Camera,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { mediaCategories, photoGallery, mediaStats } from "@/data/media";

const locales = ["en", "hi", "ar"];
function getLocale(pathname: string) {
  const seg = pathname.split("/")[1];
  return locales.includes(seg) ? seg : "en";
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  events: Calendar,
  life: Users,
  achievements: Trophy,
  global: Globe,
  team: Camera,
};

export default function MediaCenterPage() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const t = useTranslations("media");
  const [activeCategory, setActiveCategory] = useState("events");
  const [lightbox, setLightbox] = useState<null | { src: string; title: string; date?: string }>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentCategory = mediaCategories.find((c) => c.id === activeCategory)!;

  return (
    <main className="min-h-screen bg-[#080C14]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-charcoal border-b border-white/10">
        <div className="absolute inset-0 bg-industrial-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-blue/10 via-transparent to-charcoal" />
        <div className="absolute top-0 h-96 w-96 bg-industrial-blue/10 rounded-full blur-3xl -right-32" />

        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/products/7.jpg"
            alt="SSL Group Media"
            fill
            sizes=""
            className="object-cover"
          />
        </div>

        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm text-[#c35303d1] font-semibold uppercase tracking-[0.2em]">
              {t("eyebrow")}
            </p>
            <h1 className="font-heading font-bold text-4xl text-white md:text-5xl lg:text-6xl tracking-tight">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-metallic/90 md:text-xl leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="container mx-auto px-4 md:px-6 mt-12 relative z-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {mediaStats.map((stat, i) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-sm text-metallic/70 mt-1">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[72px] z-30 bg-[#080C14]/95 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto scrollbar-none gap-1 py-3">
            {mediaCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] ?? ImageIcon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14] shadow-lg shadow-orange-500/20"
                      : "text-metallic/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {t(`categories.${cat.id}.title`)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Section */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="py-16"
        >
          <div className="container mx-auto px-4 md:px-6">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {t(`categories.${activeCategory}.title`)}
                </h2>
                <p className="text-metallic/70 mt-2 max-w-lg">
                  {t(`categories.${activeCategory}.description`)}
                </p>
              </div>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 self-start md:self-auto"
                asChild
              >
                <Link href={`/${locale}/media-center/${activeCategory}`}>
                  {t(`categories.${activeCategory}.viewAll`)}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Media Grid */}
            <div className="relative">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {currentCategory.items.slice(0, 4).map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className={`group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 ${
                      i === 0 ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                    style={{ aspectRatio: i === 0 ? "auto" : "4/3" }}
                    onClick={() => setLightbox({ src: item.image, title: item.title, date: item.date })}
                  >
                    <div className={`relative w-full ${i === 0 ? "h-72 md:h-full min-h-[280px]" : "h-[280px]"}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="290px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-sm font-semibold leading-tight">{item.title}</p>
                        {item.date && (
                          <p className="text-white/60 text-xs mt-1">{item.date}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Scroll arrow indicator */}
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-full items-center justify-center border border-white/20">
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* All Sections (scrollable) */}
      {mediaCategories
        .filter((c) => c.id !== activeCategory)
        .map((cat, sectionIdx) => {
          const Icon = categoryIcons[cat.id] ?? ImageIcon;
          return (
            <section key={cat.id} className={`py-14 ${sectionIdx % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F97316]/20 to-[#EAB308]/10 border border-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{t(`categories.${cat.id}.title`)}</h2>
                      <p className="text-metallic/60 text-sm mt-0.5 max-w-xs">{t(`categories.${cat.id}.description`)}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-amber-400 hover:text-amber-300 hover:bg-white/5 self-start md:self-auto"
                    asChild
                  >
                    <Link href={`/${locale}/media-center/${cat.id}`}>
                      {t(`categories.${cat.id}.viewAll`)}
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cat.items.slice(0, 4).map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10"
                      onClick={() => setLightbox({ src: item.image, title: item.title, date: item.date })}
                    >
                      <div className="relative w-full h-[290px] ">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="290px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                         
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-white text-xs font-medium leading-tight">{item.title}</p>
                          {item.date && (
                            <p className="text-white/50 text-[10px] mt-0.5">{item.date}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

      {/* Photo Gallery Strip */}
      <section className="py-16 bg-charcoal/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <ImageIcon className="h-5 w-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                {t("gallery.title")}
              </span>
            </div>
            <p className="text-metallic/60 text-sm">{t("gallery.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {photoGallery.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 ${
                  i === 0 || i === 3 ? "col-span-2" : ""
                }`}
                onClick={() => setLightbox({ src: photo.src, title: photo.title })}
              >
                <div className="relative h-28 md:h-32">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="290px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              className="bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14] font-semibold hover:opacity-90"
              asChild
            >
              <Link href={`/${locale}/media-center/gallery`}>
                {t("gallery.explore")}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0D1B2E] to-[#0a1520] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{t("newsletter.title")}</h3>
                <p className="text-metallic/60 text-sm mt-1">{t("newsletter.description")}</p>
              </div>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <span>✓</span>
                <span>{t("newsletter.success")}</span>
              </div>
            ) : (
              <div className="flex gap-3 w-full md:w-auto flex-wrap">
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 md:w-72 bg-white/5 border border-white/20 text-white placeholder:text-metallic/40 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                />
                <Button
                  onClick={() => { if (email) setSubscribed(true); }}
                  className="bg-gradient-to-r from-[#F97316] to-[#EAB308] text-[#080C14] font-semibold hover:opacity-90 whitespace-nowrap"
                >
                  {t("newsletter.button")}
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white p-2"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <Image src={lightbox.src} alt={lightbox.title} fill className="object-cover" />
              </div>
              <div className="mt-3 text-center">
                <p className="text-white font-medium">{lightbox.title}</p>
                {lightbox.date && (
                  <p className="text-metallic/60 text-sm mt-1">{lightbox.date}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
