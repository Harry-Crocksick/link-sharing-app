/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.insider.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "play.tailwindcss.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
