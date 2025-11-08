import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Breadcrumbs } from "../components/breadcrumbs"

export const metadata: Metadata = {
  title: "Partners and Resources | Transnational Health",
  description:
    "Learn about our partnerships with leading organizations in transgender healthcare, including WPATH, CE Repro, and Metro Area Advanced Practice Healthcare, plus recommended community resources.",
  openGraph: {
    title: "Partners and Resources | Transnational Health",
    description:
      "Collaborating with leading organizations and connecting our community with valuable resources for comprehensive, affirming transgender healthcare.",
    type: "website",
  },
}

export default function PartnershipsPage() {
  const partners = [
    {
      name: "WPATH",
      fullName: "World Professional Association for Transgender Health",
      url: "https://wpath.org",
      logo: "https://app.wpath.org/img/wpath/WPATH-logo_20201217.png",
      description:
        "All of our clinicians are proud members of WPATH, the leading international, interdisciplinary professional organization devoted to transgender health. WPATH promotes evidence-based care, education, research, advocacy, public policy, and respect in transgender health.",
      icon: Shield,
    },
    {
      name: "CE Repro",
      fullName: "CE Repro",
      url: "https://cerepro.org",
      logo: "https://www.cerepro.org/logo.png",
      description:
        "CE Repro helps fund patient care, making hormone replacement therapy more accessible and affordable for those who need it most. Through this partnership, we're able to reduce financial barriers and ensure more people can access life-affirming healthcare.",
      icon: Heart,
    },
    {
      name: "Metro Area Advanced Practice Healthcare",
      fullName: "Metro Area Advanced Practice Healthcare",
      url: "https://metroarea.org",
      logo: "https://metroarea.org/wp-content/uploads/2022/03/metroarea_health_horiz-e1709069581842.png",
      description:
        "As an affiliated partner, Metro Area Advanced Practice Healthcare provides clinical expertise and support for our comprehensive HRT services. This partnership ensures our patients receive the highest quality medical care from experienced healthcare professionals.",
      icon: Users,
    },
    {
      name: "Metro Area Modern Reproductive Care",
      fullName: "Metro Area Modern Reproductive Care",
      url: "https://modernrepro.org",
      logo: "https://modernrepro.org/wp-content/uploads/2022/03/metroareamodernreproductivecare-e1712069480281.png",
      description:
        "Metro Area Modern Reproductive Care is our trusted partner for comprehensive abortion care services. This partnership ensures our patients have access to safe, compassionate reproductive healthcare when they need it, supporting the full spectrum of reproductive health needs.",
      icon: Heart,
    },
    {
      name: "The Good Health Project",
      fullName: "The Good Health Project",
      url: "https://goodhealthproject.org",
      logo: "https://images.squarespace-cdn.com/content/v1/686eb767cdce644b409e3faf/8fa2322a-d0c7-4080-ad8d-a161ba62ea4e/The+Good+Health+Project.png?format=1500w",
      description:
        "The Good Health Project is our partner in promoting health equity and access to quality healthcare. Through this collaboration, we work together to ensure comprehensive, compassionate care reaches those who need it most.",
      icon: Heart,
    },
    {
      name: "Campaign for Southern Equality",
      fullName: "Campaign for Southern Equality",
      url: "https://southernequality.org",
      logo: "https://southernequality.org/wp-content/uploads/cse-logo.png",
      description:
        "Campaign for Southern Equality works to promote full LGBTQ+ equality across the South. Through this partnership, we collaborate to ensure our community has access to comprehensive healthcare and support services throughout the Southern United States.",
      icon: Users,
    },
  ]

  const communityResources = [
    {
      name: "Trans Maryland",
      fullName: "Trans Maryland",
      url: "https://transgendermaryland.org",
      logo: "https://images.squarespace-cdn.com/content/v1/5b5cb6af7c93279793ac1be6/1593118749805-0XVJK0VRCH04A3M0TL5V/logo-trans-maryland-horizontal-color-black-2X.jpg?format=1500w",
      description:
        "Trans Maryland is a vital community organization providing advocacy, support, and resources for trans and gender divergent people throughout Maryland. We recommend them as an excellent resource for community support, advocacy, and connection with other trans and gender divergent people and allies.",
      icon: BookOpen,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Partners and Resources", href: "/partnerships" },
        ]}
      />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-white to-red-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  <span className="text-red-500">Partners and Resources</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Collaborating with leading organizations and connecting our community with valuable resources for
                  comprehensive, evidence-based, and affirming transgender healthcare.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Partners</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  We partner with leading healthcare organizations to ensure the highest quality, most comprehensive
                  care for our patients.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 lg:gap-12">
              {partners.map((partner, index) => {
                const IconComponent = partner.icon
                return (
                  <Card key={index} className="border-blue-200">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={`${partner.name} logo`}
                            width={120}
                            height={120}
                            className="rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <IconComponent className="h-6 w-6 text-blue-600" aria-hidden="true" />
                            <CardTitle className="text-2xl">{partner.name}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{partner.fullName}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                      <Button variant="outline" asChild className="bg-transparent">
                        <a href={partner.url} target="_blank" rel="noopener noreferrer">
                          Visit {partner.name}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Recommended Community Resources
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Organizations we recommend for additional support, advocacy, and community connection.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 lg:gap-12">
              {communityResources.map((resource, index) => {
                const IconComponent = resource.icon
                return (
                  <Card key={index} className="border-blue-200">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <Image
                            src={resource.logo || "/placeholder.svg"}
                            alt={`${resource.name} logo`}
                            width={120}
                            height={120}
                            className="rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <IconComponent className="h-6 w-6 text-blue-600" aria-hidden="true" />
                            <CardTitle className="text-2xl">{resource.name}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{resource.fullName}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                      <Button variant="outline" asChild className="bg-transparent">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit {resource.name}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Interested in Partnering?
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  We're always looking to collaborate with organizations that share our mission of providing accessible,
                  affirming transgender healthcare.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
                  <Link href="/#contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Transnational Health Corp logo" width={36} height={36} className="h-9 w-auto" />
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Transnational Health Corp. A Maryland 501(c)(3) nonprofit corporation.
          </p>
        </div>
        <nav className="sm:ml-auto">
          <ul className="flex gap-4 sm:gap-6">
            <li>
              <Link href="/#contact" className="text-xs hover:underline underline-offset-4 text-gray-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="text-xs hover:underline underline-offset-4 text-gray-600">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
