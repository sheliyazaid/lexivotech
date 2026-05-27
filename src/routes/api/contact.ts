import { createFileRoute } from "@tanstack/react-router";
import { sendContactEmail, type ContactPayload } from "@/lib/send-contact-email";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as Partial<ContactPayload>;
          const name = body.name?.trim();
          const email = body.email?.trim();
          const message = body.message?.trim();

          if (!name || !email || !message) {
            return Response.json({ ok: false, error: "Name, email, and message are required." }, { status: 400 });
          }

          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json({ ok: false, error: "Invalid email address." }, { status: 400 });
          }

          await sendContactEmail({
            name,
            email,
            company: body.company?.trim(),
            budget: body.budget?.trim(),
            message,
          });

          return Response.json({ ok: true });
        } catch (error) {
          console.error("Contact form error:", error);
          const msg = error instanceof Error ? error.message : "Failed to send message.";
          const isConfig = msg.includes("not configured");
          const isResend = msg.startsWith("Resend error:");
          const isProduction = process.env.NODE_ENV === "production";
          return Response.json(
            {
              ok: false,
              error: isConfig
                ? isProduction
                  ? "Email service is temporarily unavailable. Please email us at lexivotech@gmail.com."
                  : "Email service is not configured. Add RESEND_API_KEY to .env.local and restart the dev server."
                : isResend
                  ? msg.replace("Resend error: ", "")
                  : "Could not send your message. Please try again later.",
            },
            { status: isConfig ? 503 : 500 },
          );
        }
      },
    },
  },
});
