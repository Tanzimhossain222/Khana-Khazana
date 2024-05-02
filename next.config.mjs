/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'source.unsplash.com'
          },
        ],
      },
      server: {
        host: '0.0.0.0', 
      },
};

export default nextConfig;
