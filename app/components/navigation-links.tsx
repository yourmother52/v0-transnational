"use client"

import Link from "next/link"
import { trackButtonClick, trackButtonClickVercel } from "./analytics"
import { LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function NavigationLinks() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSafeExit = () => {
    trackButtonClick("Safe Exit", "header")
    trackButtonClickVercel("Safe Exit", "header")
    window.location.replace("https://weather.com")
  }

  const navLinks = [
    { href: "/", label: "Home", analyticsLabel: "Home Nav" },
    { href: "/how-it-works", label: "How It Works", analyticsLabel: "How It Works Nav" },
    { href: "/faq", label: "FAQ", analyticsLabel: "FAQ Nav" },
    { href: "/about", label: "About", analyticsLabel: "About Nav" },
    { href: "/partnerships", label: "Partners and Resources", analyticsLabel: "Partners and Resources Nav" },
    { href: "/contact", label: "Contact", analyticsLabel: "Contact Nav" },
  ]

  const handleLinkClick = (analyticsLabel: string) => {
    trackButtonClick(analyticsLabel, "header")
    trackButtonClickVercel(analyticsLabel, "header")
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className="ml-auto flex items-center gap-4" role="navigation" aria-label="Main navigation">
      <ul className="hidden md:flex gap-4 lg:gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
              onClick={() => handleLinkClick(link.analyticsLabel)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button
            variant="outline"
            size="sm"
            aria-label="Open navigation menu"
            className="flex items-center gap-2 bg-transparent"
          >
            <Menu className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[320px]">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium hover:text-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-3 py-2 hover:bg-gray-50"
                onClick={() => handleLinkClick(link.analyticsLabel)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleSafeExit}
              variant="destructive"
              size="sm"
              className="bg-brand-red hover:bg-brand-red-hover focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 flex items-center gap-2 justify-center mt-4"
              aria-label="Safe exit - quickly leave this site and go to weather.com"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              <span>Safe Exit</span>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      <Button
        onClick={handleSafeExit}
        variant="destructive"
        size="sm"
        className="hidden md:flex bg-brand-red hover:bg-brand-red-hover focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 items-center gap-2"
        aria-label="Safe exit - quickly leave this site and go to weather.com"
      >
        <LogOut className="h-4 w-4" aria-hidden="true" />
        <span className="hidden lg:inline">Safe Exit</span>
      </Button>
    </nav>
  )
}
