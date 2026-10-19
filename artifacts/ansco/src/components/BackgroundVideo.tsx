"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Banner.module.css";

/** Keep the local poster visible unless Vimeo confirms actual playback.
 * An iframe load alone may be a blocked-player page, not a playable video.
 */
export default function BackgroundVideo({ src }: { src: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const listen = (event: MessageEvent) => {
      if (event.origin !== "https://player.vimeo.com" || event.source !== frame.current?.contentWindow) return;
      let data;
      try { data = typeof event.data === "string" ? JSON.parse(event.data) : event.data; } catch { return; }
      if (data?.event === "ready") {
        for (const value of ["playing", "error"]) {
          frame.current?.contentWindow?.postMessage({ method: "addEventListener", value }, "https://player.vimeo.com");
        }
      }
      if (data?.event === "playing") setPlaying(true);
      if (data?.event === "error") setPlaying(false);
    };
    window.addEventListener("message", listen);
    return () => window.removeEventListener("message", listen);
  }, []);
  return <iframe ref={frame} className={styles.video} style={{ opacity: playing ? 1 : 0 }} src={src}
    title="Background video" allow="autoplay; fullscreen; picture-in-picture" tabIndex={-1} aria-hidden="true" />;
}
