"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello SSL Group, I would like to inquire about your metallurgy and raw material exports."
  );
  const url = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
