export interface Product {
  slug: string;
  key: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  specifications: { labelKey: string; value: string }[];
  applications: string[];
  featured?: boolean;
  className?: string
}

export interface Industry {
  slug: string;
  key: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
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
  title: string;
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

interface CtaBannerProps {
  title?: string;
  description?: string;
}