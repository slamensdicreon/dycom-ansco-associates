/** Safety. Content: src/content/corporate.ts -> `safety`. */
import Banner from "@/components/Banner";
import { Panel } from "@/components/Blocks";
import ui from "@/components/ui.module.css";
import { safety } from "@/content/corporate";
import { links } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...safety.meta, path: "/safety/", image: safety.meta.ogImage });

export default function SafetyPage() {
  const { hero, intro, vision, panels, training, onSite } = safety;
  return (
    <>
      <Banner title={hero.title} image={hero.image} />

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row align-center">
            <div className="lg-6">
              <h3 className="primary">{intro.title}</h3>
              {intro.paragraphs.map((p) => <p key={p}>{p}</p>)}
              <img src={intro.logo} alt="Headway safety program" width={260} />
            </div>
            <div className="lg-6 mt-4">
              <img className="img-shadow rc" src={intro.image} alt="Ansco crew working safely" />
            </div>
          </div>
        </div>
      </section>

      <section className="inner bg-primary diagnol from-right diagnol-light">
        <div className="container">
          <div className="row">
            <div className="lg-6 mb-4">
              <h3>{vision.title}</h3>
              <p className="lead">{vision.text}</p>
              <h5>{vision.alwaysTitle}</h5>
              <p>{vision.alwaysText}</p>
              <a className="btn btn-outline-light" href={links.alwaysPdf} target="_blank" rel="noopener noreferrer">{vision.alwaysCta}</a>
            </div>
            <div className="lg-6">
              <div className={ui.panelStack}>
                {panels.map((p) => <Panel key={p.title} {...p} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row">
            <div className="lg-7">
              <h3 className="primary">{training.title}</h3>
              <p>{training.text}</p>
              <ul className="icon-list">{training.phases.map((l) => <li key={l}>{l}</li>)}</ul>
              <h4 className="mt-4" style={{ fontSize: "1.15rem" }}>{training.specializedTitle}</h4>
              <ul className="icon-list">{training.specialized.map((l) => <li key={l}>{l}</li>)}</ul>
              <h4 className="mt-4" style={{ fontSize: "1.15rem" }}>{training.otherTitle}</h4>
              {training.other.map((o) => (
                <div key={o.title} className="mb-3">
                  <h5 className="primary">{o.title}</h5>
                  {o.text && <p>{o.text}</p>}
                </div>
              ))}
            </div>
            <div className="lg-5">
              <img className="img-shadow rc mb-4" src={training.image} alt="Ansco safety training" />
              <img className="img-shadow rc" src={training.image2} alt="Ansco crew member in safety gear" />
            </div>
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row center-row text-center mb-5">
            <div className="lg-8">
              <h3 className="primary">{onSite.title}</h3>
              <p>{onSite.text}</p>
            </div>
          </div>
          <div className={ui.tileGrid}>
            {onSite.tiles.map((t) => (
              <div className={ui.tile} key={t.title}>
                <img src={t.image} alt="" loading="lazy" />
                <h5>{t.title}</h5>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
