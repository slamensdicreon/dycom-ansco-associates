# Vercel deployment

## Import settings

Import `slamensdicreon/dycom-ansco-associates` and select branch `main`.

| Setting | Value |
| --- | --- |
| Project Root Directory | Repository root (blank or `.`) |
| Service | `ansco` |
| Service Root | `artifacts/ansco` |
| Service Framework | Next.js |
| Public routing | All paths, including `/api/*`, to `ansco` |
| Service bindings | None |
| Node.js | 22.x |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm run build` |
| Output Directory | Next.js default; do not override |

Keep the pnpm lockfile/workspace file at the repository root. Vercel installs
workspace dependencies there. The application imports shared validation from
`lib/api-zod`; Next.js transpiles and traces that package into server functions.

The repository-root `vercel.json` is the single deployment configuration.
It declares one public Next.js service; the optional Express package is not
deployed. No internal services or binding variables are needed.

If this project was previously imported, change its Root Directory from
`artifacts/ansco` to the repository root. Clear old project-level install,
build and output overrides; the service configuration supplies the commands.
Then redeploy the latest `main` commit. Do not start a persistent server or
configure a static export.

## Environment variables

Configure these in Vercel Project Settings → Environment Variables:

- `DATABASE_URL`: PostgreSQL URL for inquiry storage, **server-only**.
  Use a connection-pooler URL suitable for serverless applications and the
  database provider's recommended TLS parameters. Never disable certificate
  verification or prefix this variable with `NEXT_PUBLIC_`.
- `SITE_URL`: the canonical HTTPS website origin. Set it to the production
  domain when approved. The existing default is `https://anscollc.com`.

These are configuration names only, not credentials. Do not commit real values.
Use a separate database for Preview deployments if you want to test submissions
without writing production data.

`DATABASE_URL` is not required to compile or render the marketing pages.
Missing credentials or a missing table cause form submissions to return an
honest HTTP 503, not a false success or a build failure.

Remove any old `API_ORIGIN` setting: both inquiry endpoints now run as native
Next.js Node.js functions in this same Vercel project.

## Database setup

No database records are included. Use the existing schema in `lib/db` against
your intended PostgreSQL database. With `DATABASE_URL` securely set in your
shell, run from the repository root:

```sh
pnpm db:push
```

Inspect proposed changes before applying them to an existing database. This is
an explicit administrative step, not a Vercel build hook or request-time action.
The application expects the existing `contact_inquiries` table and preserves
its fields; no database replacement or schema change is required for an
already-provisioned instance.

## Verify after deployment

- `/` and all 15 public pages render.
- `GET /api/healthz/` returns `{"status":"ok"}` without touching the database.
- Invalid form data returns 400; non-JSON data returns 415.
- Both valid forms return 201 and a saved inquiry reference only after the
  database confirms insertion.
- Requests remain same-origin; no separate API host or CORS setup is required.
- The Google Fonts, Maps and Vimeo embeds still depend on external providers.

## Remaining launch work

Forms store submissions but do not email them. The process-local limiter is
best-effort, not a distributed anti-abuse system. Configure Vercel Firewall or
equivalent distributed protection before accepting public traffic. Review
consent/privacy requirements and configure email delivery separately.

The optional Express package supports standalone API hosting.
Vercel does not use its process, port, or build output.
