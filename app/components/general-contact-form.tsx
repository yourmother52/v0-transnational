"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { trackFormSubmission, trackFormSubmissionVercel } from "./analytics"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface FormState {
  success: boolean
  error: string | null
  message: string
}

interface GeneralContactFormProps {
  title?: string
  description?: string
  buttonText?: string
  successMessage?: string
  formType?: string
}

export function GeneralContactForm({
  title = "Get in Touch",
  description = "Have questions or want to learn more? Fill out the form below and we'll get back to you as soon as possible.",
  buttonText = "Send Message",
  successMessage = "Thank you for contacting us! We'll get back to you soon.",
  formType = "general_contact",
}: GeneralContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formState, setFormState] = useState<FormState>({
    success: false,
    error: null,
    message: "",
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(async () => {
      try {
        // Track form submission
        trackFormSubmission(formType)
        trackFormSubmissionVercel(formType)

        // For now, simulate a successful submission
        // In production, you would call your API endpoint
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setFormState({
          success: true,
          error: null,
          message: successMessage,
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } catch (error) {
        console.error("Form submission error:", error)
        setFormState({
          success: false,
          error: "Something went wrong. Please try again.",
          message: "",
        })
      }
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (formState.success) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
            <h3 className="text-lg font-semibold text-green-800">Success!</h3>
            <p className="text-green-700">{formState.message}</p>
            <Button onClick={() => setFormState({ success: false, error: null, message: "" })} variant="outline">
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {formState.error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <p className="text-red-800 text-sm">{formState.error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                aria-required="true"
                aria-describedby="firstName-error"
                className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                disabled={isPending}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                aria-required="true"
                aria-describedby="lastName-error"
                className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                disabled={isPending}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address{" "}
              <span className="text-red-500" aria-label="required">
                *
              </span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-describedby="email-error email-help"
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              disabled={isPending}
            />
            <div id="email-help" className="text-xs text-gray-500">
              We'll use this to respond to your inquiry
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number (Optional)
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              aria-describedby="phone-help"
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              disabled={isPending}
            />
            <div id="phone-help" className="text-xs text-gray-500">
              Optional - if you prefer a phone call
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message{" "}
              <span className="text-red-500" aria-label="required">
                *
              </span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us how we can help you..."
              rows={5}
              required
              aria-required="true"
              aria-describedby="message-help"
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              disabled={isPending}
            />
            <div id="message-help" className="text-xs text-gray-500">
              Please share your questions or comments
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              buttonText
            )}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            We respect your privacy and will only use your information to respond to your inquiry. We will never share
            your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
