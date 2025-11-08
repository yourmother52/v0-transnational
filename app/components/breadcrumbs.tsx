import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem as UIBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL || "https://transnationalhealth.org"

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Site Navigation Path",
    description: `Breadcrumb navigation trail: ${items.map((item) => item.name).join(" → ")}`,
    numberOfItems: items.length,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: {
          "@type": "WebPage",
          "@id": `${baseUrl}/`,
          url: `${baseUrl}/`,
          name: "Transnational Health - Transgender Healthcare Services",
          description: "Home page of Transnational Health",
        },
      },
      ...items.slice(1).map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: {
          "@type": "WebPage",
          "@id": `${baseUrl}${item.href}`,
          url: `${baseUrl}${item.href}`,
          name: `${item.name} | Transnational Health`,
          description: `${item.name} page on Transnational Health`,
        },
      })),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav
        aria-label="Breadcrumb navigation showing your current location in the site hierarchy"
        className="container px-4 md:px-6 py-4"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        role="navigation"
      >
        <Breadcrumb>
          <BreadcrumbList className="text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1
              const isFirst = index === 0
              const position = index + 1

              return (
                <div key={item.href} className="contents">
                  <UIBreadcrumbItem itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    {isLast ? (
                      <>
                        <BreadcrumbPage
                          className="flex items-center gap-1.5 font-medium text-foreground"
                          aria-current="page"
                          itemProp="item"
                          itemScope
                          itemType="https://schema.org/WebPage"
                        >
                          {isFirst && <Home className="h-4 w-4" aria-hidden="true" role="presentation" />}
                          <span itemProp="name">{item.name}</span>
                          <meta itemProp="url" content={`${baseUrl}${item.href}`} />
                        </BreadcrumbPage>
                        <meta itemProp="position" content={String(position)} />
                      </>
                    ) : (
                      <>
                        <BreadcrumbLink asChild itemProp="item" itemScope itemType="https://schema.org/WebPage">
                          <Link
                            href={item.href}
                            className="flex items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1 -mx-1"
                            {...(isFirst && {
                              rel: "home",
                              title: "Return to Transnational Health homepage",
                            })}
                            {...(!isFirst && {
                              title: `Navigate to ${item.name}`,
                            })}
                          >
                            {isFirst && <Home className="h-4 w-4" aria-hidden="true" role="presentation" />}
                            <span itemProp="name">{item.name}</span>
                          </Link>
                        </BreadcrumbLink>
                        <meta itemProp="url" content={`${baseUrl}${item.href}`} />
                        <meta itemProp="position" content={String(position)} />
                      </>
                    )}
                  </UIBreadcrumbItem>

                  {!isLast && (
                    <BreadcrumbSeparator aria-hidden="true">
                      <ChevronRight className="h-4 w-4" role="presentation" />
                    </BreadcrumbSeparator>
                  )}
                </div>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    </>
  )
}
