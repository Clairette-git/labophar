"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Extract email from form data
    const email = formData.get("email") as string

    // Validate email
    const result = emailSchema.safeParse({ email })

    if (!result.success) {
      return {
        success: false,
        message: result.error.errors[0].message,
      }
    }

    // In a real application, you would store this email in a database
    // For example: await db.insert({ email, subscribed_at: new Date() }).into('subscribers')

    // Send confirmation email to the subscriber
    try {
      // Create a test account using Ethereal (for development purposes)
      // In production, you would use your actual SMTP credentials
      // const testAccount = await nodemailer.createTestAccount()

      // Create a transporter
      const transporter = nodemailer.createTransport({
        // For development/testing (Ethereal)
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false,
        // auth: {
        //   user: testAccount.user,
        //   pass: testAccount.pass,
        // },

        // For production (replace with your actual SMTP details)
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: Number.parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER || "user@example.com",
          pass: process.env.SMTP_PASSWORD || "password",
        },
      })

      // Send confirmation email
      const info = await transporter.sendMail({
        from: '"Labophar Ltd" <newsletter@labophar.rw>',
        to: email,
        subject: "Welcome to Labophar Newsletter",
        text: `Thank you for subscribing to the Labophar newsletter! You'll now receive updates about our products and services.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0f766e; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Welcome to Labophar Newsletter</h1>
            </div>
            <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
              <p>Dear Subscriber,</p>
              <p>Thank you for subscribing to the Labophar newsletter!</p>
              <p>You'll now receive updates about our products, services, and company news.</p>
              <p>If you have any questions, please don't hesitate to contact us.</p>
              <p>Best regards,<br>The Labophar Team</p>
            </div>
            <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
              <p>© ${new Date().getFullYear()} Labophar Ltd. All rights reserved.</p>
              <p>If you wish to unsubscribe, <a href="#" style="color: #0f766e;">click here</a>.</p>
            </div>
          </div>
        `,
      })

      console.log("Confirmation email sent:", info.messageId)

      // For Ethereal test accounts, you can view the sent email
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError)
      // Note: We don't return an error to the user here, as the subscription itself was successful
    }

    // Return success response
    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
