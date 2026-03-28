import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { ServicesGrid } from '@/components/sections/services-grid';
import { CTASection } from '@/components/sections/cta-section';
import { Section, SectionHeader } from '@/components/ui/section';
import { IconBox } from '@/components/ui/icon-box';
import { PageHeader } from '@/components/ui/page-header';
import { services } from '@/data/services';
import { FileText, CheckCircle, Car, ClipboardList } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Υπηρεσίες',
  description: 'Όλες οι υπηρεσίες της Σχολής Οδηγών Αλεξόπουλος: δίπλωμα αυτοκινήτου, μοτοσικλέτας, επαγγελματικό δίπλωμα, ΠΕΙ, ανανέωση, μετεκπαίδευση.',
  path: '/ypiresies',
});

const steps = [
  { icon: FileText, title: 'Επικοινωνία', description: 'Καλέστε μας ή στείλτε μήνυμα για να ενημερωθείτε.' },
  { icon: ClipboardList, title: 'Θεωρητική Εκπαίδευση', description: 'Μάθετε τον Κ.Ο.Κ. με σύγχρονες μεθόδους διδασκαλίας.' },
  { icon: Car, title: 'Πρακτική Εκπαίδευση', description: 'Μαθήματα οδήγησης με υπομονή και επαγγελματισμό.' },
  { icon: CheckCircle, title: 'Εξέταση & Δίπλωμα', description: 'Πλήρης προετοιμασία για επιτυχία στις εξετάσεις.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Οι Υπηρεσίες μας"
        description="Πλήρης κάλυψη σε κάθε κατηγορία διπλώματος, ανανέωση, μετεκπαίδευση και επέκταση."
      />

      <ServicesGrid services={services} showHeader={false} />

      {/* Process section */}
      <Section background="mist">
        <SectionHeader
          title="Πώς Λειτουργεί"
          subtitle="Η διαδικασία από την εγγραφή μέχρι το δίπλωμα, βήμα-βήμα."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <IconBox icon={step.icon} size="lg" className="mx-auto mb-4" />
              <div className="mb-2 text-sm font-bold text-[#E31E24]">Βήμα {i + 1}</div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">{step.title}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Δεν Ξέρετε ποιο Δίπλωμα Χρειάζεστε;"
        subtitle="Καλέστε μας και θα σας καθοδηγήσουμε στη σωστή επιλογή."
      />
    </>
  );
}
