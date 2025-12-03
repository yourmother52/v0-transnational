"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === "undefined") return

    const GA_MEASUREMENT_ID = "G-TMSBYFTWZ4"

    if (window.gtag) return

    window.dataLayer = window.dataLayer || []

    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

    script.onload = () => {
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      window.gtag = gtag

      gtag("js", new Date())
      gtag("config", GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }

    document.head.appendChild(script)

    return () => {
      try {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      } catch (error) {
        console.log("Analytics cleanup error:", error)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")
      window.gtag("config", "G-TMSBYFTWZ4", {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", {
    form_name: formName,
    event_category: "engagement",
  })
}

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("click", {
    event_category: "engagement",
    event_label: buttonName,
    custom_parameter: location,
  })
}

export const trackPageView = (pageName: string) => {
  trackEvent("page_view", {
    page_title: pageName,
    event_category: "navigation",
  })
}

export const trackFormSubmissionVercel = (formName: string) => {
  // Use Google Analytics tracking as fallback
  trackFormSubmission(formName)
}

export const trackButtonClickVercel = (buttonName: string, location: string) => {
  // Use Google Analytics tracking as fallback
  trackButtonClick(buttonName, location)
}

export const trackPageViewVercel = (pageName: string) => {
  // Use Google Analytics tracking as fallback
  trackPageView(pageName)
}
