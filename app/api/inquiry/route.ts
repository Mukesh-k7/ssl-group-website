import { NextRequest, NextResponse } from "next/server";
import { transporter, smtpAvailable, isProd } from "@/lib/mail";
import { uploadDocument, MAX_FILE_SIZE, ALLOWED_DOC_TYPES } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  let formData: FormData;

  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const name = formData.get("name")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const product = formData.get("product")?.toString().trim();
  const quantity = formData.get("quantity")?.toString().trim();
  const destination = formData.get("destination")?.toString().trim();
  const incoterms = formData.get("incoterms")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const type = formData.get("type")?.toString();
  const locale = formData.get("locale")?.toString();
  const document = formData.get("document") as File | null;

  if (!name || !company || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Document is optional for inquiries — only validate if one was attached
  if (document && document.size > 0) {
    if (document.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Attachment must be under 5MB." }, { status: 400 });
    }
    if (!ALLOWED_DOC_TYPES.includes(document.type)) {
      return NextResponse.json({ error: "Attachment must be a PDF, DOC, or DOCX file." }, { status: 400 });
    }
  }

  const isExport = type === "export";

  let documentUrl: string | null = null;
  if (document && document.size > 0) {
    try {
      const uploadResult = await uploadDocument(document, "ssl-group/inquiry-documents", name);
      documentUrl = uploadResult.secure_url;
    } catch (err) {
      console.error("Document upload failed:", err);
      return NextResponse.json({ error: "Failed to upload attachment. Please try again." }, { status: 500 });
    }
  }

  const lines = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    ...(isExport
      ? [
        `Product: ${product || "-"}`,
        `Quantity: ${quantity || "-"}`,
        `Destination: ${destination || "-"}`,
        `Incoterms: ${incoterms || "-"}`,
      ]
      : []),
    "",
    `Message:`,
    message,
    "",
    `Attached Document: ${documentUrl || "None"}`,
  ];

  if (!smtpAvailable || !transporter) {
    if (isProd) {
      console.error("SMTP not configured in production — inquiry email NOT sent.");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }
    console.log("[DEV] Inquiry received (SMTP not configured, not sending):\n" + lines.join("\n"));
    return NextResponse.json({ success: true, dev: true });
  }

  try {
    await transporter.sendMail({
      from: `"${name} (via SSL Group Website)" <${process.env.SMTP_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.INQUIRY_RECIPIENT || "export@sslgroup.in",
      subject: `SSL Group - New ${isExport ? "Export " : ""}Inquiry from ${company}`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send inquiry email:", err);
    return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 });
  }
}