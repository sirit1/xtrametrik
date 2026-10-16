/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/academy', destination: '/academy/index.html' },
      { source: '/academy/kam', destination: '/academy/kam/index.html' },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog/governance-de-ia-101',
        destination: '/blog/riesgo-de-ia-101',
        statusCode: 301,
      },
      {
        source: '/blog/roi-de-la-governance-de-ia',
        destination: '/blog/roi-de-gestionar-el-riesgo-de-ia',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
