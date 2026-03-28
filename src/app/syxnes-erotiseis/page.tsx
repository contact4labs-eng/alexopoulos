import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/ui/page-header';
import { Section } from '@/components/ui/section';
import { Accordion } from '@/components/ui/accordion';
import { CTASection } from '@/components/sections/cta-section';
import { faqItems } from '@/data/faq';
import { generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = createMetadata({
  title: 'Συχνές Ερωτήσεις',
  description: 'Απαντήσεις σε συχνές ερωτήσεις για τη Σχολή Οδηγών Αλεξόπουλος. Δικαιολογητικά, κατηγορίες αδειών, ωράριο και περισσότερα.',
  path: '/syxnes-erotiseis',
});

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqItems);
  const accordionItems = faqItems.map((item, i) => ({
    id: `faq-${i}`,
    title: item.question,
    content: item.answer,
  }));

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <PageHeader
        title="Συχνές Ερωτήσεις"
        description="Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τη σχολή μας και τις υπηρεσίες μας."
      />

      <Section background="white">
        {accordionItems.length > 0 ? (
          <div className="mx-auto max-w-3xl">
            <Accordion items={accordionItems} />
          </div>
        ) : (
          <div className="mx-auto max-w-lg text-center">
            <p className="text-[#6B7280]">
              Σύντομα θα προστεθούν περισσότερες ερωτήσεις.
              Μέχρι τότε, μη διστάσετε να επικοινωνήσετε μαζί μας.
            </p>
          </div>
        )}
      </Section>

      <CTASection
        title="Δεν Βρήκατε Αυτό που Ψάχνετε;"
        subtitle="Επικοινωνήστε μαζί μας και θα σας απαντήσουμε άμεσα."
      />
    </>
  );
}
