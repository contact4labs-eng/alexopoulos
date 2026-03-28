import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Section, SectionHeader } from '@/components/ui/section';
import { PageHeader } from '@/components/ui/page-header';
import { IconBox } from '@/components/ui/icon-box';
import { MapEmbed } from '@/components/ui/map-embed';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { business } from '@/data/business';
import { ContactForm } from './contact-form';

export const metadata: Metadata = createMetadata({
  title: 'Επικοινωνία',
  description: 'Επικοινωνήστε με τη Σχολή Οδηγών Αλεξόπουλος. Αιόλου 7, Παλαιό Φάληρο. Τηλ: 210 981 4083.',
  path: '/epikoinonia',
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Επικοινωνία"
        description="Είμαστε εδώ για να σας βοηθήσουμε. Καλέστε μας, στείλτε μήνυμα ή επισκεφτείτε μας."
      />

      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A]">Στοιχεία Επικοινωνίας</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <IconBox icon={Phone} size="sm" />
                <div>
                  <p className="font-medium text-[#1A1A1A]">Τηλέφωνο</p>
                  <a href={`tel:${business.contact.phone}`} className="whitespace-nowrap text-[#6B7280] hover:text-[#E31E24]">
                    {business.contact.phoneDisplay}
                  </a>
                  <br />
                  <a href={`tel:${business.contact.mobile}`} className="whitespace-nowrap text-[#6B7280] hover:text-[#E31E24]">
                    {business.contact.mobileDisplay} (κινητό)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <IconBox icon={Mail} size="sm" />
                <div>
                  <p className="font-medium text-[#1A1A1A]">Email</p>
                  <a href={`mailto:${business.contact.email}`} className="text-[#6B7280] hover:text-[#E31E24]">
                    {business.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <IconBox icon={MapPin} size="sm" />
                <div>
                  <p className="font-medium text-[#1A1A1A]">Διεύθυνση</p>
                  <p className="text-[#6B7280]">{business.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <IconBox icon={Clock} size="sm" />
                <div>
                  <p className="font-medium text-[#1A1A1A]">Ωράριο Λειτουργίας</p>
                  {business.hours.map((entry) => (
                    <p key={entry.days} className="text-sm text-[#6B7280]">
                      <span className="font-medium text-[#1A1A1A]">{entry.days}:</span> {entry.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A]">Στείλτε μας Μήνυμα</h2>
            <p className="mt-2 text-sm text-[#6B7280]">
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section background="mist">
        <SectionHeader title="Πού Βρισκόμαστε" subtitle="Αιόλου 7, Παλαιό Φάληρο (Τ.Κ. 175 61)" />
        <MapEmbed className="h-[400px]" />
      </Section>
    </>
  );
}
