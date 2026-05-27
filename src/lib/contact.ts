export const CONTACT = {
  email: "lexivotech@gmail.com",
  phone: "8591811232",
  phoneTel: "+918591811232",
  linkedin: "https://www.linkedin.com/in/lexivo-tech-a0a135410/?skipRedirect=true",
  instagram: "https://www.instagram.com/lexivotech/",
  threads: "https://www.threads.com/@lexivotech",
  x: "https://x.com/LexivoTech",
  location: "Western Park, Jari Mari Rd, Kashimira, Mira Road(E), Thane 401107",
  mapsUrl:
    "https://www.google.com/maps/place/Western+Pk+Rd,+Kashigaon,+Mira+Road+East,+Mira+Bhayandar,+Maharashtra+401107/@19.2730171,72.8873194,17z",
  mapsEmbed:
    "https://maps.google.com/maps?q=19.2730171,72.8898943&hl=en&z=17&output=embed",
  hours: "Mon — Fri · 09:00 — 19:00 IST",
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: CONTACT.instagram, icon: "instagram" as const },
  { label: "LinkedIn", href: CONTACT.linkedin, icon: "linkedin" as const },
  { label: "Threads", href: CONTACT.threads, icon: "threads" as const },
  { label: "X", href: CONTACT.x, icon: "x" as const },
] as const;

export const SITEMAP_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;
