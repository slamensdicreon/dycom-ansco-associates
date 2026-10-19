/** Benefits. Content: src/content/careers.ts -> `benefits`. */
import Banner from "@/components/Banner";
import BenefitsCarousel from "@/components/BenefitsCarousel";
import { TalentNetworkCta } from "@/components/Blocks";
import { benefits } from "@/content/careers";
import { links } from "@/content/site";
import { pageMeta } from "@/lib/metadata";
import styles from "./benefits.module.css";

export const metadata = pageMeta({ ...benefits.meta, path: "/benefits/", image: benefits.hero.image });

export default function BenefitsPage() {
  return (
    <>
      <Banner compact title={benefits.hero.title} image={benefits.hero.image}>
        <a className="btn" href={links.jobsHome}>{benefits.hero.cta}</a>
      </Banner>

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row center-row text-center">
            <div className="lg-10"><h3 className="primary mb-0">{benefits.intro}</h3></div>
          </div>
        </div>
      </section>

      {benefits.groups.map((g, gi) => (
        <section className={styles.group} key={g.title}>
          <div className={styles.media} style={{ backgroundImage: `url("${g.image}")`, order: gi % 2 ? 2 : 0 }}>
            <h2 className={styles.groupTitle}>{g.title}</h2>
          </div>
          <div className={styles.items}>
            <BenefitsCarousel label={g.title} items={g.items} />
          </div>
        </section>
      ))}

      <TalentNetworkCta />
    </>
  );
}
