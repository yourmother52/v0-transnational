import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "../components/breadcrumbs"

export const metadata: Metadata = {
  title: "Forms Complete",
  description:
    "Thank you for completing your forms with Transnational Health Corp. Please sign up for our secure patient portal to continue.",
  openGraph: {
    title: "Forms Complete | Transnational Health",
    description: "Thank you for completing your forms. Please sign up for our secure patient portal.",
    url: "https://transnationalhealth.org/form-complete",
  },
  alternates: {
    canonical: "https://transnationalhealth.org/form-complete",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function FormCompletePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Forms Complete", href: "/form-complete" },
        ]}
      />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-100 via-white to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col items-center space-y-8 text-center">
                {/* Success Icon */}
                <div className="rounded-full bg-green-100 p-6">
                  <CheckCircle className="h-16 w-16 text-green-600" aria-hidden="true" />
                </div>

                {/* Heading */}
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                    Thank You for Completing Your Forms!
                  </h1>
                  <p className="text-lg text-gray-600 md:text-xl max-w-2xl">
                    We've received your information and appreciate you taking the time to fill out your forms.
                  </p>
                </div>

                {/* Next Steps Card */}
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8 space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900">Next Step: Sign Up for Our Patient Portal</h2>
                    <p className="text-gray-600">
                      To complete your registration and access your healthcare information securely, please sign up for
                      our patient portal.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-blue-900">Patient Portal Benefits:</h3>
                      <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                        <li>Access your medical records securely</li>
                        <li>Communicate with your healthcare provider</li>
                        <li>View test results and treatment plans</li>
                        <li>Schedule appointments and manage prescriptions</li>
                      </ul>
                    </div>

                    <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                      <a
                        href="https://transnational.intakeq.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Sign Up for Patient Portal
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
                  <h3 className="font-semibold text-gray-900">What Happens Next?</h3>
                  <p className="text-sm text-gray-600">
                    Once you've signed up for the patient portal, our team will review your information and reach out to
                    you within 1-2 business days to discuss next steps in your care journey.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    Have questions? Contact us at{" "}
                    <a href="tel:+18444786337" className="text-blue-600 hover:text-blue-700 hover:underline">
                      844-HRTMEDS (844-478-6337)
                    </a>
                  </p>
                </div>
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
