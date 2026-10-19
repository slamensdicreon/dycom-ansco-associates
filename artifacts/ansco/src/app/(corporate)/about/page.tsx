/** About Us. Content: src/content/corporate.ts -> `about`. */
import Banner from "@/components/Banner";
import { Counter } from "@/components/Interactive";
import { about } from "@/content/corporate";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...about.meta, path: "/about/", image: about.meta.ogImage });

export default function AboutPage() {
  const { hero, intro, counters, history, mvv, services } = about;
  return (
    <>
      <Banner title={hero.title} image={hero.image} />

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row center-row text-center mb-5">
            <div className="lg-10">
              <h3 className="primary">{intro.title}</h3>
              <p className="lead">{intro.text}</p>
            </div>
          </div>
          <div className="row">
            {counters.map((c) => (
              <div className="md-6 lg-3 mb-4" key={c.label.join(" ")}>
                <Counter value={c.value} label={<>{c.label[0]}<br />{c.label[1]}</>} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row align-center">
            <div className="lg-6 mb-4">
              <img className="img-shadow rc mb-4" src={history.images[0]} alt="Ansco crew in the Southeast" />
              <img className="img-shadow rc" src={history.images[1]} alt="Ansco fiber construction" />
            </div>
            <div className="lg-6">
              <h3 className="primary">{history.title}</h3>
              {history.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="inner bg-primary diagnol from-right diagnol-light">
        <div className="container">
          <div className="text-center mb-5">
            <img src={mvv.icon} alt="" width={80} className="mb-3" />
            <h2>{mvv.title}</h2>
          </div>
          <div className="row">
            <div className="lg-4 mb-4">
              <h4>Mission</h4><p>{mvv.mission}</p>
              <h4 className="mt-4">Vision</h4><p>{mvv.vision}</p>
            </div>
            <div className="lg-8">
              <h4>Values</h4>
              {mvv.values.map((v) => (
                <p key={v.term}><strong>{v.term}</strong> {v.text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="inner diagnol from-left">
        <div className="container">
          {services.map((s, i) => (
            <div className="row align-center mb-5" key={s.title} style={{ flexDirection: i % 2 ? "row-reverse" : "row" }}>
              <div className="lg-5 mb-4">
                <img className="img-shadow rc" src={s.image} alt={s.title} />
              </div>
              <div className="lg-7">
                <h3 className="primary">{s.title}</h3>
                {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
                {s.list && <ul className="icon-list">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
                {s.after && <p>{s.after}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
