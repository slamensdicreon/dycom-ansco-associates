/** Careers landing. Content: src/content/careers.ts -> `careers`. */
import Banner from "@/components/Banner";
import { FancyBox, TalentNetworkCta, VideoEmbed } from "@/components/Blocks";
import { JobSearchForm } from "@/components/Interactive";
import ui from "@/components/ui.module.css";
import { careers } from "@/content/careers";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...careers.meta, path: "/careers/", image: careers.hero.image });

export default function CareersPage() {
  return (
    <>
      <Banner compact title={careers.hero.title} image={careers.hero.image} />

      <section className="inner bg-navy text-center">
        <div className="container">
          <h2>{careers.searchTitle}</h2>
          <JobSearchForm />
        </div>
      </section>

      <section className="inner diagnol from-left">
        <div className="container">
          <p className="text-center mb-5" style={{ fontSize: 20 }}>
            <strong>{careers.purposeLead}</strong> {careers.purposeText}
          </p>
          <div className={ui.fancyGrid}>
            {careers.boxes.map((b) => (
              <FancyBox key={b.title} image={b.image} title={b.title} description={b.text} href={b.href} />
            ))}
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row center-row">
            <div className="lg-10">
              <VideoEmbed src={careers.video} title="Careers at Ansco" />
            </div>
          </div>
        </div>
      </section>

      <TalentNetworkCta image={careers.ctaImage} />
    </>
  );
}
