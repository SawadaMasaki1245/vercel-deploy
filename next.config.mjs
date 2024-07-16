/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "https://qjwwiterhacflyfcsvqq.supabase.co/storage/v1/object/public/thumbnails/__________2024_03_21_103710.png",
      },
    ],
  },
};

export default nextConfig;
