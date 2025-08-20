/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    // Configure webpack to handle SVG files
    config.module.rules.push(
      // Handle SVG imports as URLs
      {
        ...fileLoaderRule,
        test: /\.svg\?url$/,
      },
      // Convert SVG files to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Enable experimental features for better SVG handling
  experimental: {
    optimizePackageImports: ['@svgr/webpack'],
  },
}

module.exports = nextConfig
