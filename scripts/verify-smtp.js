/**
 * Simple script to verify SMTP credentials using Nodemailer.
 * Usage:
 *   EMAIL_USER=you@gmail.com EMAIL_PASS=your_app_password node scripts/verify-smtp.js
 */

import nodemailer from 'nodemailer';

(async () => {
  // Support generic SMTP env vars for Bluehost / cPanel hosts
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const smtpSecure = typeof process.env.SMTP_SECURE !== 'undefined' ? process.env.SMTP_SECURE === 'true' : undefined;
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

  if (!smtpUser || !smtpPass) {
    console.error('SMTP_USER (or EMAIL_USER) and SMTP_PASS (or EMAIL_PASS) must be set.');
    process.exit(2);
  }

  try {
    let transporter;

    if (smtpHost && smtpPort) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: typeof smtpSecure === 'boolean' ? smtpSecure : smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });
    } else {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: smtpUser, pass: smtpPass },
      });
    }

    await transporter.verify();
    console.log('SMTP credentials verified successfully.');
  } catch (err) {
    console.error('SMTP verify failed. Error follows:');
    console.error(err);
    process.exit(3);
  }
})();
