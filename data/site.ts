import type { Testimonial } from "@/types";
import { getAbsoluteUrl } from "@/lib/site-url";
import { Warehouse, Ship, Container } from "lucide-react";

export const company = {
  name: "SSL Group",
  tagline: "Global Metallurgy. Trusted Supply.",
  legalName: "SSL Group International Trading Pvt. Ltd.",
  website: "https://www.sslgroup.in/",
  domain: "www.sslgroup.in",
  email: "support@sslgroup.in",
  salesEmail: "support@sslgroup.in",
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
