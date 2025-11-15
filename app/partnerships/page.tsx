import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, ExternalLink, BookOpen, DollarSign } from 'lucide-react'
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
  const organizations = [
    {
      name: "Advocates for Trans Equality (A4TE)",
      fullName: "Advocates for Trans Equality",
      url: "https://transequality.org",
      logo: "https://transequality.org/themes/custom/a4te/images/a4te_logo_purple.svg",
      description:
        "A4TE (formerly NCTE and TLDEF) is a leading organization advocating for transgender equality through policy work, litigation, and community resources. They offer the Trans Legal Survival Guide, ID Documents Center for updating names and gender markers, and the Trans Legal Services Network Directory connecting people with legal services.",
      icon: Shield,
    },
    {
      name: "Campaign for Southern Equality",
      fullName: "Campaign for Southern Equality",
      url: "https://southernequality.org",
      logo: "/logos/campaign-southern-equality.png",
      description:
        "Campaign for Southern Equality works to promote full LGBTQ+ equality across the South. They collaborate to ensure our community has access to comprehensive healthcare and support services throughout the Southern United States, and offer emergency grants for families of transgender youth who need to travel out of state for care.",
      icon: Users,
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
      name: "Genderbands",
      fullName: "Genderbands",
      url: "https://www.genderbands.org/",
      logo: "/logos/genderbands.png",
      description:
        "Genderbands offers medical, surgical, social, and travel grants for transition-related costs including surgeries, HRT, electrolysis, haircuts, clothing, name change fees, caregivers, hotels, and car rentals.",
      icon: DollarSign,
    },
    {
      name: "GLAD Law",
      fullName: "GLBTQ Legal Advocates & Defenders",
      url: "https://www.gladlaw.org/",
      logo: "https://www.gladlaw.org/wp-content/themes/wpx/images/Logo_MAIN.png",
      description:
        "GLAD Law has been fiercely defending equality and justice for LGBTQ+ people for over 45 years through cutting-edge legal strategies. They offer free legal information through GLAD Answers and the Transgender ID Project, a resource for updating name and gender markers on ID documents in New England.",
      icon: Shield,
    },
    {
      name: "Lambda Legal",
      fullName: "Lambda Legal",
      url: "https://lambdalegal.org",
      logo: "https://lambdalegal.org/wp-content/uploads/2023/02/lambda-logo-300x84.png",
      description:
        "Lambda Legal is a national legal organization committed to achieving full recognition of the civil rights of LGBTQ+ people and people living with HIV. They provide impact litigation, education, and policy work to advance justice for all, with a focus on test cases and precedent-setting legal victories.",
      icon: Shield,
    },
    {
      name: "LGBT Network",
      fullName: "LGBT Network",
      url: "https://lgbtnetwork.org/",
      logo: "https://lgbtnetwork.org/wp-content/uploads/2020/07/lgbtnetwork-logo-primary.png",
      description:
        "The LGBT Network is a home and voice for LGBT people, their families, and support systems of Long Island and Queens. They provide free mental health counseling, crisis intervention, support for victims and survivors of hate crimes and violence, and group programs for transgender, gender non-conforming, and non-binary people.",
      icon: Users,
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
      name: "National Center for LGBTQ Rights",
      fullName: "National Center for Lesbian Rights",
      url: "https://nclrights.org",
      logo: "https://nclrights.org/wp-content/uploads/2025/05/NCLR-logo.horizontal.NEW_.png",
      description:
        "The National Center for Lesbian Rights is a national legal organization dedicated to advancing the civil and human rights of lesbian, gay, bisexual, and transgender people and their families through litigation, legislation, policy, and public education. They provide direct legal services and represent LGBTQ+ clients in precedent-setting cases.",
      icon: Shield,
    },
    {
      name: "Point of Pride",
      fullName: "Point of Pride",
      url: "https://www.pointofpride.org/",
      logo: "https://www.pointofpride.org/hubfs/logo/PointOfPride_Logo_White-v1.svg",
      description:
        "Point of Pride provides financial aid and direct support for trans folks in need of health and wellness care. They offer the Annual Transgender Surgery Fund, HRT Access Fund (12 months of free hormone therapy), Electrolysis Support Fund, Thrive Fund for gender-affirming needs, and free chest binders and femme shapewear.",
      icon: DollarSign,
    },
    {
      name: "Rainbow Youth Project USA",
      fullName: "Rainbow Youth Project USA",
      url: "https://www.rainbowyouthproject.org/",
      logo: "https://static.wixstatic.com/media/ed6f7a_fb7c534f3d4c492daf41d1affe3deb95~mv2.png/v1/fill/w_668,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RYPUFlogo_edited.png",
      description:
        "Rainbow Youth Project USA provides financial assistance for non-surgical gender-affirming healthcare to transgender individuals 18 and older who are negatively impacted by Medicaid or state prohibitions on transgender healthcare.",
      icon: DollarSign,
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
      name: "The Trevor Project",
      fullName: "The Trevor Project",
      url: "https://www.thetrevorproject.org/",
      logo: "/logos/trevor-project.png",
      description:
        "The Trevor Project is the leading suicide prevention and crisis intervention organization for LGBTQ+ young people. They provide 24/7 crisis support via phone (1-866-488-7386), text, and chat, along with TrevorSpace, a safe online community for LGBTQ+ youth to connect with peers.",
      icon: Heart,
    },
    {
      name: "Trans Lifeline",
      fullName: "Trans Lifeline",
      url: "https://translifeline.org",
      logo: "https://translifeline.org/wp-content/uploads/2023/01/TL-logo_purple_transparent.png",
      description:
        "Trans Lifeline is a grassroots hotline and microgrants organization offering direct emotional and financial support to trans people in crisis – for the trans community, by the trans community. They provide peer support hotline staffed by trans people for trans people, available 24/7 at 877-565-8860, as well as microgrants to help with ID document changes and other financial barriers.",
      icon: Heart,
    },
    {
      name: "Trans Maryland",
      fullName: "Trans Maryland",
      url: "https://transgendermaryland.org",
      logo: "https://images.squarespace-cdn.com/content/v1/5b5cb6af7c93279793ac1be6/1593118749805-0XVJK0VRCH04A3M0TL5V/logo-trans-maryland-horizontal-color-black-2X.jpg?format=1500w",
      description:
        "Trans Maryland is a vital community organization providing advocacy, support, and resources for trans and gender divergent people throughout Maryland. We recommend them as an excellent resource for community support, advocacy, and connection with other trans and gender divergent people and allies.",
      icon: BookOpen,
    },
    {
      name: "Trans Resistance Network",
      fullName: "Trans Resistance Network",
      url: "https://transresistancenetwork.org/",
      logo: "https://transresistancenetwork.org/assets/TRNLogo.png",
      description:
        "The Trans Resistance Network helps Two Spirit, trans, and gender diverse+ people and families relocate to safer places and access affirming care. They provide support for relocation, travel assistance, and healthcare access.",
      icon: DollarSign,
    },
    {
      name: "WPATH",
      fullName: "World Professional Association for Transgender Health",
      url: "https://wpath.org",
      logo: "https://app.wpath.org/img/wpath/WPATH-logo_20201217.png",
      description:
        "All of our clinicians are proud members of WPATH, the leading international, interdisciplinary professional organization devoted to transgender health. WPATH promotes evidence-based care, education, research, advocacy, public policy, and respect in transgender health.",
      icon: Shield,
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
                  <span className="text-red-500">Folks We Have Worked With and/or Recommend</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Organizations we partner with, collaborate with, and recommend for comprehensive, evidence-based, and affirming transgender healthcare and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:gap-12">
              {organizations.map((org, index) => {
                const IconComponent = org.icon
                return (
                  <Card key={index} className="border-blue-200">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <Image
                            src={org.logo || "/placeholder.svg"}
                            alt={`${org.name} logo`}
                            width={120}
                            height={120}
                            className="rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <IconComponent className="h-6 w-6 text-blue-600" aria-hidden="true" />
                            <CardTitle className="text-2xl">{org.name}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{org.fullName}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">{org.description}</p>
                      <Button variant="outline" asChild className="bg-transparent">
                        <a href={org.url} target="_blank" rel="noopener noreferrer">
                          Visit {org.name}
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
            © {new Date().getFullYear()} Transnational Health Corp. A 501(c)(3) nonprofit corporation.
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
