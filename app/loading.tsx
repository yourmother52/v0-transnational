import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Skeleton */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="h-12 w-32 bg-gray-200 animate-pulse rounded"></div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-12 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-white to-red-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="h-12 w-96 bg-gray-200 animate-pulse rounded mx-auto"></div>
                <div className="h-6 w-80 bg-gray-200 animate-pulse rounded mx-auto"></div>
                <div className="h-6 w-72 bg-gray-200 animate-pulse rounded mx-auto"></div>
              </div>
              <div className="flex space-x-4">
                <div className="h-12 w-48 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-12 w-48 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section Skeleton */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="h-10 w-48 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-6 w-96 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
              {[1, 2].map((i) => (
                <Card key={i} className="border-gray-200">
                  <CardHeader>
                    <div className="h-10 w-10 bg-gray-200 animate-pulse rounded mb-2"></div>
                    <div className="h-6 w-48 bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-4 w-64 bg-gray-200 animate-pulse rounded"></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="space-y-2">
                        <div className="h-5 w-32 bg-gray-200 animate-pulse rounded"></div>
                        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="text-center py-8">
        <div className="inline-flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    </div>
  )
}
