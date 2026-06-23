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




// export const BENEFITS = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
//       </svg>
//     ),
//     title: "Global Exposure",
//     desc: "Work with export operations spanning Africa, Middle East, and European markets across 45+ countries.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//       </svg>
//     ),
//     title: "Industry Certifications",
//     desc: "Access ISO 9001, BIS, and international trade compliance training to grow your professional credentials.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
//       </svg>
//     ),
//     title: "Ghaziabad HQ",
//     desc: "Modern office at the heart of India's industrial corridor with excellent NCR connectivity.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
//       </svg>
//     ),
//     title: "Learning & Development",
//     desc: "Sponsored certifications, metallurgy domain workshops, and cross-functional rotations.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
//       </svg>
//     ),
//     title: "Performance Rewards",
//     desc: "Quarterly bonuses tied to trade volumes, ESOPs for senior roles, and annual recognition awards.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
//       </svg>
//     ),
//     title: "Collaborative Culture",
//     desc: "Flat hierarchy, cross-border teams, and a culture built on trade expertise and mutual growth.",
//   },
// ];


const JOB_OPENINGS = [
  { title: "Export Documentation Executive", dept: "Operations", type: "Full-time", location: "Ghaziabad" },
  { title: "International Trade Manager", dept: "Trade", type: "Full-time", location: "Ghaziabad" },
  { title: "Admin Executive", dept: "Admin Office", type: "Full-time", location: "Ghaziabad" },
  { title: "Logistics Coordinator", dept: "Logistics", type: "Full-time", location: "Ghaziabad" },
  { title: "Business Development Executive", dept: "Sales", type: "Full-time", location: "Ghaziabad" },
  { title: "Account Executive", dept: "Account", type: "Full-time", location: "Ghaziabad" },
  { title: "Account Manager", dept: "Account", type: "Full-time", location: "Ghaziabad" },
  { title: "HR Executive", dept: "Human Resource", type: "Full-time", location: "Ghaziabad" },
  { title: "HR Manager", dept: "Human Resource", type: "Full-time", location: "Ghaziabad" },
  { title: "IT Executive", dept: "IT", type: "Full-time", location: "Ghaziabad" },
  { title: "Co-operate Laywer", dept: "Legal", type: "Full-time", location: "Ghaziabad" },

];

const STATS = [
  { value: "28+", label: "Years of Operations" },
  { value: "45+", label: "Countries Served" },
  { value: "2.4M MT", label: "Annual Export Volume" },
  { value: "320+", label: "Global Export Partners" },
];

// const RECRUITMENT_STEPS = [
//   {
//     step: "01",
//     title: "Application Submission",
//     desc: "Submit your resume and cover letter through our portal. Our team reviews every application with care.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
//       </svg>
//     ),
//   },
//   {
//     step: "02",
//     title: "Domain Assessment",
//     desc: "A short task or test relevant to your role — trade knowledge, technical skills, or case analysis.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
//       </svg>
//     ),
//   },
//   {
//     step: "03",
//     title: "HR Screening Call",
//     desc: "A 20-minute conversation about your background, expectations, and fit with SSL Group's culture.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//       </svg>
//     ),
//   },
//   {
//     step: "04",
//     title: "Final Interview",
//     desc: "Meet with department heads and leadership. Offer letter issued within 5 working days post-interview.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
//       </svg>
//     ),
//   },
// ];

const DEPARTMENTS = ["All Departments", "Operations", "Trade", "Quality", "Logistics", "Sales", "Marketing", "IT", "Legal"];
const WORK_TYPES = ["All Types", "Full-time", "Contract", "Remote", "Hybrid"];

const Culture = [
  {
    label: "Ownership Culture",
    body:
      "Junior analysts work directly with senior traders. Your decisions affect real export volumes — you'll feel it from day one.",
    gradient: "from-[#F97316]/20 to-transparent",
    accent: "#F97316",
  },
  {
    label: "Global Perspective",
    body:
      "Coordinate with counterparts in Dubai, Lagos, Rotterdam, and Seoul. Every week brings a new market, a new conversation.",
    gradient: "from-[#EAB308]/20 to-transparent",
    accent: "#EAB308",
  },
  {
    label: "Domain Mastery",
    body:
      "Specialize in materials science, trade compliance, logistics, or digital infrastructure — and become the company's best in your space.",
    gradient: "from-[#F97316]/20 to-transparent",
    accent: "#F97316",
  },
]