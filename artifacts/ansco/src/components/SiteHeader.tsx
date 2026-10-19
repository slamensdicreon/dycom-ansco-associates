"use client";

/**
 * Fixed white navigation bar with hover/keyboard dropdowns and a mobile collapse.
 * Menu items come from `mainNav` in src/content/site.ts.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { brandImages, mainNav, type NavLink } from "@/content/site";
import styles from "./SiteHeader.module.css";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname === href.replace(/\/$/, "");
}

function Dropdown({ label, items, pathname, onNavigate }: { label: string; items: NavLink[]; pathname: string; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const id = `menu-${label.replace(/\W+/g, "-").toLowerCase()}`;
  const active = items.some((i) => isActive(pathname, i.href));

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const focusItem = (index: number) => {
    const els = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a");
    if (!els?.length) return;
    els[(index + els.length) % els.length].focus();
  };

  const onToggleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => focusItem(0));
    }
    if (e.key === "Escape") setOpen(false);
  };

  const onMenuKey = (e: KeyboardEvent<HTMLUListElement>) => {
    const els = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
    const idx = els.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "ArrowDown") { e.preventDefault(); focusItem(idx + 1); }
    if (e.key === "ArrowUp") { e.preventDefault(); focusItem(idx - 1); }
    if (e.key === "Escape") {
      setOpen(false);
      wrapRef.current?.querySelector("button")?.focus();
    }
  };

  return (
    <li
      ref={wrapRef}
      className={`${styles.item} ${styles.dropdown} ${open ? styles.open : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => { if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false); }}
    >
      <button
        type="button"
        className={`${styles.link} ${styles.toggle} ${active ? styles.active : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onToggleKey}
      >
        {label}
      </button>
      <ul id={id} ref={menuRef} className={styles.menu} onKeyDown={onMenuKey}>
        {items.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              className={`${styles.menuItem} ${isActive(pathname, child.href) ? styles.menuActive : ""}`}
              aria-current={isActive(pathname, child.href) ? "page" : undefined}
              onClick={() => { setOpen(false); onNavigate(); }}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.affix : ""}`}>
      <a className="skip-link" href="#content">Skip to content</a>
      <nav className={styles.inner} aria-label="Main Navigation">
        <Link href="/" className={styles.brand} aria-label="Ansco & Associates home">
          {/* EDIT: header logo image */}
          <img src={brandImages.logo} alt="Ansco & Associates" width={300} height={53} />
        </Link>
        <button
          type="button"
          className={styles.toggler}
          aria-controls="main-menu"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <ul id="main-menu" className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`}>
          {mainNav.map((item) =>
            "children" in item ? (
              <Dropdown key={item.label} label={item.label} items={item.children} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
            ) : (
              <li key={item.href} className={styles.item}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${isActive(pathname, item.href) ? styles.active : ""}`}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </header>
  );
}
