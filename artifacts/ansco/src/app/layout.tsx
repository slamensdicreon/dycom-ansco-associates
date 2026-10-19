import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://anscollc.com"),
  title: "Ansco & Associates - Premium National Telecom Service Provider",
  icons: { icon: "/assets/ansco-icon-150x150.png", apple: "/assets/ansco-icon.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#b01630" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
