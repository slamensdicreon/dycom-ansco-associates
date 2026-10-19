/** Privacy Policy. Content: src/content/privacy.ts (structured blocks). */
import { Fragment, type ReactNode } from "react";
import { privacyBlocks, privacyLastUpdated } from "@/content/privacy";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Ansco & Associates, LLC and Dycom Industries, Inc. collect, use, and share your information.",
  path: "/privacy-policy/",
});

/** Turns email addresses and the CALIFORNIA PRIVACY RIGHTS reference into links. */
function linkify(text: string): ReactNode {
  const parts = text.split(/([\w.+-]+@[\w-]+\.[\w.]+|“CALIFORNIA PRIVACY RIGHTS\.”)/g);
  return parts.map((p, i) => {
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(p)) return <a key={i} href={`mailto:${p}`}>{p}</a>;
    if (p.startsWith("“CALIFORNIA")) return <a key={i} href="#calipriv">{p}</a>;
    return <Fragment key={i}>{p}</Fragment>;
  });
}

export default function PrivacyPolicyPage() {
  return (
    <section className="inner">
      <div className="container prose">
        <h1 className="mb-2">Privacy Policy</h1>
        <p style={{ color: "var(--muted)" }}><em>{privacyLastUpdated}</em></p>
        {privacyBlocks.map((b, i) => {
          switch (b.k) {
            case "h3":
              return <h3 key={i} id={b.text.startsWith("CALIFORNIA PRIVACY") ? "calipriv" : undefined}>{b.text}</h3>;
            case "h4":
              return <h4 key={i} style={{ fontSize: "1.1rem", marginTop: "1rem" }}>{b.text}</h4>;
            case "p":
              return <p key={i}>{b.lead && <strong>{b.lead} </strong>}{linkify(b.text)}</p>;
            case "ul":
              return (
                <ul key={i}>
                  {b.items.map((it, j) => <li key={j}>{it.lead && <strong>{it.lead} </strong>}{linkify(it.text)}</li>)}
                </ul>
              );
            case "cat":
              return (
                <div key={i} className="row" style={{ borderTop: "1px solid var(--border)", padding: "1rem 0" }}>
                  <div className="md-4"><strong>{b.name}</strong></div>
                  <div className="md-6">{b.examples}</div>
                  <div className="md-3" style={{ maxWidth: 120 }}><strong>{b.collected}</strong></div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}
