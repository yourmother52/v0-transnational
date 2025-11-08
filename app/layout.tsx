import type React from "react"
import type { Metadata, Viewport } from "next/metadata"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "./components/analytics"
import { ErrorBoundary } from "./components/error-boundary"
import { Suspense } from "react"
import { VercelAnalytics } from "./components/vercel-analytics"
import { GlobalHeader } from "./components/global-header"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF0000" },
    { media: "(prefers-color-scheme: dark)", color: "#FF0000" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://transnationalhealth.org"),
  title: {
    default: "Transnational Health - Compassionate HRT at Home",
    template: "%s | Transnational Health",
  },
  description:
    "Providing accessible, safe, affirming hormone replacement therapy (HRT) services for trans and gender divergent people through licensed healthcare providers. Opening late 2025.",
  keywords: [
    "HRT",
    "hormone replacement therapy",
    "transgender healthcare",
    "LGBTQ+ healthcare",
    "telemedicine",
    "at-home healthcare",
    "Maryland nonprofit",
    "transgender support",
    "hormone therapy",
    "gender affirming care",
    "estrogen therapy",
    "testosterone therapy",
    "nonbinary HRT",
    "non-binary HRT",
    "trans healthcare",
    "WPATH standards",
    "informed consent",
    "telehealth",
    "virtual healthcare",
    "Groove",
    "groovy",
    "heart",
    "trans",
    "folx",
    "health",
    "queerdoc",
    "queer",
    "doc",
    "nonbinary",
    "non-binary",
    "Plume",
    "testosterone",
    "estrogen",
    "spiro",
    "spironolactone",
    "clitoris",
    "clitoral growth",
    "hormone optimization",
    "gender diverse",
    "LGBTQ health",
    "queer health",
    "trans folx",
  ],
  authors: [{ name: "Transnational Health Corp", url: "https://transnationalhealth.org" }],
  creator: "Transnational Health Corp",
  publisher: "Transnational Health Corp",
  applicationName: "Transnational Health",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  classification: "Healthcare",
  category: "Healthcare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://transnationalhealth.org",
    siteName: "Transnational Health",
    title: "Transnational Health - Compassionate HRT at Home",
    description:
      "Providing accessible, safe, affirming HRT services for trans and gender divergent people through licensed healthcare providers. Opening late 2025.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Transnational Health Corp - Compassionate HRT at Home",
        type: "image/jpeg",
      },
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Transnational Health Corp Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@transnationalhealth",
    creator: "@transnationalhealth",
    title: "Transnational Health - Compassionate HRT at Home",
    description:
      "Providing accessible, safe, affirming HRT services for trans and gender divergent people. Opening late 2025.",
    images: {
      url: "/logo.jpg",
      alt: "Transnational Health Corp - Compassionate HRT at Home",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "2AZZbdRNyCzj014R8NCeD_y4Z9fHLK5D4cc2SQ8A5c0",
  },
  alternates: {
    canonical: "https://transnationalhealth.org",
    languages: {
      "en-US": "https://transnationalhealth.org",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.ico",
        color: "#FF0000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#FF0000",
    "theme-color": "#FF0000",
    "build-id": `${Date.now()}`,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "https://transnationalhealth.org/#organization",
  name: "Transnational Health Corp",
  alternateName: "Transnational Health",
  description:
    "Nonprofit organization providing accessible, safe, affirming hormone replacement therapy (HRT) services for trans, nonbinary, and gender divergent folx through licensed healthcare providers. Offering testosterone, estrogen, and spironolactone therapy with compassionate, queer-affirming care.",
  url: "https://transnationalhealth.org",
  logo: {
    "@type": "ImageObject",
    url: "https://transnationalhealth.org/logo.jpg",
    width: 400,
    height: 400,
  },
  image: {
    "@type": "ImageObject",
    url: "https://transnationalhealth.org/logo.jpg",
    width: 1200,
    height: 630,
  },
  telephone: "+1-XXX-XXX-XXXX",
  email: "info@transnationalhealth.org",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maryland",
    addressRegion: "MD",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.0458",
    longitude: "-76.6413",
  },
  medicalSpecialty: [
    "Endocrinology",
    "Transgender Healthcare",
    "Hormone Replacement Therapy",
    "Gender Affirming Care",
    "LGBTQ+ Healthcare",
    "Queer Health",
    "Nonbinary Healthcare",
  ],
  serviceType: [
    "Hormone Replacement Therapy",
    "Transgender Healthcare",
    "Telemedicine",
    "Medical Consultation",
    "Estrogen Therapy",
    "Testosterone Therapy",
    "Gender Affirming Care",
    "Spironolactone Therapy",
    "HRT for Trans Folx",
    "Nonbinary HRT",
    "Queer Healthcare",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  foundingDate: "2024",
  nonprofitStatus: "Nonprofit501c3",
  taxID: "XX-XXXXXXX",
  sameAs: [
    "https://facebook.com/transnationalhealth",
    "https://twitter.com/transnationalhealth",
    "https://linkedin.com/company/transnational-health",
    "https://instagram.com/transnationalhealth",
  ],
  potentialAction: {
    "@type": "ContactAction",
    target: "https://transnationalhealth.org/#contact",
    name: "Contact Transnational Health",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HRT Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Estrogen-based HRT",
          description: "Estrogen, anti-androgen, and complementary therapies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Testosterone-based HRT",
          description: "Testosterone and complementary therapies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Customized HRT",
          description: "Personalized hormone therapy regimens designed to support individual goals.",
        },
      },
    ],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://transnationalhealth.org",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://transnationalhealth.org/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "About",
      item: "https://transnationalhealth.org/#about",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://transnationalhealth.org/#contact",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <link rel="preload" as="image" href="/logo.jpg" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <GlobalHeader />
            {children}
            <Analytics />
            <VercelAnalytics />
          </ErrorBoundary>
        </Suspense>
      </body>
    </html>
  )
}
