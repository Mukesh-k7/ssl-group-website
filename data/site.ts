import type { NavItem, Stat, Testimonial } from "@/types";
import { getAbsoluteUrl } from "@/lib/site-url";

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
  founded: 1998,
  catalogUrl: getAbsoluteUrl("/catalog/ssl-brouchser-final.pdf"),
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Export", href: "/export-logistics" },
  { label: "Certifications", href: "/certifications" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Global Presence", href: "/global-presence" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats: Stat[] = [
  { label: "Years of Excellence", value: 28, suffix: "+" },
  { label: "Countries Served", value: 45, suffix: "+" },
  { label: "Annual Export Volume", value: 2.4, suffix: "M MT", prefix: "" },
  { label: "Global Partners", value: 320, suffix: "+" },
];

export const whyChooseUs = [
  {
    title: "Export-Grade Quality Assurance",
    description:
      "Every shipment undergoes multi-stage metallurgical testing, third-party inspection, and documented compliance before dispatch.",
    icon: "ShieldCheck",
  },
  {
    title: "Integrated Supply Chain",
    description:
      "Direct sourcing from certified mines and smelters, bonded warehousing, and optimized logistics for just-in-time delivery.",
    icon: "Truck",
  },
  {
    title: "Global Trade Expertise",
    description:
      "Dedicated export desks for Middle East, Africa, and Europe with Incoterms flexibility and trade finance support.",
    icon: "Globe2",
  },
  {
    title: "Technical Metallurgy Support",
    description:
      "In-house metallurgists assist procurement teams with grade selection, alloy optimization, and specification alignment.",
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
    region: "UAE",
  },
  {
    quote:
      "Their pig iron grades meet our foundry specifications without deviation. Documentation and LC compliance are enterprise-grade.",
    author: "Elena Vasquez",
    role: "Materials Director",
    company: "EuroCast Foundries",
    region: "Spain",
  },
  {
    quote:
      "From zinc ore to natural graphite, SSL Group consolidates our raw material basket with transparent pricing and reliable African corridor logistics.",
    author: "James Okafor",
    role: "VP Supply Chain",
    company: "Continental Steel Works",
    region: "Nigeria",
  },
];

export const exportRegions = [
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait"],
    description: "Strategic hub for steel and EPC procurement with dedicated Jebel Ali routing.",
  },
  {
    name: "Africa",
    countries: ["Nigeria", "Kenya", "South Africa", "Egypt", "Morocco"],
    description: "Growing foundry and infrastructure demand served via Mombasa and Lagos corridors.",
  },
  {
    name: "Europe",
    countries: ["Germany", "Italy", "Spain", "Netherlands", "Poland"],
    description: "Distributor network for ferro alloys and industrial minerals across EU steel clusters.",
  },
  {
    name: "Asia-Pacific",
    countries: ["Vietnam", "Indonesia", "Bangladesh", "Thailand"],
    description: "Expanding partnerships with regional steel manufacturers and pipe producers.",
  },
];
