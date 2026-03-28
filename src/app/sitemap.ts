import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexopoulos-odigoi.gr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/ypiresies', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/ypiresies/diploma-aftokinitou', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/ypiresies/diploma-motosikletas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/ypiresies/epaggelmatiko-diploma', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/i-scholi-mas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kritikes', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/syxnes-erotiseis', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/epikoinonia', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
