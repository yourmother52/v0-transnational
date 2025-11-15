"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, CheckCircle, Activity, Zap, TrendingUp } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { trackButtonClick } from "../components/analytics"
import { Breadcrumbs } from "../components/breadcrumbs"
import GlobalHeader from "../components/global-header"

export default function TestosteroneTherapyPage() {
  const states = [
    {
      name: "Alabama",
      cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
      description:
        "Specialized testosterone therapy services for men across Alabama. Our telemedicine platform connects you with experienced healthcare providers who specialize in male hormone optimization and testosterone replacement therapy.",
    },
    {
      name: "Arkansas",
      cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"],
      description:
        "Comprehensive testosterone replacement therapy for men throughout Arkansas. We provide personalized TRT solutions to help manage low testosterone symptoms with expert medical care and ongoing monitoring.",
    },
    {
      name: "Idaho",
      cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
      description:
        "Professional testosterone therapy services for Idaho men. We provide convenient telemedicine consultations and personalized TRT to help manage low testosterone symptoms and improve overall quality of life and vitality.",
    },
    {
      name: "Indiana",
      cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"],
      description:
        "Expert testosterone replacement therapy for men across Indiana. Our licensed providers offer comprehensive TRT treatment plans to address low energy, decreased libido, and other symptoms of testosterone deficiency.",
    },
    {
      name: "Louisiana",
      cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"],
      description:
        "Professional testosterone replacement therapy services for men in Louisiana. Our licensed healthcare providers offer comprehensive TRT treatment plans to address low testosterone, low energy, reduced muscle mass, and other symptoms of testosterone deficiency.",
    },
    {
      name: "Missouri",
      cities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"],
      description:
        "Professional testosterone therapy services for Missouri men. We offer accessible TRT through telemedicine to help manage low testosterone symptoms and optimize hormonal health.",
    },
    {
      name: "Montana",
      cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena"],
      description:
        "Accessible testosterone replacement therapy for men throughout Montana. Our licensed providers deliver personalized TRT solutions to help manage low energy, muscle loss, and other testosterone deficiency symptoms.",
    },
    {
      name: "North Dakota",
      cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"],
      description:
        "Specialized testosterone therapy services for North Dakota men. We provide expert TRT through telemedicine to help manage low testosterone symptoms with compassionate, professional medical care.",
    },
    {
      name: "Oklahoma",
      cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"],
      description:
        "Expert testosterone therapy services across Oklahoma. We provide personalized TRT solutions to help men manage low testosterone symptoms and optimize hormonal balance through professional medical care and monitoring.",
    },
    {
      name: "South Dakota",
      cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"],
      description:
        "Comprehensive testosterone replacement therapy for South Dakota men. Our healthcare providers offer evidence-based TRT treatments to address low energy, decreased muscle mass, and other low testosterone symptoms.",
    },
    {
      name: "West Virginia",
      cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"],
      description:
        "Expert testosterone therapy services for West Virginia men. We provide personalized TRT through telemedicine to help manage low testosterone symptoms and restore hormonal balance.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalHeader />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Testosterone Replacement Therapy", href: "/testosterone-therapy" },
        ]}
      />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-white to-red-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  <span className="text-red-500">Testosterone Replacement Therapy</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Professional testosterone replacement therapy (TRT) for men, trans folx, and nonbinary individuals
                  experiencing low testosterone, fatigue, decreased muscle mass, and reduced vitality. Licensed
                  healthcare providers offering personalized hormone optimization.
                </p>
                <p className="text-lg font-semibold text-blue-600">Launching November 30, 2025</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
                  <a href="tel:844-478-6337" onClick={() => trackButtonClick("Call Now CTA", "testosterone-hero")}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call 844-HRTMEDS
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/book" onClick={() => trackButtonClick("Book Now CTA", "testosterone-hero")}>
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
                  Testosterone Replacement Therapy Services
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Comprehensive TRT to help you restore energy, build muscle, and optimize your hormonal health
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Increased Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Combat fatigue and low energy with testosterone replacement therapy designed to restore your
                    vitality and daily performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Muscle & Strength</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Improve muscle mass, strength, and physical performance with optimized testosterone levels through
                    professional TRT.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Activity className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Enhanced Vitality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Restore libido, improve mood, and enhance overall quality of life with personalized testosterone
                    therapy treatment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">What We Treat</CardTitle>
                <CardDescription>
                  Our testosterone replacement therapy addresses a wide range of low testosterone symptoms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Low Energy & Fatigue</h3>
                      <p className="text-sm text-gray-600">
                        Restore energy levels and combat persistent tiredness caused by low testosterone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Decreased Libido</h3>
                      <p className="text-sm text-gray-600">
                        Improve sexual desire and performance with optimized testosterone levels
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Muscle Loss & Weakness</h3>
                      <p className="text-sm text-gray-600">
                        Rebuild muscle mass and strength through testosterone replacement therapy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Weight Gain & Body Fat</h3>
                      <p className="text-sm text-gray-600">
                        Support healthy metabolism and reduce excess body fat with TRT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Mood Changes & Depression</h3>
                      <p className="text-sm text-gray-600">
                        Improve mood, reduce irritability, and enhance mental well-being
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Cognitive Decline</h3>
                      <p className="text-sm text-gray-600">
                        Support mental clarity, focus, and memory with testosterone optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Physical Changes & Development</h3>
                      <p className="text-sm text-gray-600">
                        Support voice deepening, facial hair growth, muscle development, and clitoral growth through
                        testosterone therapy
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
                  Testosterone Replacement Therapy by State
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  We provide expert testosterone replacement therapy services in the following states
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl space-y-6">
              {states.map((state) => (
                <Card key={state.name}>
                  <CardHeader>
                    <CardTitle className="text-2xl">Testosterone Therapy in {state.name}</CardTitle>
                    <CardDescription className="text-base">
                      Serving men in {state.cities.join(", ")}, and throughout {state.name}
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
                Ready to Optimize Your Testosterone Levels?
              </h2>
              <p className="text-gray-600 md:text-xl">
                Call us today to learn more about our testosterone replacement therapy services. Our licensed healthcare
                providers are ready to help you restore your vitality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
                  <a href="tel:844-478-6337" onClick={() => trackButtonClick("Call Now CTA", "testosterone-bottom")}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call 844-HRTMEDS
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/book" onClick={() => trackButtonClick("Book Now CTA", "testosterone-bottom")}>
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
