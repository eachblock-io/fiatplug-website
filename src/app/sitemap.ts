import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fiatplug.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/features",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/about",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/contact",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/faq",
      lastModified: new Date(),
    },
  ];
}
