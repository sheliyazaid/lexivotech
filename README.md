# Lexivo Tech

This project is configured as a Cloudflare Workers app using `@tanstack/react-start`.
It includes a server-side route at `/api/contact` and client assets under `dist/client`.

## Recommended deployment

### 1. Install

```bash
npm install
```

### 2. Build

```bash
npm run build
```

### 3. Deploy to Cloudflare

```bash
npm run deploy:cloudflare
```

If this is your first time, run:

```bash
npx wrangler login
```

This command builds the app and deploys using the generated Cloudflare config at `dist/tanstack_start_app/wrangler.json`, so it will deploy the Worker and the built assets from `dist/client`.

## Why Cloudflare?

This repository is already set up for Cloudflare Workers / Workers Sites:
- `wrangler.jsonc` is present
- the build output includes `dist/tanstack_start_app` and `dist/client`
- `src/routes/api/contact.ts` is a server route handled by the Worker runtime

Vercel is not the right host for this exact build setup without additional rewrites or a different server strategy.

## Environment variables

Set these in Cloudflare or in `.env.local` for local development:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_DOMAIN_VERIFIED`
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_EMAIL_TO`

If you are using Resend, add `RESEND_API_KEY`.

## Notes

- The contact form posts to `/api/contact`
- The app currently uses Cloudflare Workers for routing and SSR
- If you want to switch to Vercel, the project needs a dedicated Vercel function and a static build setup
