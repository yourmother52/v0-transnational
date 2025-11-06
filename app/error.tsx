"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)

    // Track error to Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "exception", {
        description: error.message,
        fatal: false,
      })
    }
  }, [error])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Link href="/" className="flex items-center justify-center">
          <img src="/logo.jpg" alt="Transnational Health Corp" className="h-12 w-auto" />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center bg-gray-50 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">Something went wrong</CardTitle>
            <CardDescription>We apologize for the inconvenience. An unexpected error has occurred.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">
                <strong>Error:</strong> {error.message || "An unexpected error occurred"}
              </p>
              {error.digest && <p className="text-xs text-red-600 mt-2">Error ID: {error.digest}</p>}
            </div>

            <div className="flex flex-col space-y-2">
              <Button onClick={reset} className="w-full bg-blue-600 hover:bg-blue-700">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>

              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Return Home
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                If this problem persists, please{" "}
                <Link href="#contact" className="text-blue-600 hover:underline">
                  contact our support team
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
