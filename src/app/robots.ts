import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://tokopakanhasratkerja.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/og-preview"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
