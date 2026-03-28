import type { Metadata } from 'next';

const SITE_NAME = 'Σχολή Οδηγών Αλεξόπουλος';
const DEFAULT_DESCRIPTION =
  'Σχολή Οδηγών Αλεξόπουλος στο Παλαιό Φάληρο. 50+ χρόνια εμπειρίας, 4.9★ στο Google με 251+ κριτικές. Δίπλωμα αυτοκινήτου, μοτοσικλέτας, επαγγελματικό δίπλωμα και ΠΕΙ.';

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = path === '' ? `${SITE_NAME} | Παλαιό Φάληρο` : `${title} | ${SITE_NAME}`;
  // Domain is a placeholder until the real domain is configured
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexopoulos-odigoi.gr';
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'el_GR',
      type: 'website',
    },
  };
}
