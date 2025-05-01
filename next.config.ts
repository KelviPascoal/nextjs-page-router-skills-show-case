import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.pokemondb.net"],
  },
};

export default nextConfig;
