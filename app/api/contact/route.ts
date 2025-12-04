import { type NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Basic validation
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        {
          success: false,
          error: "First name, last name, and email are required",
        },
        { status: 400 },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address",
        },
        { status: 400 },
      )
    }

    const msg = {
      to: "hello@transnationalHRT.org",
      from: process.env.SENDGRID_FROM_EMAIL || "contact@transnationalHRT.org",
      replyTo: body.email,
      subject: `Contact Form Submission from ${body.firstName} ${body.lastName}`,
      text: `
Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}
Message: ${body.message || "No message provided"}

Submitted: ${new Date().toISOString()}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message || "No message provided"}</p>
        <hr>
        <p><small>Submitted: ${new Date().toISOString()}</small></p>
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your interest! We'll keep you updated.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 },
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
