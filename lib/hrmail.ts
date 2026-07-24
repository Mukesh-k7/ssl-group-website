import { transporter, smtpAvailable, isProd } from "@/lib/mail";

interface ApplicationMailInput {
  name: string;
  email: string;
  phone: string;
  position?: string;
  location: string;
  experience: string;
  coverNote?: string;
  resumeUrl: string;
  dob: string
}

export async function sendApplicationNotification(data: ApplicationMailInput) {
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `DOB: ${data.dob}`,
    `Position Applied For: ${data.position || "-"}`,
    `Location Applying For: ${data.location}`,
    `Years of Experience: ${data.experience}`,
    "",
    `Cover Note:`,
    data.coverNote || "-",
    "",
    `Resume: ${data.resumeUrl}`,
  ];

  if (!smtpAvailable || !transporter) {
    if (isProd) {
      console.error("SMTP not configured in production — application email NOT sent.");
      throw new Error("Email service not configured");
    }
    console.log("[DEV] Application received (SMTP not configured, not sending):\n" + lines.join("\n"));
    return;
  }

  await transporter.sendMail({
    from: `"${data.name} (via Career Portal)" <${process.env.SMTP_USER}>`,
    replyTo: `"${data.name}" <${data.email}>`,
    to: process.env.HR_RECIPIENT_EMAIL || "shivani.yadav@sslgroup.in",
    subject: `New Application — ${data.position || data.location} — ${data.name} - ${data.dob}`,
    text: lines.join("\n"),
  });
}

export async function sendCandidateConfirmation(data: Pick<ApplicationMailInput, "name" | "email" | "location" | "position">) {
  if (!smtpAvailable || !transporter) return;

  await transporter.sendMail({
    from: `"SSL Group Careers" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `We've received your application — SSL Group`,
    text: `Hi ${data.name},\n\nThanks for applying for the ${data.position || data.location} position at SSL Group. Our HR team will review your application and reach out if there's a match.\n\nBest,\nSSL Group Careers Team`,
  });
}