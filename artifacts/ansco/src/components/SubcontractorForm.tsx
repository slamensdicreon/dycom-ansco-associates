"use client";

/**
 * Subcontractor Information Request form (fields mirror the original Gravity Form).
 * Posts JSON to POST /api/subcontractor-request, which stores the request (no email is sent).
 * Labels/choices: src/content/subcontractor-request.ts.
 */
import { useState, type FormEvent } from "react";
import { usStates } from "@/content/contact";
import { subcontractorRequest as c } from "@/content/subcontractor-request";
import styles from "./SubcontractorForm.module.css";

type Status = { kind: "idle" } | { kind: "pending" } | { kind: "error"; message: string } | { kind: "success"; reference: string; message: string };

export default function SubcontractorForm() {
  const [prev, setPrev] = useState<"" | "Yes" | "No">("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [workError, setWorkError] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const workTypes = fd.getAll("workTypes").map(String);
    if (workTypes.length === 0) { setWorkError(true); return; }
    setWorkError(false);

    setStatus({ kind: "pending" });
    try {
      const res = await fetch("/api/subcontractor-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          company: get("company"), website: get("website"),
          street: get("street"), street2: get("street2"), city: get("city"), state: get("state"), zip: get("zip"), country: get("country"),
          first: get("first"), last: get("last"), mobile: get("mobile"), office: get("office"), email: get("email"),
          previous: get("previous"), previousName: get("previous") === "Yes" ? get("previousName") : "",
          states: fd.getAll("states").map(String), cities: get("cities"), workTypes, comments: get("comments"),
        }),
      });
      const body = (await res.json().catch(() => null)) as { reference?: string; message?: string; error?: string } | null;
      if (!res.ok) throw new Error(body?.error || body?.message || `Request failed (${res.status}).`);
      setStatus({ kind: "success", reference: body?.reference ?? "", message: body?.message ?? "" });
      form.reset();
      setPrev("");
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.kind === "success") {
    return (
      <div className={styles.success} role="status">
        <h3>Thank you. Your subcontractor request has been received and stored.</h3>
        {status.reference && <p>Reference number: <strong>{status.reference}</strong></p>}
        {status.message && <p>{status.message}</p>}
        <button type="button" className="btn" onClick={() => setStatus({ kind: "idle" })}>Submit another request</button>
      </div>
    );
  }

  const pending = status.kind === "pending";
  return (
    <form className={styles.form} onSubmit={onSubmit} aria-busy={pending}>

      <h3>Company Information</h3>
      <label className={styles.field}>Company Name <span className={styles.req}>(Required)</span>
        <input name="company" required autoComplete="organization" />
      </label>
      <label className={styles.field}>Company Website
        <input name="website" type="url" autoComplete="url" />
      </label>
      <fieldset className={styles.fieldset}>
        <legend>Address <span className={styles.req}>(Required)</span></legend>
        <label className={styles.field}>Street Address<input name="street" required autoComplete="address-line1" /></label>
        <label className={styles.field}>Address Line 2<input name="street2" autoComplete="address-line2" /></label>
        <div className={styles.two}>
          <label className={styles.field}>City<input name="city" required autoComplete="address-level2" /></label>
          <label className={styles.field}>State / Province / Region<input name="state" required autoComplete="address-level1" /></label>
        </div>
        <div className={styles.two}>
          <label className={styles.field}>ZIP / Postal Code<input name="zip" required autoComplete="postal-code" /></label>
          <label className={styles.field}>Country
            <select name="country" defaultValue="" required>
              <option value="" />
              {c.countries.map((x) => <option key={x}>{x}</option>)}
            </select>
          </label>
        </div>
      </fieldset>

      <h3>Contact Information</h3>
      <fieldset className={styles.fieldset}>
        <legend>Name <span className={styles.req}>(Required)</span></legend>
        <div className={styles.two}>
          <label className={styles.field}>First<input name="first" required autoComplete="given-name" /></label>
          <label className={styles.field}>Last<input name="last" required autoComplete="family-name" /></label>
        </div>
      </fieldset>
      <div className={styles.two}>
        <label className={styles.field}>Mobile Phone <span className={styles.req}>(Required)</span><input name="mobile" type="tel" required autoComplete="tel" /></label>
        <label className={styles.field}>Office Phone<input name="office" type="tel" /></label>
      </div>
      <label className={styles.field}>Email<input name="email" type="email" autoComplete="email" /></label>

      <fieldset className={styles.fieldset}>
        <legend>{c.previousServiceQuestion} <span className={styles.req}>(Required)</span></legend>
        {(["Yes", "No"] as const).map((v) => (
          <label key={v} className={styles.choice}>
            <input type="radio" name="previous" value={v} required checked={prev === v} onChange={() => setPrev(v)} /> {v}
          </label>
        ))}
      </fieldset>
      {prev === "Yes" && (
        <label className={styles.field}>If yes, provide your previous company name.<input name="previousName" /></label>
      )}

      <label className={styles.field}>States You Would Like to Work <span className={styles.req}>(Required)</span>
        <select name="states" multiple required size={8}>
          {usStates.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className={styles.field}>Cities / Counties You Would Like to Work <span className={styles.req}>(Required)</span>
        <textarea name="cities" rows={3} required />
      </label>

      <fieldset className={styles.fieldset} aria-invalid={workError} aria-describedby={workError ? "work-error" : undefined}>
        <legend>Type(s) Of Work You Do <span className={styles.req}>(Required)</span></legend>
        {c.workTypes.map((w) => (
          <label key={w} className={styles.choice}><input type="checkbox" name="workTypes" value={w} onChange={() => setWorkError(false)} /> {w}</label>
        ))}
        {workError && <p id="work-error" className={styles.error} role="alert">Please select at least one type of work.</p>}
      </fieldset>

      <label className={styles.field}>Comments, Questions or Concerns<textarea name="comments" rows={5} /></label>

      <p className={styles.consent}>{c.consent}</p>
      {status.kind === "error" && (
        <p className={styles.error} role="alert">There was a problem submitting your request: {status.message} Please try again.</p>
      )}
      <button type="submit" className="btn" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
      <p className={styles.note}>{c.storedNote}</p>
    </form>
  );
}
