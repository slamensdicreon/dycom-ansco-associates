/** FAQ / Hola, Vecino (Spanish). Content: src/content/faq-es.tsx. */
import FaqView from "@/components/FaqView";
import { faqEs } from "@/content/faq-es";
import { pageMeta } from "@/lib/metadata";

export const metadata = { ...pageMeta({ ...faqEs.meta, path: faqEs.path }), other: { "content-language": "es" } };

export default function FaqEsPage() {
  return <div lang="es"><FaqView c={faqEs} /></div>;
}
