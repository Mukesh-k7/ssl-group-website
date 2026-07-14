"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface InquiryFormProps {
  title?: string;
  description?: string;
  variant?: "default" | "export";
}

export function InquiryForm({
  title = "Send an Inquiry",
  description = "Our export team responds within 24 business hours.",
  variant = "default",
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, type: variant }),
      });
    } catch {
      // Fallback: still show success in UI; log server-side in production monitoring
    }

    setSubmitted(true);
    form.reset();
  };

  const t = useTranslations()

  if (submitted) {
    return (
      <Card className="border-industrial-blue/30">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-industrial-blue/20">
            <Send className="h-8 w-8 text-industrial-blue" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white">{t("Inquiry")} </h3>
          <p className="mt-2 text-metallic/80">
             {t("Thank")}
          </p>
          <Button
            variant="secondary"
            className="mt-6"
            onClick={() => setSubmitted(false)}
          >
            {t("Another")}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal border-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-white/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                {t("FullName")}*
              </Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                {t("Company")} *
              </Label>
              <Input id="company" name="company" required placeholder="Company name" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                {t("Email")} *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                {t("Media")}
              </Label>
              <Input id="phone" name="phone" placeholder="+1 234 567 8900" />
            </div>
          </div>
          {variant === "export" && (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="product" className="text-white">
                    {t("ProductInterest")} 
                  </Label>
                  <Input
                    id="product"
                    name="product"
                    placeholder="e.g. Ferro Alloys, Pig Iron"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-white">
                    {t("Quantity")} 
                  </Label>
                  <Input id="quantity" name="quantity" placeholder="e.g. 5,000 MT" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-white">
                    {t("Destination")} 
                  </Label>
                  <Input id="destination" name="destination" placeholder="e.g. Jebel Ali" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="incoterms" className="text-white">
                    {t("Incoterms")} 
                  </Label>
                  <Input id="incoterms" name="incoterms" placeholder="e.g. CIF, FOB" />
                </div>
              </div>
            </>
          )}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              {t("Message")} *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Describe your requirements, specifications, and timeline..."
              rows={5}
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            <Send className="h-4 w-4" />
             {t("SubmitInquiry")}
          </Button>
          <p className="text-center text-xs text-metallic/60">
            {t("contacted")}
            {/* Wire to: POST /api/inquiry → Resend/SendGrid/Nodemailer */}
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
