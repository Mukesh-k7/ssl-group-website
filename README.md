# SSL Group — Corporate Website

Premium industrial B2B export website for **SSL Group**, an Indian metallurgy and steel industry raw materials supplier and global exporter.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations & scroll effects
- **Shadcn/UI** patterns — Button, Card, Input, Label, etc.
- **Lucide Icons**
- **SEO** — Metadata API, OpenGraph, JSON-LD schema, sitemap, robots

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

```bash
cd ssl-group-website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/                    # Next.js App Router pages
  about/
  products/[slug]/
  industries/
  export-logistics/
  certifications/
  infrastructure/
  global-presence/
  blog/[slug]/
  contact/
  api/inquiry/          # Inquiry form API endpoint
components/
  layout/               # Navbar, Footer
  products/             # ProductCard
  shared/               # AnimatedSection, PageHero, WhatsApp
  ui/                   # Shadcn-style primitives
sections/               # Page sections (Hero, CTA, Stats, etc.)
data/                   # Products, industries, blog, site config
lib/                    # utils, SEO helpers
hooks/                  # useInView
types/                  # TypeScript interfaces
public/                 # Static assets, catalog PDF
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all marketing sections |
| `/about` | Company story, values, timeline |
| `/products` | Product catalog grid |
| `/products/[slug]` | Product detail with specs |
| `/industries` | Industries served |
| `/export-logistics` | Export & logistics services |
| `/certifications` | ISO & trade certifications |
| `/infrastructure` | Facilities & capabilities |
| `/global-presence` | Export regions & map |
| `/blog` | Industry insights |
| `/blog/[slug]` | Article detail |
| `/contact` | Export inquiry form |

## Customization

### Brand & Content

- **Company info:** `data/site.ts`
- **Products:** `data/products.ts`
- **Industries:** `data/industries.ts`
- **Blog:** `data/blog.ts`
- **Colors & fonts:** `app/globals.css`

### Images

Replace placeholder files in `public/images/` with professional industrial photography. Update paths in `data/products.ts` if needed.

### Email Integration

Wire `app/api/inquiry/route.ts` to Resend, SendGrid, or Nodemailer. Set `INQUIRY_TO_EMAIL` and API keys in `.env.local`.

### Google Maps

On the contact page, replace the map placeholder with an iframe embed from Google Maps.

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub/GitLab/Bitbucket
2. Import the project at [vercel.com](https://vercel.com)
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL` = your production domain
4. Deploy

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Enable `output: 'standalone'` in `next.config.ts` for Docker deployments.

### Other Platforms

- **Netlify:** Connect repo, build command `npm run build`, publish `.next`
- **AWS Amplify / Railway / Render:** Standard Next.js build settings

## SEO Checklist

- [x] Dynamic metadata per page
- [x] OpenGraph & Twitter cards
- [x] JSON-LD Organization & Product schema
- [x] `sitemap.xml` via `app/sitemap.ts`
- [x] `robots.txt` via `app/robots.ts`
- [x] Semantic HTML headings
- [ ] Submit sitemap to Google Search Console after deploy
- [ ] Replace `og-image.jpg` with 1200×630 branded image

## Features

- Responsive mobile-first design
- Sticky navbar with scroll state
- Framer Motion scroll animations
- Animated statistics counter
- WhatsApp floating button
- Download catalog CTA
- Export inquiry form with API route
- Product detail pages with specifications

## License

Proprietary — SSL Group. All rights reserved.
