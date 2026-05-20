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
import { TechStack } from "@/components/lexivo/home/TechStack";
import { SocialShowcase } from "@/components/lexivo/home/SocialShowcase";
import { ContactCTA } from "@/components/lexivo/home/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lexivo Tech — We Build Digital Solutions" },
      { name: "description", content: "Lexivo Tech is a creative technology studio crafting brands, products and digital experiences for ambitious teams." },
      { property: "og:title", content: "Lexivo Tech — We Build Digital Solutions" },
      { property: "og:description", content: "A creative technology studio crafting brands, products and digital experiences." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell showIntro>
      <Hero />
      <MarqueeStrip />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <TechStack />
      <SocialShowcase />
      <ContactCTA />
    </PageShell>
  );
}
