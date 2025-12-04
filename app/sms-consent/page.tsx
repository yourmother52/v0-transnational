import type { Metadata } from "next"
import Image from "next/image"
import { Breadcrumbs } from "../components/breadcrumbs"

export const metadata: Metadata = {
  title: "SMS Consent Process | Transnational HRT",
  description: "Documentation of our text message notification consent process for appointment reminders.",
  alternates: {
    canonical: "https://transnationalHRT.org/sms-consent",
    languages: {
      en: "https://transnationalHRT.org/sms-consent",
    },
  },
  openGraph: {
    title: "SMS Consent Process | Transnational HRT",
    description: "Documentation of our text message notification consent process for appointment reminders.",
    url: "https://transnationalHRT.org/sms-consent",
    siteName: "Transnational HRT",
    locale: "en_US",
    type: "website",
  },
}

export const revalidate = 86400 // 24 hours

export default function SMSConsentPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Breadcrumbs />

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">SMS Consent Process</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
              Transnational HRT obtains explicit consent from all users before sending text message (SMS) notifications.
              This page documents our consent collection process for appointment reminders and notifications.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Consent Collection Process</h2>
            <p className="text-lg leading-relaxed mb-6">
              During the medical intake process at{" "}
              <a
                href="https://www.transnationalhrt.org/book"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                transnationalhrt.org/book
              </a>
              , users are presented with a "Client Information" form that includes an "Appointment Reminder" field. This
              field allows users to explicitly choose how they would like to receive appointment notifications.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Notification Options</h3>
              <p className="mb-4">Users can select from the following options:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Email</strong> - Receive appointment reminders via email
                </li>
                <li>
                  <strong>Text Message (SMS)</strong> - Receive appointment reminders via text message
                </li>
                <li>
                  <strong>Phone Call</strong> - Receive appointment reminders via phone call
                </li>
                <li>
                  <strong>Opt-out</strong> - Do not receive appointment reminders
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Users who select "Text Message (SMS)" are providing explicit consent to receive text message notifications
              from Transnational HRT regarding their appointments and related healthcare services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Visual Documentation</h2>
            <p className="text-lg leading-relaxed mb-6">
              The following screenshots demonstrate the consent collection process in our medical intake form:
            </p>

            <div className="space-y-8">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/screenshot-202025-12-04-20at-2000.png"
                  alt="Client Information form showing Appointment Reminder field set to Text Message (SMS)"
                  width={1400}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="p-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground">
                    <strong>Figure 1:</strong> Client Information form with "Appointment Reminder" field showing "Text
                    Message (SMS)" selected
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/screenshot-202025-12-04-20at-2000.png"
                  alt="Client Information form with Appointment Reminder dropdown expanded showing all options: Email, Text Message (SMS), Phone Call, and Opt-out"
                  width={1400}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="p-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground">
                    <strong>Figure 2:</strong> Expanded "Appointment Reminder" dropdown displaying all available
                    notification options
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Points</h2>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    <strong>Explicit Opt-In:</strong> Users must actively select "Text Message (SMS)" to receive text
                    notifications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    <strong>Multiple Options:</strong> Users are presented with multiple notification methods and can
                    choose their preferred method
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    <strong>Opt-Out Available:</strong> Users can choose to opt-out of all appointment reminder
                    notifications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    <strong>Required Mobile Number:</strong> A mobile phone number is required when selecting SMS
                    notifications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    <strong>Purpose Disclosed:</strong> Users are clearly informed that the selection is for appointment
                    reminder notifications
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
            <p className="text-lg leading-relaxed">
              This consent collection process is designed to comply with applicable regulations governing text message
              communications, including the Telephone Consumer Protection Act (TCPA). Users provide prior express
              consent before receiving any text message notifications from Transnational HRT.
            </p>
          </section>

          <section className="bg-muted/30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p className="text-lg leading-relaxed mb-4">
              If you have questions about our SMS consent process or wish to update your notification preferences,
              please contact us at{" "}
              <a href="mailto:hello@transnationalHRT.org" className="text-primary hover:underline">
                hello@transnationalHRT.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
