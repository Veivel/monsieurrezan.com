/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'flowbite.com', 
      'via.placeholder.com'
    ]
  },
}

module.exports = nextConfig
