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

export function ContactForm() {
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
        trackFormSubmission("contact_form")
        trackFormSubmissionVercel("contact_form")

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Failed to submit form")
        }

        setFormState({
          success: true,
          error: null,
          message: data.message || "Thank you! We'll keep you updated.",
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
          error: error instanceof Error ? error.message : "Something went wrong. Please try again.",
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
            <CheckCircle className="h-12 w-12 text-success mx-auto" />
            <h3 className="text-lg font-semibold text-success-dark">Success!</h3>
            <p className="text-foreground">{formState.message}</p>
            <Button onClick={() => setFormState({ success: false, error: null, message: "" })} variant="outline">
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Stay Connected</CardTitle>
        <CardDescription className="text-center">
          Fill out the form below and we'll get in touch with you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formState.error && (
          <div className="mb-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <p className="text-destructive text-sm">{formState.error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name{" "}
                <span className="text-destructive" aria-label="required">
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
                className="focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                disabled={isPending}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name{" "}
                <span className="text-destructive" aria-label="required">
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
                className="focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                disabled={isPending}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address{" "}
              <span className="text-destructive" aria-label="required">
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
              className="focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              disabled={isPending}
            />
            <div id="email-help" className="text-xs text-gray-500">
              We will only use your information to keep you updated about Transnational Health news.
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
              className="focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              disabled={isPending}
            />
            <div id="phone-help" className="text-xs text-gray-500">
              Optional - for urgent updates only
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Questions or Comments (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Let us know if you have any questions about our services or would like to share anything else..."
              rows={4}
              aria-describedby="message-help"
              className="focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              disabled={isPending}
            />
            <div id="message-help" className="text-xs text-gray-500">
              Optional - share any questions or comments
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-brand-red hover:bg-brand-red-hover focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Contact Us"
            )}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            We respect your privacy and will only use your information to keep you updated about Transnational Health
            news. We will never share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
