export type Project = {
  n: string;
  client: string;
  tag: string;
  year: string;
  title: string;
  image: string;
  href: string;
  color: string;
};

const PLACEHOLDER_LINK = "https://www.google.com";

export const FEATURED_PROJECTS: Project[] = [
  {
    n: "01",
    client: "Qremsia",
    tag: "Product · UI/UX",
    year: "2026",
    title: "Healthcare platform interface built for clarity and trust.",
    image: "/featuredProjects/Qremsia.png",
    href: "https://www.qremsia.com/",
    color: "oklch(0.4 0.04 220)",
  },
  {
    n: "02",
    client: "Seal Ventures",
    tag: "Branding · Web",
    year: "2026",
    title: "Venture studio identity with a bold digital presence.",
    image: "/featuredProjects/Sealventures.png",
    href: "https://sealventuresindia.netlify.app/",
    color: "oklch(0.55 0.12 40)",
  },
  {
    n: "03",
    client: "Trendy Finds",
    tag: "E-commerce · Web",
    year: "2025",
    title: "Curated retail experience designed to convert and delight.",
    image: "/featuredProjects/Trendy Finds.png",
    href: "https://trendyfinds.netlify.app/",
    color: "oklch(0.7 0.09 80)",
  },
  {
    n: "04",
    client: "JobConnect",
    tag: "Web · Performance",
    year: "2026",
    title: "Job marketplace with fast flows and a clean product feel.",
    image: "/featuredProjects/jobConnect.png",
    href: "https://job-connect-woad.vercel.app/",
    color: "oklch(0.3 0.02 260)",
  },
];

export const ALL_PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  {
    n: "05",
    client: "SecureZone",
    tag: "Cybersecurity",
    year: "2026",
    title: "Modern security platform built for privacy and protection.",
    image: "/featuredProjects/securezone.png",
    href: "https://securezone-bice.vercel.app/",
    color: "oklch(0.45 0.05 160)",
  },
  {
    n: "06",
    client: "MotionVertex",
    tag: "Portfolio",
    year: "2026",
    title: "Creative portfolio crafted with smooth motion and modern design.",
    image: "/featuredProjects/motionVertex.png",
    href: "https://motionvertex.vercel.app/",
    color: "oklch(0.6 0.1 90)",
  },
];
