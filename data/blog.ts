import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "global-ferro-alloy-market-outlook-2026",
    title: "Global Ferro Alloy Market Outlook 2026",
    excerpt:
      "Analysis of manganese and silicon alloy pricing dynamics, supply constraints, and implications for steel procurement strategies.",
    content:
      "The global ferro alloy market enters 2026 with continued volatility in energy costs and shifting trade flows from traditional suppliers. Steel manufacturers in the Middle East and Africa are diversifying sourcing to Indian exporters with established quality track records...",
    date: "2026-04-15",
    category: "Market Intelligence",
    readTime: "6 min",
  },
  {
    slug: "pig-iron-specifications-foundry-guide",
    title: "Pig Iron Specifications: A Foundry Procurement Guide",
    excerpt:
      "Technical breakdown of foundry vs. steelmaking pig iron grades, chemistry windows, and inspection protocols for import buyers.",
    content:
      "Selecting the correct pig iron grade is critical for casting quality and furnace efficiency. This guide covers silicon ranges, sulfur limits, and the documentation required for international shipments...",
    date: "2026-03-28",
    category: "Technical",
    readTime: "8 min",
  },
  {
    slug: "india-steel-export-corridor-africa",
    title: "India–Africa Steel Raw Materials Corridor",
    excerpt:
      "How logistics optimization and trade agreements are accelerating Indian metallurgy exports to African steel markets.",
    content:
      "The India-Africa trade corridor has emerged as a strategic channel for pig iron, ferro alloys, and industrial minerals. Port infrastructure improvements in Mombasa and Lagos are reducing transit times...",
    date: "2026-02-10",
    category: "Trade & Logistics",
    readTime: "5 min",
  },
  {
    slug: "natural-graphite-ev-supply-chain",
    title: "Natural Graphite in the EV Supply Chain",
    excerpt:
      "Flake graphite demand, purification requirements, and export compliance for battery-grade material buyers.",
    content:
      "As battery manufacturers scale production, natural graphite sourcing has become a strategic priority. Indian flake deposits offer competitive carbon content with growing processing capacity...",
    date: "2026-01-22",
    category: "Industry Trends",
    readTime: "7 min",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
