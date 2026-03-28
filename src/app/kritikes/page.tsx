import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Section } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { StarRating } from '@/components/ui/star-rating';
import { Testimonials } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta-section';
import { ExternalLink } from 'lucide-react';
import { business } from '@/data/business';

export const metadata: Metadata = createMetadata({
  title: 'Κριτικές',
  description: 'Δείτε τι λένε οι μαθητές μας. 4.9★ στο Google με 251+ κριτικές. Σχολή Οδηγών Αλεξόπουλος, Παλαιό Φάληρο.',
  path: '/kritikes',
});

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Κριτικές Μαθητών"
        description="Η γνώμη των μαθητών μας είναι η καλύτερη απόδειξη της δουλειάς μας."
      />

      {/* Rating Summary */}
      <Section background="white">
        <div className="mx-auto max-w-2xl text-center">
          <StarRating rating={business.stats.googleRating} size="lg" className="justify-center mb-4" />
          <p className="text-5xl font-bold text-[#1A1A1A]">{business.stats.googleRating}/5</p>
          <p className="mt-2 text-lg text-[#6B7280]">
            Βασισμένο σε {business.stats.googleReviewCount}+ αξιολογήσεις στο Google
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="rounded-full bg-[#E31E24]/10 px-4 py-1.5 text-sm font-medium text-[#E31E24]">
              {business.stats.yearsLabel} Χρόνια Εμπειρίας
            </span>
          </div>
          <a
            href={business.social.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3C3C3C]"
          >
            Δείτε όλες τις κριτικές στο Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Section>

      {/* Testimonials section (shows empty state or real testimonials) */}
      <Testimonials />

      {/* Note about reviews */}
      <Section background="mist">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-[#6B7280]">
            Οι αξιολογήσεις και τα σχόλια προέρχονται από πραγματικούς μαθητές μας.
            Μπορείτε να δείτε και να αφήσετε τη δική σας κριτική στο Google Maps.
          </p>
        </div>
      </Section>

      <CTASection title="Γίνετε ο Επόμενος Ευχαριστημένος Μαθητής μας" />
    </>
  );
}
