import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SSL Group — Metallurgy Export",
    short_name: "SSL Group",
    description:
      "Indian metallurgy and steel industry raw material supplier and global exporter.",
    start_url: `${SITE_URL}/`,
    scope: `${SITE_URL}/`,
    display: "standalone",
    background_color: "#111111",
    theme_color: "#1E3A5F",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
