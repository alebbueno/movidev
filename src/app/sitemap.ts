import type { MetadataRoute } from "next"

const baseUrl = "https://movidev.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/proposta`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}


