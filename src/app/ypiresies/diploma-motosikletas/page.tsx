import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Section, SectionHeader } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { IconBox } from '@/components/ui/icon-box';
import { CTASection } from '@/components/sections/cta-section';
import { Badge } from '@/components/ui/badge';
import { Bike, CheckCircle } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Δίπλωμα Μοτοσικλέτας (Κατηγορίες Α1/Α2/Α)',
  description: 'Δίπλωμα μοτοσικλέτας κατηγοριών Α1, Α2, Α στο Παλαιό Φάληρο. Ολοκληρωμένη εκπαίδευση με 50+ χρόνια εμπειρίας.',
  path: '/ypiresies/diploma-motosikletas',
});

const categories = [
  {
    name: 'Α1',
    description: 'Μοτοσικλέτες έως 125cc, μέγιστη ισχύς 11 kW. Ελάχιστη ηλικία: 18 ετών.',
  },
  {
    name: 'Α2',
    description: 'Μοτοσικλέτες μέγιστης ισχύος 35 kW. Ελάχιστη ηλικία: 20 ετών.',
  },
  {
    name: 'Α',
    description: 'Μοτοσικλέτες χωρίς περιορισμό ισχύος. Ελάχιστη ηλικία: 24 ετών (ή 22 με 2 έτη Α2).',
  },
];

export default function MotorcycleLicensePage() {
  return (
    <>
      <PageHeader
        title="Δίπλωμα Μοτοσικλέτας"
        description="Εκπαίδευση για όλες τις κατηγορίες μοτοσικλέτας — από 125cc μέχρι απεριόριστα κυβικά. Μάθετε να οδηγείτε με ασφάλεια και αυτοπεποίθηση."
      >
        <div className="flex items-center gap-4 mb-6">
          <IconBox icon={Bike} size="lg" className="bg-[#E31E24]/20" />
          <div className="flex gap-2">
            <Badge>Κατηγορία Α1</Badge>
            <Badge>Α2</Badge>
            <Badge>Α</Badge>
          </div>
        </div>
      </PageHeader>

      {/* Categories */}
      <Section background="white">
        <SectionHeader title="Κατηγορίες Αδειών" />
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-xl border border-gray-200 p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E31E24]/10">
                <span className="text-lg font-bold text-[#E31E24]">{cat.name}</span>
              </div>
              <h3 className="font-semibold text-[#1A1A1A]">Κατηγορία {cat.name}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{cat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section background="mist">
        <SectionHeader title="Τι Περιλαμβάνει η Εκπαίδευση" centered={false} />
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            'Θεωρητική εκπαίδευση Κ.Ο.Κ.',
            'Πρακτική εκπαίδευση σε πίστα και δρόμο',
            'Προετοιμασία για θεωρητικές εξετάσεις',
            'Προετοιμασία για πρακτικές εξετάσεις',
            'Ενημέρωση για προοδευτική πρόσβαση (Α1→Α2→Α)',
            'Καθοδήγηση στα δικαιολογητικά',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 text-[#E31E24] mt-0.5" aria-hidden="true" />
              <span className="text-[#6B7280]">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection title="Ξεκινήστε τα Μαθήματα Μοτοσικλέτας" subtitle="Καλέστε μας σήμερα." />
    </>
  );
}
