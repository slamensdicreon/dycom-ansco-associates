/** Opportunities: featured jobs + job categories. Content: src/content/careers.ts -> `opportunities`. */
import Banner from "@/components/Banner";
import { FancyBox, TalentNetworkCta } from "@/components/Blocks";
import ui from "@/components/ui.module.css";
import { opportunities as o } from "@/content/careers";
import { links } from "@/content/site";
import { pageMeta } from "@/lib/metadata";
import styles from "./jobs.module.css";

export const metadata = pageMeta({ ...o.meta, path: "/opportunities/", image: o.hero.image });

export default function OpportunitiesPage() {
  return (
    <>
      <Banner compact title={o.hero.title} image={o.hero.image}>
        <a className="btn" href={links.jobsHome}>{o.hero.cta}</a>
      </Banner>

      <section className="inner diagnol from-left">
        <div className="container">
          <h2 className="text-center mb-5">{o.jobsTitle}</h2>
          <ul className={styles.list}>
            {o.jobs.map((job) => (
              <li className={styles.row} key={job.url}>
                <h4 className={styles.title}>
                  <a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a>
                </h4>
                <span className={styles.loc}>{job.location}</span>
                <a className={styles.apply} href={job.url} target="_blank" rel="noopener noreferrer" aria-label={`Apply Now: ${job.title}, ${job.location}`}>
                  Apply Now
                </a>
              </li>
            ))}
          </ul>
          <p className="text-center mt-5">
            <a className="btn" href={links.jobsSearch}>{o.exploreLabel}</a>
          </p>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <h2 className="text-center mb-5">{o.categoriesTitle}</h2>
          <div className={ui.fancyGrid}>
            {o.categories.map((c) => (
              <FancyBox key={c.title} image={c.image} title={c.title} description={c.text} />
            ))}
          </div>
        </div>
      </section>

      <TalentNetworkCta />
    </>
  );
}
