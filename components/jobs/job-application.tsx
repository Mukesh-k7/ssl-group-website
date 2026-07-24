"use client";

import { useState, useRef, DragEvent, ChangeEvent, FormEvent } from "react";
import { Loader2, UploadCloud, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";


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

export function JobApplicationForm() {
  const searchParams = useSearchParams();
  const positionFromUrl = searchParams.get("position") || "";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-4xl rounded-xl border bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold">Application Submitted</h3>
        <p className="mt-2 text-gray-600">
          Thanks for applying — our HR team will review your application and reach out if there&apos;s a match.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-8xl space-y-6 rounded-xl border py-24 bg-gradient-to-br from-industrial-blue/40 via-gunmetal to-charcoal p-8 shadow-sm" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {positionFromUrl && (
          <div className="space-y-2">
            <Label htmlFor="position">Job Position</Label>
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
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Your full name" autoComplete="name" />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Date Of Birth</Label>
          <Input id="dob" name="dob" type="dob" placeholder="08/10/1999" autoComplete="dob" />
          {errors.dob && <p className="text-sm text-red-600">{errors.dob}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Locations Applying For</Label>
          <select
            id="location"
            name="location"
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm bg-gradient-to-br from-industrial-blue/40"
          >
            <option value="" disabled className="text-dark">Select a location</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc} className="text-industrial-blue/80">{loc}</option>
            ))}
          </select>
          {errors.location && <p className="text-sm text-red-600">{errors.location}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Years of Experience</Label>
        <Input id="experience" name="experience" placeholder="e.g. 3 years" />
        {errors.experience && <p className="text-sm text-red-600">{errors.experience}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverNote">Cover Note (optional)</Label>
        <Textarea id="coverNote" name="coverNote" placeholder="Tell us briefly why you're a great fit..." rows={4} />
      </div>

      <div className="space-y-2">
        <Label>Resume</Label>
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
              <p className="font-medium text-gray-100">Click to upload or drag and drop your resume</p>
              <p className="text-sm text-gray-400">PDF, DOC, or DOCX — max 5MB</p>
            </>
          )}
          <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileInputChange} />
        </div>
        {errors.resume && <p className="text-sm text-red-600">{errors.resume}</p>}
      </div>

      {serverError && (
        <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">{serverError}</div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}