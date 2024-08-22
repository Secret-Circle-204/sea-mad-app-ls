/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images configuration
  images: {
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8055',
        pathname: '/assets/**'
      }
      // {
      //   protocol: 'http',
      //   hostname: 'admin.prestigedesign-egy.com',
      //   port: ''
      //   //pathname: '/assets/**'
      // }
    ]
  },
  // experimental: {
  //   appDir: true
  // }
}

module.exports = nextConfig
