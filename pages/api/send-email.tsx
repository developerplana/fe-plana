// pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, whatsapp, subject, message } = req.body;

  console.log("Preparing email...");

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    console.log("Sending email...");

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("Email sent.");

    return res.status(200).json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
}