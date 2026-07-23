"use client";

import { useState } from "react";
import { Send, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

interface InquiryFormProps {
  title?: string;
  description?: string;
  variant?: "default" | "export";
}

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm({
  title = "Send an Inquiry",
  description = "Our export team responds within 24 business hours.",
  variant = "default",
}: InquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const t = useTranslations();
  const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, type: variant, locale }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      console.error("Inquiry submission failed:", msg);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Card className="border-industrial-blue/30">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-industrial-blue/20">
            <Send className="h-8 w-8 text-industrial-blue" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white">{t("Inquiry")}</h3>
          <p className="mt-2 text-metallic/80">{t("Thank")}</p>
          <Button
            variant="secondary"
            className="mt-6"
            onClick={() => setStatus("idle")}
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
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                {t("FullName")}*
              </Label>
              <Input id="name" name="name" required placeholder="Your name" autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                {t("Company")} *
              </Label>
              <Input id="company" name="company" required placeholder="Company name" autoComplete="organization" />
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
                autoComplete="email"
                inputMode="email"
              />
            </div>
            <div className="space-y-2">
              {/* NOTE: this label was previously wired to the "Media" translation key,
                  which looks like a copy-paste mistake. Point it at a proper "Phone" key
                  in your en/hi/ar message files. */}
              <Label htmlFor="phone" className="text-white">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                inputMode="tel"
              />
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
                  <Input type="text" id="quantity" name="quantity" placeholder="e.g. 5,000 MT" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-white">
                    {t("Destination")}
                  </Label>
                  <Input type="text" id="destination" name="destination" placeholder="e.g. Jebel Ali" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="incoterms" className="text-white">
                    {t("Incoterms")}
                  </Label>
                  <Input type="text" id="incoterms" name="incoterms" placeholder="e.g. CIF, FOB" />
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

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-200">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                Submit Error{" "}
                <a href="mailto:shivani.yadav@sslgroup.in" className="underline">
                  shivani.yadav@sslgroup.in
                </a>
                .
              </p>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Inquiry
              </>
            )}
          </Button>
          <p className="text-center text-xs text-metallic/60">
            contacted
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

