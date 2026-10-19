/** Subcontractors. Content: src/content/corporate.ts -> `subcontractors`. */
import Banner from "@/components/Banner";
import { subcontractors } from "@/content/corporate";
import { links } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...subcontractors.meta, path: "/subcontractors/", image: subcontractors.meta.ogImage });

export default function SubcontractorsPage() {
  const { hero, partner, requirements: r } = subcontractors;
  return (
    <>
      <Banner title={hero.title} image={hero.image} />

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row align-center">
            <div className="lg-6">
              <h3 className="primary">{partner.title}</h3>
              {partner.paragraphs.map((p) => <p key={p}>{p}</p>)}
              {/* Links to the internal /subcontractor-request/ page. */}
              <a className="btn" href={links.subcontractorRequest}>{partner.cta}</a>
            </div>
            <div className="lg-6 mt-4">
              <img className="img-shadow rc" src={partner.image} alt="Ansco subcontractor crew" />
            </div>
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row">
            <div className="lg-5 mb-4">
              <img className="img-shadow rc" src={r.image} alt="Telecom construction work" />
            </div>
            <div className="lg-7">
              <h4 className="primary">{r.title}</h4>
              <ul className="icon-list">{r.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <p>
                {r.conduct}{" "}
                <a href={links.supplierCodePdf} target="_blank" rel="noopener noreferrer">{r.conductLink}</a>
              </p>
              <p>{r.reportText} <a href={r.reportPhoneHref}>{r.reportPhone}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
