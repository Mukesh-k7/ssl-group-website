import { NextRequest, NextResponse } from "next/server";
import { transporter, smtpAvailable, isProd } from "@/lib/mail";

interface InquiryPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  product?: string;
  quantity?: string;
  destination?: string;
  incoterms?: string;
  message?: string;
  type?: "default" | "export";
  locale?: string;
}

export async function POST(req: NextRequest) {
  let body: InquiryPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, company, email, phone, product, quantity, destination, incoterms, message, type } = body;

  if (!name || !company || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const isExport = type === "export";

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
      from: `"SSL Group Website" <${process.env.SMTP_USER}>`,
      to: process.env.INQUIRY_RECIPIENT || "shivani.yadav@sslgroup.in",
      replyTo: email,
      subject: `SSL Group - New ${isExport ? "Export " : ""}Inquiry from ${company}`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send inquiry email:", err);
    return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 });
  }
}