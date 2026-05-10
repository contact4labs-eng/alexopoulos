import { ExternalLink } from 'lucide-react';
import { business } from '@/data/business';

/**
 * Map embed for Σχολή Οδηγών Αλεξόπουλος.
 *
 * OpenStreetMap is used because Google Maps' keyless `output=embed` URL stopped
 * rendering in 2026 (returns an empty page). Switching to Maps Embed API would
 * require a billing-enabled key. OSM is free, reliable, and visually clean.
 * A "Open in Google Maps" link keeps users one click from real navigation.
 *
 * Coordinates 37.9267, 23.6967 come from business.ts → social.googleMaps.
 */

const LAT = 37.9267;
const LNG = 23.6967;
const BBOX_DELTA = 0.006; // ~700m around the marker
const OSM_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - BBOX_DELTA}%2C${LAT - BBOX_DELTA / 2}%2C${LNG + BBOX_DELTA}%2C${LAT + BBOX_DELTA / 2}&layer=mapnik&marker=${LAT}%2C${LNG}`;

export function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="aspect-video overflow-hidden rounded-xl border border-[#D4D4D4] md:aspect-auto md:h-[360px]">
        <iframe
          title="Σχολή Οδηγών Αλεξόπουλος — Αιόλου 7, Παλαιό Φάληρο"
          src={OSM_SRC}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={business.social.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#E31E24] transition-colors hover:text-[#C41A1F]"
      >
        Δείτε στο Google Maps
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
    </div>
  );
}
