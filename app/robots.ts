import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.houseofbrik.dk/sitemap.xml",
    host: "https://www.houseofbrik.dk",
  };
}