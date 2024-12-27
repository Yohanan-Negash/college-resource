/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add image domain configuration for Supabase
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kkpqypbvgqiygycagfey.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};
