/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'flowbite.com', 
      'via.placeholder.com',
      'placeholder.com',
      'placekitten.com',
      'imgbox.com',
      'images2.imgbox.com'
    ]
  },
}

module.exports = nextConfig
