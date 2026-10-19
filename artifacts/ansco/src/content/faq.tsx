/**
 * FAQ ("Hello Neighbor") page content.
 * EDITORS: questions/answers below render as the red accordion. Answers may contain simple JSX.
 */
import type { AccordionItem } from "@/components/Interactive";

/** Shape shared by the English (/faq/) and Spanish (/faq-es/) pages. */
export type FaqContent = {
  meta: { title: string; description: string };
  path: string;
  hero: { title: string; image: string };
  intro: { title: string; paragraphs: string[]; tagline?: string; callLabel: string; languageLabel: string; languageHref: string };
  installation: { title: string; paragraphs: string[]; videoLead: string; video: string };
  faqTitle: string;
  items: AccordionItem[];
  stateContactLabel: string;
  stateContacts: { state: string; phone: string; email: string }[];
};

export const faqMeta = {
  title: "FAQ",
  description: "We are helping bring fiber to your community. Answers to common questions about Ansco fiber installation work.",
};

export const faqHero = { title: "Hello Neighbor", image: "/assets/contact-banner.webp" };

export const faqIntro = {
  title: "We Are Helping Bring Fiber To Your Community",
  paragraphs: [
    "Exciting news for your community. Our company, Ansco is planning to lay fiber optic cables underground throughout the entire community for a major telecommunications provider.",
    "Fiber optic cables provide the fastest and most reliable internet connection available today. With this technology, you’ll experience blazing-fast internet speeds, seamless video streaming, and crystal-clear voice calls.",
  ],
  callLabel: "Questions? Call Our Team",
  spanishLabel: "Para español haga clic aquí",
};

export const faqInstallation = {
  title: "Installation",
  paragraphs: [
    "Our team has designed a seamless installation process that won’t disrupt your day-to-day life.",
    "Whether we are burying the fiber optic cables underground or using existing utility poles the work will be carried out as discreetly and efficiently as possible.",
  ],
  videoLead: "Watch Our Informational Video To Learn More About Our Process.",
  // Original Vimeo embed.
  video: "https://player.vimeo.com/video/884943374?h=70d9f89a24&dnt=1&app_id=122963",
};

