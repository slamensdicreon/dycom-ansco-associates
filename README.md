# Dycom — Ansco & Associates

Ansco's Next.js App Router + TypeScript website, local image assets, and the
API/database schema supporting contact and subcontractor inquiries.

This repository contains only the Ansco application and its supporting packages.
It excludes the design sandbox, research captures, Replit metadata, assistant
memory, credentials, database records, dependencies and build output.

## Requirements

- Node.js 22.x and pnpm 10.26.1
- A PostgreSQL database for form submissions

## Install and run

```sh
pnpm install --frozen-lockfile
```

Set `DATABASE_URL` in your shell or your host's secret manager. Do not commit it.
For Next.js local development, you may set it in
`artifacts/ansco/.env.local` (ignored by Git). Schema commands expect it in
the process environment. Never commit real credentials.

Apply the included schema to an empty development database:

```sh
pnpm db:push
```

Review database schema changes before applying them to an existing database.
Database records from Replit are deliberately not exported.

Run the Next.js application:

```sh
pnpm dev
```

Open http://localhost:3000. Native Next.js routes serve both forms at
`/api/contact/` and `/api/subcontractor-request/`. Marketing pages build and
run without a database; submissions require a configured database/schema.

## Checks and production

```sh
pnpm typecheck
pnpm build
pnpm start
```

## Deploy to Vercel

- Framework: **Next.js**
- Root Directory: **artifacts/ansco**
- Include source files outside the Root Directory: **enabled**
- Node.js: **22.x**
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm run build`
- Output directory: leave the Next.js default (do not set `out` or `dist`)

The app's `vercel.json` declares the framework and commands. No separate
Express deployment or `API_ORIGIN` is needed. See
[the Vercel setup guide](artifacts/ansco/VERCEL.md) for environment variables,
database setup and verification. Builds never run database migrations.

## Contents

- `artifacts/ansco`: Next.js pages, components, typed content and `public/assets`
- `artifacts/api-server`: optional legacy Express server used in Replit;
  not required or built by the Vercel Next.js deployment
- `lib/db`: PostgreSQL schema and Drizzle configuration
- `lib/api-spec`: OpenAPI contract and code generation
- `lib/api-zod`: generated server validation
- `lib/api-client-react`: generated typed API client

See [the editing guide](artifacts/ansco/README.md) for text/image edit locations.
Run `pnpm codegen` after changing the OpenAPI contract.

## Current migration limitations

- Forms store inquiries; email delivery is not configured.
- Production-grade spam protection and consent management remain launch work.
- Jobs link to Dycom's existing recruiting service; featured listings are
  source snapshots, not a live synchronized job feed.
- Vimeo, Google Maps, Google Fonts, and linked third-party documents remain
  external services. Locally captured website images are included.
- The location finder uses address-based maps rather than the WordPress
  multi-marker plugin. This is not a claim of complete pixel-perfect parity.

Client branding and source media remain subject to their owners' rights.
