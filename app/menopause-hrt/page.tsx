"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, CheckCircle, Thermometer, Moon, Activity } from 'lucide-react'
import Link from "next/link"
import { trackButtonClick } from "../components/analytics"
import { Breadcrumbs } from "../components/breadcrumbs"
import GlobalHeader from "../components/global-header"
import Image from "next/image"

export default function MenopauseHRTPage() {
  const states = [
    {
      name: "Alabama",
      cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
      description:
        "Professional menopause hormone therapy services for women across Alabama. Our telemedicine platform connects you with experienced healthcare providers who specialize in menopause management and hormone replacement therapy.",
    },
    {
      name: "Arkansas",
      cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"],
      description:
        "Comprehensive menopause HRT services for women throughout Arkansas. We provide personalized hormone replacement therapy to help manage hot flashes, night sweats, and other menopause symptoms with expert medical care.",
    },
    {
      name: "Idaho",
      cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
      description:
        "Specialized menopause HRT services for Idaho women. We provide convenient telemedicine consultations and personalized hormone replacement therapy to help manage menopause symptoms and improve quality of life.",
    },
    {
      name: "Indiana",
      cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"],
      description:
        "Expert menopause hormone replacement therapy for women across Indiana. Our licensed providers offer comprehensive HRT treatment plans to address hot flashes, mood changes, and hormonal imbalances during menopause.",
    },
    {
      name: "Louisiana",
      cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"],
      description:
        "Comprehensive menopause hormone replacement therapy services for women in Louisiana. Our licensed healthcare providers offer personalized HRT treatment plans to help manage hot flashes, night sweats, mood changes, and other menopause symptoms.",
    },
    {
      name: "Missouri",
      cities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"],
      description:
        "Professional menopause HRT services for Missouri women. We offer accessible hormone replacement therapy through telemedicine to help manage menopause symptoms and improve overall well-being.",
    },
    {
      name: "Montana",
      cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena"],
      description:
        "Accessible menopause hormone therapy for women throughout Montana. Our licensed providers deliver personalized HRT solutions to help manage hot flashes, sleep disturbances, and other menopause-related symptoms.",
    },
    {
      name: "North Dakota",
      cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"],
      description:
        "Specialized menopause HRT services for North Dakota women. We provide expert hormone replacement therapy through telemedicine to help manage menopause symptoms with compassionate, professional care.",
    },
    {
      name: "Oklahoma",
      cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"],
      description:
        "Professional menopause HRT services across Oklahoma. We provide personalized hormone replacement therapy solutions to help women manage menopause symptoms and maintain hormonal balance through expert medical care.",
    },
    {
      name: "South Dakota",
      cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"],
      description:
        "Comprehensive menopause hormone therapy for South Dakota women. Our healthcare providers offer evidence-based HRT treatments to address hot flashes, night sweats, and other menopause symptoms.",
    },
    {
      name: "West Virginia",
      cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"],
      description:
        "Expert menopause HRT services for West Virginia women. We provide personalized hormone replacement therapy through telemedicine to help manage menopause symptoms and restore hormonal balance.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalHeader />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Menopause HRT Services", href: "/menopause-hrt" },
        ]}
      />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-white to-red-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  <span className="text-red-500">Menopause Hormone Replacement Therapy</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Expert menopause HRT services for women experiencing hot flashes, night sweats, mood changes, and
                  other menopause symptoms. Licensed healthcare providers offering personalized hormone therapy
                  solutions with heart and compassion.
                </p>
                <p className="text-lg font-semibold text-blue-600">Launching November 30, 2025</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
                  <a href="tel:844-478-6337" onClick={() => trackButtonClick("Call Now CTA", "menopause-hero")}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call 844-HRTMEDS
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/book" onClick={() => trackButtonClick("Book Now CTA", "menopause-hero")}>
                    Book Now!
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Menopause HRT Services
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Comprehensive hormone replacement therapy to help you manage menopause symptoms and improve your
                  quality of life.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <Thermometer className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Hot Flash Relief</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Effective hormone therapy to reduce the frequency and intensity of hot flashes and night sweats that
                    disrupt your daily life.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Moon className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Better Sleep</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hormone replacement therapy can help improve sleep quality by addressing night sweats and hormonal
                    imbalances that affect rest.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Activity className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Mood Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Stabilize mood swings, reduce irritability, and improve emotional well-being with personalized
                    hormone therapy treatment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">What We Treat</CardTitle>
                <CardDescription>
                  Our menopause hormone replacement therapy addresses a wide range of symptoms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Hot Flashes & Night Sweats</h3>
                      <p className="text-sm text-gray-600">
                        Reduce the frequency and severity of sudden heat sensations and excessive sweating
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Mood Changes & Irritability</h3>
                      <p className="text-sm text-gray-600">
                        Stabilize emotional fluctuations and improve overall mental well-being
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Sleep Disturbances</h3>
                      <p className="text-sm text-gray-600">
                        Improve sleep quality and reduce insomnia related to hormonal changes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Vaginal Dryness</h3>
                      <p className="text-sm text-gray-600">
                        Address discomfort and improve intimate health with hormone therapy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Low Energy & Fatigue</h3>
                      <p className="text-sm text-gray-600">Restore energy levels and reduce persistent tiredness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Weight Gain & Metabolism</h3>
                      <p className="text-sm text-gray-600">
                        Support healthy metabolism and weight management during menopause
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Menopause HRT Services by State
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  We provide expert menopause hormone replacement therapy services in the following states
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl space-y-6">
              {states.map((state) => (
                <Card key={state.name}>
                  <CardHeader>
                    <CardTitle className="text-2xl">Menopause HRT in {state.name}</CardTitle>
                    <CardDescription className="text-base">
                      Serving women in {state.cities.join(", ")}, and throughout {state.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{state.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {state.cities.map((city) => (
                        <span key={city} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {city}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Ready to Manage Your Menopause Symptoms?
              </h2>
              <p className="text-gray-600 md:text-xl">
                Call us today to learn more about our menopause hormone replacement therapy services. Our licensed
                healthcare providers are ready to help you find relief.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
                  <a href="tel:844-478-6337" onClick={() => trackButtonClick("Call Now CTA", "menopause-bottom")}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call 844-HRTMEDS
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/book" onClick={() => trackButtonClick("Book Now CTA", "menopause-bottom")}>
                    Book Now!
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
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
            © {new Date().getFullYear()} Transnational Health Corp. A Maryland nonprofit corporation.
          </p>
        </div>
        <nav className="sm:ml-auto flex items-center gap-4">
          <a
            href="tel:844-478-6337"
            className="text-xs text-blue-600 hover:underline underline-offset-4 flex items-center gap-1"
          >
            <Phone className="h-3 w-3" />
            844-HRTMEDS
          </a>
          <Link href="/" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Home
          </Link>
        </nav>
      </footer>
    </div>
  )
}
