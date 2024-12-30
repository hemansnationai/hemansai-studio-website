const hostnames = [
  'process.env.WORDPRESS_HOSTNAME',
  'hemansai.com']
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map(hostname => ({
        protocol: 'https',
        hostname
    }))
  }
}

export default nextConfig;
