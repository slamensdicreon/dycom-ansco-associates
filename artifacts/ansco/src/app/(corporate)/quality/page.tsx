/** Quality. Content: src/content/corporate.ts -> `quality`. */
import Banner from "@/components/Banner";
import { Panel, VideoEmbed } from "@/components/Blocks";
import { quality } from "@/content/corporate";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...quality.meta, path: "/quality/", image: quality.meta.ogImage });

export default function QualityPage() {
  const { hero, rightway, committed, panels } = quality;
  return (
    <>
      <Banner title={hero.title} image={hero.image} />

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row">
            <div className="lg-7">
              <h3 className="primary">{rightway.title}</h3>
              {rightway.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="lg-5">
              <img className="img-shadow rc" src={rightway.image} alt="Ansco RIGHTWAY quality" />
            </div>
          </div>
          <div className="row mt-5">
            {rightway.acrostic.map((a) => (
              <div className="md-6 lg-3 mb-4" key={a.term}>
                <p style={{ margin: 0 }}>
                  <strong className="primary" style={{ fontSize: "1.1rem" }}>
                    <span style={{ fontSize: "1.8rem", fontWeight: 700 }}>{a.term[0]}</span>{a.term.slice(1)}
                  </strong>
                  <br />{a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row align-center">
            <div className="lg-6 mb-4">
              <h3 className="primary">{committed.title}</h3>
              {committed.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="lg-6">
              <VideoEmbed src={committed.video} title="Ansco quality video" />
            </div>
          </div>
          <div className="row mt-5">
            {committed.images.map((src) => (
              <div className="md-6 mb-4" key={src}><img className="img-shadow rc" src={src} alt="Ansco quality workmanship" /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="inner diagnol from-right">
        <div className="container">
          <div className="row">
            {panels.map((p) => <div className="lg-6 mb-4" key={p.title}><Panel {...p} /></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
