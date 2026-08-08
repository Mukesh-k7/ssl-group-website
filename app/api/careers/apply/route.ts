import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { sendApplicationNotification, sendCandidateConfirmation } from "@/lib/hrmail";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const position = formData.get("position")?.toString().trim();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const dob = formData.get("dob")?.toString().trim()
    const location = formData.get("location")?.toString().trim();
    const experience = formData.get("experience")?.toString().trim();
    const coverNote = formData.get("coverNote")?.toString().trim();
    const resume = formData.get("resume") as File | null;

    // Validation — matches the inline error messages in your form design
    const errors: Record<string, string> = {};
    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required.";
    if (!phone) errors.phone = "Phone number is required.";
    if (!location) errors.location = "Please select a location.";
    if (!dob) errors.dob = "Please enter your data of birth"
    if (!experience) errors.experience = "Experience is required.";
    if (!resume || resume.size === 0) errors.resume = "Please attach your resume.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    if (resume!.size > MAX_FILE_SIZE) {
      return NextResponse.json({ errors: { resume: "Resume must be under 5MB." } }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(resume!.type)) {
      return NextResponse.json(
        { errors: { resume: "Resume must be a PDF, DOC, or DOCX file." } },
        { status: 400 }
      );
    }

    // Upload resume to Cloudinary
    const bytes = await resume!.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const originalName = resume!.name; // e.g. "Mukesh_Maurya.pdf"
    const extension = originalName.split(".").pop(); // "pdf" or "docx"
    const safeBaseName = name!.replace(/\s+/g, "_");

    const uploadResult = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "ssl-group/resumes",
          resource_type: "raw",
          public_id: `${Date.now()}-${safeBaseName}.${extension}`,
          use_filename: false,
          unique_filename: false,
        },
        (error, result) => {
          if (error || !result) return reject(error);
          resolve(result as { secure_url: string });
        }
      );
      uploadStream.end(buffer);
    });

    await sendApplicationNotification({
      name: name!,
      email: email!,
      phone: phone!,
      position,
      dob: dob!,
      location: location!,
      experience: experience!,
      coverNote,
      resumeUrl: uploadResult.secure_url,
    });

    try {
      await sendCandidateConfirmation({ name: name!, email: email!, location: location!, position, dob: dob! });
    } catch (err) {
      console.error("Candidate confirmation email failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Job application submission failed:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}