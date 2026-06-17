import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "steel-manufacturing",
    key: "SteelManufacturing",
    description:
      "Integrated and mini-mill steel producers rely on SSL Group for pig iron, ferro alloys, and charge materials with vessel-level reliability.",
    icon: "Factory",
    regions: ["Global", "Middle East", "Asia"],
  },

  {
    slug: "foundries",
    key: "Foundries & Castings",
    description:
      "Foundry-grade pig iron, ferro silicon, and inoculants with tight chemistry control for automotive and industrial castings.",
    icon: "Hammer",
    regions: ["Europe", "India", "Africa"],
  },

  {
    slug: "epc-contractors",
    key: "EPC Contractors",
    description:
      "Project-based supply of steel pipes, structural materials, and bulk raw materials aligned with construction milestones.",
    icon: "Building2",
    regions: ["Middle East", "Africa", "Asia-Pacific"],
  },

  {
    slug: "infrastructure",
    key: "Infrastructure",
    description:
      "Large-volume procurement for bridges, ports, and energy infrastructure with consolidated logistics management.",
    icon: "Landmark",
    regions: ["India", "Africa", "Middle East"],
  },

  {
    slug: "procurement",
    key: "Industrial Procurement",
    description:
      "Centralized sourcing for multi-site procurement teams with contract pricing and inventory management support.",
    icon: "ClipboardList",
    regions: ["Global"],
  },

  {
    slug: "galvanizing",
    key: "Galvanizing & Zinc",
    description:
      "Zinc ore and concentrate supply chains optimized for smelters and hot-dip galvanizing operations.",
    icon: "Layers",
    regions: ["Europe", "Asia"],
  },

  {
    slug: "refractories",
    key: "Refractories",
    description:
      "Natural graphite, bauxite, and industrial minerals for refractory brick and lining manufacturers.",
    icon: "Flame",
    regions: ["Global"],
  },

  {
    slug: "energy",
    key: "Oil & Gas",
    description:
      "API-compliant steel pipes and tubes for upstream, midstream, and downstream energy projects.",
    icon: "Fuel",
    regions: ["Middle East", "Africa"],
  },
];
