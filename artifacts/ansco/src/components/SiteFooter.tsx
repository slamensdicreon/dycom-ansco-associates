/**
 * Navy footer. Two variants match the original:
 *  - "default": quick links + social + HQ address/phone
 *  - "careers": careers pages swap the address block for EEO / benefit disclosure links
 *    and add the talent-acquisition assistance line.
 */
import Link from "next/link";
import { brandImages, company, footerQuickLinks, links } from "@/content/site";
import SocialIcons from "./SocialIcons";
import styles from "./SiteFooter.module.css";

export default function SiteFooter({ variant = "default" }: { variant?: "default" | "careers" }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="lg-4">
            <Link href="/" aria-label="Ansco & Associates home">
              {/* EDIT: footer (light) logo */}
              <img className={styles.logo} src={brandImages.logoLight} alt="Ansco & Associates" />
            </Link>
          </div>
          <div className={`lg-4 ${styles.borderCol}`}>
            <h6>Quick Links:</h6>
            <ul className={styles.menu}>
              {footerQuickLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
            <h6 className={styles.spaced}>Visit Us Online:</h6>
            <SocialIcons />
            {variant === "careers" && (
              <p className={styles.assist}>
                If you need assistance accessing the career page or otherwise applying for a position, please contact:{" "}
                <a href={`mailto:${company.talentEmail}`}>{company.talentEmail}</a>
              </p>
            )}
          </div>
          <div className="lg-4">
            <h6>{company.name}</h6>
            {variant === "careers" ? (
              <ul className={styles.list}>
                <li><a href={links.eeo} target="_blank" rel="noopener noreferrer">Equal Employment Opportunity</a></li>
                <li><a href={links.benefitDisclosures} target="_blank" rel="noopener noreferrer">Benefit Plan Disclosures</a></li>
              </ul>
            ) : (
              <ul className={styles.list}>
                <li>{company.addressLine1}<br />{company.addressLine2}</li>
                <li>Phone: <a href={company.phoneHref}>{company.phone}</a></li>
              </ul>
            )}
          </div>
        </div>
        <hr className={styles.hr} />
        <p className={styles.copy}>
          &copy; {company.copyrightYear} {company.name} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
