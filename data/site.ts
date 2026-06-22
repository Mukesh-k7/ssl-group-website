import type { Testimonial } from "@/types";
import { getAbsoluteUrl } from "@/lib/site-url";
import { Warehouse, Container, FlaskConical } from "lucide-react";
import { Ship, FileCheck, Anchor, Truck } from "lucide-react";

export const company = {
  key: "SSLGroup",
  name: "SSL Group",
  tagline: "Global Metallurgy. Trusted Supply.",
  legalName: "SSL Group International Trading Pvt. Ltd.",
  website: "https://www.sslgroup.in/",
  domain: "www.sslgroup.in",
  email: "support@sslgroup.in",
  salesEmail: "abc@sslgroup.in",
  hrEmail: "shivani.yadav@sslgroup.in",
  phone: "+91 - 9599053449",
  whatsapp: "+91 - 9599053449",
  address: {
    line1: "Delhi Head Office : Ground Floor, CC-23, AVANTIKA 1, Avantika Main Road, Saini Washing Center, Avantika, Ghaziabad,",
    line2: " Uttar Pradesh 201015, India",
  },
  founded: 2018,
  catalogUrl: getAbsoluteUrl("/catalog/ssl-product-catalog.pdf"),
};

export type NavItem = {
  key: string;
  href: string;
};

export type Stat = {
  key: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export const navigation: NavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "industries", href: "/industries" },
  { key: "export", href: "/export-logistics" },
  { key: "certifications", href: "/certifications" },
  { key: "infrastructure", href: "/infrastructure" },
  { key: "globalPresence", href: "/global-presence" },
  { key: "insights", href: "/blog" },
  { key: "contact", href: "/contact" },
  { key: "career", href: "/career" }
];

export const stats: Stat[] = [
  { key: "yearsofExcellence", value: 28, suffix: "+" },
  { key: "countriesServed", value: 45, suffix: "+" },
  { key: "annualExportVolume", value: 2.4, suffix: "M MT", prefix: "" },
  { key: "globalPartners", value: 320, suffix: "+" },
];

export const whyChooseUs = [
  {
    key: "QualityAssurance",
    icon: "ShieldCheck",
  },
  {
    key: "SupplyChain",
    icon: "Truck",
  },
  {
    key: "TradeExpertise",
    icon: "Globe2",
  },
  {
    key: "MetallurgySupport",
    icon: "FlaskConical",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "SSL Group has been our primary ferro alloy supplier for three integrated steel plants. Consistency in chemistry and on-time vessel loading is exceptional.",
    author: "Khalid Al-Rashid",
    role: "Chief Procurement Officer",
    company: "Gulf Steel Industries",
    key: "UAE",
  },
  {
    quote:
      "Their pig iron grades meet our foundry specifications without deviation. Documentation and LC compliance are enterprise-grade.",
    author: "Anirudh Tandon",
    role: "Materials Director",
    company: "EuroCast Foundries",
    key: "India",
  },
  {
    quote:
      "From zinc ore to natural graphite, SSL Group consolidates our raw material basket with transparent pricing and reliable African corridor logistics.",
    author: "James Okafor",
    role: "VP Supply Chain",
    company: "Continental Steel Works",
    key: "Tanzania",
  },
];

export const exportRegions = [
  {
    key: "MiddleEast",
  },
  {
    key: "Africa",
  },
  {
    key: "Europe",
  },
  {
    key: "AsiaPacific",
  },
];

export const facilities = [
  {
    icon: Warehouse,
    key: "BondedWarehousing",
  },
  {
    icon: Ship,
    key: "VesselLoading",
  },
  {
    icon: Container,
    key: "ContainerBulk",
  },

];

export const Values = [
  {
    key: "Integrity",
    description:
      "Transparent pricing, documented compliance, and ethical sourcing across every transaction.",
  },
  {
    key: "Technical",
    description:
      "Metallurgical expertise guiding grade selection, specification alignment, and quality assurance.",
  },
  {
    key: "Global",
    description:
      "On-time vessel loading, consistent chemistry, and responsive export desk support worldwide.",
  },
  {
    key: "Sustainable",
    description:
      "Responsible minerals initiative compliance and ESG-aligned supply chain development.",
  },
];

export const facilitiess = [
  {
    icon: Warehouse,
    key: "Warehousing",
    stats: "50,000+ MT",
    description:
      "Climate-controlled storage at Mumbai, Kandla, and Visakhapatnam with inventory management and blending capabilities.",
    locations: ["Delhi", "Kolkata", "Vizag"],
  },
  {
    icon: FlaskConical,
    key: "Laboratories",
    stats: "3 Labs",
    description:
      "In-house and partner labs for chemical analysis, sieve testing, and metallurgical property verification before dispatch.",
    locations: ["Delhi HQ", "Kandla Port", "Vizag Port"],
  },
  {
    icon: Ship,
    key: "Operations",
    stats: "4 Major Ports",
    description:
      "Dedicated loading berths, stevedoring contracts, and vessel coordination for bulk and break-bulk shipments.",
    locations: ["JNPT", "Kandla", "Vizag", "Haldia"],
  },
  {
    icon: Container,
    key: "Dispatch",
    stats: "Multi-Modal",
    description:
      "Bulk vessel, containerized, jumbo bag, and break-bulk packaging with customizable sizing and labeling.",
    locations: ["Pan-India Network"],
  },
];

export const services = [
  {
    icon: Ship,
    key: "Chartering",
    description:
      "5,000–75,000 MT parcel sizes with FOB, CFR, and CIF terms. Experienced chartering desk for timely laycan scheduling.",
  },
  {
    icon: Anchor,
    key: "Operations",
    description:
      "Dedicated operations at Mumbai, Kandla, Vizag, and Haldia with berth access and stevedoring partnerships.",
  },
  {
    icon: FileCheck,
    key: "Documentation",
    description:
      "Full LC compliance, COO, inspection certificates, bill of lading, and customs documentation for seamless clearance.",
  },
  {
    icon: Truck,
    key: "Logistics",
    description:
      "Rail and road connectivity from mine and smelter to port with bonded warehousing for inventory management.",
  },
];