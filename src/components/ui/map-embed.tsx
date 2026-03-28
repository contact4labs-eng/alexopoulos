/**
 * Google Maps Embed for Σχολή Οδηγών Αλεξόπουλος
 *
 * To update with the exact embed URL:
 * 1. Go to Google Maps and find the business listing
 * 2. Click "Share" → "Embed a map"
 * 3. Copy the src URL from the iframe code
 * 4. Replace EMBED_SRC below
 */

const EMBED_SRC =
  'https://www.google.com/maps?q=Αιόλου+7,+Παλαιό+Φάληρο+175+61,+Greece&output=embed&hl=el';

export function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={`aspect-video overflow-hidden rounded-xl md:aspect-auto md:h-[400px] ${className}`}>
      <iframe
        title="Σχολή Οδηγών Αλεξόπουλος — Αιόλου 7, Παλαιό Φάληρο"
        src={EMBED_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
