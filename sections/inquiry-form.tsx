"use client";

import { useState, useRef, DragEvent, ChangeEvent, useEffect, useMemo } from "react";
import { Send, Loader2, AlertCircle, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslations, useLocale } from "next-intl";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface InquiryFormProps {
  title?: string;
  description?: string;
  variant?: "default" | "export";
}

interface FormErrors {
  phone?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// Ye ek baar generate hota hai — koi manual 240-line list nahi
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const COUNTRY_LIST = getCountries()
  .map((iso2) => ({
    iso2,
    code: `+${getCountryCallingCode(iso2)}`,
    label: regionNames.of(iso2) || iso2,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

const DEFAULT_COUNTRY = COUNTRY_LIST.find((c) => c.iso2 === "IN")!;

export function InquiryForm({
  title = "Send an Inquiry",
  description = "Our export team responds within 24 business hours.",
  variant = "default",
}: InquiryFormProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fileError, setFileError] = useState<string | null>(null);
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations();
  const locale = useLocale();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(digitsOnly);
  };

  const filteredCountries = useMemo(() => {
    if (!search) return COUNTRY_LIST;
    const q = search.toLowerCase();
    return COUNTRY_LIST.filter(
      (c) => c.label.toLowerCase().includes(q) || c.code.includes(q)
    );
  }, [search]);

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) return "File must be under 5MB.";
    if (!ALLOWED_TYPES.includes(file.type)) return "File must be a PDF, DOC, or DOCX.";
    return null;
  };



  const handleFileSelect = (file: File) => {
    const error = validateFile(file);
    if (error) {
      setFileError(error);
      setDocumentFile(null);
      return;
    }
    setFileError(null);
    setDocumentFile(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = data.get("phone")?.toString().trim();
    const newErrors: FormErrors = {};

    data.set("type", variant);
    data.set("locale", locale);

    if (documentFile) data.set("document", documentFile);
    if (!phone) newErrors.phone = "Phone number is required.";

    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        body: data,
      });

      const rawText = await res.text();
      let result: any;
      try {
        result = JSON.parse(rawText);
      } catch {
        console.error("Non-JSON response from server:", rawText);
        throw new Error(`Server returned an unexpected response (status ${res.status}).`);
      }

      if (!res.ok) {
        throw new Error(result.error || `Request failed with status ${res.status}`);
      }

      setStatus("success");
      form.reset();
      setDocumentFile(null);
    } catch (err) {
      console.error("Inquiry submission failed:", err);
      setStatus("error");
    }

    if (phoneNumber.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
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
          <p className="mt-2 text-metallic/20">{t("Thank")}</p>
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
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex h-10 w-24 items-center gap-1 rounded-md border border-input bg-transparent px-2 text-sm shadow-sm"
                  >
                    <img
                      src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                      alt={country.label}
                      className="h-4 w-6 rounded-sm object-cover"
                    />
                    <span>{country.code}</span>
                    <ChevronDown className="ml-auto h-3 w-3 text-gray-400" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute z-10 mt-1 w-56 rounded-md border bg-white shadow-lg">
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border-b px-3 py-2 text-sm outline-none"
                        autoFocus
                      />
                      <div className="max-h-60 overflow-y-auto">
                        {filteredCountries.map((c) => (
                          <button
                            key={c.iso2}
                            type="button"
                            onClick={() => { setCountry(c); setDropdownOpen(false); setSearch(""); }}
                            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-[#000] hover:bg-gray-900  hover:text-white"
                          >
                            <img
                              src={`https://flagcdn.com/w40/${c.iso2.toLowerCase()}.png`}
                              alt={c.label}
                              className="h-4 w-6 rounded-sm object-cover"
                            />
                            <span className="truncate">{c.label}</span>
                            <span className="ml-auto shrink-0">{c.code}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  placeholder="9876543210"
                  autoComplete="tel-national"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="flex-1"
                />
              </div>

              <input type="hidden" name="phone" value={phoneNumber ? `${country.code}${phoneNumber}` : ""} />
              {phoneNumber.length > 0 && phoneNumber.length < 10 && (
                <p className="text-sm text-amber-600">{10 - phoneNumber.length} more digit(s) needed.</p>
              )}
            </div>
          </div>
          {variant === "export" && (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="product" className="text-white">
                    {t("ProductInterest")}
                  </Label>
                  <Input id="product" name="product" placeholder="e.g. Ferro Alloys, Pig Iron" />
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

          <div className="space-y-2">
            <Label className="text-white">Attach Document (optional)</Label>
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors ${isDragging ? "border-industrial-blue bg-industrial-blue/10" : "border-white/20"
                }`}
            >
              <UploadCloud className="mx-auto mb-2 h-5 w-5 text-white/50" />
              {documentFile ? (
                <p className="text-sm font-medium text-white">{documentFile.name}</p>
              ) : (
                <>
                  <p className="text-sm font-medium text-white/80">Click to upload or drag and drop</p>
                  <p className="text-xs text-white/50">PDF, DOC, or DOCX — max 5MB</p>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
            {fileError && <p className="text-sm text-red-400">{fileError}</p>}
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-200">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                Submit Error{" "}
                <a href="mailto:md@sslgroup.in" className="underline">
                  md@sslgroup.in
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