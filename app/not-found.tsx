"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileQuestion, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
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
            <FileQuestion className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">Page Not Found</CardTitle>
            <CardDescription>The page you're looking for doesn't exist or has been moved.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Button className="w-full bg-red-500 hover:bg-red-600" asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>

              <Button variant="outline" className="w-full bg-transparent" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Looking for our services?{" "}
                <Link href="/#services" className="text-blue-600 hover:underline">
                  View our HRT services
                </Link>{" "}
                or{" "}
                <Link href="/#contact" className="text-blue-600 hover:underline">
                  contact us
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
