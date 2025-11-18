/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove the distDir line
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig