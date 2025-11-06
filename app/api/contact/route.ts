import { type NextRequest, NextResponse } from "next/server"

// Simple contact form handler without external dependencies
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

    // Log the submission (in production, you'd save to database or send email)
    console.log("Contact form submission:", {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone || "Not provided",
      message: body.message || "No message",
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your interest! We're launching November 30, 2025 and will keep you updated.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 },
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
