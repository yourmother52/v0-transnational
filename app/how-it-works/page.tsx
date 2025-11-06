import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, FileText, Video, ClipboardList, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavigationLinks } from "../components/navigation-links"
import { Breadcrumbs } from "../components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works - Transnational Health",
  description:
    "Learn about our simple 6-step process for getting started with hormone replacement therapy services. From initial consultation to receiving your medications at home.",
  openGraph: {
    title: "How It Works - Transnational Health",
    description: "Discover our straightforward process for accessing HRT services from the comfort of your home.",
    url: "https://transnationalhealth.org/how-it-works",
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 id="faq-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Common Questions
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Here are answers to questions people often ask about our process.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does the whole process take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The time varies for each person. Most patients get their first medications within 2-4 weeks of their
                    first call.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need lab work before my appointment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Not always. Your provider will talk to you during your video visit. They'll let you know if you need
                    lab work before starting treatment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I have questions during the process?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We're here to help you every step of the way. You can call us anytime at 844-HRTMEDS or use our
                    contact form.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is this service available in my state?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We help patients in Alabama, Arkansas, Idaho, Indiana, Louisiana, Missouri, Montana, North Dakota,
                    Oklahoma, South Dakota, Texas, and West Virginia. Contact us to check if we can help you in your
                    area.
                  </p>
                </CardContent>
              </Card>
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
          <Link href="/contact" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
