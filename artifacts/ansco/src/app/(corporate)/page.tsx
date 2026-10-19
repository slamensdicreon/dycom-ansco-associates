/** Home page. Content: src/content/corporate.ts -> `home`. */
import Link from "next/link";
import Banner from "@/components/Banner";
import { IconCircle, Panel, SectionIntro } from "@/components/Blocks";
import ui from "@/components/ui.module.css";
import { home } from "@/content/corporate";
import { company } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...home.meta, path: "/", image: home.meta.ogImage, absoluteTitle: true });

export default function HomePage() {
  const { hero, whatWeDo, panels, services, contact } = home;
  return (
    <>
      <Banner home title={hero.title} image={hero.poster} videoSrc={hero.video}>
        <Link className="btn" href={hero.cta.href}>{hero.cta.label}</Link>
      </Banner>

      <section className="inner diagnol from-left">
        <div className="container">
          <SectionIntro title={whatWeDo.title}><p>{whatWeDo.text}</p></SectionIntro>
          <div className="row">
            {whatWeDo.items.map((item) => (
              <div className="md-6 lg-3 text-center" key={item.title.join(" ")}>
                <a href="#services" className={ui.iconLink}>
                  <IconCircle src={item.icon} />
                  <h3>{item.title.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row">
            <div className="lg-6"><Panel tall {...panels.whoWeAre} /></div>
            <div className="lg-6">
              <div className={ui.panelStack}>
                <Panel {...panels.careers} />
                <Panel {...panels.subcontractors} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="inner diagnol from-right">
        <div className="container">
          <SectionIntro title={services.title} as="h3"><p>{services.text}</p></SectionIntro>
          <div className={ui.cardGrid}>
            {services.items.map((s) => (
              <article className={ui.card} key={s.title}>
                <img className={ui.cardIcon} src={s.icon} alt="" />
                <div>
                  <h4 className="primary">{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner bg-faint">
        <div className="container">
          <div className="row align-center">
            <div className="lg-6 mb-4">
              <img className="img-shadow rc" src={contact.image} alt="Ansco crew member" />
            </div>
            <div className="lg-6">
              <h4 className="primary">{contact.title}</h4>
              <p className="lead">{contact.text}</p>
              <h4>{company.name}</h4>
              <ul className={ui.listContact}>
                <li><strong>Phone:</strong><a href={company.phoneHref}>{company.phone}</a></li>
                <li><strong>Address:</strong>{company.addressLine1}<br />{company.addressLine2}</li>
              </ul>
              <Link className="btn" href="/contact/">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
