/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  // Static export for GitHub Pages
  output: "export",
  images: { unoptimized: true },
  // trailingSlash: true, // Uncomment if deep-linking 404s appear on Pages
};

export default nextConfig;

