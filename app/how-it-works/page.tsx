import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, FileText, Video, ClipboardList, Package } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "../components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works - Transnational Health",
  description:
    "Learn about our simple 6-step process for getting started with hormone replacement therapy services. From initial consultation to receiving your medications at home.",
  keywords: [
    "HRT process",
    "how to get HRT",
    "transgender healthcare process",
    "hormone therapy steps",
    "HRT appointment process",
    "transgender HRT how it works",
    "gender affirming care process",
    "HRT consultation steps",
    "hormone therapy timeline",
    "transgender healthcare steps",
    "HRT provider visit",
    "hormone therapy intake",
    "transgender telemedicine process",
    "HRT medication delivery",
    "gender affirming HRT process",
    "transgender healthcare journey",
    "HRT care coordination",
    "hormone therapy at home",
    "transgender HRT consultation",
    "gender diverse healthcare process",
  ],
  openGraph: {
    title: "How It Works - Transnational Health",
    description: "Discover our straightforward process for accessing HRT services from the comfort of your home.",
    url: "https://transnationalhealth.org/how-it-works",
  },
  alternates: {
    canonical: "https://transnationalhealth.org/how-it-works",
  },
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Schedule Your First Call",
      description:
        "Talk to our HRT coordinator on the phone. We'll set up your file and answer your questions. We'll also help you know what to expect.",
      icon: Phone,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: 2,
      title: "Book Your First Provider Visit",
      description:
        "Pick a time that works for you to meet with one of our providers. All our providers are licensed and ready to help.",
      icon: Calendar,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      number: 3,
      title: "Fill Out Your Health Form",
      description:
        "After you book your visit, we'll send you a form online. Tell us about yourself, your health, and your goals. Take your time filling it out.",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: 4,
      title: "Meet Your Provider on Video",
      description:
        "Talk to your provider on a video call. We'll learn about where you are now and what you've tried before. We'll also talk about what you need going forward.",
      icon: Video,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      number: 5,
      title: "Do Any Extra Steps Needed",
      description:
        "You might need to get lab work done or send us other health records. We'll tell you exactly what you need to do.",
      icon: ClipboardList,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: 6,
      title: "Get Your Medications",
      description:
        "Your medications will come to your home in the mail. We'll give you clear instructions on how to use them. You can call us anytime with questions.",
      icon: Package,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
  ]

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Started with HRT at Transnational Health",
    description:
      "A 6-step process to begin your hormone replacement therapy journey with Transnational Health, from initial consultation to receiving medications at home.",
    totalTime: "P2W",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `https://transnationalhealth.org/how-it-works#step-${step.number}`,
    })),
  }

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "How It Works", href: "/how-it-works" },
        ]}
      />

      <main id="main-content" className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-white to-red-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 text-balance">
                  How <span className="text-red-500">It Works</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-pretty">
                  Getting started with our HRT services is easy. Follow these six steps to begin your care from home.
                </p>
              </div>
              <div className="pt-4">
                <Button size="lg" className="bg-red-500 text-white hover:bg-red-600" asChild>
                  <Link href="/book">Book Your Intake Call Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="process-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 id="process-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Your Journey to Care
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  We made our process easy and helpful every step of the way.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card key={step.number} className="relative overflow-hidden transition-shadow hover:shadow-lg">
                    <div className={`absolute top-0 left-0 w-2 h-full ${step.color.replace("text-", "bg-")}`} />
                    <CardHeader className="pl-8">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-1 order-2 md:order-1">
                          <div className="flex items-start gap-4">
                            <div className={`${step.bgColor} p-3 rounded-lg flex-shrink-0`}>
                              <Icon className={`h-8 w-8 ${step.color}`} aria-hidden="true" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <span
                                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${step.color.replace("text-", "bg-")} text-white font-bold text-sm`}
                                >
                                  {step.number}
                                </span>
                                <CardTitle className="text-xl md:text-2xl">{step.title}</CardTitle>
                              </div>
                              <CardContent className="p-0">
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                              </CardContent>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-48 flex-shrink-0 order-1 md:order-2">
                          {step.number === 1 && (
                            <Image
                              src="/illustrations/step-1-phone-call.jpg"
                              alt="Friendly illustration of person having a phone conversation with healthcare coordinator"
                              width={192}
                              height={192}
                              className="w-full h-auto rounded-lg"
                            />
                          )}
                          {step.number === 2 && (
                            <Image
                              src="/illustrations/step-2-calendar.jpg"
                              alt="Cartoon illustration of person selecting appointment time on calendar"
                              width={192}
                              height={192}
                              className="w-full h-auto rounded-lg"
                            />
                          )}
                          {step.number === 3 && (
                            <Image
                              src="/illustrations/step-3-form.jpg"
                              alt="Illustration of person filling out health form on computer"
                              width={192}
                              height={192}
                              className="w-full h-auto rounded-lg"
                            />
                          )}
                          {step.number === 4 && (
                            <Image
                              src="/illustrations/step-4-video-call.jpg"
                              alt="Friendly cartoon of patient having video consultation with healthcare provider"
                              width={192}
                              height={192}
                              className="w-full h-auto rounded-lg"
                            />
                          )}
                          {step.number === 5 && (
                            <Image
                              src="/illustrations/step-5-lab-work.jpg"
                              alt="Illustration of person getting lab work done or reviewing medical records"
                              width={192}
                              height={192}
                              className="w-full h-auto rounded-lg"
                            />
                          )}
                          {step.number === 6 && (
                            <Image
                              src="/illustrations/step-6-delivery.jpg"
                              alt="Cartoon of person happily receiving medication package at home"
                              width={192}
                              height={192}
                              className="w-full h-auto rounded-lg"
                            />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-500 to-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-balance">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-white/90 md:text-xl text-pretty">
                  Take the first step toward getting HRT care. Contact us today to schedule your first call.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a href="tel:+18444786337">
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    844-HRTMEDS
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2
                  id="faq-heading"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900"
                >
                  Questions?
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed text-pretty">
                  Check out our FAQ page for answers to common questions about our services and process.
                </p>
              </div>
              <Button size="lg" className="bg-red-500 text-white hover:bg-red-600" asChild>
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Transnational Health Corp. A 501(c)(3) nonprofit corporation.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Home
          </Link>
          <Link href="/partnerships" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Partners and Resources
          </Link>
          <Link href="/contact" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
