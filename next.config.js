/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'flowbite.com', 
      'via.placeholder.com',
      'placeholder.com',
      'placekitten.com'
    ]
  },
}

module.exports = nextConfig
