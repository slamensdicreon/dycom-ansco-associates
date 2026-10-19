/**
 * Small presentational server components reused across pages.
 * Text and images are always passed in from src/content/* so editors never edit here.
 */
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { links } from "@/content/site";
import styles from "./ui.module.css";

/** Smart link: internal routes use next/link, everything else opens in place as a plain anchor. */
export function SmartLink({ href, className, children, style }: { href: string; className?: string; children: ReactNode; style?: CSSProperties }) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link href={href} className={className} style={style}>{children}</Link>;
  }
  return <a href={href} className={className} style={style}>{children}</a>;
}

/** Image tile with dark overlay, title/text pinned to the bottom, sliding "Learn More" tab. */
export function Panel({ href, image, title, text, tall }: { href: string; image: string; title: string; text?: string; tall?: boolean }) {
  return (
    <SmartLink href={href} className={`${styles.panel} ${tall ? styles.panelTall : ""}`} style={{ backgroundImage: `url("${image}")` }}>
      <span className={styles.panelBtn} aria-hidden="true">Learn More</span>
      <div className={styles.panelText}>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        <span className={`btn btn-sm ${styles.panelMobileBtn}`}>Learn More</span>
      </div>
    </SmartLink>
  );
}

/** Red circular icon badge with a white ring. */
export function IconCircle({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <span className={styles.iconFixed}>
      <img src={src} alt={alt} />
    </span>
  );
}

/** Hover-reveal image box used on Careers / Opportunities. */
export function FancyBox({ image, title, description, href }: { image: string; title: string; description: string; href?: string }) {
  const inner = (
    <>
      <span className={styles.fancyBg} style={{ backgroundImage: `url("${image}")` }} aria-hidden="true" />
      <div className={styles.fancyInner}>
        <h3>{title}</h3>
        <p className={styles.fancyDesc}>{description}</p>
      </div>
    </>
  );
  return href ? (
    <SmartLink href={href} className={styles.fancy}>{inner}</SmartLink>
  ) : (
    <div className={styles.fancy} tabIndex={0}>{inner}</div>
  );
}

/** Responsive 16:9 third-party video embed (Vimeo). */
export function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.videoWrap}>
      <iframe src={src} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" />
    </div>
  );
}

/** "Connecting You to Possibilities / Join Our Talent Network!" band shown on all careers pages. */
export function TalentNetworkCta({ image = "/assets/RS163__CGC2944.jpg" }: { image?: string }) {
  return (
    <section className={`${styles.cta} inner`} style={{ backgroundImage: `url("${image}")` }}>
      <div className="container">
        {/* EDIT: careers CTA copy */}
        <h2>Connecting You to Possibilities</h2>
        <h4>Join Our Talent Network!</h4>
        <a className="btn" href={links.jobsHome}>Connect with us!</a>
      </div>
    </section>
  );
}

/** Section heading + intro paragraph, centered. */
export function SectionIntro({ title, children, as: Tag = "h2" }: { title: string; children?: ReactNode; as?: "h2" | "h3" }) {
  return (
    <div className="row center-row text-center mb-5">
      <div className="lg-8">
        <Tag>{title}</Tag>
        {children && <div className="lead">{children}</div>}
      </div>
    </div>
  );
}
