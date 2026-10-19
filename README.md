# Dycom — Ansco & Associates

Ansco's Next.js App Router + TypeScript website, local image assets, and the
API/database schema supporting contact and subcontractor inquiries.

This repository contains only the Ansco application and its supporting packages.
It excludes the design sandbox, research captures, Replit metadata, assistant
memory, credentials, database records, dependencies and build output.

## Requirements

- Node.js 22 or later and pnpm 10
- A PostgreSQL database for form submissions

## Install and run

```sh
pnpm install --frozen-lockfile
```

Set `DATABASE_URL` in your shell or your host's secret manager. Do not commit it.
These commands expect variables in the process environment; the API does not
automatically load a root `.env` file.

Apply the included schema to an empty development database:

```sh
pnpm db:push
```

Review database schema changes before applying them to an existing database.
Database records from Replit are deliberately not exported.

Run two terminals (POSIX shell syntax):

```sh
# Terminal 1 — API, with DATABASE_URL already set
PORT=8080 pnpm dev:api

# Terminal 2 — Next.js; API_ORIGIN enables the /api proxy
API_ORIGIN=http://127.0.0.1:8080 pnpm dev
```

Open http://localhost:3000. The marketing pages also run without the API, but
both inquiry forms need the API and database.

## Checks and production

```sh
pnpm typecheck
API_ORIGIN=http://127.0.0.1:8080 pnpm build
PORT=8080 pnpm start:api
# In another terminal:
PORT=3000 pnpm start
```

Set `API_ORIGIN` at build time to the API's internal reachable URL; Next.js
rewrites are built into the production routes. Alternatively route `/api`
directly to the API with your reverse proxy. Supply `DATABASE_URL` to the API
process and `SITE_URL` to Next.js at build time for the intended canonical URL.
Use your hosting provider's HTTPS and process-management facilities.

## Contents

- `artifacts/ansco`: Next.js pages, components, typed content and `public/assets`
- `artifacts/api-server`: inquiry submission API and health endpoint
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
