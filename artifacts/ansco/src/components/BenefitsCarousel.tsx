"use client";

/**
 * Benefits slider (replaces the original Swiper carousel): one benefit per slide,
 * prev/next arrows, pagination dots, arrow-key support. Items come from src/content/careers.ts.
 */
import { useId, useState, type KeyboardEvent } from "react";
import type { Benefit } from "@/content/careers";
import styles from "./BenefitsCarousel.module.css";

export default function BenefitsCarousel({ label, items }: { label: string; items: Benefit[] }) {
  const [i, setI] = useState(0);
  const id = useId();
  const go = (n: number) => setI((n + items.length) % items.length);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
  };
  return (
    <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label={`${label} benefits`} onKeyDown={onKey}>
      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${i * 100}%)` }}>
          {items.map((b, n) => (
            <div
              key={b.title}
              id={`${id}-${n}`}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${n + 1} of ${items.length}`}
              aria-hidden={n !== i}
              inert={n !== i}
            >
              <img className={styles.icon} src={b.icon} alt="" width={100} height={100} />
              <h3 className={styles.title}>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
      <button type="button" className={`${styles.arrow} ${styles.prev}`} aria-label="Previous benefit" onClick={() => go(i - 1)} />
      <button type="button" className={`${styles.arrow} ${styles.next}`} aria-label="Next benefit" onClick={() => go(i + 1)} />
      <div className={styles.dots}>
        {items.map((b, n) => (
          <button
            key={b.title}
            type="button"
            className={`${styles.dot} ${n === i ? styles.dotActive : ""}`}
            aria-label={`Go to slide ${n + 1}: ${b.title}`}
            aria-controls={`${id}-${n}`}
            aria-current={n === i}
            onClick={() => setI(n)}
          />
        ))}
      </div>
    </div>
  );
}
