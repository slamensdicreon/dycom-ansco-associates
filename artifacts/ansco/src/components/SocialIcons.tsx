/** Footer social icons (Facebook / Instagram / LinkedIn). URLs live in src/content/site.ts. */
import { links } from "@/content/site";
import styles from "./SiteFooter.module.css";

const icons = {
  facebook: <path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v10h4V14h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" />,
  instagram: (
    <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17 5.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM20.9 7.6c-.1-1.6-.4-3-1.6-4.1C18.2 2.4 16.8 2 15.2 2 13.5 1.9 10.5 1.9 8.8 2c-1.6.1-3 .4-4.1 1.6C3.5 4.6 3.1 6 3.1 7.6c-.1 1.7-.1 6.7 0 8.4.1 1.6.4 3 1.6 4.1 1.1 1.1 2.5 1.5 4.1 1.6 1.7.1 6.7.1 8.4 0 1.6-.1 3-.4 4.1-1.6 1.1-1.1 1.5-2.5 1.6-4.1.1-1.7.1-6.7 0-8.4zm-2 10.2c-.4.9-1 1.5-1.9 1.9-1.3.5-4.4.4-5.8.4s-4.5.1-5.8-.4c-.9-.4-1.5-1-1.9-1.9-.5-1.3-.4-4.4-.4-5.8s-.1-4.5.4-5.8c.4-.9 1-1.5 1.9-1.9 1.3-.5 4.4-.4 5.8-.4s4.5-.1 5.8.4c.9.4 1.5 1 1.9 1.9.5 1.3.4 4.4.4 5.8s.1 4.5-.4 5.8z" />
  ),
  linkedin: <path d="M6.9 21H3.2V8.9h3.7V21zM5 7.3C3.8 7.3 2.9 6.3 2.9 5.1S3.8 3 5 3s2.2 1 2.2 2.1-1 2.2-2.2 2.2zM21 21h-3.7v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6h-3.7V8.9h3.5v1.7h.1c.5-.9 1.7-2 3.5-2 3.8 0 4.5 2.5 4.5 5.7V21z" />,
} as const;

export default function SocialIcons() {
  const items: { key: keyof typeof icons; href: string; label: string }[] = [
    { key: "facebook", href: links.facebook, label: "Facebook" },
    { key: "instagram", href: links.instagram, label: "Instagram" },
    { key: "linkedin", href: links.linkedin, label: "LinkedIn" },
  ];
  return (
    <ul className={styles.social}>
      {items.map((i) => (
        <li key={i.key}>
          <a href={i.href} target="_blank" rel="noopener noreferrer" aria-label={i.label} className={styles[i.key]}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">{icons[i.key]}</svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
