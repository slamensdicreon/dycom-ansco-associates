/** Subcontractor Information Request. Content: src/content/subcontractor-request.ts. */
import Banner from "@/components/Banner";
import SubcontractorForm from "@/components/SubcontractorForm";
import { subcontractorRequest as c } from "@/content/subcontractor-request";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...c.meta, path: "/subcontractor-request/" });

export default function SubcontractorRequestPage() {
  return (
    <>
      <Banner title={c.hero.title} image={c.hero.image} />
      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row center-row">
            <div className="lg-8"><SubcontractorForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
