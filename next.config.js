/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
