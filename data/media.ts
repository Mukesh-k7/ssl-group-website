// data/media.ts
// All images from /public/images/media/ (real SSL Group photos)

export type MediaItem = {
  title: string;
  image: string;
  date?: string;
  description?: string;
};

export type MediaCategory = {
  id: string;
  items: MediaItem[];
};

export const mediaCategories: MediaCategory[] = [

  // ─── EVENTS & FESTIVALS ───────────────────────────────────────────────────
  {
    id: "events",
    items: [
      {
        title: "Republic Day Celebration 2024",
        image: "/images/media/IMG_1198.png",
        date: "Jan 26, 2024",
        description: "SSL Group team celebrates Republic Day with patriotic spirit and the tricolor at our Ghaziabad HQ.",
      },
      {
        title: "Republic Day 2024 — Full Team",
        image: "/images/media/IMG_1199.png",
        date: "Jan 26, 2024",
        description: "Full team assembled to mark India's Republic Day with pride and unity.",
      },
      {
        title: "Holi Celebration 2024 — Team Group",
        image: "/images/media/IMG_1506.png",
        date: "Mar 25, 2024",
        description: "Colors of joy! The SSL Group Holi bash brought the entire team together.",
      },
      {
        title: "Holi 2024 — Fun with Colors",
        image: "/images/media/IMG_1507.png",
        date: "Mar 25, 2024",
        description: "Smiles and colors — Holi celebrations at SSL Group office.",
      },
      {
        title: "Holi 2024 — Group Shot",
        image: "/images/media/IMG_1508.png",
        date: "Mar 25, 2024",
        description: "Another beautiful group moment from our Holi festivities.",
      },
      {
        title: "Holi 2024 — Team Photo",
        image: "/images/media/IMG_1509.png",
        date: "Mar 25, 2024",
        description: "The SSL Group family celebrating Holi with vibrant energy.",
      },
      {
        title: "Holi 2024 — Festive Vibes",
        image: "/images/media/IMG_1510.png",
        date: "Mar 25, 2024",
        description: "Festive props and fun — celebrating the festival of colors.",
      },
      {
        title: "Holi 2024 — Candid Moments",
        image: "/images/media/IMG_1511.png",
        date: "Mar 25, 2024",
        description: "Candid and joyful moments captured during Holi at SSL Group.",
      },
    ],
  },

  // ─── LIFE AT SSL GROUP ────────────────────────────────────────────────────
  {
    id: "life",
    items: [
      {
        title: "Fun at Office — Holi Edition",
        image: "/images/media/IMG_1512.png",
        description: "The SSL Group team letting loose and enjoying the Holi spirit indoors.",
      },
      {
        title: "Team Bonding — Holi Selfies",
        image: "/images/media/IMG_1513.png",
        description: "Selfie time during the Holi celebrations — pure team energy!",
      },
      {
        title: "Life at SSL — Festive Office Decor",
        image: "/images/media/IMG_1514.png",
        description: "Our office transforms into a festive space for every celebration.",
      },
      {
        title: "SSL Group Team Moments",
        image: "/images/media/IMG_1515.png",
        description: "Capturing joyful moments from daily life at SSL Group.",
      },
      {
        title: "Team Fun — Holi Group",
        image: "/images/media/IMG_1517.png",
        description: "A smaller group capturing the Holi spirit in full color.",
      },
      {
        title: "Office Celebration Vibes",
        image: "/images/media/IMG_1518.png",
        description: "The team enjoying festivities right in the heart of our Ghaziabad office.",
      },
      {
        title: "Fun Friday at SSL Group",
        image: "/images/media/IMG_1519.png",
        description: "SSL Group believes in work-life balance — Fun Fridays are a tradition.",
      },
      {
        title: "Team Selfie — Festive Celebration",
        image: "/images/media/IMG_1520.png",
        description: "Spontaneous team selfies during our festive office celebrations.",
      },
      {
        title: "SSL Group — Group Pose",
        image: "/images/media/IMG_1521.png",
        description: "Team posing together during one of our in-office celebrations.",
      },
      {
        title: "Dance & Fun at SSL",
        image: "/images/media/IMG_1522.png",
        description: "Music, dance and laughter — life at SSL Group is never dull!",
      },
      {
        title: "Team Spirit in Action",
        image: "/images/media/IMG_1523.png",
        description: "Our team's camaraderie shines through every celebration.",
      },
      {
        title: "SSL Group Family Moment",
        image: "/images/media/IMG_1524.png",
        description: "The SSL Group family — together in every milestone and celebration.",
      },
    ],
  },

  // ─── ACHIEVEMENTS & AWARDS ────────────────────────────────────────────────
  {
    id: "achievements",
    items: [
      {
        title: "Team Certificate Distribution",
        image: "/images/media/IMG_2720.png",
        date: "2024",
        description: "SSL Group team members proudly receiving their certificates of recognition and achievement.",
      },
      {
        title: "Performance Awards — SSL Group",
        image: "/images/media/IMG_2721.png",
        date: "2024",
        description: "Celebrating excellence — recognizing outstanding contributions across departments.",
      },
      {
        title: "Client Partnership — DGC Meeting",
        image: "/images/media/IMG_2105.png",
        date: "2025",
        description: "Formalizing a key partnership with Desai Group of Companies at their stall.",
      },
      {
        title: "Business Deal with DGC",
        image: "/images/media/IMG_2075.png",
        date: "2025",
        description: "SSL Group team with Desai Group of Companies — sealing a successful business agreement.",
      },
      {
        title: "Partnership Handshake — DGC",
        image: "/images/media/IMG_2076.png",
        date: "2025",
        description: "A strong handshake marks another successful global partnership for SSL Group.",
      },
      {
        title: "Collaboration with DGC",
        image: "/images/media/IMG_2077.png",
        date: "2025",
        description: "Building long-term relationships with global trade partners at industry events.",
      },
    ],
  },

  // ─── GLOBAL OPERATIONS ────────────────────────────────────────────────────
  {
    id: "global",
    items: [
      {
        title: "IFEX 2026 — SSL Group India",
        image: "/images/media/IMG_2093.png",
        date: "2026",
        description: "SSL Group India proudly represented at IFEX 2026 with our international trade banner.",
      },
      {
        title: "IFEX 2026 — Trade Fair Presence",
        image: "/images/media/IMG_2094.png",
        date: "2026",
        description: "Our team at the IFEX 2026 international trade fair showcasing SSL Group's global reach.",
      },
      {
        title: "IFEX 2026 — SSL Banner Display",
        image: "/images/media/IMG_2095.png",
        date: "2026",
        description: "SSL Group India banner at IFEX 2026 — connecting with international buyers and traders.",
      },
      {
        title: "IFEX 2026 — Team at Exhibition",
        image: "/images/media/IMG_2096.png",
        date: "2026",
        description: "Representing SSL Group at one of India's premier international trade exhibitions.",
      },
      {
        title: "IFEX 2026 — Hall 3 Entry",
        image: "/images/media/IMG_2087.png",
        date: "2026",
        description: "SSL Group team arriving at Hall 3 of IFEX 2026 for global networking.",
      },
      {
        title: "IFEX 2026 — Exhibition Floor",
        image: "/images/media/IMG_2088.png",
        date: "2026",
        description: "On the bustling exhibition floor at IFEX 2026 — meeting global trade partners.",
      },
      {
        title: "IFEX 2026 — Trade Networking",
        image: "/images/media/IMG_2089.png",
        date: "2026",
        description: "Active networking sessions at IFEX 2026 with international commodity traders.",
      },
      {
        title: "IFEX 2026 — SSL at Hall 3",
        image: "/images/media/IMG_2090.png",
        date: "2026",
        description: "SSL Group representative at IFEX 2026, Hall 3 — India's export showcase.",
      },
      {
        title: "IFEX 2026 — Venue",
        image: "/images/media/IMG_2091.png",
        date: "2026",
        description: "Inside IFEX 2026 — SSL Group navigating India's largest export fair.",
      },
      {
        title: "IFEX 2026 — Fair Entrance",
        image: "/images/media/IMG_2092.png",
        date: "2026",
        description: "Arriving at IFEX 2026 — one of India's biggest international export events.",
      },
      {
        title: "IFEX 2026 — Holding the Banner",
        image: "/images/media/IMG_2097.png",
        date: "2026",
        description: "SSL Group India team proudly displaying the company banner at IFEX 2026.",
      },
      {
        title: "IFEX 2026 — Team Representation",
        image: "/images/media/IMG_2098.png",
        date: "2026",
        description: "Our export team making SSL Group's mark on the international trade stage.",
      },
      {
        title: "IFEX 2026 — Brand Visibility",
        image: "/images/media/IMG_2099.png",
        date: "2026",
        description: "Building brand visibility for SSL Group India at IFEX 2026.",
      },
      {
        title: "IFEX 2026 — Global Presence",
        image: "/images/media/IMG_2100.png",
        date: "2026",
        description: "SSL Group asserting its global trade presence at the IFEX international expo.",
      },
      {
        title: "IFEX 2026 — Export Showcase",
        image: "/images/media/IMG_2101.png",
        date: "2026",
        description: "Showcasing SSL Group's export capabilities to global buyers at IFEX 2026.",
      },
      {
        title: "IFEX 2026 — Final Day",
        image: "/images/media/IMG_2102.png",
        date: "2026",
        description: "Wrapping up a successful run at IFEX 2026 with strong global connections made.",
      },
    ],
  },

  // ─── TEAM & WORKPLACE ─────────────────────────────────────────────────────
  {
    id: "team",
    items: [
      {
        title: "Business Trip — Trade Expo Visit",
        image: "/images/media/IMG_2083.png",
        description: "SSL Group team at an industry trade expo — representing India's metallurgy sector.",
      },
      {
        title: "Team Travel — Export Conference",
        image: "/images/media/IMG_2084.png",
        description: "On the road for business — SSL Group team at an international trade conference.",
      },
      {
        title: "Industry Expo — SSL Team",
        image: "/images/media/IMG_2085.png",
        description: "SSL Group professionals at a major industry expo networking with global partners.",
      },
      {
        title: "Trade Event — Group Photo",
        image: "/images/media/IMG_2086.png",
        description: "Team photo at a trade event marking SSL Group's growing international footprint.",
      },
      {
        title: "Client Meeting — DGC Stall",
        image: "/images/media/IMG_2106.png",
        description: "Productive client meeting at the Desai Group of Companies exhibition stall.",
      },
      {
        title: "Business Discussions — DGC",
        image: "/images/media/IMG_2107.png",
        description: "In-depth discussions with the Desai Group team at a trade exhibition.",
      },
      {
        title: "Partnership Meeting — DGC",
        image: "/images/media/IMG_2108.png",
        description: "SSL Group and DGC team collaborating on trade partnership opportunities.",
      },
      {
        title: "Trade Collaboration — DGC",
        image: "/images/media/IMG_2109.png",
        description: "SSL Group representatives engaging with Desai Group of Companies leadership.",
      },
      {
        title: "Client Engagement Session",
        image: "/images/media/IMG_2111.png",
        description: "Active client engagement and product discussions at an industry exhibition.",
      },
    ],
  },
];

// ─── PHOTO GALLERY (best shots across all categories) ─────────────────────
export const photoGallery = [
  { src: "/images/media/IMG_1198.png",  title: "Republic Day 2024" },
  { src: "/images/media/IMG_1506.png",  title: "Holi Celebration 2024" },
  { src: "/images/media/IMG_1510.png",  title: "Holi Fun at SSL Office" },
  { src: "/images/media/IMG_2093.png",  title: "IFEX 2026 — SSL Group India" },
  { src: "/images/media/IMG_2720.png",  title: "Certificate Distribution" },
  { src: "/images/media/IMG_2075.png",  title: "DGC Partnership" },
  { src: "/images/media/IMG_2096.png",  title: "IFEX 2026 Trade Fair" },
  { src: "/images/media/IMG_1521.png",  title: "Team Celebration" },
  { src: "/images/media/IMG_2083.png",  title: "Export Conference" },
];

// ─── STATS ────────────────────────────────────────────────────────────────
export const mediaStats = [
  { value: "51+",  labelKey: "stats.photos" },
  { value: "10+",  labelKey: "stats.events" },
  { value: "12+",  labelKey: "stats.awards" },
  { value: "45+",  labelKey: "stats.countries" },
];
