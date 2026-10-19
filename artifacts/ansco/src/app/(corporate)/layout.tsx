import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";

/** Corporate pages: standard footer with HQ address. */
export default function CorporateLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main id="content">{children}</main>
      <SiteFooter />
    </>
  );
}
