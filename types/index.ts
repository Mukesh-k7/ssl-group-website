export interface ProductSpecification {
  key: string;
  value: string;
}

export interface TechnicalTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface Download {
  title: string;
  file: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductVariant {
  id: number;
  image: string;
  description: string;
  specifications: ProductSpecification[];
  technicalTables: TechnicalTable[];
  applications: string[];
  downloads: Download[];
  faq: FAQ[];
  translationKey: string;
}

export interface Product {
  slug: string;
  key: string;
  category: string;
  shortDescription: string;
  description: string;
  specification: { key: string; value: string }[];
  image: string;
  imageAlt: string;
  featured: boolean;
  variants: ProductVariant[];
}

export interface Products {
  slug: string;
  key: string;
  shortDescription: string;
  description: string;
  images: { pic: string; alt: string }[];
  image?: string;
  imageAlt?: string;
  category: string;
  specifications: { labelKey: string; value: string }[];
  applications: string[];
  featured?: boolean;
  className?: string;
  pic?: string;
  alt?: string;
}

export interface Industry {
  slug: string;
  key: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  slug: string;
  key: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export interface Certification {
  key: string;
  issuer: string;
  description: string;
  year: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  year: string;
  key: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  key: string;
}

export interface Region {
  name: string;
  countries: string[];
  description: string;
}

export interface CtaBannerProps {
  title?: string;
  description?: string;
}

export interface Values {
  title?: string;
  description?: string;
}

export interface Careers{
  slug: string;
  key: string;
  applications: string[];
  featured?: boolean;
  className?: string;
  dept: string;
  type: string;
  location: string;
  value: string;
  label: string;
  step: string;
  body: string;
  viewBox: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
  strokeLinecap: string;
  strokeLinejoin: string;
  d: string;
  icon: string
}

export interface MediaCategory{
  title: string;
}