"use client";

/**
 * Contact form (replaces the original Gravity Forms form; labels preserved).
 * Posts JSON to POST /api/contact (served by the workspace API server), which
 * stores the inquiry. It does NOT send email until delivery is configured, so
 * the success copy says "received and stored" and never "emailed".
 */
import { useState, type FormEvent } from "react";
import { links } from "@/content/site";
import { requestTypes, usStates } from "@/content/contact";
import styles from "./ContactForm.module.css";

type Status =
  | { kind: "idle" }
  | { kind: "pending" }
  | { kind: "error"; message: string }
  | { kind: "success"; reference: string; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [requestType, setRequestType] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();

    // The API has no address columns, so the address is prepended to the message body.
    const address = [get("street"), get("street2"), [get("city"), get("state"), get("zip")].filter(Boolean).join(", ")]
      .filter(Boolean)
      .join("\n");
    const message = `${address ? `Address:\n${address}\n\n` : ""}${get("message")}`;

    setStatus({ kind: "pending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          firstName: get("firstName"),
          lastName: get("lastName"),
          email: get("email"),
          phone: get("phone"),
          subject: requestType,
          message,
          website: get("website"),
        }),
      });
      const body = (await res.json().catch(() => null)) as { reference?: string; message?: string; error?: string } | null;
      if (!res.ok) throw new Error(body?.error || body?.message || `Request failed (${res.status}).`);
      setStatus({ kind: "success", reference: body?.reference ?? "", message: body?.message ?? "" });
      form.reset();
      setRequestType("");
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.kind === "success") {
    return (
      <div className={styles.success} role="status">
        <h3>Thank you. Your message has been received and stored.</h3>
        {status.reference && <p>Reference number: <strong>{status.reference}</strong></p>}
        {status.message && <p>{status.message}</p>}
        <button type="button" className="btn" onClick={() => setStatus({ kind: "idle" })}>Send another message</button>
      </div>
    );
  }

  const pending = status.kind === "pending";
  const showFull = requestType !== "Subcontractor";

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate={false} aria-busy={pending}>
      {/* Honeypot: hidden from people, bots fill it in. */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor="cf-website">Name</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
        <span>This field is for validation purposes and should be left unchanged.</span>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-type">Request Type <span className={styles.req}>(Required)</span></label>
        <select id="cf-type" required value={requestType} onChange={(e) => setRequestType(e.target.value)}>
          <option value="">Please select...</option>
          {requestTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {requestType === "Subcontractor" && (
        <p>
          <a className="btn" href={links.subcontractorRequest}>Fill Out Subcontractor Request Here</a>
        </p>
      )}

      {showFull && (
        <>
          <fieldset className={styles.fieldset}>
            <legend>Name <span className={styles.req}>(Required)</span></legend>
            <div className={styles.two}>
              <div><input id="cf-first" name="firstName" required autoComplete="given-name" /><label htmlFor="cf-first" className={styles.sub}>First</label></div>
              <div><input id="cf-last" name="lastName" required autoComplete="family-name" /><label htmlFor="cf-last" className={styles.sub}>Last</label></div>
            </div>
          </fieldset>
          <div className={styles.two}>
            <div className={styles.field}>
              <label htmlFor="cf-phone">Phone <span className={styles.req}>(Required)</span></label>
              <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" />
            </div>
            <div className={styles.field}>
              <label htmlFor="cf-email">Email <span className={styles.req}>(Required)</span></label>
              <input id="cf-email" name="email" type="email" required autoComplete="email" />
            </div>
          </div>
          <fieldset className={styles.fieldset}>
            <legend>Address <span className={styles.req}>(Required)</span></legend>
            <input name="street" id="cf-street" required autoComplete="address-line1" />
            <label htmlFor="cf-street" className={styles.sub}>Street Address</label>
            <input name="street2" id="cf-street2" autoComplete="address-line2" />
            <label htmlFor="cf-street2" className={styles.sub}>Address Line 2</label>
            <div className={styles.three}>
              <div><input name="city" id="cf-city" required autoComplete="address-level2" /><label htmlFor="cf-city" className={styles.sub}>City</label></div>
              <div>
                <select name="state" id="cf-state" required defaultValue="" autoComplete="address-level1">
                  <option value="" disabled />
                  {usStates.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <label htmlFor="cf-state" className={styles.sub}>State</label>
              </div>
              <div><input name="zip" id="cf-zip" required autoComplete="postal-code" /><label htmlFor="cf-zip" className={styles.sub}>ZIP Code</label></div>
            </div>
          </fieldset>
          <div className={styles.field}>
            <label htmlFor="cf-message">Message <span className={styles.req}>(Required)</span></label>
            <textarea id="cf-message" name="message" rows={6} required />
          </div>
          <p className={styles.consent}>
            By clicking submit below, you consent to be contacted by Dycom Industries and its subsidiaries at the email address and phone number provided in an effort to respond to your inquiry.
          </p>
          {status.kind === "error" && (
            <p className={styles.error} role="alert">There was a problem submitting your message: {status.message} Please try again.</p>
          )}
          <button type="submit" className="btn" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
          <p className={styles.note}>
            Note: in this preview, submissions are stored in the site database and are not yet delivered to Ansco.
          </p>
        </>
      )}
    </form>
  );
}
