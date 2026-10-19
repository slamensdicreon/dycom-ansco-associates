/** Our Locations. Content: src/content/contact.ts -> `locations`. */
import Banner from "@/components/Banner";
import LocationsGrid from "@/components/LocationsGrid";
import { locationsIntro } from "@/content/contact";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Locations",
  description: "Ansco & Associates operating offices across the United States.",
  path: "/contact/locations/",
  image: "/assets/locations-og.jpg",
});

export default function LocationsPage() {
  return (
    <>
      <Banner title="Our Locations" image="/assets/locations-banner.jpg" />
      <section className="inner diagnol from-left">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="primary">Locations</h2>
            <p>{locationsIntro}</p>
          </div>
          <LocationsGrid />
        </div>
      </section>
    </>
  );
}
