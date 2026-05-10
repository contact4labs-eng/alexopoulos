import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StickyCTA } from '@/components/layout/sticky-cta';
import { Analytics } from '@/components/analytics';
import { CookieConsent } from '@/components/cookie-consent';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { faqItems } from '@/data/faq';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'greek'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Σχολή Οδηγών Αλεξόπουλος | Παλαιό Φάληρο',
    template: '%s | Σχολή Οδηγών Αλεξόπουλος',
  },
  description:
    'Σχολή Οδηγών Αλεξόπουλος στο Παλαιό Φάληρο. 50+ χρόνια εμπειρίας, 4.9★ στο Google με 251+ κριτικές. Δίπλωμα αυτοκινήτου, μοτοσικλέτας, επαγγελματικό δίπλωμα και ΠΕΙ.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://alexopoulos-odigoi.gr'
  ),
  openGraph: {
    locale: 'el_GR',
    type: 'website',
    siteName: 'Σχολή Οδηγών Αλεξόπουλος',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <html lang="el" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F8F9] text-[#1A1A1A]">
        <a href="#main-content" className="skip-to-content">
          Μετάβαση στο περιεχόμενο
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
