import type { MetadataRoute } from "next";
import { INSIGHTS } from "@/lib/insights";

const BASE = "https://www.brianthammond.com";

const staticRoutes = [
  "",
  "/architecture",
  "/family-framework",
  "/design-method",
  "/readiness",
  "/diagnostic",
  "/how-i-help",
  "/who-i-help",
  "/about",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const insightEntries: MetadataRoute.Sitemap = INSIGHTS.map((post) => ({
    url: `${BASE}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...insightEntries];
}
