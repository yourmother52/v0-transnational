import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { GeneralContactForm } from "../components/general-contact-form"
import { Breadcrumbs } from "../components/breadcrumbs"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Transnational Health Corp. We're here to answer your questions about our HRT services and help you on your healthcare journey.",
  keywords: [
    "contact transgender healthcare",
    "HRT questions",
    "transgender health contact",
    "hormone therapy consultation",
    "trans healthcare support",
    "HRT coordinator contact",
    "transgender telemedicine contact",
    "gender affirming care questions",
    "HRT appointment scheduling",
    "transgender healthcare inquiry",
    "hormone therapy information",
    "trans health services contact",
    "gender diverse healthcare contact",
    "HRT consultation request",
    "transgender healthcare help",
  ],
  openGraph: {
    title: "Contact Us | Transnational Health",
    description:
      "Get in touch with Transnational Health Corp. We're here to answer your questions about our HRT services.",
    url: "https://transnationalhealth.org/contact",
  },
  alternates: {
    canonical: "https://transnationalhealth.org/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-white to-red-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Have questions about our services? Want to learn more about HRT? We're here to help.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                  <p className="text-gray-600 mb-6">
                    Whether you have questions about our services, want to learn more about HRT, or need assistance,
                    we're here to help. Reach out to us using any of the methods below.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a
                        href="tel:+18444786337"
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                        aria-label="Call 844-HRTMEDS"
                      >
                        844-HRTMEDS (844-478-6337)
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Voicemail line - we'll return your message</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">Use the contact form to send us a message</p>
                      <p className="text-sm text-gray-600 mt-1">We typically respond within 1-2 business days</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-sm text-gray-600">
                        <strong>States we serve:</strong> Alabama, Arkansas, Idaho, Indiana, Louisiana, Maryland,
                        Missouri, Montana, North Dakota, Oklahoma, South Dakota, Washington DC, and West Virginia
                      </p>
                      <p className="text-sm text-gray-600 mt-1">All services provided through telemedicine</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Launching November 30, 2025</h3>
                  <p className="text-sm text-blue-800">
                    We're preparing to launch our services on November 30, 2025. Contact us now if you have any
                    questions or want to learn more about our HRT services.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <GeneralContactForm
                  title="Send Us a Message"
                  description="Fill out the form below and we'll get back to you as soon as possible."
                  buttonText="Send Message"
                  successMessage="Thank you for contacting us! We'll get back to you soon."
                  formType="general_contact"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 py-6 w-full shrink-0 px-4 md:px-6 border-t bg-gray-50" role="contentinfo">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Transnational Health Corp logo"
                width={36}
                height={36}
                className="h-9 w-auto"
                loading="lazy"
              />
              <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} Transnational Health Corp. A 501(c)(3) nonprofit corporation.
              </p>
            </div>
          </div>
        </div>

        <nav className="flex justify-center" role="navigation" aria-label="Footer navigation">
          <ul className="flex gap-4 sm:gap-6">
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=d9fa3e4b-2e14-407d-b5c3-a64fe2e8f201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-1 py-1"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=a007ab9b-b070-4ffb-8d93-3e91e6854ef0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-1 py-1"
              >
                Return Policy
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=eae7430a-70bf-4a6e-91f2-a44bf123dd64"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-1 py-1"
              >
                Shipping Policy
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=2448e4b4-8b92-4fc1-9b71-183f813c1dcd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-1 py-1"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3867c807-36ed-4324-aa67-9efd33f5959d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-1 py-1"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3f08a9a2-6996-4382-9872-df135b50f88f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-1 py-1"
              >
                Acceptable Use Policy
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
