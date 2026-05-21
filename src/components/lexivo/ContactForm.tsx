import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const FIELDS = [
  { label: "Your name", type: "text", name: "name", placeholder: "Your name", required: true },
  { label: "Email", type: "email", name: "email", placeholder: "you@company.com", required: true },
  { label: "Company", type: "text", name: "company", placeholder: "Optional" },
  { label: "Budget", type: "text", name: "budget", placeholder: "Indicative range" },
] as const;

type Props = {
  compact?: boolean;
  onSuccess?: () => void;
};

export function ContactForm({ compact = false, onSuccess }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Failed to send");
      }
      setStatus("sent");
      form.reset();
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-6" : "space-y-8"}>
      {FIELDS.map((f, i) => (
        <motion.div
          key={f.name}
          initial={compact ? false : { opacity: 0, y: 20 }}
          whileInView={compact ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group"
        >
          <label className="block font-body uppercase tracking-[0.3em] text-[10px] text-ink/50 mb-3">
            {f.label}
          </label>
          <input
            type={f.type}
            name={f.name}
            required={"required" in f ? f.required : false}
            placeholder={f.placeholder}
            disabled={status === "sending"}
            className={`w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-3 font-brand uppercase text-ink placeholder:text-ink/25 transition-colors disabled:opacity-50 ${
              compact ? "text-lg" : "text-xl md:text-2xl"
            }`}
          />
        </motion.div>
      ))}
      <div>
        <label className="block font-body uppercase tracking-[0.3em] text-[10px] text-ink/50 mb-3">
          Tell us about the project
        </label>
        <textarea
          name="message"
          required
          rows={compact ? 3 : 4}
          disabled={status === "sending"}
          className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-3 font-body text-lg text-ink placeholder:text-ink/25 resize-none transition-colors disabled:opacity-50"
          placeholder="Goals, timeline, links — anything that helps."
        />
      </div>
      {status === "error" && (
        <p className="font-body text-sm text-destructive">{errorMsg}</p>
      )}
      <div className={`flex items-center gap-4 ${compact ? "pt-2" : "pt-4"}`}>
        <MagneticButton
          as="button"
          type="submit"
          className={`inline-flex items-center gap-3 rounded-full bg-ink text-bone font-body uppercase tracking-[0.25em] hover:bg-ink-soft transition-colors disabled:opacity-60 ${
            compact ? "px-6 py-3 text-[10px]" : "px-7 py-4 text-[11px]"
          }`}
        >
          {status === "sending" ? "Sending…" : status === "sent" ? "Thank you — talk soon" : "Send the brief"}
          <ArrowUpRight size={16} />
        </MagneticButton>
      </div>
    </form>
  );
}
