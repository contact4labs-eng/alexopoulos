import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexopoulos-odigoi.gr';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE_URL}/`,           lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/oroi-xrisis`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
