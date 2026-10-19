/** Contact Us. Content: src/content/site.ts (company) + src/content/contact.ts. */
import Banner from "@/components/Banner";
import LocationsGrid from "@/components/LocationsGrid";
import ContactForm from "@/components/ContactForm";
import ui from "@/components/ui.module.css";
import { hqMapEmbed, locationsIntro } from "@/content/contact";
import { company } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Contact Us",
  description: "The team at Ansco is eager to hear from you. Whether you’ve got questions about our services, our people or our equipment, we welcome your inquiries.",
  path: "/contact/",
  image: "/assets/contact-og.jpg",
});

export default function ContactPage() {
  return (
    <>
      <Banner title="Contact Us" image="/assets/contact-banner.webp" />

      <section className="inner diagnol from-left">
        <div className="container">
          <div className="row center-row text-center mb-5">
            <div className="lg-10">
              <h2 className="primary">Contact Ansco &amp; Associates</h2>
              <p className="lead">
                The team at Ansco is eager to hear from you. Whether you’ve got questions about our services, our people or our equipment, we welcome your inquiries. Please complete the contact form below and we’ll reach out to you at our earliest opportunity.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="lg-5 mb-5">
              <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden", background: "#fff" }}>
                <div style={{ position: "relative", paddingBottom: "66%" }}>
                  <iframe
                    src={hqMapEmbed}
                    title="Map of Ansco headquarters"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  <h4>Headquarters</h4>
                  <ul className={ui.listContact}>
                    <li><strong>Phone:</strong><a href={company.phoneHref}>{company.phone}</a></li>
                    <li><strong>Address:</strong>{company.addressLine1}<br />{company.addressLine2}</li>
                  </ul>
                  <h4>Customer Service</h4>
                  <ul className={ui.listContact}>
                    <li><strong>Phone</strong><a href={`tel:${company.customerServicePhone}`}>{company.customerServicePhone}</a></li>
                    <li><strong>Email:</strong><a href={`mailto:${company.customerServiceEmail}`}>{company.customerServiceEmail}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="inner bg-faint text-center">
        <div className="container">
          <h2 className="primary">Locations</h2>
          <p>{locationsIntro}</p>
          <div className="mt-5" style={{ textAlign: "left" }}><LocationsGrid /></div>
        </div>
      </section>
    </>
  );
}
