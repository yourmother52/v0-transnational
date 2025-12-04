import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "SMS Consent Verification | Transnational HRT",
  description: "Documentation of our SMS consent collection process for appointment notifications.",
  alternates: {
    canonical: "https://transnationalHRT.org/sms-consent-verification",
    languages: {
      en: "https://transnationalHRT.org/sms-consent-verification",
    },
  },
  openGraph: {
    title: "SMS Consent Verification | Transnational HRT",
    description: "Documentation of our SMS consent collection process for appointment notifications.",
    url: "https://transnationalHRT.org/sms-consent-verification",
    siteName: "Transnational HRT",
    locale: "en_US",
    type: "website",
  },
}

export const revalidate = 86400 // 24 hours

export default function SMSConsentVerificationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-700 text-sm">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">SMS Consent Verification</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Purpose of This Page</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              This page documents our SMS consent collection process for verification purposes. We obtain explicit
              consent from all users before sending text message notifications, in compliance with TCPA (Telephone
              Consumer Protection Act) regulations.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Medical Intake Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              During the medical intake process at{" "}
              <Link href="/book" className="text-purple-600 hover:underline">
                https://www.transnationalhrt.org/book
              </Link>
              , users complete a Client Information form that includes an "Appointment Reminder" field.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Appointment Reminder Options:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Text Message (SMS)</strong> - User explicitly opts in to receive SMS notifications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Email</strong> - User chooses email-only notifications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phone Call</strong> - User chooses phone call reminders
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Opt-out</strong> - User chooses to receive no appointment reminders
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Fields</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">The Client Information form collects the following information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Name</strong> (required) - First and Last Name
              </li>
              <li>
                <strong>Email Address</strong> (required)
              </li>
              <li>
                <strong>Date of Birth</strong> (required)
              </li>
              <li>
                <strong>Mobile Phone</strong> (required)
              </li>
              <li>
                <strong>Appointment Reminder</strong> (required) - Dropdown with four options
              </li>
              <li>
                <strong>Note</strong> (optional)
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Explicit Consent</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Users must actively select "Text Message (SMS)" from a dropdown menu to receive SMS notifications. This is
              an explicit opt-in process, not a pre-checked box or default setting.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <p className="text-blue-900">
                <strong>Important:</strong> SMS messages are only sent to users who have explicitly selected "Text
                Message (SMS)" as their preferred appointment reminder method. No messages are sent without this
                explicit consent.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Our SMS consent process complies with TCPA regulations by:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>Requiring explicit opt-in before sending any SMS messages</li>
              <li>Providing clear alternative notification methods (email, phone call)</li>
              <li>Allowing users to opt out of all notifications if desired</li>
              <li>Only using SMS for appointment notifications, not marketing</li>
              <li>Collecting mobile phone numbers explicitly for this purpose</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
