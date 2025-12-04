import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "../components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "SMS Consent Verification | Transnational HRT",
  description: "Documentation of our SMS consent collection process for appointment notifications and reminders.",
  alternates: {
    canonical: "https://transnationalHRT.org/sms-consent",
    languages: {
      en: "https://transnationalHRT.org/sms-consent",
    },
  },
}

export const revalidate = 86400

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "SMS Consent Process", href: "/sms-consent" },
]

export default function SMSConsentPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-balance">SMS Consent Verification</h1>

        <p className="text-lg text-muted-foreground mb-8">
          This page documents how Transnational HRT obtains explicit consent from patients before sending text message
          notifications.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Medical Intake Form Process</CardTitle>
            <CardDescription>
              Located at{" "}
              <Link href="/book" className="text-primary hover:underline">
                transnationalHRT.org/book
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Explicit Opt-In Required
              </h3>
              <p className="text-muted-foreground mb-4">
                During the medical intake process, patients complete a client information form that includes an
                "Appointment Reminder" field. This field allows patients to explicitly choose how they wish to receive
                appointment notifications.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Available Notification Options:</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Text Message (SMS)</strong> - Patient opts in to receive appointment reminders via text
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Email</strong> - Patient opts in to receive appointment reminders via email
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Phone Call</strong> - Patient opts in to receive appointment reminders via phone call
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Opt-out</strong> - Patient chooses not to receive appointment reminders
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Required Information Collection
              </h3>
              <p className="text-muted-foreground">
                When a patient selects "Text Message (SMS)" as their preferred appointment reminder method, they must
                also provide their mobile phone number in a required field. This ensures we have accurate contact
                information for text message delivery.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">TCPA Compliance</h4>
              <p className="text-muted-foreground">
                Our SMS consent collection process complies with the Telephone Consumer Protection Act (TCPA). Patients
                must actively select "Text Message (SMS)" from a dropdown menu to receive text notifications. No text
                messages are sent without this explicit consent.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Purpose of Text Messages</h4>
              <p className="text-muted-foreground">
                Text messages are used solely for sending appointment reminders and healthcare-related notifications to
                patients who have opted in to this communication method.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Opt-Out Process</h4>
              <p className="text-muted-foreground">
                Patients can change their notification preferences at any time by contacting our office or updating
                their preferences through their patient portal.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This documentation page serves as verification of our SMS consent collection
            practices for compliance and auditing purposes.
          </p>
        </div>
      </div>
    </>
  )
}
