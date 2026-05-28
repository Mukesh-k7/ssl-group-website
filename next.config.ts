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

  // Allow ALL local network origins for LAN development
  allowedDevOrigins: [
    "192.168.0.0/16",
    "192.168.1.*",
    "10.0.0.*",
    "172.16.*.*",
    "localhost",
    "127.0.0.1",
  ],

  crossOrigin: "anonymous",
};

export default nextConfig;