/**
 * Server-side inquiry handling for Next.js/Vercel.
 * Uses the existing contact_inquiries table; never creates schema during builds
 * or requests. DATABASE_URL stays server-only and is read only on submission.
 */
import { Pool } from "pg";
import { SubmitContactBody, SubmitSubcontractorBody } from "@workspace/api-zod";

let pool: Pool | undefined;
function getPool() {
  if (!process.env.DATABASE_URL) throw new Error("Database not configured");
  pool ??= new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 2,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 5_000,
    allowExitOnIdle: true,
  });
  return pool;
}

// Best-effort protection per warm function instance, not a distributed limiter.
// Configure Vercel Firewall/rate limits before accepting public submissions.
const attempts = new Map<string, { count: number; expires: number }>();
const MAX_BODY_BYTES = 32_768;
const json = (body: object, status: number) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

/** Explicit request size bound, including requests without Content-Length. */
async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("empty");
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("too-large");
    }
    chunks.push(value);
  }
  const text = Buffer.concat(chunks).toString("utf8");
  return JSON.parse(text) as unknown;
}

export async function submitInquiry(request: Request, subcontractor = false) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ error: "Please send a JSON request." }, 415);
  }
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: "Cross-site submissions are not allowed." }, 403);
  }
  let input: unknown;
  try {
    input = await readBody(request);
  } catch (error) {
    return json({ error: "Invalid or oversized request." }, error instanceof Error && error.message === "too-large" ? 413 : 400);
  }
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return json({ error: "Please complete all required fields." }, 400);
  }
  const body = Object.fromEntries(Object.entries(input).map(([key, value]) => [
    key, typeof value === "string" ? value.trim() : value,
  ]));
  const parsed = (subcontractor ? SubmitSubcontractorBody : SubmitContactBody).safeParse(body);
  if (!parsed.success) {
    return json({ error: "Please complete all required fields with valid information." }, 400);
  }
  let inquiry: { firstName: string; lastName: string; email: string; phone?: string; subject: string; message: string };
  if (subcontractor) {
    const fields = SubmitSubcontractorBody.parse(body);
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return json({ error: "Please enter a valid email address." }, 400);
    }
    inquiry = {
      firstName: fields.first,
      lastName: fields.last,
      email: fields.email ?? "",
      phone: fields.mobile,
      subject: `Subcontractor: ${fields.company}`,
      message: JSON.stringify(fields, null, 2),
    };
  } else {
    const { website: _honeypot, ...fields } = SubmitContactBody.parse(body);
    inquiry = fields;
  }
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  // Vercel overwrites x-vercel-forwarded-for; don't trust arbitrary forwarded IPs.
  const key = process.env.VERCEL ? request.headers.get("x-vercel-forwarded-for") ?? "unknown" : "local";
  const attempt = attempts.get(key) ?? { count: 0, expires: now + 600_000 };
  if (attempt.count >= 5 || attempts.size >= 10_000) {
    return json({ error: "Please wait a few minutes before sending another inquiry." }, 429);
  }
  attempts.set(key, { ...attempt, count: attempt.count + 1 });
  try {
    const saved = await getPool().query<{ id: string }>(
      `INSERT INTO contact_inquiries (first_name, last_name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [inquiry.firstName, inquiry.lastName, inquiry.email, inquiry.phone ?? null, inquiry.subject, inquiry.message],
    );
    const reference = saved.rows[0]?.id;
    if (!reference) throw new Error("No saved inquiry");
    return json({
      reference,
      // EDIT only after a real email delivery integration has been configured.
      message: "Your inquiry has been stored. Submissions are not yet emailed to Ansco.",
    }, 201);
  } catch {
    // Do not return database errors, connection details, or submitted PII.
    return json({ error: "Your inquiry could not be saved. Please try again or call Ansco." }, 503);
  }
}
