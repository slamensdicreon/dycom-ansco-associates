/** FAQ / Hello Neighbor (English). Content: src/content/faq.tsx -> `faqEn`. */
import FaqView from "@/components/FaqView";
import { faqEn } from "@/content/faq";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...faqEn.meta, path: faqEn.path });

export default function FaqPage() {
  return <FaqView c={faqEn} />;
}
