import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Section, SectionHeader } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { IconBox } from '@/components/ui/icon-box';
import { CTASection } from '@/components/sections/cta-section';
import { TrustBar } from '@/components/sections/trust-bar';
import { Award, MapPin, Users, Heart } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Η Σχολή Μας',
  description: 'Γνωρίστε τη Σχολή Οδηγών Αλεξόπουλος στο Παλαιό Φάληρο. 50+ χρόνια εμπειρίας, αξιοπιστίας και αφοσίωσης στην εκπαίδευση οδηγών.',
  path: '/i-scholi-mas',
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Η Σχολή Μας"
        description="Με πάνω από 50 χρόνια παρουσίας στο Παλαιό Φάληρο, η Σχολή Οδηγών Αλεξόπουλος αποτελεί σημείο αναφοράς στην εκπαίδευση οδηγών στην περιοχή."
      />

      <TrustBar />

      {/* Our Approach */}
      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader title="Η Προσέγγισή μας" centered={false} />
            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Στη Σχολή Οδηγών Αλεξόπουλος πιστεύουμε ότι η εκπαίδευση οδηγών
                δεν αφορά μόνο την επιτυχία στις εξετάσεις — αφορά τη δημιουργία
                υπεύθυνων και σίγουρων οδηγών.
              </p>
              <p>
                Με εξατομικευμένη προσέγγιση, υπομονή και επαγγελματισμό,
                καθοδηγούμε κάθε μαθητή στο δικό του ρυθμό, διασφαλίζοντας
                ότι αποκτά τις γνώσεις και τις δεξιότητες που χρειάζεται
                για ασφαλή οδήγηση.
              </p>
            </div>
          </div>

          {/* Instructor card — premium treatment */}
          <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] p-8 sm:p-10">
            {/* Background accent */}
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#E31E24]/[0.06] blur-[60px]" aria-hidden="true" />
            <div className="relative">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#E31E24]/15 border border-[#E31E24]/25">
                <Users className="h-10 w-10 text-[#E31E24]" aria-hidden="true" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E31E24] mb-2">Εκπαιδευτής</p>
              <h3 className="text-2xl font-bold text-white">Μάκης Αλεξόπουλος</h3>
              <p className="mt-1 text-sm text-[#9CA3AF]">Ιδιοκτήτης & Επικεφαλής Εκπαιδευτής</p>
              <div className="mt-5 h-px bg-white/[0.08]" />
              <p className="mt-5 text-sm leading-relaxed text-[#9CA3AF]">
                Με αφοσίωση στην ασφαλή οδήγηση και πραγματική φροντίδα
                για κάθε μαθητή. Δεκαετίες εμπειρίας στην εκπαίδευση
                υπεύθυνων οδηγών.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="mist">
        <SectionHeader title="Οι Αξίες μας" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, title: 'Υπομονή', desc: 'Κάθε μαθητής μαθαίνει στο δικό του ρυθμό.' },
            { icon: Award, title: 'Αξιοπιστία', desc: '50+ χρόνια συνεχούς παρουσίας και εμπιστοσύνης.' },
            { icon: MapPin, title: 'Τοπική Παρουσία', desc: 'Βαθιά γνώση της περιοχής του Παλαιού Φαλήρου.' },
            { icon: Users, title: 'Προσωπική Φροντίδα', desc: 'Εξατομικευμένη εκπαίδευση, όχι μαζική παραγωγή.' },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <IconBox icon={v.icon} size="lg" className="mx-auto mb-4" />
              <h3 className="font-semibold text-[#1A1A1A]">{v.title}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection title="Γνωρίστε μας από Κοντά" subtitle="Ελάτε να συζητήσουμε τις ανάγκες σας." />
    </>
  );
}