export const faqItems: AccordionItem[] = [
  { question: "When Will the Work Take Place?", answer: <p>Generally, the work begins within two weeks of the residents being notified. In most cases residents will receive a door hanger with details.</p> },
  { question: "Where Will the Work Take Place?", answer: <p>Work will take place in the right of way area of properties.</p> },
  { question: "How Long Will The Work Last?", answer: <p>The installation timeline is projected at 30 to 45 days. Our commitment is to minimize any inconvenience for you and your neighbors while maintaining exceptional quality standards.</p> },
  { question: "Will You Be Digging On My Property?", answer: <p>There might be some, but rest easy. Our professionals will handle everything with expertise, restoring your yard’s original condition after installation.</p> },
  {
    question: "Will I Need To Repair My Own Property?",
    answer: (
      <>
        <p>No - Our professionals take survey pictures before and after any digging or installation occurs to ensure everything is restored to its original condition.</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <img src="/assets/before-300x276-1.jpeg" alt="Yard before installation" width={300} height={276} />
          <img src="/assets/after-300x276-1.jpeg" alt="Yard after restoration" width={300} height={276} />
        </div>
      </>
    ),
  },
  {
    question: "What Happens If Something Is Damaged?",
    answer: (
      <p>
        Please contact our Customer Service Line: <a href="tel:877-245-6660">877-245-6660</a>
        <br />or email us at <a href="mailto:customercare@anscollc.com">customercare@anscollc.com</a>
      </p>
    ),
  },
  { question: "Can I Deny Access To My Yard To Stop This Work?", answer: <p>No, work takes place in the right of way area. Permission to work in this area is governed by the city or municipality via a Utility Easement.</p> },
  { question: "What Is A Utility Easement?", answer: <p>A utility easement/P.U.E. or Right-of-Way, often called ROW, is a legal right allowing utilities access to specified property portions for infrastructure. Utility easements are vital for maintaining essential services while allowing land use. Restrictions include no obstruction within the easement.</p> },
  { question: "What Is A Back Lot Easement?", answer: <p>A back lot easement is where one piece of land doesn’t have access to the road to the public roadway, ie. like a backyard and requires entry through the front yard or driveway.</p> },
  { question: "Why Are There Paint Markings on My Property?", answer: <p>To ensure underground infrastructure is protected when excavation activity occurs, utility companies are required to locate their existing utilities in the area prior to excavation. You may notice several paint markings on or near your property. These markings help to guide our crews so that they know what is going on under the surface even before a shovel hits the ground. Paint markings will gradually fade over time.</p> },
  {
    question: "What Type of Equipment Will You Be Using?",
    answer: (
      <>
        <p>Here are the of equipment you can expect to see in your neighborhood when fiber optic cables are being buried underground.</p>
        <ul>
          <li><strong>Shovel</strong>: Essential for initial trench excavation.</li>
          <li><strong>Backhoe or Excavator</strong>: Utilized for challenging soil conditions or larger trenches.</li>
          <li><strong>Microtrenching machine</strong>: This machine easily cuts through concrete or asphalt, utilizing a large circular blade for fiber placement. The removal debris is vacuumed using a vacuum excavator, which is like an extremely large commercial vacuum.</li>
          <li><strong>Directional Drill</strong>: Specialized for creating underground paths with minimal surface disruption.</li>
          <li><strong>Missile Boring Equipment:</strong> Perfect for shorter distances, creating tunnels with minimal surface impact.</li>
          <li><strong>Bucket Truck:</strong> Often referred to as a cherry picker or boom truck, is a type of aerial lift or work platform essential to hang fiber optic cables.</li>
          <li><strong>Cable Pulling Equipment</strong>: Ensures smooth, secure cable installation.</li>
          <li><strong>Fiber Optic Splicing Equipment</strong>: Joins individual strands for network integrity.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is Microtrenching?",
    answer: (
      <>
        <p>Microtrenching is a minimally invasive technology which enhances the ability to place fiber optic cable quickly and effectively in challenging construction environments including existing roadway beds and dense urban areas. Microtrenching process includes:</p>
        <ol>
          <li>Cutting a narrow trench in the existing surface to create a void;</li>
          <li>Evacuating debris;</li>
          <li>Laying cable;</li>
          <li>Flowing a non-shrinking composition into the void; and</li>
          <li>Applying a topping material.</li>
        </ol>
        <p>The process involves making a narrow cut in the existing surface and then removing the debris from the trench at the same time using a specially designed vacuum system. Fiber conduit is then placed in the trench with a backfill of custom flowable material.</p>
      </>
    ),
  },
  { question: "What Is This Utility Box Buried in My Yard?", answer: <p>In certain cases, we may need to place a Hand Hole on your property – this is an in-ground box for fiber splicing. We are granted permission to do this from the Utility Easement.</p> },
];

/** Customer service lines by state (bottom of FAQ page). */
export const faqStateContacts = [
  { state: "Arizona", phone: "1-855-520-1757" },
  { state: "Georgia", phone: "1-877-245-6660" },
  { state: "North Carolina", phone: "1-877-245-6660" },
  { state: "South Carolina", phone: "1-877-245-6660" },
  { state: "Texas", phone: "1-855-520-1757" },
];

/* ---------------- English page object ---------------- */
export const faqEn: FaqContent = {
  meta: faqMeta,
  path: "/faq/",
  hero: faqHero,
  intro: { ...faqIntro, languageLabel: faqIntro.spanishLabel, languageHref: "/faq-es/" },
  installation: faqInstallation,
  faqTitle: "Frequently Asked Questions",
  items: faqItems,
  stateContactLabel: "Please contact our Customer Service Line:",
  stateContacts: faqStateContacts.map((s) => ({ ...s, email: "CustomerCare@Anscollc.com" })),
};
