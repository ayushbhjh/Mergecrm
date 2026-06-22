# Merge CRM

Merge CRM is a production-oriented CRM SaaS scaffold for Merge Cricket Tours.

## What it includes

- Next.js 15 App Router with TypeScript
- Tailwind CSS with custom sports-SaaS branding
- shadcn-style UI primitives
- Auth.js / NextAuth credentials and Google auth scaffolding
- Prisma schema for leads, follow-ups, meetings, proposals, bookings, activities, notifications, roles, and users
- Dashboard, leads, pipeline, follow-ups, meetings, proposals, bookings, team, reports, and settings pages
- TanStack Table and Recharts integrations
- Server actions and route handlers
- Seed data for Ayush, Siddhi, and Rishu
- Docker support

## Quick start

1. Install dependencies.
2. Copy `.env.example` to `.env` and fill in the secrets.
3. Run Prisma migrations and seed data.
4. Start the dev server.

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Environment

- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `RESEND_API_KEY`
- `UPLOADTHING_SECRET`
- `UPLOADTHING_APP_ID`

## Notes

- If Google auth is not configured, the credentials login still works.
- The dashboard falls back to seeded mock data when the database is unavailable.
- UploadThing and Resend are scaffolded for production secrets, but can be enabled incrementally.

## Deployment

- Deploy on Vercel.
- Use a managed PostgreSQL instance.
- Set the environment variables above in Vercel.
- Run `prisma migrate deploy` during build or release automation.

## Seed account credentials

- `ayush@mergecrickettours.com` / `Password@123`
- `siddhi@mergecrickettours.com` / `Password@123`
- `rishu@mergecrickettours.com` / `Password@123`
