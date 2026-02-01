import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.movidev.com.br",
      lastModified: new Date(),
    },
    {
      url: "https://www.movidev.com.br/websites",
    },
    {
      url: "https://www.movidev.com.br/sistemas",
    },
    {
      url: "https://www.movidev.com.br/automacao",
    },
  ];
}
