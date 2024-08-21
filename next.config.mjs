/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

export default withContentlayer({ nextConfig });
