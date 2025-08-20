/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Configure webpack to handle SVG files as static assets
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource',
    })

    return config
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig
