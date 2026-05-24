# Lexivo Tech

TanStack Start app with SSR and a server-side contact form at `/api/contact`.

## Deploy on Vercel

1. Push this repo to GitHub and connect it in [Vercel](https://vercel.com).
2. Vercel auto-detects TanStack Start (via Nitro). Build command: `npm run build`, output is handled by Nitro.
3. Add these **Environment Variables** in Vercel → Project → Settings → Environment Variables (Production, Preview, and Development):

| Variable | Required | Example |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes (if using Resend) | `re_...` |
| `RESEND_FROM_EMAIL` | Yes | `onboarding@resend.dev` or your verified domain |
| `CONTACT_EMAIL_TO` | Yes | `lexivotech@gmail.com` |
| `RESEND_DOMAIN_VERIFIED` | Optional | `true` after domain verification in Resend |

4. Redeploy after saving env vars.

## Local development

```bash
npm install
cp .env.example .env.local
# Add your Resend API key to .env.local
npm run dev
```

## Contact form

The form posts to `/api/contact`. With `RESEND_API_KEY` set, emails are sent via Resend. Without it, configure SMTP vars instead (see `.env.example`).

## Notes

- Do **not** point DNS to Cloudflare Workers and Vercel at the same time for the same domain — use one host only.
- If you previously used Cloudflare, remove or pause that deployment before switching DNS back to Vercel.
