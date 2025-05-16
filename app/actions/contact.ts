"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract data from form
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const result = contactSchema.safeParse(data)

    if (!result.success) {
      return {
        success: false,
        message: result.error.errors[0].message,
      }
    }

    // Log the environment variables (without sensitive info)
    console.log("SMTP Configuration:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER ? "Set" : "Not set",
      pass: process.env.SMTP_PASSWORD ? "Set" : "Not set",
    })

    // Create SMTP transporter with correct Gmail configuration
    const transporterConfig = {
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // false for TLS - as opposed to SSL
      auth: {
        user: "marcletty@gmail.com",
        pass: "Clettycletty12!!",

      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    }

    const transporter = nodemailer.createTransport(transporterConfig)

    // Prepare email content
    const adminEmailContent = {
      from: `"Labophar Website" <${process.env.SMTP_USER}>`,
      to: "marcletty12@gmail.com", // Primary recipient
      cc: "info@labophar.rw", // Add a CC for redundancy
      replyTo: data.email, // Set reply-to as the sender's email
      subject: `New Contact Form: ${data.subject}`,
      text: `
        New contact form submission:
        
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || "Not provided"}
        Subject: ${data.subject}
        
        Message:
        ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #62DCF0; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px;">${data.message.replace(/\n/g, "<br>")}</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>© ${new Date().getFullYear()} Labophar Ltd. All rights reserved.</p>
          </div>
        </div>
      `,
      priority: "high" as const,
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "High",
      },
    }

    // Send notification email to admin
    try {
      console.log("Attempting to send admin notification email...")
      const info = await transporter.sendMail(adminEmailContent)
      console.log("Admin notification email sent:", info.messageId)

      // Send confirmation email to the user
      const userEmailContent = {
        from: `"Labophar Ltd" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: "Thank you for contacting Labophar",
        text: `
          Dear ${data.name},
          
          Thank you for contacting Labophar Ltd. We have received your message and will get back to you as soon as possible.
          
          Your message details:
          Subject: ${data.subject}
          
          Best regards,
          The Labophar Team
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #62DCF0; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Thank You for Contacting Us</h1>
            </div>
            <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
              <p>Dear ${data.name},</p>
              <p>Thank you for contacting Labophar Ltd. We have received your message and will get back to you as soon as possible.</p>
              <p><strong>Your message details:</strong><br>
              Subject: ${data.subject}</p>
              <p>Best regards,<br>The Labophar Team</p>
            </div>
            <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
              <p>© ${new Date().getFullYear()} Labophar Ltd. All rights reserved.</p>
            </div>
          </div>
        `,
      }

      await transporter.sendMail(userEmailContent)
      console.log("User confirmation email sent")

      return {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError)

      // Create a more detailed error message for debugging
      const errorDetails = emailError instanceof Error ? emailError.message : String(emailError)

      // Return a more specific error message
      return {
        success: false,
        message:
          "There was an issue sending your message. Please try again or contact us directly at it@depotkalisimbi.org. Error: " +
          errorDetails,
      }
    }
  } catch (error) {
    console.error("Contact form submission error:", error)

    // Create a more detailed error message for debugging
    const errorDetails = error instanceof Error ? error.message : String(error)

    return {
      success: false,
      message:
        "An error occurred. Please try again later or contact us directly at it@depotkalisimbi.org. Error: " +
        errorDetails,
    }
  }
}
