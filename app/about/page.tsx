import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Shield, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavigationLinks } from "../components/navigation-links"
import { Breadcrumbs } from "../components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Transnational Health",
  description:
    "Learn about Transnational Health Corp, a Maryland 501(c)(3) nonprofit organization committed to providing accessible, affirming hormone replacement therapy services for trans and gender divergent people.",
  openGraph: {
    title: "About Us - Transnational Health",
    description:
      "Learn about our nonprofit mission to provide accessible, affirming HRT services for trans and gender divergent people.",
    url: "https://transnationalhealth.org/about",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center" aria-label="Transnational Health - Home">
          <Image
            src="/logo.jpg"
            alt="Transnational Health Corp logo featuring red United States silhouette with blue text"
            width={120}
            height={64}
            priority
            className="h-16 w-auto"
            quality={90}
          />
        </Link>
        <NavigationLinks />
      </header>

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <main id="main-content" className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  About <span className="text-red-500">Transnational Health</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  A Maryland 501(c)(3) nonprofit organization dedicated to providing accessible, safe, affirming hormone
                  replacement therapy services for trans and gender divergent people.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-red-500 to-blue-600"
          aria-labelledby="mission-statement-heading"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-4xl">
                <h2
                  id="mission-statement-heading"
                  className="text-2xl font-semibold tracking-tight text-white/90 uppercase"
                >
                  Our Mission
                </h2>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
                  To provide trans and gender divergent people with healthcare in areas with access difficulties
                </p>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty">
                  We believe everyone deserves access to quality, affirming healthcare regardless of where they live.
                  Through our at-home service model and nonprofit structure, we're breaking down barriers and bringing
                  essential hormone replacement therapy to communities that need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="mission-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="mission-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  How We Serve
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are committed to providing accessible, affirming healthcare services to the trans and gender
                  divergent community through our nonprofit mission and clinical partnerships.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle>Nonprofit Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    As a Maryland 501(c)(3) nonprofit organization, our mission is to serve the community, not generate
                    profit. This means our focus is entirely on providing quality, affordable care.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle>Licensed Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All medical services are provided through partnerships with licensed healthcare professionals who
                    specialize in trans and gender divergent healthcare and hormone therapy following evidence-based
                    practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle>Community Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We understand the unique challenges faced by the trans and gender divergent community and are
                    committed to providing affirming, respectful, and accessible healthcare services with cultural
                    competency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" aria-labelledby="values-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="values-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Our Values
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These core values guide everything we do and shape how we serve our community.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe that quality healthcare should be accessible to everyone, regardless of location or
                    financial circumstances. Our at-home service model and nonprofit structure help us remove barriers
                    to care.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Affirmation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We provide gender-affirming care in a respectful, supportive environment. Every person deserves to
                    be seen, heard, and affirmed in their identity and healthcare journey.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We partner with licensed healthcare professionals who follow WPATH standards and evidence-based
                    practices to ensure the highest quality of care for our community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    As a nonprofit organization, we are committed to transparency in our operations, finances, and
                    practices. We believe accountability to our community is essential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="transparency-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="transparency-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Our Commitment to Transparency
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a nonprofit organization, we believe in transparency and accountability. We are proud to share our
                  commitment to these values with the community we serve.
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
                    className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                    aria-label="View our Candid profile and transparency information"
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
                      sharing clear and important information with the public. This includes our mission, programs, and
                      financial information.
                    </p>
                    <Button variant="outline" asChild className="mt-4 bg-transparent">
                      <a
                        href="https://app.candid.org/profile/16349599/transnational-health-corp"
                        target="_blank"
                        rel="noopener noreferrer"
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our organization or services? We'd love to hear from you.
                </p>
                <div className="flex items-center justify-center gap-2 pt-4">
                  <Phone className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  <a
                    href="tel:+18444786337"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
                    aria-label="Call 844-HRTMEDS"
                  >
                    844-HRTMEDS
                  </a>
                </div>
              </div>
              <div className="space-x-4 pt-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
                  <Link href="/#contact">Contact Us</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/partnerships">View Our Partners</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Transnational Health Corp. A Maryland 501(c)(3) nonprofit corporation.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Home
          </Link>
          <Link href="/partnerships" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Partners and Resources
          </Link>
          <Link href="/#contact" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
