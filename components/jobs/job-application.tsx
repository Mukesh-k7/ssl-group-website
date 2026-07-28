"use client";

import { useState, useRef, DragEvent, ChangeEvent, useEffect, useMemo, FormEvent } from "react";
import { Loader2, UploadCloud, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";


// TODO: replace with your real office/hiring locations
const LOCATIONS = ["Ghaziabad", "Dubai", "UAE"];

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  experience?: string;
  resume?: string;
  dob?: string
}

type Status = "idle" | "submitting" | "success" | "error";

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

export function JobApplicationForm() {

  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [countryCode, setCountryCode] = useState("+91");

  const searchParams = useSearchParams();
  const positionFromUrl = searchParams.get("position") || "";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations();


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



  const validateResume = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) return "Resume must be under 5MB.";
    if (!ALLOWED_TYPES.includes(file.type)) return "Resume must be a PDF, DOC, or DOCX file.";
    return null;
  };

  const handleFileSelect = (file: File) => {
    const error = validateResume(file);
    if (error) {
      setErrors((prev) => ({ ...prev, resume: error }));
      setResumeFile(null);
      return;
    }
    setErrors((prev) => ({ ...prev, resume: undefined }));
    setResumeFile(file);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const phone = data.get("phone")?.toString().trim();
    const location = data.get("location")?.toString().trim();
    const experience = data.get("experience")?.toString().trim();
    const dob = data.get("dob")?.toString().trim()
    const newErrors: FormErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    if (!dob) newErrors.dob = "Please enter your data of birth"
    if (!location) newErrors.location = "Please select a location.";
    if (!experience) newErrors.experience = "Experience is required.";
    if (!resumeFile) newErrors.resume = "Please attach your resume.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (resumeFile) data.set("resume", resumeFile);

    setStatus("submitting");

    try {
      const res = await fetch("/api/careers/apply", { method: "POST", body: data });
      const result = await res.json();

      if (!res.ok) {
        if (result.errors) {
          setErrors(result.errors);
          setStatus("idle");
          return;
        }
        throw new Error(result.error || `Request failed with status ${res.status}`);
      }

      setStatus("success");
      form.reset();
      setResumeFile(null);
    } catch (err) {
      console.error("Application submission failed:", err);
      setServerError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }

    if (phoneNumber.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-4xl rounded-xl border bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold"> {t("application")} </h3>
        <p className="mt-2 text-gray-600">
          {t("thanks")}
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          {t("another")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-8xl space-y-6 rounded-xl border py-24 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal p-8 shadow-sm" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {positionFromUrl && (
          <div className="space-y-2">
            <Label htmlFor="position" className="text-white"> {t("job")} </Label>
            <Input
              id="position"
              name="position"
              value={positionFromUrl}
              readOnly
              className="cursor-not-allowed bg-gradient-to-br from-industrial-blue/40"
            />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">{t("FullName")} </Label>
          <Input id="name" name="name" placeholder="Your full name" autoComplete="name" />
          {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">{t("EmailAddress")} </Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob" className="text-white"> {t("dob")} </Label>
          <Input id="dob" name="dob" type="dob" placeholder="08/10/1999" autoComplete="dob" />
          {errors.dob && <p className="text-sm text-red-400">{errors.dob}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
          {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="location" className="text-white"> {t("locations")} </Label>
          <select
            id="location"
            name="location"
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm bg-gradient-to-br from-industrial-blue/40"
          >
            <option value="" disabled className="text-dark"> {t("selectalocation")} </option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc} className="text-industrial-blue/80">{loc}</option>
            ))}
          </select>
          {errors.location && <p className="text-sm text-red-400">{errors.location}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience" className="text-white"> {t("yearsofexperience")} </Label>
        <Input id="experience" name="experience" placeholder="e.g. 3 years" />
        {errors.experience && <p className="text-sm text-red-400">{errors.experience}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverNote" className="text-white"> {t("Cover")} </Label>
        <Textarea id="coverNote" name="coverNote" placeholder="Tell us briefly why you're a great fit..." rows={4} />
      </div>

      <div className="space-y-2">
        <Label className="text-white"> {t("resume")} </Label>
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
        >
          <UploadCloud className="mx-auto mb-2 h-6 w-6 text-gray-400" />
          {resumeFile ? (
            <p className="font-medium text-gray-400">{resumeFile.name}</p>
          ) : (
            <>
              <p className="font-medium text-gray-100"> {t("yourresume")} </p>
              <p className="text-sm text-gray-400"> {t("pdf")} </p>
            </>
          )}
          <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileInputChange} />
        </div>
        {errors.resume && <p className="text-sm text-red-400">{errors.resume}</p>}
      </div>

      {serverError && (
        <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-400">{serverError}</div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("submitting")} </>
        ) : t(
          "SubmitApplication"
        )}
      </Button>
    </form>
  );
}