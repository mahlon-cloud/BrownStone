import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // --- EMAIL TRANSPORTER ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- EMAIL MESSAGE ---
    await transporter.sendMail({
      from: data.email,
      to: process.env.CONTACT_EMAIL,
      subject: `New Booking Request from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Nationality: ${data.nationality}
Organization: ${data.organization}
Interest: ${data.interest}

Notes:
${data.note}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
