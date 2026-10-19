/** Shared FAQ layout used by /faq/ (English) and /faq-es/ (Spanish). Content: src/content/faq*.tsx. */
import Link from "next/link";
import Banner from "@/components/Banner";
import { VideoEmbed } from "@/components/Blocks";
import { Accordion } from "@/components/Interactive";
import type { FaqContent } from "@/content/faq";

export default function FaqView({ c }: { c: FaqContent }) {
  const white = { color: "#fff", textDecoration: "underline" } as const;
  return (
    <>
      <Banner title={c.hero.title} image={c.hero.image} />

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row center-row text-center">
            <div className="lg-10">
              <h3 className="primary">{c.intro.title}</h3>
              {c.intro.paragraphs.map((p) => <p key={p}>{p}</p>)}
              {c.intro.tagline && <p className="primary" style={{ fontWeight: 600, fontSize: "1.25rem" }}>{c.intro.tagline}</p>}
              <p style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link className="btn" href="/contact/">{c.intro.callLabel}</Link>
                <Link className="btn" href={c.intro.languageHref}>{c.intro.languageLabel}</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row align-center">
            <div className="lg-5 mb-4">
              <h3 className="primary">{c.installation.title}</h3>
              {c.installation.paragraphs.map((p) => <p key={p}>{p}</p>)}
              <p><strong>{c.installation.videoLead}</strong></p>
            </div>
            <div className="lg-7">
              <VideoEmbed src={c.installation.video} title={c.installation.videoLead} />
            </div>
          </div>
        </div>
      </section>

      <section className="inner diagnol from-right">
        <div className="container">
          <div className="row center-row">
            <div className="lg-10">
              <h2 className="text-center mb-5">{c.faqTitle}</h2>
              <Accordion items={c.items} />
            </div>
          </div>
        </div>
      </section>

      <section className="inner bg-primary diagnol from-left diagnol-light">
        <div className="container">
          <div className="row">
            {c.stateContacts.map((s) => (
              <div className="md-6 lg-4 mb-4" key={s.state}>
                <h4>{s.state}</h4>
                <p style={{ margin: 0 }}>
                  {c.stateContactLabel} <a style={white} href={`tel:${s.phone}`}>{s.phone}</a>
                  <br />Email: <a style={white} href={`mailto:${s.email}`}>{s.email}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
