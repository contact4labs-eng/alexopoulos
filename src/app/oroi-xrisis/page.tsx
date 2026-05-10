import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Section } from '@/components/ui/section';
import { legalContent } from '@/data/legal';

export const metadata: Metadata = createMetadata({
  title: 'Όροι Χρήσης & Πολιτική Απορρήτου',
  description: 'Όροι χρήσης, πολιτική απορρήτου και πολιτική cookies της Σχολής Οδηγών Αλεξόπουλος.',
  path: '/oroi-xrisis',
  noIndex: true,
});

function LegalSection({ title, sections }: { title: string; sections: ReadonlyArray<{ heading: string; content: string }> }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">{title}</h2>
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.heading}>
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{section.heading}</h3>
            <p className="text-[#6B7280] leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LegalPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#1A1A1A] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#E31E24]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Όροι & Πολιτική Απορρήτου
          </h1>
        </div>
      </section>

      <Section background="white">
        <div className="mx-auto max-w-3xl">
          {/* Alert for placeholder legal data */}
          <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm text-amber-800">
              <strong>Σημείωση:</strong> Ορισμένα στοιχεία σε αυτή τη σελίδα (σημειωμένα με αγκύλες [])
              αναμένουν συμπλήρωση με τα πραγματικά νομικά στοιχεία της επιχείρησης.
            </p>
          </div>

          <LegalSection title={legalContent.privacyPolicy.title} sections={legalContent.privacyPolicy.sections} />
          <hr className="my-8 border-gray-200" />
          <LegalSection title={legalContent.cookiePolicy.title} sections={legalContent.cookiePolicy.sections} />
          <hr className="my-8 border-gray-200" />
          <LegalSection title={legalContent.termsOfUse.title} sections={legalContent.termsOfUse.sections} />
        </div>
      </Section>
    </>
  );
}
