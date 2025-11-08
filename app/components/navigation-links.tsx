"use client"

import Link from "next/link"
import { trackButtonClick, trackButtonClickVercel } from "./analytics"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavigationLinks() {
  const handleSafeExit = () => {
    trackButtonClick("Safe Exit", "header")
    trackButtonClickVercel("Safe Exit", "header")
    window.location.replace("https://weather.com")
  }

  return (
    <nav className="ml-auto flex items-center gap-4" role="navigation" aria-label="Main navigation">
      <ul className="flex gap-4 sm:gap-6">
        <li>
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
            onClick={() => {
              trackButtonClick("Home Nav", "header")
              trackButtonClickVercel("Home Nav", "header")
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/how-it-works"
            className="text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
            onClick={() => {
              trackButtonClick("How It Works Nav", "header")
              trackButtonClickVercel("How It Works Nav", "header")
            }}
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            href="/faq"
            className="text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
            onClick={() => {
              trackButtonClick("FAQ Nav", "header")
              trackButtonClickVercel("FAQ Nav", "header")
            }}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
            onClick={() => {
              trackButtonClick("About Nav", "header")
              trackButtonClickVercel("About Nav", "header")
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/partnerships"
            className="text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
            onClick={() => {
              trackButtonClick("Partners and Resources Nav", "header")
              trackButtonClickVercel("Partners and Resources Nav", "header")
            }}
          >
            Partners and Resources
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
            onClick={() => {
              trackButtonClick("Contact Nav", "header")
              trackButtonClickVercel("Contact Nav", "header")
            }}
          >
            Contact
          </Link>
        </li>
      </ul>

      <Button
        onClick={handleSafeExit}
        variant="destructive"
        size="sm"
        className="bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 flex items-center gap-2"
        aria-label="Safe exit - quickly leave this site and go to weather.com"
      >
        <LogOut className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Safe Exit</span>
      </Button>
    </nav>
  )
}
