import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  return [
    {
      url: "/",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: "/",
        },
      },
    },
    {
      url: "/about",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "/about",
        },
      },
    },
    {
      url: "/contact",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "/contact",
        },
      },
    },
    {
      url: "/faq",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "/faq",
        },
      },
    },
    {
      url: "/how-it-works",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "/how-it-works",
        },
      },
    },
    {
      url: "/partnerships",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: "/partnerships",
        },
      },
    },
    {
      url: "/services-by-state",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "/services-by-state",
        },
      },
    },
    {
      url: "/testosterone-therapy",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "/testosterone-therapy",
        },
      },
    },
    {
      url: "/menopause-hrt",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "/menopause-hrt",
        },
      },
    },
    {
      url: "/form-complete",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: "/form-complete",
        },
      },
    },
  ]
}
