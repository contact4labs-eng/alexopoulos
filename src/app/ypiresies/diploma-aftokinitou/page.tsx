import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Section, SectionHeader } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { IconBox } from '@/components/ui/icon-box';
import { CTASection } from '@/components/sections/cta-section';
import { Badge } from '@/components/ui/badge';
import { Car, FileText, BookOpen, Route, CheckCircle } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Δίπλωμα Αυτοκινήτου (Κατηγορία Β)',
  description: 'Αποκτήστε δίπλωμα αυτοκινήτου κατηγορίας Β στο Παλαιό Φάληρο. Θεωρητική και πρακτική εκπαίδευση με εμπειρία 50+ χρόνων.',
  path: '/ypiresies/diploma-aftokinitou',
});

const processSteps = [
  { icon: FileText, title: 'Εγγραφή & Δικαιολογητικά', description: 'Συγκέντρωση απαραίτητων εγγράφων και εγγραφή στη σχολή.' },
  { icon: BookOpen, title: 'Θεωρητική Εκπαίδευση', description: 'Εκμάθηση του Κώδικα Οδικής Κυκλοφορίας και προετοιμασία για τη θεωρητική εξέταση.' },
  { icon: Route, title: 'Πρακτική Εκπαίδευση', description: 'Μαθήματα οδήγησης σε πραγματικές συνθήκες κυκλοφορίας με εξειδικευμένο εκπαιδευτή.' },
  { icon: CheckCircle, title: 'Εξέταση', description: 'Θεωρητική και πρακτική εξέταση στη Διεύθυνση Μεταφορών.' },
];

export default function CarLicensePage() {
  return (
    <>
      <PageHeader
        title="Δίπλωμα Αυτοκινήτου"
        description="Αποκτήστε την άδεια οδήγησης κατηγορίας Β με σιγουριά και αυτοπεποίθηση. Πλήρης θεωρητική και πρακτική εκπαίδευση με εξατομικευμένη προσέγγιση."
      >
        <div className="flex items-center gap-4 mb-6">
          <IconBox icon={Car} size="lg" className="bg-[#E31E24]/20" />
          <Badge>Κατηγορία Β</Badge>
        </div>
      </PageHeader>

      {/* What's included */}
      <Section background="white">
        <SectionHeader title="Τι Περιλαμβάνει" centered={false} />
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            'Θεωρητική εκπαίδευση για τον Κ.Ο.Κ.',
            'Πρακτικά μαθήματα οδήγησης',
            'Προετοιμασία για θεωρητική εξέταση',
            'Προετοιμασία για πρακτική εξέταση',
            'Καθοδήγηση στη συγκέντρωση δικαιολογητικών',
            'Εκπαιδευτικό όχημα παρεχόμενο',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 text-[#E31E24] mt-0.5" aria-hidden="true" />
              <span className="text-[#6B7280]">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="mist">
        <SectionHeader title="Η Διαδικασία" subtitle="Από την εγγραφή μέχρι το δίπλωμα, βήμα-βήμα." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="text-center">
              <IconBox icon={step.icon} size="lg" className="mx-auto mb-4" />
              <div className="mb-2 text-sm font-bold text-[#E31E24]">Βήμα {i + 1}</div>
              <h3 className="font-semibold text-[#1A1A1A]">{step.title}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Requirements note */}
      <Section background="white">
        <SectionHeader title="Ηλικία & Προϋποθέσεις" centered={false} />
        <div className="text-[#6B7280] max-w-2xl space-y-3">
          <p>
            <strong className="text-[#1A1A1A]">Από 17 ετών:</strong> Δυνατότητα εξετάσεων και απόκτησης
            προσωρινής άδειας οδήγησης κατηγορίας Β με υποχρεωτική συνοδευόμενη οδήγηση,
            σύμφωνα με τις ισχύουσες προϋποθέσεις (Ν. 4850/2021).
          </p>
          <p>
            <strong className="text-[#1A1A1A]">Από 18 ετών:</strong> Χορήγηση κανονικής άδειας
            οδήγησης κατηγορίας Β.
          </p>
          <p>
            Για αναλυτικές πληροφορίες σχετικά με τα δικαιολογητικά και τη διαδικασία,
            επικοινωνήστε μαζί μας.
          </p>
        </div>
      </Section>

      <CTASection title="Κλείστε το Πρώτο σας Μάθημα" subtitle="Επικοινωνήστε μαζί μας σήμερα." />
    </>
  );
}
