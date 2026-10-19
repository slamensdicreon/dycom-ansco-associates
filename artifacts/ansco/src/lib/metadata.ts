import type { Metadata } from "next";

/** Builds per-page metadata (title, description, canonical, Open Graph) in the original site's format. */
export function pageMeta({ title, description, path, image = "/assets/home-og.jpg", absoluteTitle }: {
  title: string; description: string; path: string; image?: string; absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} - Ansco & Associates`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: "Ansco & Associates", locale: "en_US", type: "website", images: [{ url: image }] },
    twitter: { card: "summary_large_image" },
  };
}
