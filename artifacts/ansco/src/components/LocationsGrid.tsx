"use client";

/**
 * Filterable office list + map (replaces the original WP Google Map plugin listing).
 * The original plugin's marker coordinates are not present in the page source, so no coordinates
 * are used: the map is a Google Maps embed of the selected office's real street address.
 * Data: src/content/contact.ts -> `locations`.
 */
import { useMemo, useState } from "react";
import { locations } from "@/content/contact";
import styles from "./LocationsGrid.module.css";

const stateOf = (cityStateZip: string) => cityStateZip.match(/,\s*([A-Z]{2})\s/)?.[1] ?? "";
const addressOf = (l: (typeof locations)[number]) => `${l.street}, ${l.cityStateZip}`;

export default function LocationsGrid() {
  const states = useMemo(() => [...new Set(locations.map((l) => stateOf(l.cityStateZip)))].sort(), []);
  const [state, setState] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(locations[0].name);

  const q = query.trim().toLowerCase();
  const shown = locations.filter(
    (l) => (!state || stateOf(l.cityStateZip) === state) && (!q || `${l.name} ${addressOf(l)}`.toLowerCase().includes(q)),
  );
  const current = locations.find((l) => l.name === selected) ?? locations[0];
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(addressOf(current))}&z=14&output=embed`;

  return (
    <div>
      <div className={styles.map}>
        <iframe src={mapSrc} title={`Map: Ansco ${current.name} office`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>

      <div className={styles.filters} role="search">
        <label>
          <span className="sr-only">Filter by state</span>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">All States</option>
            {states.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label>
          <span className="sr-only">Search locations</span>
          <input type="search" placeholder="Search locations" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <p className={styles.count} aria-live="polite">{shown.length} of {locations.length} locations</p>
      </div>

      {shown.length === 0 ? (
        <p className={styles.empty}>No locations match your filter.</p>
      ) : (
        <ul className={styles.grid}>
          {shown.map((l) => {
            const active = l.name === current.name;
            return (
              <li key={l.name}>
                <button type="button" className={`${styles.item} ${active ? styles.active : ""}`} aria-pressed={active} onClick={() => setSelected(l.name)}>
                  <span className={styles.title}>{l.name}</span>
                  <span className={styles.addr}>{l.street}<br />{l.cityStateZip}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
