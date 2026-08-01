import type { Testimonial } from "@/types";
import { getAbsoluteUrl } from "@/lib/site-url";
import { Warehouse, Container, FlaskConical } from "lucide-react";
import { Ship, FileCheck, Anchor, Truck, Globe, BadgeCheck, Building2, GraduationCap, Trophy, Users, BriefcaseBusiness, FileUser, SearchCheck, Phone } from "lucide-react";
import { title } from "process";

export const company = {
  key: "SSLGroup",
  name: "SSL Group",
  tagline: "Global Metallurgy. Trusted Supply.",
  legalName: "SSL Group International Trading Pvt. Ltd.",
  website: "https://www.sslgroup.in/",
  domain: "www.sslgroup.in",
  email: "info@sslgroup.in",
  salesEmail: "export@sslgroup.in",
  hrEmail: "shivani.yadav@sslgroup.in",
  phone: "+91 - 9599053449",
  whatsapp: "+91 - 9599053449",
  address: {
    line1: "Head Office : Ground Floor, CC-23, AVANTIKA 1, Avantika Main Road, Saini Washing Center, Avantika, Ghaziabad,",
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
  { key: "career", href: "/career" },
  { key: "media", href: "/media-center" },
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

// Careers

export const Benefits = [
  {
    key: "globalExposure",
    icon: Globe,
    desc: "Work with export operations spanning Africa, Middle East, and European markets across 45+ countries.",
  },
  {
    key: "industryCertifications",
    icon: BadgeCheck,
    desc: "Access ISO 9001, BIS, and international trade compliance training to grow your professional credentials.",
  },
  {
    key: "ghaziabadHQ",
    icon: Building2,
    desc: "Modern office at the heart of India's industrial corridor with excellent NCR connectivity.",
  },
  {
    key: "learningDevelopment",
    icon: GraduationCap,
    desc: "Sponsored certifications, metallurgy domain workshops, and cross-functional rotations.",
  },
  {
    key: "performanceRewards",
    icon: Trophy,
    desc: "Quarterly bonuses tied to trade volumes, ESOPs for senior roles, and annual recognition awards.",
  },
  {
    key: "collaborativeCulture",
    icon: Users,
    desc: "Flat hierarchy, cross-border teams, and a culture built on trade expertise and mutual growth.",
  },
];

export const Jobopening = [
  { key: "exportDocumentationExecutive", title: "Export Documentation Executive", dept: "Operations", type: "Full-time", location: "Ghaziabad", domain:"Internatoinal" },
  { key: "exportDocumentationManager", title: "Export Documentation Manager", dept: "Operations", type: "Full-time", location: "Ghaziabad", domain:"Internatoinal" },
  { key: "internationalTradeManager", title: "International Trade Manager", dept: "Trade", type: "Full-time", location: "Ghaziabad", domain:"Internatoinal" },
  { key: "accountExecutive", title: "Account Executive", dept: "Account", type: "Full-time", location: "Ghaziabad", domain:"All" },
  { key: "accountManager", title: "Account Manager", dept: "Account", type: "Full-time", location: "Ghaziabad", domain:"All" },
  { key: "hrExecutive", title: "HR Executive", dept: "Human Resource", type: "Full-time", location: "Ghaziabad", domain:"All" },
  { key: "hrManager", title: "HR Manager", dept: "Human Resource", type: "Full-time", location: "Ghaziabad", domain:"All" },
  { key: "itExecutive", title: "IT Executive", dept: "IT", type: "Full-time", location: "Ghaziabad", domain:"All" },
  { key: "corporateLawyer", title: "Corporate Lawyer", dept: "Legal", type: "Full-time", location: "Ghaziabad", domain:"All" },
  { key: "adminExecutive", title: "Admin Executive", dept: "Admin Office", type: "Full-time", location: "Ghaziabad", domain:"All" },
  { key: "logisticsCoordinator", title: "Logistics Coordinator", dept: "Logistics", type: "Full-time", location: "Ghaziabad", domain:"All" },
  { key: "businessDevelopmentExecutive", title: "Business Development Executive", dept: "Sale & Marketing", type: "Full-time", location: "Ghaziabad", domain: "Domestic" },
  { key: "globalBusinessDevelopment", title: "Global Business Development", dept: "Sale & Marketing", type: "Full-time", location: "Ghaziabad", domain:"Internatoinal" },
  { key: "exportSales", title: "Export Sales", dept: "Sale & Marketing", type: "Full-time", location: "Ghaziabad", domain:"Internatoinal" },
  { key: "businessDevelopmentAssistent", title: "Business Development Assistant", dept: "Sale & Marketing", type: "Full-time", location: "Ghaziabad", domain: "Domestic" },
  { key: "businessDevelopmentManager", title: "Business Development Manager", dept: "Sale & Marketing", type: "Full-time", location: "Ghaziabad", domain: "Domestic" },
  { key: "domesticSales", title: "Domestic Sales", dept: "Sale & Marketing", type: "Full-time", location: "Ghaziabad", domain: "Domestic" },

];

export const Domain = [
  { value: "All Domains", label: "all" },
  { value: "Internatoinal", label: "internatoinal" },
  { value: "Domestic", label: "domestic" },
]

export const Departments = [
  { value: "All Departments", label: "all" },
  { value: "Admin Office", label: "adminOffice" },
  { value: "Human Resource", label: "humanResource" },
  { value: "IT", label: "it" },
  { value: "Legal", label: "legal" },
  { value: "Operations", label: "operations" },
  { value: "Trade", label: "trade" },
  { value: "Account", label: "account" },
  { value: "Logistics", label: "logistics" },
  { value: "Sale & Marketing", label: "sales" }
] as const;

export const Worktype = [
  { value: "All Types", label: "all" },
  { value: "Full-time", label: "fullTime" },
  { value: "Contracts", label: "contract" },
  { value: "Remote", label: "remote" },
  { value: "Hybrid", label: "hybrid" }
] as const;

export const Recruitments = [
  {
    step: "01",
    key: "applicationSubmission",
    desc: "Submit your resume and cover letter through our portal. Our team reviews every application with care.",
    icon: FileUser,
  },
  {
    step: "02",
    key: "domainAssessment",
    desc: "A short task or test relevant to your role — trade knowledge, technical skills, or case analysis.",
    icon: SearchCheck,
  },
  {
    step: "03",
    key: "hrScreeningCall",
    desc: "A 20-minute conversation about your background, expectations, and fit with SSL Group's culture.",
    icon: Phone,
  },
  {
    step: "04",
    key: "finalInterview",
    desc: "Meet with department heads and leadership. Offer letter issued within 5 working days post-interview.",
    icon: Users,
  },
];

export const Culture = [
  {
    key: "ownershipCulture",
    body:
      "Junior analysts work directly with senior traders. Your decisions affect real export volumes — you'll feel it from day one.",
    gradient: "from-[#F97316]/20 to-transparent",
    accent: "#F97316",
  },
  {
    key: "globalPerspective",
    body:
      "Coordinate with counterparts in Dubai, Lagos, Rotterdam, and Seoul. Every week brings a new market, a new conversation.",
    gradient: "from-[#EAB308]/20 to-transparent",
    accent: "#EAB308",
  },
  {
    key: "domainMastery",
    body:
      "Specialize in materials science, trade compliance, logistics, or digital infrastructure — and become the company's best in your space.",
    gradient: "from-[#F97316]/20 to-transparent",
    accent: "#F97316",
  },
]


