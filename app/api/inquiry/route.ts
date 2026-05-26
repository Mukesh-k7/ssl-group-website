import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site-url";

/**
 * Email integration structure for inquiry form submissions.
 *
 * Connect to your preferred provider:
 * - Resend: resend.emails.send()
 * - SendGrid: sgMail.send()
 * - Nodemailer: transporter.sendMail()
 *
 * Set environment variables:
 * INQUIRY_TO_EMAIL, RESEND_API_KEY (or equivalent)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, product, quantity, destination, incoterms, phone } =
      body;

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const inquiry = {
      name,
      email,
      company,
      message,
      phone: phone ?? null,
      product: product ?? null,
      quantity: quantity ?? null,
      destination: destination ?? null,
      incoterms: incoterms ?? null,
      source: SITE_URL,
      receivedAt: new Date().toISOString(),
    };

    // TODO: Replace with actual email service integration
    // await sendInquiryEmail(inquiry);

    if (process.env.NODE_ENV === "development") {
      console.log("[Inquiry API]", inquiry);
    }

    return NextResponse.json({ success: true, message: "Inquiry received" });
  } catch {
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
