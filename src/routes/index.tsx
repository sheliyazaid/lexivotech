import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/lexivo/PageShell";
import { Hero } from "@/components/lexivo/home/Hero";
import { MarqueeStrip } from "@/components/lexivo/home/MarqueeStrip";
import { Services } from "@/components/lexivo/home/Services";
import { WhyUs } from "@/components/lexivo/home/WhyUs";
import { Projects } from "@/components/lexivo/home/Projects";
import { Process } from "@/components/lexivo/home/Process";
import { About } from "@/components/lexivo/home/About";
import { Testimonials } from "@/components/lexivo/home/Testimonials";
import { Team } from "@/components/lexivo/home/Team";
import { TechStack } from "@/components/lexivo/home/TechStack";
import { SocialShowcase } from "@/components/lexivo/home/SocialShowcase";
import { ContactCTA } from "@/components/lexivo/home/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lexivo Tech | Web Design & Development Agency" },
      { name: "description", content: "Lexivo Tech is a web design and development agency building modern websites, SaaS products, landing pages and digital experiences for startups and businesses." },
      { property: "og:title", content: "Lexivo Tech — We Build Digital Solutions" },
      { property: "og:description", content: "A creative technology studio crafting brands, products and digital experiences." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.svg" },
      { name: "twitter:image", content: "/og-image.svg" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.lexivotech.com",
      },
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell withIntro>
      <Hero />
      <MarqueeStrip />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <Team />
      <TechStack />
      <SocialShowcase />
      <ContactCTA />
    </PageShell>
  );
}
