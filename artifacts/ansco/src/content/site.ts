/**
 * Site-wide content: navigation, footer, company contact details, external links.
 * EDITORS: change menu labels, phone numbers, addresses and social links here.
 */

export type NavLink = { label: string; href: string; external?: boolean };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const company = {
  name: "Ansco & Associates, LLC",
  shortName: "Ansco & Associates",
  phone: "(404) 508-5700",
  phoneHref: "tel:(404) 508-5700",
  addressLine1: "200 North Point Center East, Suite 400",
  addressLine2: "Alpharetta, GA 30022",
  customerServicePhone: "1-877-245-6660",
  customerServiceEmail: "CustomerCare@Anscollc.com",
  talentEmail: "talent.acquisition@mcview.com",
  copyrightYear: new Date().getFullYear(),
} as const;

/** External destinations (kept identical to the live site). */
export const links = {
  jobsHome: "https://dycomind.jobs.hr.cloud.sap/ansco",
  jobsSearch: "https://dycomind.jobs.hr.cloud.sap/ansco/search/",
  legacyCareers: "https://careers.anscollc.com/ansco",
  facebook: "https://www.facebook.com/AnscoLLC",
  instagram: "https://www.instagram.com/anscollc/",
  linkedin: "https://www.linkedin.com/company/ansco-&-associates-llc/",
  eeo: "https://www.dol.gov/general/topics/posters",
  benefitDisclosures: "https://dycomind.com/benefit-plan-disclosures/",
  alwaysPdf: "https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/10/ALWAYS.pdf",
  supplierCodePdf:
    "https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/12/Ansco_Subsidiary-Supplier-Code-of-Conduct-October-2025.pdf",
  /** Internal routes linked from content. */
  subcontractorRequest: "/subcontractor-request/",
  faqSpanish: "/faq-es/",
} as const;

/** Main navigation, in original order. Items with `children` render as dropdowns. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Safety", href: "/safety/" },
  { label: "Quality", href: "/quality/" },
  {
    label: "About Us",
    children: [
      { label: "About Us", href: "/about/" },
      { label: "Locations", href: "/contact/locations/" },
    ],
  },
  { label: "Subcontractors", href: "/subcontractors/" },
  {
    label: "Careers",
    children: [
      { label: "Careers", href: "/careers/" },
      { label: "Opportunities", href: "/opportunities/" },
      { label: "Benefits", href: "/benefits/" },
      { label: "Life@Ansco", href: "/life/" },
    ],
  },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact Us", href: "/contact/" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "Safety", href: "/safety/" },
  { label: "Quality", href: "/quality/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

/** Image paths (served from /public/assets). */
export const brandImages = {
  logo: "/assets/cropped-cropped-ansco-registered-logo.png",
  logoLight: "/assets/ansco-logo-light.png",
} as const;
