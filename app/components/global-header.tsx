"use client"

import Link from "next/link"
import Image from "next/image"
import { NavigationLinks } from "./navigation-links"
import { DonationBanner } from "./donation-banner"

export function GlobalHeader() {
  return (
    <>
      <DonationBanner />
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
    </>
  )
}

export default GlobalHeader
