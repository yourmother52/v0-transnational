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

        <section className="w-full py-8 bg-white border-b sticky top-16 z-40 shadow-sm">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="#general">General Questions</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#process">Process & Timeline</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#cost">Cost & Payment</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#medical">Medical Care</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#medications">Medications</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#privacy">Privacy & Support</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#legal">Legal Questions</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="faq-heading">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-12">
              <div id="general" className="scroll-mt-32 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Image
                    src="/illustrations/faq-general.jpg"
                    alt="Friendly illustration of people asking questions"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <h2 id="faq-heading" className="text-2xl font-bold text-gray-900">
                    General Questions
                  </h2>
                </div>
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
                          Alabama, Arkansas, Idaho, Indiana, Louisiana, Missouri, Montana, North Dakota, Oklahoma, South
                          Dakota, Texas, and West Virginia.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left">
                          Do I need to live in one of your states?
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. Right now we can only help people who live in Alabama, Arkansas, Idaho, Indiana,
                          Louisiana, Missouri, Montana, North Dakota, Oklahoma, South Dakota, Texas, or West Virginia.
                          This is because of state laws about healthcare.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left">Do you serve minors?</AccordionTrigger>
                        <AccordionContent>
                          We do not currently serve minors (people under 18 years old). We are working hard with our
                          legal team on our next steps for adding services for minors. Please check back with us for
                          updates on when we will be able to serve younger patients.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-left">Are in-person visits required?</AccordionTrigger>
                        <AccordionContent>
                          No, we do not require any in-person visits. All of your appointments with our providers can be
                          done by video call from the comfort of your home. However, if you would prefer to see a
                          provider in person, we can coordinate this for you. Just let us know your preference when you
                          schedule your appointment.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div id="process" className="scroll-mt-32 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Image
                    src="/illustrations/faq-process.jpg"
                    alt="Illustration of calendar and timeline showing the care process"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Process and Timeline</h2>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-6">
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

                      <AccordionItem value="item-7">
                        <AccordionTrigger className="text-left">
                          How long does it take to get my first prescription?
                        </AccordionTrigger>
                        <AccordionContent>
                          Most people get their first medications within 2-4 weeks of their first call. The exact time
                          depends on your situation and if you need lab work first.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8">
                        <AccordionTrigger className="text-left">Do I need lab work before starting?</AccordionTrigger>
                        <AccordionContent>
                          Not always. Your provider will talk to you during your video visit. They'll let you know if
                          you need lab work before starting treatment. Some people need it, some don't.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9">
                        <AccordionTrigger className="text-left">How often will I see my provider?</AccordionTrigger>
                        <AccordionContent>
                          You'll have regular check-ins with your provider. At first, you might see them more often.
                          Once your treatment is stable, visits are usually every 3-6 months. Your provider will make a
                          plan that works for you.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-10">
                        <AccordionTrigger className="text-left">
                          My state requires an in-person visit or multiple counseling sessions. Can I still get care
                          with you?
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>
                              Yes! Transnational Health follows the informed consent model for HRT, which is the
                              standard of care recommended by WPATH. This means you do not need in-person visits or
                              extensive counseling sessions before starting HRT.
                            </p>
                            <p>
                              Our providers practice from states where informed consent is the standard, and they can
                              prescribe medications to you through telehealth regardless of your state's requirements.
                              All visits are done by video call from the comfort of your home.
                            </p>
                            <p className="text-sm text-gray-600">
                              Our goal is to remove unnecessary barriers to gender-affirming care while maintaining
                              medical safety and informed decision-making.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div id="cost" className="scroll-mt-32 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Image
                    src="/illustrations/faq-cost.jpg"
                    alt="Illustration of payment and pricing information"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Cost and Payment</h2>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-11">
                        <AccordionTrigger className="text-left">How much does it cost?</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>Here is our price list for services:</p>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>
                                <strong>Initial visit:</strong> $250
                              </li>
                              <li>
                                <strong>Follow-up visit:</strong> $90
                              </li>
                              <li>
                                <strong>Medication cost:</strong> Depends on your plan
                              </li>
                              <li>
                                <strong>Lab cost:</strong> Depends on your plan and whether you use your own insurance
                              </li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-3">
                              As a nonprofit, we work to keep costs as low as possible while providing quality care.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-12">
                        <AccordionTrigger className="text-left">Do you take insurance?</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>
                              <strong>We do NOT accept insurance</strong> for several reasons:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>
                                Insurance companies often deny or delay coverage for transgender healthcare, creating
                                barriers to care
                              </li>
                              <li>
                                Working outside insurance allows us to keep costs transparent and predictable for our
                                patients
                              </li>
                              <li>
                                It protects your privacy - insurance claims can create records that may affect future
                                coverage or employment
                              </li>
                              <li>
                                As a nonprofit, we can offer competitive self-pay rates without insurance company
                                restrictions
                              </li>
                            </ul>
                            <p className="mt-3">
                              However, we can provide detailed receipts (superbills) that you may be able to submit to
                              your insurance for out-of-network reimbursement. You may also be able to use your
                              insurance for lab work at Quest or LabCorp.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-13">
                        <AccordionTrigger className="text-left">
                          Do you have help for people who can't afford care?
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>
                              Yes. As a nonprofit, we work with partners like CE Repro to help fund patient care. We
                              offer a sliding scale discount program (see below) to make care more affordable. We want
                              everyone to get the care they need. Talk to us about your situation.
                            </p>
                            <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="font-semibold text-gray-900 mb-2">Need additional financial assistance?</p>
                              <p className="text-sm text-gray-700 mb-2">
                                If you need more help than our sliding scale can provide, check out this resource page
                                for additional funding options:
                              </p>
                              <a
                                href="https://southernequality.org/resources/transinthesouth/funding-your-transition/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-medium text-sm"
                              >
                                Campaign for Southern Equality - Funding Your Transition
                              </a>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-14">
                        <AccordionTrigger className="text-left">How does the sliding scale work?</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>We offer a sliding scale at 2 levels to make care more affordable:</p>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>
                                <strong>Slide 1:</strong> 25% discount on medical services
                              </li>
                              <li>
                                <strong>Slide 2:</strong> 50% discount on medical services
                              </li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-3">
                              <strong>Please note:</strong> These discounts apply only to medical visit costs (initial
                              and follow-up visits). They do not apply to the cost of medications or lab work.
                            </p>
                            <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="font-semibold text-gray-900 mb-2">Need additional financial assistance?</p>
                              <p className="text-sm text-gray-700 mb-2">
                                If you need more help than our sliding scale can provide, check out this resource page
                                for additional funding options:
                              </p>
                              <a
                                href="https://southernequality.org/resources/transinthesouth/funding-your-transition/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-medium text-sm"
                              >
                                Campaign for Southern Equality - Funding Your Transition
                              </a>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div id="medical" className="scroll-mt-32 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Image
                    src="/illustrations/faq-medical.jpg"
                    alt="Illustration of medical care and healthcare safety"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Medical Care and Safety</h2>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-15">
                        <AccordionTrigger className="text-left">Are your providers licensed?</AccordionTrigger>
                        <AccordionContent>
                          Yes. All our providers are licensed healthcare professionals. They have training in HRT and
                          transgender healthcare. All our providers are members of WPATH (World Professional Association
                          for Transgender Health).
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-16">
                        <AccordionTrigger className="text-left">Is HRT safe?</AccordionTrigger>
                        <AccordionContent>
                          When done with medical supervision, HRT is safe for most people. Your provider will check your
                          health history and do regular monitoring. They'll watch for any problems and adjust your
                          treatment as needed.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-17">
                        <AccordionTrigger className="text-left">
                          What if I'm already on HRT with another provider?
                        </AccordionTrigger>
                        <AccordionContent>
                          That's okay! We can help you continue your care. Bring your current prescription information
                          and recent lab work to your first visit. We can work with your current provider if needed.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-18">
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

              <div id="medications" className="scroll-mt-32 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Image
                    src="/illustrations/faq-medications.jpg"
                    alt="Illustration of medication bottles and home delivery"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Medications and Delivery</h2>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-19">
                        <AccordionTrigger className="text-left">How do I get my medications?</AccordionTrigger>
                        <AccordionContent>
                          Your medications come to your home in the mail. We'll give you clear instructions on how to
                          use them. If you have questions, you can call us anytime.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-20">
                        <AccordionTrigger className="text-left">What types of HRT do you offer?</AccordionTrigger>
                        <AccordionContent>
                          We offer estrogen-based regimens (estrogen and anti-androgens) and testosterone-based
                          regimens. Your provider will work with you to find the right treatment for your goals.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-21">
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

              <div id="privacy" className="scroll-mt-32 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Image
                    src="/illustrations/faq-privacy.jpg"
                    alt="Illustration of privacy protection and support services"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Privacy and Support</h2>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-22">
                        <AccordionTrigger className="text-left">Is my information private?</AccordionTrigger>
                        <AccordionContent>
                          Yes. We follow all HIPAA laws to keep your health information private. We will never share
                          your information without your permission.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-23">
                        <AccordionTrigger className="text-left">
                          What if I have questions between visits?
                        </AccordionTrigger>
                        <AccordionContent>
                          You can call us anytime at 844-HRTMEDS or use our contact form. We're here to help you. If you
                          have a medical emergency, call 911.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-24">
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

              <div id="legal" className="scroll-mt-32 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Image
                    src="/illustrations/faq-legal.jpg"
                    alt="Illustration of legal documents and rights protection"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-bold text-gray-900">Legal Questions</h2>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-25">
                        <AccordionTrigger className="text-left">
                          I heard HRT is illegal in my state. Can I still get HRT with Transnational?
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>
                              Yes, you can still receive care through Transnational Health. Our clinicians are based in
                              and prescribe from states where HRT is protected and legal. They are authorized to send
                              medications to patients in the states we serve.
                            </p>
                            <p>
                              Even if your state has passed restrictive laws, our providers can legally prescribe and
                              send HRT medications to you because they are practicing from states with strong
                              protections for transgender healthcare.
                            </p>
                            <p className="text-sm text-gray-600">
                              If you have concerns about your specific situation, please contact us to discuss your
                              options.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-26">
                        <AccordionTrigger className="text-left">
                          My state requires a lot of counseling visits before I can get HRT. Can I still come to
                          Transnational if I have not had all of them?
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>
                              Yes! Transnational Health follows the informed consent model for HRT, which is the
                              standard of care recommended by WPATH (World Professional Association for Transgender
                              Health). This means you do not need therapy letters or extensive counseling sessions
                              before starting HRT.
                            </p>
                            <p>
                              Our providers practice from states where informed consent is the standard, and they can
                              prescribe medications to you regardless of your state's counseling requirements. During
                              your provider visit, we'll discuss the effects and risks of HRT to ensure you're making an
                              informed decision.
                            </p>
                            <p className="text-sm text-gray-600">
                              Our goal is to remove unnecessary barriers to gender-affirming care while maintaining
                              medical safety and informed decision-making.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-27">
                        <AccordionTrigger className="text-left">How is this legal?</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>Transnational Health operates completely within the law. Here's how:</p>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>
                                <strong>Prescribing from protected states:</strong> Our clinicians are based in and
                                licensed in states where transgender healthcare, including HRT, is fully protected and
                                legal.
                              </li>
                              <li>
                                <strong>Legal medication delivery:</strong> Our providers are authorized to prescribe
                                and send medications to patients in the states we serve, following all applicable
                                federal and state regulations.
                              </li>
                              <li>
                                <strong>Licensed providers:</strong> All our healthcare providers are fully licensed
                                medical professionals in good standing with their state medical boards.
                              </li>
                              <li>
                                <strong>Standard of care:</strong> We follow WPATH guidelines and the informed consent
                                model, which is recognized as the appropriate standard of care for transgender
                                healthcare.
                              </li>
                            </ul>
                            <p>
                              By operating from states with strong protections for transgender healthcare, our
                              clinicians can legally provide HRT services and send medications to patients who need
                              them, even in states with restrictive local laws.
                            </p>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="font-semibold text-gray-900 mb-2">
                                Questions about your personal legal risk?
                              </p>
                              <p className="text-sm text-gray-700 mb-3">
                                If you have concerns about your specific legal situation, these LGBTQ+ legal
                                organizations offer free legal help and resources:
                              </p>
                              <ul className="space-y-2 text-sm">
                                <li>
                                  <a
                                    href="https://www.nclrights.org/get-help/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline font-medium"
                                  >
                                    National Center for Lesbian Rights - Get Help
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://lambdalegal.org/helpdesk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline font-medium"
                                  >
                                    Lambda Legal - Help Desk
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
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
          <a
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=d9fa3e4b-2e14-407d-b5c3-a64fe2e8f201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Privacy Policy
          </a>
          <a
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=a007ab9b-b070-4ffb-8d93-3e91e6854ef0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Return Policy
          </a>
          <a
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=eae7430a-70bf-4a6e-91f2-a44bf123dd64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Shipping Policy
          </a>
          <a
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=2448e4b4-8b92-4fc1-9b71-183f813c1dcd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Terms and Conditions
          </a>
          <a
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3867c807-36ed-4324-aa67-9efd33f5959d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Disclaimer
          </a>
          <a
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3f08a9a2-6996-4382-9872-df135b50f88f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-gray-600"
          >
            Acceptable Use Policy
          </a>
        </nav>
      </footer>
    </div>
  )
}
