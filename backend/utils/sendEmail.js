import nodemailer from "nodemailer";

export default async function sendEmail({ to, subject, html, text }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // UPDATED
      pass: process.env.EMAIL_PASS, // UPDATED
    },
  });

  await transporter.sendMail({
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: text || "",   // fallback
    html: html || "",   // HTML version
  });
}
