'use client';

import { useState } from 'react';
import { ChevronDown, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { business } from '@/data/business';
import { faqItems, type FAQItem } from '@/data/faq';
import { ContactForm } from './contact-form';
import { MapEmbed } from '@/components/ui/map-embed';

export function Contact() {
  return (
    <section
      id="epikoinonia"
      className="relative overflow-hidden bg-[#1A1A1A] py-20 md:py-28"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E31E24]">
            Επικοινωνία
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.1]">
            Έτοιμοι να ξεκινήσετε;
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          {/* LEFT — FAQ on dark | bottom on mobile */}
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-wider text-white/50">
              Συχνές Ερωτήσεις
            </p>
            <FAQList items={faqItems} />
            <a
              href={`tel:${business.contact.phone}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#E31E24] transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Δεν βρήκατε αυτό που ψάχνετε; Καλέστε μας.
            </a>
          </div>

          {/* RIGHT — light card stack | top on mobile */}
          <div className="order-1 rounded-2xl bg-white p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-8 lg:order-2">
            {/* Phone CTA — primary action */}
            <a
              href={`tel:${business.contact.phone}`}
              className="flex items-center justify-center gap-2.5 rounded-xl bg-[#E31E24] px-6 py-4 text-[15px] font-bold text-white shadow-[0_4px_20px_-4px_rgba(227,30,36,0.4)] transition-all hover:bg-[#C41A1F] hover:shadow-[0_4px_24px_-2px_rgba(196,26,31,0.5)]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="whitespace-nowrap">
                Κλείσε Μάθημα · {business.contact.phoneDisplay}
              </span>
            </a>

            {/* Info strip */}
            <dl className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2">
              <InfoRow icon={Phone} label="Κινητό">
                <a
                  href={`tel:${business.contact.mobile}`}
                  className="font-semibold text-[#1A1A1A] transition-colors hover:text-[#E31E24]"
                >
                  {business.contact.mobileDisplay}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a
                  href={`mailto:${business.contact.email}`}
                  className="break-all font-semibold text-[#1A1A1A] transition-colors hover:text-[#E31E24]"
                >
                  {business.contact.email}
                </a>
              </InfoRow>
              <InfoRow icon={MapPin} label="Διεύθυνση">
                <span className="font-semibold text-[#1A1A1A]">
                  {business.address.full}
                </span>
              </InfoRow>
              <InfoRow icon={Clock} label="Ωράριο">
                <div className="space-y-0.5 text-[12.5px] leading-snug text-[#1A1A1A]">
                  {business.hours.map((entry) => (
                    <div key={entry.days}>
                      <span className="font-semibold">{entry.days}:</span>{' '}
                      <span className="text-[#3C3C3C]">{entry.time}</span>
                    </div>
                  ))}
                </div>
              </InfoRow>
            </dl>

            {/* Form */}
            <div className="mt-7 border-t border-[#D4D4D4] pt-7">
              <h3 className="text-base font-bold text-[#1A1A1A]">Στείλτε μήνυμα</h3>
              <p className="mt-1 text-xs text-[#6B7280]">
                Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div className="mt-7 border-t border-[#D4D4D4] pt-7">
              <h3 className="text-base font-bold text-[#1A1A1A]">
                Πού βρισκόμαστε
              </h3>
              <p className="mt-1 text-xs text-[#6B7280]">
                {business.address.full}
              </p>
              <div className="mt-4">
                <MapEmbed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E31E24]/10">
        <Icon className="h-4 w-4 text-[#E31E24]" />
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <dt className="text-[11px] font-medium uppercase tracking-wide text-[#6B7280]">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm">{children}</dd>
      </div>
    </div>
  );
}

function FAQList({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-colors ${
              isOpen
                ? 'border-white/15 bg-white/[0.04]'
                : 'border-white/[0.08] hover:border-white/15'
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-[15px] font-medium text-white">
                {item.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                  isOpen ? 'rotate-180 text-[#E31E24]' : 'text-white/40'
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-white/65">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
