/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
