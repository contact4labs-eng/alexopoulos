import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexopoulos-odigoi.gr';

// On preview deployments (Vercel previews), disallow indexing to prevent
// search engines from indexing temporary URLs.
const isPreview = process.env.VERCEL_ENV === 'preview';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: isPreview ? undefined : '/',
      disallow: isPreview ? '/' : '/api/',
    },
    ...(isPreview ? {} : { sitemap: `${BASE_URL}/sitemap.xml` }),
  };
}
