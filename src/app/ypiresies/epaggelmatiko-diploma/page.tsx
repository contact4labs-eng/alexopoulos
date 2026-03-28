import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Section, SectionHeader } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { IconBox } from '@/components/ui/icon-box';
import { CTASection } from '@/components/sections/cta-section';
import { Badge } from '@/components/ui/badge';
import { Truck, CheckCircle } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Επαγγελματικό Δίπλωμα & ΠΕΙ',
  description: 'Επαγγελματικές άδειες οδήγησης κατηγοριών Γ, Δ και Πιστοποιητικό Επαγγελματικής Ικανότητας (ΠΕΙ) στο Παλαιό Φάληρο.',
  path: '/ypiresies/epaggelmatiko-diploma',
});

const categories = [
  {
    name: 'Γ (C)',
    description: 'Φορτηγά βάρους άνω των 3.500 kg. Η ελάχιστη ηλικία εξαρτάται από την κατηγορία και το ΠΕΙ — επικοινωνήστε μαζί μας.',
  },
  {
    name: 'Δ (D)',
    description: 'Λεωφορεία με περισσότερες από 8 θέσεις επιβατών. Η ελάχιστη ηλικία εξαρτάται από την κατηγορία και το ΠΕΙ — επικοινωνήστε μαζί μας.',
  },
  {
    name: 'ΠΕΙ',
    description: 'Πιστοποιητικό Επαγγελματικής Ικανότητας (Π.Ε.Ι.) — απαιτείται για επαγγελματίες οδηγούς μεταφοράς εμπορευμάτων ή επιβατών.',
  },
];

export default function ProfessionalLicensePage() {
  return (
    <>
      <PageHeader
        title="Επαγγελματικό Δίπλωμα & ΠΕΙ"
        description="Επαγγελματικές άδειες οδήγησης και Πιστοποιητικό Επαγγελματικής Ικανότητας για τη σταδιοδρομία σας στις μεταφορές."
      >
        <div className="flex items-center gap-4 mb-6">
          <IconBox icon={Truck} size="lg" className="bg-[#E31E24]/20" />
          <div className="flex gap-2">
            <Badge>Κατηγορία Γ</Badge>
            <Badge>Κατηγορία Δ</Badge>
            <Badge>ΠΕΙ</Badge>
          </div>
        </div>
      </PageHeader>

      {/* Categories */}
      <Section background="white">
        <SectionHeader title="Κατηγορίες & Πιστοποίηση" />
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-xl border border-gray-200 p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E31E24]/10">
                <span className="text-sm font-bold text-[#E31E24]">{cat.name}</span>
              </div>
              <h3 className="font-semibold text-[#1A1A1A]">{cat.name}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{cat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section background="mist">
        <SectionHeader title="Τι Περιλαμβάνει" centered={false} />
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            'Θεωρητική εκπαίδευση',
            'Πρακτική εκπαίδευση με επαγγελματικά οχήματα',
            'Προετοιμασία εξετάσεων',
            'Αρχική χορήγηση ΠΕΙ',
            'Περιοδική κατάρτιση ΠΕΙ (ανανέωση κάθε 5 έτη)',
            'Διοικητική υποστήριξη στα δικαιολογητικά',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 text-[#E31E24] mt-0.5" aria-hidden="true" />
              <span className="text-[#6B7280]">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection title="Ενδιαφέρεστε για Επαγγελματικό Δίπλωμα;" subtitle="Καλέστε μας για πλήρη ενημέρωση." />
    </>
  );
}
