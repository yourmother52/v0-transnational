"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, CheckCircle, Thermometer, Moon, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trackButtonClick } from "../components/analytics"
import { Breadcrumbs } from "../components/breadcrumbs"

export default function MenopauseHRTPage() {
  const states = [
    {
      name: "Louisiana",
      cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"],
      description:
        "Comprehensive menopause hormone replacement therapy services for women in Louisiana. Our licensed healthcare providers offer personalized HRT treatment plans to help manage hot flashes, night sweats, mood changes, and other menopause symptoms.",
    },
    {
      name: "Florida",
      cities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Tallahassee", "Fort Lauderdale", "West Palm Beach"],
      description:
        "Expert menopause HRT services throughout Florida. We provide bioidentical hormone replacement therapy and traditional HRT options to help Florida women manage menopause symptoms including hot flashes, sleep disturbances, and hormonal imbalances.",
    },
    {
      name: "Alabama",
      cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
      description:
        "Professional menopause hormone therapy services for women across Alabama. Our telemedicine platform connects you with experienced healthcare providers who specialize in menopause management and hormone replacement therapy.",
    },
    {
      name: "Mississippi",
      cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"],
      description:
        "Accessible menopause HRT treatment for Mississippi women. We offer comprehensive hormone replacement therapy services to help manage perimenopause and menopause symptoms with personalized care from licensed medical professionals.",
    },
    {
      name: "Texas",
      cities: [
        "Houston",
        "Dallas",
        "Austin",
        "San Antonio",
        "Fort Worth",
        "El Paso",
        "Arlington",
        "Corpus Christi",
        "Plano",
      ],
      description:
        "Leading menopause hormone replacement therapy services throughout Texas. Our healthcare providers offer customized HRT solutions for women experiencing menopause symptoms including hot flashes, mood swings, and hormonal changes.",
    },
    {
      name: "Idaho",
      cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
      description:
        "Specialized menopause HRT services for Idaho women. We provide convenient telemedicine consultations and personalized hormone replacement therapy to help manage menopause symptoms and improve quality of life.",
    },
    {
      name: "Utah",
      cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem"],
      description:
        "Comprehensive menopause hormone therapy for women in Utah. Our licensed providers offer evidence-based HRT treatments to address hot flashes, night sweats, mood changes, and other menopause-related symptoms.",
    },
    {
      name: "Oklahoma",
      cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"],
      description:
        "Professional menopause HRT services across Oklahoma. We provide personalized hormone replacement therapy solutions to help women manage menopause symptoms and maintain hormonal balance through expert medical care.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center" aria-label="Transnational Health - Home">
          <Image src="/logo.jpg" alt="Transnational Health Corp logo" width={120} height={64} className="h-16 w-auto" />
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <a
            href="tel:844-478-6337"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            onClick={() => trackButtonClick("Phone Header", "menopause-page")}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">844-HRTMEDS</span>
          </a>
        </div>
      </header>

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Menopause HRT Services", href: "/menopause-hrt" },
        ]}
      />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  <span className="text-red-500">Menopause Hormone Replacement Therapy</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Expert menopause HRT services for women experiencing hot flashes, night sweats, mood changes, and
                  other menopause symptoms. Licensed healthcare providers offering personalized hormone therapy
                  solutions.
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
                  <Link href="/#contact" onClick={() => trackButtonClick("Get Notified CTA", "menopause-hero")}>
                    Join Our Waitlist
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
                  <Link href="/#contact" onClick={() => trackButtonClick("Contact CTA", "menopause-bottom")}>
                    Join Our Waitlist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Transnational Health Corp logo" className="h-9 w-auto" />
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
