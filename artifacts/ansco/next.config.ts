import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Include the shared validation package when Vercel traces server functions.
  outputFileTracingRoot: path.resolve(import.meta.dirname, "../.."),
  transpilePackages: ["@workspace/api-zod"],
  // Replit preview proxies requests from other hosts in development.
  allowedDevOrigins: ["127.0.0.1", "localhost", "*.replit.dev", "*.repl.co", "*.picard.replit.dev", "*.janeway.replit.dev", "*.worf.replit.dev"],
  images: { unoptimized: true },
  // Original WordPress URLs end with a trailing slash; keep them identical.
  trailingSlash: true,
};

export default nextConfig;
