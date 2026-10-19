import { Router, type IRouter } from "express";
import { SubmitContactBody, SubmitSubcontractorBody } from "@workspace/api-zod";
import { db, contactInquiries } from "@workspace/db";

const router: IRouter = Router();
// A bounded, short-lived process limiter supplements validation and the honeypot.
const attempts = new Map<string, { count: number; expires: number }>();
router.post(["/contact", "/subcontractor-request"], async (req, res) => {
  const now = Date.now();
  for (const [key, value] of attempts) {
    if (value.expires <= now) attempts.delete(key);
  }
  const key = req.ip ?? "unknown";
  const attempt = attempts.get(key) ?? { count: 0, expires: now + 600_000 };
  if (attempt.count >= 5 || attempts.size > 10_000) {
    res.status(429).json({ error: "Please wait a few minutes before sending another inquiry." });
    return;
  }
  attempt.count += 1;
  attempts.set(key, attempt);
  const body = Object.fromEntries(
    Object.entries(req.body ?? {}).map(([key, value]) => [
      key, typeof value === "string" ? value.trim() : value,
    ]),
  );
  const subcontractor = req.path === "/subcontractor-request";
  const parsed = (subcontractor ? SubmitSubcontractorBody : SubmitContactBody).safeParse(body);
  if (!parsed.success) {
    res.status(400).json({ error: "Please complete all required fields with valid information." });
    return;
  }
  try {
    let inquiry;
    if (subcontractor) {
      const fields = SubmitSubcontractorBody.parse(body);
      if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
        res.status(400).json({ error: "Please enter a valid email address." });
        return;
      }
      inquiry = {
        firstName: fields.first,
        lastName: fields.last,
        email: fields.email ?? "",
        phone: fields.mobile,
        subject: `Subcontractor: ${fields.company}`,
        // Preserve all submitted fields, including multi-select values.
        message: JSON.stringify(fields, null, 2),
      };
    } else {
      const { website: _honeypot, ...fields } = SubmitContactBody.parse(body);
      inquiry = fields;
    }
    const [saved] = await db.insert(contactInquiries).values(inquiry).returning({ id: contactInquiries.id });
    res.status(201).json({
      reference: saved!.id,
      // EDIT: Update only after a real delivery integration has been configured.
      message: "Your inquiry has been stored. Preview submissions are not emailed to Ansco.",
    });
  } catch (error) {
    req.log.error({ err: error }, "Contact inquiry could not be stored");
    res.status(503).json({ error: "Your inquiry could not be saved. Please try again or call Ansco." });
  }
});

export default router;
