import { business } from '@/data/business';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: business.name.display,
    alternateName: business.name.full,
    telephone: business.contact.phone,
    email: business.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '13:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '18:00',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '11:00',
        closes: '13:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(business.stats.googleRating),
      reviewCount: String(business.stats.googleReviewCount),
      bestRating: '5',
    },
    areaServed: {
      '@type': 'City',
      name: 'Παλαιό Φάληρο',
    },
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://alexopoulos-odigoi.gr',
    sameAs: [
      'https://www.facebook.com/profile.php?id=100040098141654',
    ],
    // priceRange removed — not verified from the business directly
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  if (items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
