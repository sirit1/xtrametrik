/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
