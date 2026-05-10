'use client';

import { useState } from 'react';
import { ArrowUpCircle, Bike, Car, Check, ChevronDown, GraduationCap, Phone, RefreshCw, Truck } from 'lucide-react';
import { additionalServices, mainServices, type Service } from '@/data/services';
import { business } from '@/data/business';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Bike, Truck, RefreshCw, GraduationCap, ArrowUpCircle,
};

export function Services() {
  const [openSlugs, setOpenSlugs] = useState<Set<string>>(new Set());
  const toggle = (slug: string) =>
    setOpenSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  return (
    <section id="ypiresies" className="bg-[#ECEEF0] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* LEFT: sticky heading column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E31E24]">
              Διπλώματα
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl md:text-[2.5rem] md:leading-[1.1]">
              Οι Υπηρεσίες μας
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#6B7280]">
              Πλήρης κάλυψη σε κάθε κατηγορία διπλώματος, ανανέωση, μετεκπαίδευση και επέκταση.
            </p>
          </div>

          {/* RIGHT: expandable card stack + secondary strip */}
          <div className="space-y-3">
            {mainServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                isOpen={openSlugs.has(service.slug)}
                onToggle={() => toggle(service.slug)}
              />
            ))}

            {/* Secondary services — phone-CTA strip */}
            <div className="mt-6 rounded-2xl border border-[#D4D4D4] bg-white p-5 sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
                Επίσης
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {additionalServices.map((service) => {
                  const Icon = iconMap[service.icon] || Car;
                  return (
                    <a
                      key={service.slug}
                      href={`tel:${business.contact.phone}`}
                      className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all hover:border-[#E31E24]/30 hover:bg-[#E31E24]/[0.03]"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E31E24]/10">
                        <Icon className="h-4 w-4 text-[#E31E24]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-[#1A1A1A] leading-tight">
                          {service.title}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[#6B7280] group-hover:text-[#E31E24]">
                          <Phone className="h-3 w-3" /> Καλέστε μας
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isOpen,
  onToggle,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = iconMap[service.icon] || Car;
  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
        isOpen ? 'border-[#E31E24]/40' : 'border-[#D4D4D4]'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`service-detail-${service.slug}`}
        className="flex w-full items-start gap-5 p-6 text-left transition-colors hover:bg-[#FAFBFC] sm:p-7"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E31E24]/20 bg-[#E31E24]/10">
          <Icon className="h-6 w-6 text-[#E31E24]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold tracking-tight text-[#1A1A1A] sm:text-xl">
              {service.title}
            </h3>
            <ChevronDown
              className={`h-5 w-5 shrink-0 transition-all duration-200 ${
                isOpen ? 'rotate-180 text-[#E31E24]' : 'text-[#6B7280]'
              }`}
              aria-hidden="true"
            />
          </div>
          {service.categories.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {service.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-md border border-[#D4D4D4] bg-[#ECEEF0] px-2 py-0.5 text-[11px] font-semibold text-[#3C3C3C]"
                >
                  Κατ. {cat}
                </span>
              ))}
            </div>
          )}
          <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
            {service.shortDescription}
          </p>
        </div>
      </button>

      <div
        id={`service-detail-${service.slug}`}
        role="region"
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          {service.detail && (
            <div className="border-t border-[#D4D4D4] bg-[#FAFBFC] px-6 py-7 sm:px-7">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#E31E24]">
                Τι Περιλαμβάνει
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.detail.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-[#E31E24] mt-0.5" aria-hidden="true" />
                    <span className="text-[13px] leading-snug text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>

              {service.detail.requirements.length > 0 && (
                <>
                  <p className="mt-7 text-[11px] font-bold uppercase tracking-wider text-[#E31E24]">
                    Ηλικία & Προϋποθέσεις
                  </p>
                  <dl className="mt-4 space-y-3">
                    {service.detail.requirements.map((req) => (
                      <div key={req.label} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                        <dt className="text-[13px] font-bold text-[#1A1A1A]">{req.label}</dt>
                        <dd className="text-[13px] leading-relaxed text-[#6B7280]">{req.text}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
