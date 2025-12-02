import nodemailer from 'nodemailer';

export default async function sendMail({ to, subject, html, text, from }) {
  // Priority for sending:
  // 1) Generic SMTP config via SMTP_HOST/SMTP_PORT/SMTP_SECURE/SMTP_USER/SMTP_PASS
  // 2) EMAIL_USER / EMAIL_PASS (legacy Gmail config)
  // 3) Ethereal test account when no creds are provided

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const smtpSecure = typeof process.env.SMTP_SECURE !== 'undefined' ? process.env.SMTP_SECURE === 'true' : undefined;

  let transporter;
  let info;

  if (smtpHost && smtpPort && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: typeof smtpSecure === 'boolean' ? smtpSecure : smtpPort === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    info = await transporter.sendMail({
      from: from || `"Website Contact" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: text || '',
      html: html || '',
    });

    return { success: true };
  }

  // Fallback to EMAIL_USER / EMAIL_PASS (legacy Gmail example)
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    info = await transporter.sendMail({
      from: from || `"Website Contact" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: text || '',
      html: html || '',
    });

    return { success: true };
  }

  // Final fallback: Ethereal test account for development
  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });

  info = await transporter.sendMail({
    from: from || `"Website Contact" <${testAccount.user}>`,
    to,
    subject,
    text: text || '',
    html: html || '',
  });

  return { success: true, preview: nodemailer.getTestMessageUrl(info) };
}
