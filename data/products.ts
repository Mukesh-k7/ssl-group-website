import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "pig-iron",
    key: "PigIron",
    category: "Ferrous Metals",
    shortDescription:
      "Foundry and steel-grade pig iron with controlled silicon and sulfur for blast furnace and casting applications.",
    description:
      "SSL Group exports premium foundry and basic pig iron sourced from ISO-certified integrated steel plants. Our pig iron meets stringent chemistry requirements for automotive castings, ductile iron production, and steelmaking charge materials.",
    image: "/images/products/pig-iron.png",
    featured: true,
    specifications: [
      { labelKey: "Carbon", value: "3.5 – 4.5%" },
      { labelKey: "Silicon", value: "1.0 – 3.5%" },
      { labelKey: "Sulfur", value: "≤ 0.06%" },
      { labelKey: "Phosphorus", value: "≤ 0.12%" },
    ],
    applications: [
      "Foundrycastings",
      "Ductileironproduction",
      "Steelchargematerial",
      "Automotivecomponents",
    ],
  },

  {
    slug: "ferro-alloys",
    key: "FerroAlloys",
    category: "Alloying Materials",
    shortDescription:
      "Ferro manganese, ferro silicon, ferro chrome, and specialty alloys for steel deoxidation and alloying.",
    description:
      "Comprehensive ferro alloy portfolio for integrated steel plants and mini-mills. We supply low-carbon and high-carbon grades with batch traceability and sieve analysis documentation.",
    image: "/images/products/ferroalloys-1.jpg",
    featured: true,
    specifications: [
      { labelKey: "FeMn", value: "75 – 82%" },
      { labelKey: "FeSi", value: "70 – 75%" },
      { labelKey: "FeCr", value: "60 – 70%" },
      { labelKey: "Packaging", value: "1 MT bags / Bulk" },
      { labelKey: "Standards", value: "ASTM / ISO equivalent" },
    ],
    applications: [
      "Steeldeoxidation",
      "Alloysteelproduction",
      "Stainlesssteelmanufacturing",
      "Weldingconsumables",
    ],
  },

  {
    slug: "nobal-alloy",
    key: "NobalAlloy",
    category: "Specialty Alloys",
    shortDescription:
      "High-purity Nobal Alloy for grain refinement and micro-alloying in specialty steel grades.",
    description:
      "Precision Nobal Alloy with controlled titanium content for aerospace-grade steels, high-strength low-alloy applications, and critical casting operations requiring grain refinement.",
    image: "/images/products/NOBLE-ALLOYS3.png",
    featured: true,
    specifications: [
      { labelKey: "Titanium", value: "30 – 40%" },
      { labelKey: "Aluminum", value: "≤ 5%" },
      { labelKey: "Carbon", value: "≤ 0.20%" },
      { labelKey: "Size", value: "10 – 50 mm" },
      { labelKey: "Form", value: "Lumps / Cored wire compatible" },
    ],
    applications: [
      "Grainrefinement",
      "MicroalloyedHSLAsteel",
      "Aerospacealloysteels",
      "Specialtycastings",
    ],
  },

  {
    slug: "carbon-products",
    key: "CarbonProducts",
    category: "Carbon Materials",
    shortDescription:
      "Calcined petroleum coke, metallurgical coke, and carbon raisers for steel and foundry operations.",
    description:
      "Export-grade carbon products including CPC, GPC, and anthracite-based carbon raisers with low ash and volatile matter for EAF steelmaking and foundry cupola operations.",
    image: "/images/products/carbon-product.jpg",
    specifications: [
      { labelKey: "FixedCarbon", value: "90 – 99%" },
      { labelKey: "Ash", value: "≤ 1.0%" },
      { labelKey: "VolatileMatter", value: "≤ 1.5%" },
      { labelKey: "Sulfur", value: "≤ 0.8%" },
      { labelKey: "Sizing", value: "0 – 30 mm customizable" },
    ],
    applications: [
      "EAFsteelmaking",
      "Foundrycupolacharge",
      "Anodemanufacturing",
      "Carbonraiserapplications",
    ],
  },

  {
    slug: "carbide-ore",
    key: "CarbideOre",
    category: "Industrial Minerals",
    shortDescription:
      "High-grade carbide concentrate and ore for smelters and galvanizing supply chains.",
    description:
      "Direct export of carbide ore and concentrate with consistent carbide content, low impurities, and full assay certificates for smelter and galvanizing industry procurement.",
    image: "/images/products/Silicon-Carbide-1.jpg",
    specifications: [
      { labelKey: "Carbide", value: "45 – 55%" },
      { labelKey: "Lead", value: "≤ 8%" },
      { labelKey: "Iron", value: "≤ 12%" },
      { labelKey: "Moisture", value: "≤ 8%" },
      { labelKey: "Form", value: "Concentrate / Ore" },
    ],
    applications: [
      "Zincsmelting",
      "Galvanizingindustry",
      "Diecastingalloys",
      "Chemicalprocessing",
    ],
  },

  {
    slug: "natural-graphite",
    key: "NaturalGraphite",
    category: "Industrial Minerals",
    shortDescription:
      "Flake and amorphous natural graphite for refractories, batteries, and lubricant industries.",
    description:
      "Premium natural graphite with controlled flake size distribution, high carbon content, and low ash for refractory brick, EV battery anode precursors, and industrial lubricant manufacturing.",
    image: "/images/products/natural-graphite.jpg",
    specifications: [
      { labelKey: "FixedCarbon", value: "85 – 97%" },
      { labelKey: "Ash", value: "≤ 5%" },
      { labelKey: "FlakeSize", value: "+50 to -200 mesh" },
      { labelKey: "Moisture", value: "≤ 2%" },
      { labelKey: "Types", value: "Flake / Amorphous" },
    ],
    applications: [
      "Refractorymanufacturing",
      "Batteryanodematerials",
      "Industriallubricants",
      "Gasketsandseals",
    ],
  },

  {
    slug: "steel-pipes-tubes",
    key: "SteelPipesTubes",
    category: "Finished Steel",
    shortDescription:
      "Seamless and welded steel pipes for oil & gas, infrastructure, and industrial fluid transport.",
    description:
      "API and ASTM compliant steel pipes and tubes for energy sector, water infrastructure, and industrial process piping with full mill test certification.",
    image: "/images/products/steel-pipes.jpg",
    specifications: [
      { labelKey: "Grades", value: "API 5L / ASTM A106 / A53" },
      { labelKey: "ODRange", value: "1/2\" – 48\"" },
      { labelKey: "WallThickness", value: "SCH 10 – SCH 160" },
      { labelKey: "Ends", value: "Beveled / Threaded / Plain" },
      { labelKey: "Coating", value: "FBE / 3LPE available" },
    ],
    applications: [
      "Oilgastransmission",
      "Waterinfrastructure",
      "EPCprojectpiping",
      "Industrialprocesslines",
    ],
  },

  {
    slug: "industrial-minerals",
    key: "IndustrialMinerals",
    category: "Industrial Minerals",
    shortDescription:
      "Bauxite, fluorspar, quartz, and specialty minerals for steel and chemical industries.",
    description:
      "Diversified industrial minerals portfolio supporting steel fluxing, aluminum production, and chemical manufacturing with consistent quality and export documentation.",
    image: "/images/products/industrial-minerals.jpg",
    specifications: [
      { labelKey: "Products", value: "Bauxite, Fluorspar, Quartz" },
      { labelKey: "Purity", value: "Grade-specific" },
      { labelKey: "Moisture", value: "≤ 10%" },
      { labelKey: "Packaging", value: "Bulk / Jumbo bags" },
      { labelKey: "Inspection", value: "SGS / Bureau Veritas" },
    ],
    applications: [
      "Steelfluxing",
      "Aluminumsmelting",
      "Chemicalfeedstock",
      "Ceramicmanufacturing",
    ],
  },

  {
    slug: "steel-raw-materials",
    key: "SteelIndustryRawMaterials",
    category: "Raw Materials",
    shortDescription:
      "Consolidated supply of iron ore, coal, scrap substitutes, and charge materials for steel plants.",
    description:
      "One-window procurement for integrated steel plants — iron ore fines and lumps, PCI coal, metallurgical coke, and alternative charge materials with vessel-level scheduling.",
    image: "/images/products/steel-product.jpg",
    featured: true,
    specifications: [
      { labelKey: "IronOreFe", value: "62 – 65%" },
      { labelKey: "MetCokeCSR", value: "≥ 62" },
      { labelKey: "PCICoal", value: "≤ 10% ash" },
      { labelKey: "Delivery", value: "FOB / CIF / CFR" },
      { labelKey: "Volumes", value: "5,000 – 75,000 MT" },
    ],
    applications: [
      "Blastfurnaceoperations",
      "DRIEAFplants",
      "Integratedsteelmills",
      "Pelletplantfeedstock",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
