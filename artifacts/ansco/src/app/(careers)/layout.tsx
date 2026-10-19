import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";

/** Careers pages: footer with talent-acquisition contact + EEO links. */
export default function CareersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main id="content">{children}</main>
      <SiteFooter variant="careers" />
    </>
  );
}
