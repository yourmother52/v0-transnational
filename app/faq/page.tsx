import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavigationLinks } from "../components/navigation-links"
import { Breadcrumbs } from "../components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Transnational Health",
  description:
    "Find answers to common questions about our HRT services, process, costs, and more. Learn how we provide accessible hormone therapy care.",
  openGraph: {
    title: "FAQ - Transnational Health",
    description: "Get answers to your questions about our HRT services and process.",
    url: "https://transnationalhealth.org/faq",
  },
}

export default function FAQPage() {
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
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <main id="main-content" className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-white to-red-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 text-balance">
                  Frequently Asked <span className="text-red-500">Questions</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-pretty">
                  Find answers to common questions about our HRT services. Can't find what you're looking for? Contact
                  us anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="faq-heading">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 id="faq-heading" className="text-2xl font-bold text-gray-900">
                  General Questions
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left">What is Transnational Health?</AccordionTrigger>
                        <AccordionContent>
                          Transnational Health is a Maryland 501(c)(3) nonprofit that helps trans and gender divergent
                          people get HRT services. We work with licensed providers to bring care to your home.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left">Who can use your services?</AccordionTrigger>
                        <AccordionContent>
                          Our services are for trans and gender divergent people who need HRT. We help people in
                          Louisiana, Florida, Alabama, Mississippi, Texas, Idaho, Utah, and Oklahoma.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left">When will you start seeing patients?</AccordionTrigger>
                        <AccordionContent>
                          We are launching on November 30, 2025. Sign up on our contact form to join our waitlist and be
                          among the first to access our services.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left">
                          Do I need to live in one of your states?
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. Right now we can only help people who live in Louisiana, Florida, Alabama, Mississippi,
                          Texas, Idaho, Utah, or Oklahoma. This is because of state laws about healthcare.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Process and Timeline</h2>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-left">How do I get started?</AccordionTrigger>
                        <AccordionContent>
                          First, call us to talk with our HRT coordinator. They will set up your file and answer your
                          questions. Then you'll book a video visit with a provider. Check out our{" "}
                          <Link href="/how-it-works" className="text-blue-600 hover:underline">
                            How It Works
                          </Link>{" "}
                          page for all the steps.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6">
                        <AccordionTrigger className="text-left">
                          How long does it take to get my first prescription?
                        </AccordionTrigger>
                        <AccordionContent>
                          Most people get their first medications within 2-4 weeks of their first call. The exact time
                          depends on your situation and if you need lab work first.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7">
                        <AccordionTrigger className="text-left">Do I need lab work before starting?</AccordionTrigger>
                        <AccordionContent>
                          Not always. Your provider will talk to you during your video visit. They'll let you know if
                          you need lab work before starting treatment. Some people need it, some don't.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8">
                        <AccordionTrigger className="text-left">How often will I see my provider?</AccordionTrigger>
                        <AccordionContent>
                          You'll have regular check-ins with your provider. At first, you might see them more often.
                          Once your treatment is stable, visits are usually every 3-6 months. Your provider will make a
                          plan that works for you.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Cost and Payment</h2>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-9">
                        <AccordionTrigger className="text-left">How much does it cost?</AccordionTrigger>
                        <AccordionContent>
                          We are a nonprofit, so we work to keep costs low. Exact costs will depend on your treatment
                          plan. We'll talk about costs during your first call so there are no surprises.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-10">
                        <AccordionTrigger className="text-left">Do you take insurance?</AccordionTrigger>
                        <AccordionContent>
                          We are working on insurance options. Right now, we can provide receipts that you may be able
                          to submit to your insurance for reimbursement. Contact us to learn more about payment options.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-11">
                        <AccordionTrigger className="text-left">
                          Do you have help for people who can't afford care?
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. As a nonprofit, we work with partners like CE Repro to help fund patient care. We want
                          everyone to get the care they need. Talk to us about your situation.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Medical Care and Safety</h2>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-12">
                        <AccordionTrigger className="text-left">Are your providers licensed?</AccordionTrigger>
                        <AccordionContent>
                          Yes. All our providers are licensed healthcare professionals. They have training in HRT and
                          transgender healthcare. All our providers are members of WPATH (World Professional Association
                          for Transgender Health).
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-13">
                        <AccordionTrigger className="text-left">Is HRT safe?</AccordionTrigger>
                        <AccordionContent>
                          When done with medical supervision, HRT is safe for most people. Your provider will check your
                          health history and do regular monitoring. They'll watch for any problems and adjust your
                          treatment as needed.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-14">
                        <AccordionTrigger className="text-left">
                          What if I'm already on HRT with another provider?
                        </AccordionTrigger>
                        <AccordionContent>
                          That's okay! We can help you continue your care. Bring your current prescription information
                          and recent lab work to your first visit. We can work with your current provider if needed.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-15">
                        <AccordionTrigger className="text-left">
                          What if I have other health conditions?
                        </AccordionTrigger>
                        <AccordionContent>
                          Tell us about all your health conditions during your visit. Your provider will make sure HRT
                          is safe for you. We can work with your other doctors to coordinate your care.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Medications and Delivery</h2>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-16">
                        <AccordionTrigger className="text-left">How do I get my medications?</AccordionTrigger>
                        <AccordionContent>
                          Your medications come to your home in the mail. We'll give you clear instructions on how to
                          use them. If you have questions, you can call us anytime.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-17">
                        <AccordionTrigger className="text-left">What types of HRT do you offer?</AccordionTrigger>
                        <AccordionContent>
                          We offer estrogen-based regimens (estrogen and anti-androgens) and testosterone-based
                          regimens. Your provider will work with you to find the right treatment for your goals.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-18">
                        <AccordionTrigger className="text-left">Can I choose my medication type?</AccordionTrigger>
                        <AccordionContent>
                          Yes! There are different ways to take HRT (pills, patches, injections, etc.). Your provider
                          will talk with you about the options and help you pick what works best for you.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Privacy and Support</h2>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-19">
                        <AccordionTrigger className="text-left">Is my information private?</AccordionTrigger>
                        <AccordionContent>
                          Yes. We follow all HIPAA laws to keep your health information private. We will never share
                          your information without your permission.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-20">
                        <AccordionTrigger className="text-left">
                          What if I have questions between visits?
                        </AccordionTrigger>
                        <AccordionContent>
                          You can call us anytime at 844-HRTMEDS or use our contact form. We're here to help you. If you
                          have a medical emergency, call 911.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-21">
                        <AccordionTrigger className="text-left">Do you provide mental health support?</AccordionTrigger>
                        <AccordionContent>
                          We focus on medical HRT services. However, we can connect you with mental health resources in
                          your area. Check our Partners and Resources page for organizations that can help.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-500 to-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-balance">
                  Still Have Questions?
                </h2>
                <p className="mx-auto max-w-[600px] text-white/90 md:text-xl text-pretty">
                  We're here to help. Contact us anytime and we'll answer your questions.
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
