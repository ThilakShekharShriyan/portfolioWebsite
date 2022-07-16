/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["www.freeimages.com" , "images.freeimages.com"],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
