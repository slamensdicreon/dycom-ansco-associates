import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Replit preview proxies requests from other hosts in development.
  allowedDevOrigins: ["127.0.0.1", "localhost", "*.replit.dev", "*.repl.co", "*.picard.replit.dev", "*.janeway.replit.dev", "*.worf.replit.dev"],
  images: { unoptimized: true },
  async rewrites() {
    // Set API_ORIGIN to your separately running Ansco API (no trailing slash).
    return process.env.API_ORIGIN
      ? [{ source: "/api/:path*", destination: `${process.env.API_ORIGIN}/api/:path*` }]
      : [];
  },
  // Original WordPress URLs end with a trailing slash; keep them identical.
  trailingSlash: true,
};

export default nextConfig;
