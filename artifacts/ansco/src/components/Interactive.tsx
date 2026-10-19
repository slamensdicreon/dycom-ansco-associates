"use client";

/**
 * Small client-only interaction components. Content is always passed in as props.
 */
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { links } from "@/content/site";
import styles from "./ui.module.css";

/** Animated count-up counter (About page). Starts when scrolled into view. */
export function Counter({ value, label }: { value: number; label: ReactNode }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(value); return; }
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 2000);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return (
    <div>
      <div className={styles.counterWrap}>
        <span className={styles.counter} ref={ref}>
          <span aria-hidden="true">{n.toLocaleString("en-US")}</span>
          <span className="sr-only">{value}</span>
        </span>
      </div>
      <h4 className={styles.counterLabel}>{label}</h4>
    </div>
  );
}

export type AccordionItem = { question: string; answer: ReactNode };

/** Single-open accordion with red header bars (FAQ page). */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();
  return (
    <div>
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div className={styles.accItem} key={item.question}>
            <h3 className={styles.accHead}>
              <button
                type="button"
                id={`${base}-h${i}`}
                className={styles.accBtn}
                aria-expanded={expanded}
                aria-controls={`${base}-p${i}`}
                onClick={() => setOpen(expanded ? null : i)}
              >
                {item.question}
              </button>
            </h3>
            <div id={`${base}-p${i}`} role="region" aria-labelledby={`${base}-h${i}`} hidden={!expanded} className={styles.accPanel}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** READ MORE / READ LESS toggle (Life@Ansco "Our Workforce"). */
export function ReadMore({ preview, children }: { preview: ReactNode; children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return (
    <div>
      {!expanded && preview}
      <div id={id} hidden={!expanded}>{children}</div>
      <button type="button" className={styles.readToggle} aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded((e) => !e)}>
        {expanded ? "READ LESS" : "READ MORE"}
      </button>
    </div>
  );
}

/**
 * Dycom job search (same behavior as the original inline script):
 * sends the visitor to the SAP SuccessFactors career site with keyword + location.
 */
export function JobSearchForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const q = String(data.get("q") ?? "");
    const loc = String(data.get("locationsearch") ?? "");
    window.location.href =
      `${links.jobsSearch}?q=${encodeURIComponent(q)}&locationsearch=${encodeURIComponent(loc)}` +
      "&searchResultView=LIST&pageNumber=0&facetFilters=%7B%7D&sortBy=&markerViewed=&carouselIndex=";
  };
  return (
    <form className={styles.search} role="search" onSubmit={onSubmit}>
      <input type="search" name="q" aria-label="Search by Keyword" placeholder="Search by Keyword" maxLength={50} />
      <input type="search" name="locationsearch" aria-label="Search by Location" placeholder="Search by Location" maxLength={50} />
      <button type="submit">Search Jobs</button>
    </form>
  );
}
