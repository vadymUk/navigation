import type { MetadataRoute } from "next";
import { seo } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${seo.url}/`,
    },
  ];
}
