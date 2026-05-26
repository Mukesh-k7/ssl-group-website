import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sslgroup.in" }],
        destination: "https://www.sslgroup.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
