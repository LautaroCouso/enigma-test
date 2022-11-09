/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assetsv2.enigma.art'],
  },
};

module.exports = nextTranslate(nextConfig);
