"use client"

import { Button } from "@/components/ui/button"
import { trackButtonClick, trackButtonClickVercel } from "./analytics"

export function DonationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 text-center">
      <div className="container mx-auto flex items-center justify-center gap-4 flex-wrap">
        <span className="text-sm md:text-base font-medium">Support our mission to provide accessible HRT services</span>
        <Button size="sm" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
          <a
            href="https://givebutter.com/fyZJf5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackButtonClick("Donate Button", "top-banner")
              trackButtonClickVercel("Donate Button", "top-banner")
            }}
          >
            Donate to keep HRT affordable!
          </a>
        </Button>
      </div>
    </div>
  )
}
