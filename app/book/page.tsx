"use client"

import { Breadcrumbs } from "../components/breadcrumbs"
import Script from "next/script"

export default function BookingPage() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Book Appointment", href: "/book" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="intakeq-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (c) {
              window.intakeq="68ab6cbb8104bbc3616cfb0b";
              window.intakeqServiceId="05015bfe-f8d1-43e5-b319-f0e449e28cbb";
              var i = c.createElement("script");
              i.type = "text/javascript";
              i.async = true;
              i.src = "https://intakeq.com/js/widget.min.js?1";
              document.head.appendChild(i);
            })(document);
          `,
        }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <main id="main-content" className="flex-1">
        <div className="w-full bg-gradient-to-br from-blue-100 via-white to-red-100 py-8">
          <div className="container px-4 md:px-6">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Book Your Intake Call
              </h1>
              <p className="mt-2 text-gray-600 md:text-xl">
                Schedule your initial intake call with our HRT coordinator to get started with care.
              </p>
            </div>
          </div>
        </div>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center">
              <div id="intakeq" style={{ maxWidth: "720px", width: "100%" }}></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 py-6 w-full shrink-0 px-4 md:px-6 border-t bg-gray-50" role="contentinfo">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Transnational Health Corp. A 501(c)(3) nonprofit corporation.
            </p>
          </div>
        </div>

        <nav className="flex justify-center" role="navigation" aria-label="Footer navigation">
          <ul className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=d9fa3e4b-2e14-407d-b5c3-a64fe2e8f201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=a007ab9b-b070-4ffb-8d93-3e91e6854ef0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Return Policy
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=eae7430a-70bf-4a6e-91f2-a44bf123dd64"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Shipping Policy
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=2448e4b4-8b92-4fc1-9b71-183f813c1dcd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3867c807-36ed-4324-aa67-9efd33f5959d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3f08a9a2-6996-4382-9872-df135b50f88f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
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
