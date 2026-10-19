/** Life@Ansco. Content: src/content/careers.ts -> `life`. */
import Banner from "@/components/Banner";
import { TalentNetworkCta } from "@/components/Blocks";
import { JobSearchForm, ReadMore } from "@/components/Interactive";
import { life } from "@/content/careers";
import { links } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...life.meta, path: "/life/", image: life.hero.image });

export default function LifePage() {
  const { hero, searchTitle, standFor, workWithUs, growth, workforce } = life;
  return (
    <>
      <Banner compact title={hero.title} image={hero.image}>
        <a className="btn" href={links.jobsHome}>{hero.cta}</a>
      </Banner>

      <section className="inner bg-navy text-center">
        <div className="container">
          <h2>{searchTitle}</h2>
          <JobSearchForm />
        </div>
      </section>

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row align-center">
            <div className="lg-7">
              <h2 className="primary">{standFor.title}</h2>
              {standFor.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="lg-5 text-center">
              <img src={standFor.image} alt="Ansco" />
            </div>
          </div>
        </div>
      </section>

      <section className="inner bg-primary diagnol from-right diagnol-light text-center">
        <div className="container">
          <h3>{workWithUs.title}</h3>
          <p className="lead mb-0">{workWithUs.text}</p>
        </div>
      </section>

      <section className="inner">
        <div className="container">
          <div className="row center-row text-center mb-5">
            <div className="lg-8">
              <h2 className="primary">{growth.title}</h2>
              <p>{growth.text}</p>
            </div>
          </div>
          <div className="row">
            {growth.items.map((g) => (
              <div className="lg-4 mb-4" key={g.title}>
                <img className="img-shadow rc mb-3" src={g.image} alt="" loading="lazy" />
                <h3 style={{ fontSize: "1.2rem" }}>{g.title}</h3>
                <p>{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row align-center">
            <div className="lg-5 mb-4">
              <img className="img-shadow rc" src={workforce.image} alt="Ansco workforce" />
            </div>
            <div className="lg-7">
              <h2 className="primary">{workforce.title}</h2>
              <ReadMore preview={<p>{workforce.preview}</p>}>
                {workforce.full.map((p) => <p key={p}>{p}</p>)}
              </ReadMore>
            </div>
          </div>
        </div>
      </section>

      <TalentNetworkCta />
    </>
  );
}
