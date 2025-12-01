"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, CheckCircle, Phone, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContactForm } from "./components/contact-form"
import { trackButtonClick } from "./components/analytics"

function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* SEO-optimized structured content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://transnationalhealth.org/#webpage",
            url: "https://transnationalhealth.org",
            name: "Transnational Health - Groove is in the HRT!",
            description:
              "Providing accessible, safe, affirming hormone replacement therapy (HRT) services for trans, nonbinary, and gender divergent folx through licensed healthcare providers. Offering testosterone, estrogen, and spironolactone with heart-centered, queer-affirming care.",
            isPartOf: {
              "@id": "https://transnationalhealth.org/#website",
            },
            about: {
              "@id": "https://transnationalhealth.org/#organization",
            },
            mainEntity: {
              "@type": "MedicalOrganization",
              "@id": "https://transnationalhealth.org/#organization",
            },
          }),
        }}
      />

      <div className="flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-blue text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="flex-1">
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-blue-light via-white to-brand-red-light"
            aria-labelledby="hero-heading"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1
                    id="hero-heading"
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900"
                  >
                    <span className="text-brand-red">Groove is in the HRT!</span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                    Providing accessible, safe, affirming HRT by mail
                    <br />
                    with licensed healthcare providers.
                    <br />
                    HRT @ home starts here.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button
                    size="lg"
                    className="bg-brand-red hover:bg-brand-red-hover focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                    asChild
                  >
                    <Link href="/book">Book Now!</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 bg-transparent"
                    asChild
                  >
                    <Link href="#services">Learn About Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="services-heading">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 id="services-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    What We Do
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We provide comprehensive hormone replacement therapy services specifically designed for trans,
                    nonbinary, and gender divergent people, delivered through partnerships with licensed queer-affirming
                    healthcare providers.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <article className="border-blue-200">
                  <Card>
                    <CardHeader>
                      <Heart className="h-10 w-10 text-brand-blue mb-2" aria-hidden="true" />
                      <CardTitle className="text-xl">Hormone Replacement Therapy (HRT)</CardTitle>
                      <CardDescription>
                        Comprehensive HRT services tailored to your individual needs and goals.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Estrogen-based Regimens</h3>
                        <p className="text-sm text-gray-600">
                          Estrogen, spironolactone (anti-androgen), and complementary therapies.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Testosterone-based Regimens</h3>
                        <p className="text-sm text-gray-600">
                          Testosterone therapy and complementary treatments to support your goals including voice
                          changes, muscle development, and clitoral growth.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Customized Regimens</h3>
                        <p className="text-sm text-gray-600">
                          Work with your clinician to design a personalized regimen to support your unique goals and
                          health needs.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </article>

                <article className="border-blue-200">
                  <Card>
                    <CardHeader>
                      <Shield className="h-10 w-10 text-brand-blue mb-2" aria-hidden="true" />
                      <CardTitle className="text-xl">Licensed Clinical Care</CardTitle>
                      <CardDescription>
                        All services provided through partnerships with licensed healthcare professionals specializing
                        in transgender healthcare.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Medical Supervision</h3>
                        <p className="text-sm text-gray-600">
                          Regular monitoring and adjustment of hormone levels by qualified healthcare providers to
                          ensure safe and effective treatment following WPATH standards.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                        <p className="text-sm text-gray-600">
                          Continuous care coordination and support throughout your hormone therapy journey, with regular
                          check-ins and adjustments as needed.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </article>

                <article className="border-blue-200 lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <Users className="h-10 w-10 text-brand-blue mb-2" aria-hidden="true" />
                      <CardTitle className="text-xl">Comprehensive Care Approach</CardTitle>
                      <CardDescription>
                        We believe in treating the whole person, not just providing medication. Our holistic approach
                        ensures comprehensive transgender healthcare.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900">Initial Consultation</h3>
                          <p className="text-sm text-gray-600">
                            Comprehensive assessment of your health history, goals, and individual needs to develop a
                            personalized treatment plan.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900">Laboratory Monitoring</h3>
                          <p className="text-sm text-gray-600">
                            Regular blood work and health monitoring to ensure hormone levels are optimized and to watch
                            for any potential side effects.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900">Care Coordination</h3>
                          <p className="text-sm text-gray-600">
                            We work with your existing healthcare team to ensure comprehensive, coordinated care that
                            addresses all aspects of your health and wellbeing.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900">Educational Resources</h3>
                          <p className="text-sm text-gray-600">
                            Access to educational materials and resources to help you understand your treatment and make
                            informed decisions about your care.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              </div>
            </div>
          </section>

          <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" aria-labelledby="about-heading">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 id="about-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Why Choose Us
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We are committed to providing accessible, affirming healthcare services to the trans and gender
                    divergent community through our nonprofit mission and clinical partnerships.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                <article className="text-center">
                  <Card>
                    <CardHeader>
                      <CheckCircle className="h-12 w-12 text-brand-blue mx-auto mb-2" aria-hidden="true" />
                      <CardTitle>Nonprofit Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        As a 501(c)(3) nonprofit organization, our mission is to serve the community, not generate
                        profit. This means our focus is entirely on providing quality, affordable care.
                      </p>
                    </CardContent>
                  </Card>
                </article>

                <article className="text-center">
                  <Card>
                    <CardHeader>
                      <Shield className="h-12 w-12 text-brand-blue mx-auto mb-2" aria-hidden="true" />
                      <CardTitle>Licensed Providers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        All medical services are provided through partnerships with licensed healthcare professionals
                        who specialize in transgender healthcare and hormone therapy following evidence-based practices.
                      </p>
                    </CardContent>
                  </Card>
                </article>

                <article className="text-center">
                  <Card>
                    <CardHeader>
                      <Heart className="h-12 w-12 text-brand-blue mx-auto mb-2" aria-hidden="true" />
                      <CardTitle>Community Focused</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We understand the unique challenges faced by trans folx and the gender divergent community and
                        are committed to providing affirming, respectful, and accessible queer healthcare services with
                        cultural competency.
                      </p>
                    </CardContent>
                  </Card>
                </article>
              </div>
            </div>
          </section>

          <section id="partnerships" className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="partnerships-heading">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2
                    id="partnerships-heading"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900"
                  >
                    Our Commitment to Transparency
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    As a nonprofit organization, we believe in transparency and accountability. We are proud to share
                    our commitment to these values with the community we serve.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl py-12">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl">Candid Silver Transparency Seal 2025</CardTitle>
                    <CardDescription>
                      We have earned the Candid Silver Seal of Transparency, demonstrating our commitment to nonprofit
                      accountability and transparency.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center space-y-6">
                    <a
                      href="https://app.candid.org/profile/16349599/transnational-health-corp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded"
                      aria-label="View our Candid profile and transparency information"
                      onClick={() => trackButtonClick("Candid Seal", "partnerships")}
                    >
                      <Image
                        src="/candid-silver-2025-seal.jpg"
                        alt="Candid Silver Transparency Seal 2025 - Transnational Health Corp"
                        width={200}
                        height={200}
                        className="w-48 h-48"
                        loading="lazy"
                      />
                    </a>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        The Candid Seal of Transparency is a mark of distinction that demonstrates our commitment to
                        sharing clear and important information with the public. This includes our mission, programs,
                        and financial information.
                      </p>
                      <Button variant="outline" asChild className="mt-4 bg-transparent">
                        <a
                          href="https://app.candid.org/profile/16349599/transnational-health-corp"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackButtonClick("View Candid Profile", "partnerships")}
                        >
                          View Our Full Profile on Candid
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="contact" className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="contact-heading">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Contact Us
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have questions or want to learn more about our services? Fill out the form below and we'll get back
                    to you as soon as possible.
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <Phone className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                    <a
                      href="tel:+18444786337"
                      className="text-lg font-semibold text-brand-blue hover:text-brand-blue-hover hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
                      aria-label="Call 844-HRTMEDS"
                      onClick={() => trackButtonClick("Phone Footer", "footer")}
                    >
                      844-HRTMEDS
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-2xl py-12">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer
          className="flex flex-col gap-4 py-6 w-full shrink-0 px-4 md:px-6 border-t bg-gray-50"
          role="contentinfo"
        >
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
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-600" aria-hidden="true" />
                <a
                  href="tel:+18444786337"
                  className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-1 py-1"
                  aria-label="Call 844-HRTMEDS"
                  onClick={() => trackButtonClick("Phone Footer", "footer")}
                >
                  844-HRTMEDS
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/people/Transnational-Health/61569928829813/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded p-1"
                aria-label="Follow us on Facebook"
                onClick={() => trackButtonClick("Facebook", "footer")}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/transnationalhealth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-destructive transition-colors focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2 rounded p-1"
                aria-label="Follow us on Instagram"
                onClick={() => trackButtonClick("Instagram", "footer")}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://bsky.app/profile/transnationalhrt.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-blue-muted transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-muted focus:ring-offset-2 rounded p-1"
                aria-label="Follow us on Bluesky"
                onClick={() => trackButtonClick("Bluesky", "footer")}
              >
                <BlueskyIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav className="flex justify-center" role="navigation" aria-label="Footer navigation">
            <ul className="flex gap-4 sm:gap-6">
              <li>
                <a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=d9fa3e4b-2e14-407d-b5c3-a64fe2e8f201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-1 py-1"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=a007ab9b-b070-4ffb-8d93-3e91e6854ef0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-1 py-1"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=eae7430a-70bf-4a6e-91f2-a44bf123dd64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-1 py-1"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=2448e4b4-8b92-4fc1-9b71-183f813c1dcd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-1 py-1"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3867c807-36ed-4324-aa67-9efd33f5959d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-1 py-1"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3f08a9a2-6996-4382-9872-df135b50f88f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline underline-offset-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-1 py-1"
                >
                  Acceptable Use Policy
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}
