
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export const runtime = 'nodejs'; 

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       // Your Gmail
      pass: process.env.EMAIL_PASS,       // App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    subject: 'New Newsletter Subscriber',
    text: `New subscriber: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
