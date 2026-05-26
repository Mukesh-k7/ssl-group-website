import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "pig-iron",
    name: "Pig Iron",
    category: "Ferrous Metals",
    shortDescription:
      "Foundry and steel-grade pig iron with controlled silicon and sulfur for blast furnace and casting applications.",
    description:
      "SSL Group exports premium foundry and basic pig iron sourced from ISO-certified integrated steel plants. Our pig iron meets stringent chemistry requirements for automotive castings, ductile iron production, and steelmaking charge materials.",
    image: "/images/products/images-pig-iron.png",
    featured: true,
    specifications: [
      { label: "Carbon (C)", value: "3.5 – 4.5%" },
      { label: "Silicon (Si)", value: "1.0 – 3.5%" },
      { label: "Sulfur (S)", value: "≤ 0.06%" },
      { label: "Phosphorus (P)", value: "≤ 0.12%" },
      { label: "Form", value: "Pigs / Breaker" },
    ],
    applications: [
      "Foundry castings",
      "Ductile iron production",
      "Steel charge material",
      "Automotive components",
    ],
  },
  {
    slug: "ferro-alloys",
    name: "Ferro Alloys",
    category: "Alloying Materials",
    shortDescription:
      "Ferro manganese, ferro silicon, ferro chrome, and specialty alloys for steel deoxidation and alloying.",
    description:
      "Comprehensive ferro alloy portfolio for integrated steel plants and mini-mills. We supply low-carbon and high-carbon grades with batch traceability and sieve analysis documentation.",
    image: "/images/products/images-ferro-silicon.png",
    featured: true,
    specifications: [
      { label: "FeMn (Mn)", value: "75 – 82%" },
      { label: "FeSi (Si)", value: "70 – 75%" },
      { label: "FeCr (Cr)", value: "60 – 70%" },
      { label: "Packaging", value: "1 MT bags / Bulk" },
      { label: "Standards", value: "ASTM / ISO equivalent" },
    ],
    applications: [
      "Steel deoxidation",
      "Alloy steel production",
      "Stainless steel manufacturing",
      "Welding consumables",
    ],
  },
  {
    slug: "ferro-titanium",
    name: "Ferro Titanium",
    category: "Specialty Alloys",
    shortDescription:
      "High-purity ferro titanium for grain refinement and micro-alloying in specialty steel grades.",
    description:
      "Precision ferro titanium with controlled titanium content for aerospace-grade steels, high-strength low-alloy applications, and critical casting operations requiring grain refinement.",
    image: "/images/products/images-ferro-titanium.png",
    featured: true,
    specifications: [
      { label: "Titanium (Ti)", value: "30 – 40%" },
      { label: "Aluminum (Al)", value: "≤ 5%" },
      { label: "Carbon (C)", value: "≤ 0.20%" },
      { label: "Size", value: "10 – 50 mm" },
      { label: "Form", value: "Lumps / Cored wire compatible" },
    ],
    applications: [
      "Grain refinement",
      "Micro-alloyed HSLA steel",
      "Aerospace alloy steels",
      "Specialty castings",
    ],
  },
  {
    slug: "carbon-products",
    name: "Carbon Products",
    category: "Carbon Materials",
    shortDescription:
      "Calcined petroleum coke, metallurgical coke, and carbon raisers for steel and foundry operations.",
    description:
      "Export-grade carbon products including CPC, GPC, and anthracite-based carbon raisers with low ash and volatile matter for EAF steelmaking and foundry cupola operations.",
    image: "/images/products/images-carbon.png",
    specifications: [
      { label: "Fixed Carbon", value: "90 – 99%" },
      { label: "Ash", value: "≤ 1.0%" },
      { label: "Volatile Matter", value: "≤ 1.5%" },
      { label: "Sulfur", value: "≤ 0.8%" },
      { label: "Sizing", value: "0 – 30 mm customizable" },
    ],
    applications: [
      "EAF steelmaking",
      "Foundry cupola charge",
      "Anode manufacturing",
      "Carbon raiser applications",
    ],
  },
  {
    slug: "zinc-ore",
    name: "Zinc Ore",
    category: "Industrial Minerals",
    shortDescription:
      "High-grade zinc concentrate and ore for smelters and galvanizing supply chains.",
    description:
      "Direct export of zinc ore and concentrate with consistent Zn content, low impurities, and full assay certificates for smelter and galvanizing industry procurement.",
    image: "/images/products/zinc-ore.jpg",
    specifications: [
      { label: "Zinc (Zn)", value: "45 – 55%" },
      { label: "Lead (Pb)", value: "≤ 8%" },
      { label: "Iron (Fe)", value: "≤ 12%" },
      { label: "Moisture", value: "≤ 8%" },
      { label: "Form", value: "Concentrate / Ore" },
    ],
    applications: [
      "Zinc smelting",
      "Galvanizing industry",
      "Die casting alloys",
      "Chemical processing",
    ],
  },
  {
    slug: "natural-graphite",
    name: "Natural Graphite",
    category: "Industrial Minerals",
    shortDescription:
      "Flake and amorphous natural graphite for refractories, batteries, and lubricant industries.",
    description:
      "Premium natural graphite with controlled flake size distribution, high carbon content, and low ash for refractory brick, EV battery anode precursors, and industrial lubricant manufacturing.",
    image: "/images/products/natural-graphite.jpg",
    specifications: [
      { label: "Fixed Carbon", value: "85 – 97%" },
      { label: "Ash", value: "≤ 5%" },
      { label: "Flake Size", value: "+50 to -200 mesh" },
      { label: "Moisture", value: "≤ 2%" },
      { label: "Types", value: "Flake / Amorphous" },
    ],
    applications: [
      "Refractory manufacturing",
      "Battery anode materials",
      "Industrial lubricants",
      "Gaskets and seals",
    ],
  },
  {
    slug: "steel-pipes-tubes",
    name: "Steel Pipes & Tubes",
    category: "Finished Steel",
    shortDescription:
      "Seamless and welded steel pipes for oil & gas, infrastructure, and industrial fluid transport.",
    description:
      "API and ASTM compliant steel pipes and tubes for energy sector, water infrastructure, and industrial process piping with full mill test certification.",
    image: "/images/products/steel-pipes.jpg",
    specifications: [
      { label: "Grades", value: "API 5L / ASTM A106 / A53" },
      { label: "OD Range", value: "1/2\" – 48\"" },
      { label: "Wall Thickness", value: "SCH 10 – SCH 160" },
      { label: "Ends", value: "Beveled / Threaded / Plain" },
      { label: "Coating", value: "FBE / 3LPE available" },
    ],
    applications: [
      "Oil & gas transmission",
      "Water infrastructure",
      "EPC project piping",
      "Industrial process lines",
    ],
  },
  {
    slug: "industrial-minerals",
    name: "Industrial Minerals",
    category: "Industrial Minerals",
    shortDescription:
      "Bauxite, fluorspar, quartz, and specialty minerals for steel and chemical industries.",
    description:
      "Diversified industrial minerals portfolio supporting steel fluxing, aluminum production, and chemical manufacturing with consistent quality and export documentation.",
    image: "/images/products/industrial-minerals.jpg",
    specifications: [
      { label: "Products", value: "Bauxite, Fluorspar, Quartz" },
      { label: "Purity", value: "Grade-specific" },
      { label: "Moisture", value: "≤ 10%" },
      { label: "Packaging", value: "Bulk / Jumbo bags" },
      { label: "Inspection", value: "SGS / Bureau Veritas" },
    ],
    applications: [
      "Steel fluxing",
      "Aluminum smelting",
      "Chemical feedstock",
      "Ceramic manufacturing",
    ],
  },
  {
    slug: "steel-raw-materials",
    name: "Steel Industry Raw Materials",
    category: "Raw Materials",
    shortDescription:
      "Consolidated supply of iron ore, coal, scrap substitutes, and charge materials for steel plants.",
    description:
      "One-window procurement for integrated steel plants — iron ore fines and lumps, PCI coal, metallurgical coke, and alternative charge materials with vessel-level scheduling.",
    image: "/images/products/images-steel-shot.png",
    featured: true,
    specifications: [
      { label: "Iron Ore Fe", value: "62 – 65%" },
      { label: "Met Coke CSR", value: "≥ 62" },
      { label: "PCI Coal", value: "≤ 10% ash" },
      { label: "Delivery", value: "FOB / CIF / CFR" },
      { label: "Volumes", value: "5,000 – 75,000 MT" },
    ],
    applications: [
      "Blast furnace operations",
      "DRI / EAF plants",
      "Integrated steel mills",
      "Pellet plant feedstock",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
