import type { MetadataRoute } from "next";

const BASE = "https://www.brianthammond.com";

const routes = [
  "",
  "/family-framework",
  "/diagnostic",
  "/how-i-help",
  "/who-i-help",
  "/about",
  "/insights",
  "/contact",
  "/insights/why-most-strategic-plans-fail",
  "/insights/the-annual-marketing-audit",
  "/insights/three-questions-every-coaching-client",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/insights/") ? 0.6 : 0.8,
  }));
}
