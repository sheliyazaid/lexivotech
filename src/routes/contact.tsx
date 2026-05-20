import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/lexivo/PageShell";
import { PageHeader } from "@/components/lexivo/PageHeader";
import { MagneticButton } from "@/components/lexivo/MagneticButton";
import { InstagramIcon, LinkedinIcon, GithubIcon, WhatsappIcon } from "@/components/lexivo/SocialIcons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lexivo Tech" },
      { name: "description", content: "Start a project with Lexivo Tech. Reach us by email, WhatsApp or the studio form." },
      { property: "og:title", content: "Contact — Lexivo Tech" },
      { property: "og:description", content: "Tell us what you're building. We reply within one working day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const WHATSAPP = "https://wa.me/0000000000?text=Hello%20Lexivo%20Tech";

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader index="006" title="Contact" lead="Tell us what you're building. We reply within one working day — usually faster." />
      <section className="relative py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-8"
            >
              {[
                { label: "Your name", type: "text", name: "name", placeholder: "Ada Lovelace" },
                { label: "Email", type: "email", name: "email", placeholder: "you@studio.com" },
                { label: "Company", type: "text", name: "company", placeholder: "Optional" },
                { label: "Budget", type: "text", name: "budget", placeholder: "Indicative range" },
              ].map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <label className="block font-body uppercase tracking-[0.3em] text-[10px] text-ink/50 mb-3">{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-3 font-brand uppercase text-xl md:text-2xl text-ink placeholder:text-ink/25 transition-colors"
                  />
                </motion.div>
              ))}
              <div>
                <label className="block font-body uppercase tracking-[0.3em] text-[10px] text-ink/50 mb-3">Tell us about the project</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-3 font-body text-lg text-ink placeholder:text-ink/25 resize-none transition-colors"
                  placeholder="Goals, timeline, links — anything that helps."
                />
              </div>
              <div className="pt-4 flex items-center gap-4">
                <MagneticButton className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-ink text-bone font-body uppercase tracking-[0.25em] text-[11px]">
                  {sent ? "Thank you — talk soon" : "Send the brief"}
                  <ArrowUpRight size={16}/>
                </MagneticButton>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-ink/10 space-y-10">
            <div>
              <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50">Direct channels</p>
              <ul className="mt-5 space-y-4 font-brand uppercase text-2xl md:text-3xl text-ink">
                <li><a href="mailto:hello@lexivo.tech" className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity">hello@lexivo.tech <ArrowUpRight size={20}/></a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity"><WhatsappIcon size={22}/> WhatsApp <ArrowUpRight size={20}/></a></li>
              </ul>
            </div>
            <div>
              <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50">Elsewhere</p>
              <div className="mt-5 flex gap-4 text-ink/70">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-12 w-12 rounded-full border border-ink/20 grid place-items-center hover:bg-ink hover:text-bone transition-colors"><InstagramIcon /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-12 w-12 rounded-full border border-ink/20 grid place-items-center hover:bg-ink hover:text-bone transition-colors"><LinkedinIcon /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="h-12 w-12 rounded-full border border-ink/20 grid place-items-center hover:bg-ink hover:text-bone transition-colors"><GithubIcon /></a>
              </div>
            </div>
            <div>
              <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50">Studio hours</p>
              <p className="mt-4 font-body text-ink/75">Mon — Fri · 09:00 — 19:00 IST</p>
              <p className="font-body text-ink/55 text-sm mt-1">Working with clients across 12 time zones.</p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}