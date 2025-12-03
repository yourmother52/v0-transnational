"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Heart, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trackButtonClick, trackButtonClickVercel } from "../components/analytics"
import { Breadcrumbs } from "../components/breadcrumbs"

export default function ServicesByStatePage() {
  const states = [
    {
      name: "Alabama",
      slug: "alabama",
      description:
        "Accessible hormone replacement therapy services for trans and gender divergent people in Alabama. We serve Birmingham, Montgomery, Mobile, Huntsville, and communities throughout Alabama with safe, affirming HRT care.",
      keywords: "HRT Alabama, hormone therapy Alabama, transgender healthcare Alabama, HRT Birmingham",
    },
    {
      name: "Arkansas",
      slug: "arkansas",
      description:
        "Comprehensive HRT services available throughout Arkansas via telehealth. Our licensed providers offer hormone replacement therapy to trans and gender divergent people in Little Rock, Fort Smith, Fayetteville, Springdale, and all Arkansas communities.",
      keywords: "HRT Arkansas, hormone therapy Arkansas, transgender healthcare Arkansas, HRT Little Rock",
    },
    {
      name: "Florida",
      slug: "florida",
      description:
        "Safe, affirming hormone replacement therapy for trans and gender divergent people across Florida. We serve Miami, Tampa, Orlando, Jacksonville, and all Florida communities through our secure telehealth platform.",
      keywords: "HRT Florida, hormone therapy Florida, transgender healthcare Florida, HRT Miami",
    },
    {
      name: "Idaho",
      slug: "idaho",
      description:
        "Access safe, affirming HRT services in Idaho through our telehealth platform. We provide hormone replacement therapy for trans and gender divergent people in Boise, Meridian, Nampa, Idaho Falls, and throughout Idaho.",
      keywords: "HRT Idaho, hormone therapy Idaho, transgender healthcare Idaho, HRT Boise",
    },
    {
      name: "Indiana",
      slug: "indiana",
      description:
        "Professional hormone replacement therapy services for trans and gender divergent people across Indiana. We serve Indianapolis, Fort Wayne, Evansville, South Bend, and all Indiana communities with compassionate HRT care.",
      keywords: "HRT Indiana, hormone therapy Indiana, transgender healthcare Indiana, HRT Indianapolis",
    },
    {
      name: "Iowa",
      slug: "iowa",
      description:
        "Comprehensive hormone replacement therapy services for trans and gender divergent people throughout Iowa. We serve Des Moines, Cedar Rapids, Davenport, Sioux City, and all Iowa communities with affirming HRT care.",
      keywords: "HRT Iowa, hormone therapy Iowa, transgender healthcare Iowa, HRT Des Moines",
    },
    {
      name: "Louisiana",
      slug: "louisiana",
      description:
        "Access compassionate HRT services in Louisiana through our telemedicine platform. We provide hormone replacement therapy for trans and gender divergent people across Louisiana including New Orleans, Baton Rouge, Shreveport, and Lafayette.",
      keywords: "HRT Louisiana, hormone therapy Louisiana, transgender healthcare Louisiana, HRT New Orleans",
    },
    {
      name: "Maryland",
      slug: "maryland",
      description:
        "Comprehensive hormone replacement therapy services for trans and gender divergent people throughout Maryland. We serve Baltimore, Annapolis, Silver Spring, Rockville, Frederick, and all Maryland communities with safe, affirming HRT care.",
      keywords: "HRT Maryland, hormone therapy Maryland, transgender healthcare Maryland, HRT Baltimore, HRT Annapolis",
    },
    {
      name: "Missouri",
      slug: "missouri",
      description:
        "Accessible HRT services available throughout Missouri via telemedicine. We provide hormone replacement therapy to trans and gender divergent people in Kansas City, St. Louis, Springfield, Columbia, and across Missouri.",
      keywords:
        "HRT Missouri, hormone therapy Missouri, transgender healthcare Missouri, HRT Kansas City, HRT St. Louis",
    },
    {
      name: "Montana",
      slug: "montana",
      description:
        "Hormone replacement therapy services for trans and gender divergent people across Montana. Our licensed providers serve Billings, Missoula, Great Falls, Bozeman, and all Montana communities with expert HRT care.",
      keywords: "HRT Montana, hormone therapy Montana, transgender healthcare Montana, HRT Billings, HRT Missoula",
    },
    {
      name: "North Dakota",
      slug: "north-dakota",
      description:
        "Providing HRT services to trans and gender divergent people across North Dakota through our telemedicine platform. Access hormone replacement therapy in Fargo, Bismarck, Grand Forks, Minot, and throughout North Dakota.",
      keywords: "HRT North Dakota, hormone therapy North Dakota, transgender healthcare North Dakota, HRT Fargo",
    },
    {
      name: "Oklahoma",
      slug: "oklahoma",
      description:
        "Accessible HRT services available throughout Oklahoma via telemedicine. We provide hormone replacement therapy to trans and gender divergent people in Oklahoma City, Tulsa, Norman, Broken Arrow, and across Oklahoma.",
      keywords: "HRT Oklahoma, hormone therapy Oklahoma, transgender healthcare Oklahoma, HRT Oklahoma City, HRT Tulsa",
    },
    {
      name: "South Dakota",
      slug: "south-dakota",
      description:
        "Comprehensive hormone replacement therapy services available throughout South Dakota. Our licensed healthcare providers offer HRT to trans and gender divergent people in Sioux Falls, Rapid City, Aberdeen, Brookings, and all South Dakota cities.",
      keywords: "HRT South Dakota, hormone therapy South Dakota, transgender healthcare South Dakota, HRT Sioux Falls",
    },
    {
      name: "Washington, DC",
      slug: "washington-dc",
      description:
        "Professional hormone replacement therapy services for trans and gender divergent people in Washington, DC. We serve all neighborhoods and communities in the District of Columbia with compassionate, affirming HRT care through telemedicine.",
      keywords: "HRT Washington DC, hormone therapy DC, transgender healthcare Washington, HRT District of Columbia",
    },
    {
      name: "West Virginia",
      slug: "west-virginia",
      description:
        "Access safe, affirming HRT services in West Virginia through our telehealth platform. We provide hormone replacement therapy for trans and gender divergent people in Charleston, Huntington, Morgantown, Parkersburg, and throughout West Virginia.",
      keywords:
        "HRT West Virginia, hormone therapy West Virginia, transgender healthcare West Virginia, HRT Charleston",
    },
  ]

  return (
    <>
      {/* SEO-optimized structured data for state services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "HRT Services by State - Hormone Replacement Therapy",
            description:
              "Comprehensive hormone replacement therapy (HRT) services for trans and gender divergent people across Alabama, Arkansas, Florida, Idaho, Indiana, Iowa, Louisiana, Maryland, Missouri, Montana, North Dakota, Oklahoma, South Dakota, Washington DC, and West Virginia.",
            specialty: "Endocrinology",
            about: {
              "@type": "MedicalTherapy",
              name: "Hormone Replacement Therapy",
              alternateName: "HRT",
            },
            provider: {
              "@type": "MedicalOrganization",
              name: "Transnational Health Corp",
              telephone: "+1-844-478-6337",
            },
            areaServed: [
              { "@type": "State", name: "Alabama" },
              { "@type": "State", name: "Arkansas" },
              { "@type": "State", name: "Florida" },
              { "@type": "State", name: "Idaho" },
              { "@type": "State", name: "Indiana" },
              { "@type": "State", name: "Iowa" },
              { "@type": "State", name: "Louisiana" },
              { "@type": "State", name: "Maryland" },
              { "@type": "State", name: "Missouri" },
              { "@type": "State", name: "Montana" },
              { "@type": "State", name: "North Dakota" },
              { "@type": "State", name: "Oklahoma" },
              { "@type": "State", name: "South Dakota" },
              { "@type": "City", name: "Washington, DC" },
              { "@type": "State", name: "West Virginia" },
            ],
          }),
        }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "HRT Services by State", href: "/services-by-state" },
          ]}
        />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-white to-red-100">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                    <span className="text-red-500">HRT Services Across Multiple States</span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl leading-relaxed">
                    Compassionate hormone replacement therapy for trans and gender divergent people in Alabama,
                    Arkansas, Florida, Idaho, Indiana, Iowa, Louisiana, Maryland, Missouri, Montana, North Dakota,
                    Oklahoma, South Dakota, Washington DC, and West Virginia. Licensed healthcare providers delivering
                    safe, affirming HRT through telemedicine.
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <a
                      href="tel:+18444786337"
                      className="text-lg font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                      onClick={() => {
                        trackButtonClick("Phone Number", "hero")
                        trackButtonClickVercel("Phone Number", "hero")
                      }}
                    >
                      844-HRTMEDS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* State-by-State Services */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Hormone Replacement Therapy by State
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl leading-relaxed">
                    We provide comprehensive HRT services including estrogen therapy, testosterone therapy, and
                    customized hormone regimens for trans and gender divergent people across the following states.
                  </p>
                </div>
              </div>

              <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
                {states.map((state) => (
                  <Card key={state.slug} className="border-blue-200">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-6 w-6 text-blue-600" />
                        <CardTitle className="text-2xl">{state.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{state.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Heart className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Estrogen & Testosterone HRT</h3>
                            <p className="text-sm text-gray-600">
                              Comprehensive hormone therapy including estrogen-based regimens, testosterone-based
                              regimens, and customized treatment plans.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-gray-900">Licensed Medical Providers</h3>
                            <p className="text-sm text-gray-600">
                              All services provided through partnerships with licensed healthcare professionals
                              specializing in transgender healthcare and hormone therapy.
                            </p>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button className="w-full bg-red-500 hover:bg-red-600" asChild>
                            <Link
                              href="/#contact"
                              onClick={() => {
                                trackButtonClick(`Get Started - ${state.name}`, "state-card")
                                trackButtonClickVercel(`Get Started - ${state.name}`, "state-card")
                              }}
                            >
                              Get Started in {state.name}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-8 text-center">
                  Comprehensive HRT Services
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Estrogen-Based HRT</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-gray-600">
                        Estrogen hormone therapy with anti-androgens and complementary treatments. Personalized dosing
                        and monitoring for optimal results.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Estradiol (oral, transdermal, injectable)</li>
                        <li>Anti-androgen medications</li>
                        <li>Regular hormone level monitoring</li>
                        <li>Customized treatment plans</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Testosterone-Based HRT</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-gray-600">
                        Testosterone hormone therapy with complementary treatments. Evidence-based protocols with
                        ongoing medical supervision.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Testosterone (injectable, transdermal)</li>
                        <li>Complementary therapies</li>
                        <li>Regular health monitoring</li>
                        <li>Personalized dosing adjustments</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Customized Regimens</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Work with licensed clinicians to design a hormone therapy regimen tailored to your unique goals
                        and health needs. We support all gender identities and expressions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ongoing Medical Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Regular check-ins, laboratory monitoring, dosage adjustments, and continuous care coordination
                        with your healthcare team throughout your HRT journey.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Ready to Start Your HRT Journey?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                    Contact us today to learn more about our hormone replacement therapy services. We're launching
                    November 30, 2025 - join our waitlist now to be among the first to access our services.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
                      <Link
                        href="/book"
                        onClick={() => {
                          trackButtonClick("Book Now CTA", "bottom-cta")
                          trackButtonClickVercel("Book Now CTA", "bottom-cta")
                        }}
                      >
                        Book Now!
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent" asChild>
                      <a
                        href="tel:+18444786337"
                        onClick={() => {
                          trackButtonClick("Call Now CTA", "bottom-cta")
                          trackButtonClickVercel("Call Now CTA", "bottom-cta")
                        }}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call 844-HRTMEDS
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Transnational Health Corp logo"
                width={120}
                height={64}
                className="h-9 w-auto"
                loading="lazy"
              />
              <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} Transnational Health Corp. A 501(c)(3) nonprofit corporation.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-600" />
              <a
                href="tel:+18444786337"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
                onClick={() => {
                  trackButtonClick("Phone Number", "footer")
                  trackButtonClickVercel("Phone Number", "footer")
                }}
              >
                844-HRTMEDS
              </a>
            </div>
          </div>
          <nav className="sm:ml-auto">
            <ul className="flex gap-4 sm:gap-6">
              <li>
                <Link href="/" className="text-xs hover:underline underline-offset-4 text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-xs hover:underline underline-offset-4 text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}
