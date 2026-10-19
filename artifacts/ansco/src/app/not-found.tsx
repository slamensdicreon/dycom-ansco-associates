import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <main id="content">
        <section className="inner diagnol from-left text-center">
          <div className="container">
            <h1>Page Not Found</h1>
            <p className="lead">The page you are looking for could not be found.</p>
            <Link className="btn" href="/">Home</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
