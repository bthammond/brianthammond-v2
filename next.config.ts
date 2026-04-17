import type { NextConfig } from "next";

const securityHeaders = [
  // Clickjacking protection — cannot be iframed by any origin
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME sniffing on static assets
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Do not leak full URL (including query params like ?score=X) to external sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable sensitive browser features the site doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Minimal CSP: blocks framing and constrains where resources can load from.
  // Relaxed on scripts/styles so Next.js inline hydration + Tailwind inline CSS work.
  // connect-src allows the Formspree endpoint.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://formspree.io https://*.formspree.io",
      "form-action 'self' https://formspree.io https://*.formspree.io",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Don't leak "X-Powered-By: Next.js" — small info-disclosure improvement
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
