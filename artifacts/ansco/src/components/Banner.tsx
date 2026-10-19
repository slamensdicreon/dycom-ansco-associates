/**
 * Page hero banner (".banner.skew" in the original theme): cover image, two
 * translucent diagonal slabs, white headline. Optionally plays a background
 * Vimeo embed over the poster image (home page).
 */
import type { ReactNode } from "react";
import styles from "./Banner.module.css";
import BackgroundVideo from "./BackgroundVideo";

type BannerProps = {
  title: ReactNode;
  /** Background image path in /public (also used as video poster). */
  image: string;
  lead?: ReactNode;
  /** Optional Vimeo background embed URL. */
  videoSrc?: string;
  home?: boolean;
  /** Short careers-style banners. */
  compact?: boolean;
  children?: ReactNode;
};

export default function Banner({ title, image, lead, videoSrc, home, compact, children }: BannerProps) {
  return (
    <section
      className={`${styles.banner} ${home ? styles.home : ""} ${compact ? styles.compact : ""}`}
      style={{ backgroundImage: `url("${image}")` }}
    >
      {videoSrc && <BackgroundVideo src={videoSrc} />}
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.skewLeft} aria-hidden="true" />
      <div className={styles.skewRight} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children}
      </div>
    </section>
  );
}
