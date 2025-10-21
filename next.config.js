/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  // Configurazione per produzione
  poweredByHeader: false,
  reactStrictMode: true
}

module.exports = nextConfig