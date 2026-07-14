import type { Certification, TimelineEvent } from "@/types";

export const certifications: Certification[] = [
  {
    key: "ISO9001:2015",
    issuer: "Bureau Veritas",
    description: "Quality management systems for export operations and supply chain control.",
    year: "2019",
  },
  {
    key: "ISO14001:2015",
    issuer: "TÜV SÜD",
    description: "Environmental management across warehousing, logistics, and sourcing operations.",
    year: "2021",
  },
  {
    key: "OHSAS45001",
    issuer: "DNV",
    description: "Occupational health and safety standards at processing and port facilities.",
    year: "2020",
  },
  {
    key: "ResponsibleMineralsInitiative",
    issuer: "RMI",
    description: "Conflict-free sourcing compliance for industrial minerals and ore exports.",
    year: "2022",
  },
  {
    key: "FIEOMember",
    issuer: "Federation of Indian Export Organisations",
    description: "Recognized Indian export house with verified trade credentials.",
    year: "2005",
  },
  {
    key: "DGFTRegistered",
    issuer: "Directorate General of Foreign Trade",
    description: "Authorized star export house status with multi-product export licensing.",
    year: "2008",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2018",
    key: "Foundation",
    description: "SSL Group established in Delhi as a metallurgical raw materials trading firm.",
  },
  {
    year: "2019",
    key: "Export",
    description: "First international shipments of pig iron and ferro alloys to Middle East markets.",
  },
  {
    year: "2020",
    key: "Africa",
    description: "Dedicated trade corridor established for West and East African steel manufacturers.",
  },
  {
    year: "2021",
    key: "Infrastructure",
    description: "Bonded warehousing and port-side blending facilities commissioned at major Indian ports.",
  },
  {
    year: "2022",
    key: "European",
    description: "Strategic distributor partnerships formed across Germany, Italy, and Spain.",
  },
  {
    year: "2024",
    key: "Sustainability",
    description: "ESG reporting and responsible sourcing program launched across mineral supply chains.",
  },
];
