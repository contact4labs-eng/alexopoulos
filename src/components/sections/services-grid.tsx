import Link from 'next/link';
import { ArrowRight, Car, Bike, Truck, RefreshCw, GraduationCap, ArrowUpCircle } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import type { Service } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Bike, Truck, RefreshCw, GraduationCap, ArrowUpCircle,
};

interface ServicesGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
}

export function ServicesGrid({
  services,
  title = 'Οι Υπηρεσίες μας',
  subtitle = 'Πλήρης εκπαίδευση για κάθε κατηγορία διπλώματος, με αξιοπιστία και επαγγελματισμό.',
  showHeader = true,
}: ServicesGridProps) {
  const [featured, ...rest] = services;
  const FeaturedIcon = featured ? (iconMap[featured.icon] || Car) : Car;

  return (
    <Section background="white">
      {showHeader && <SectionHeader title={title} subtitle={subtitle} eyebrow="Υπηρεσίες" />}

      {/* Bento layout: 1 featured + supporting */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Featured / primary service — large card */}
        {featured && (
          <Link
            href={featured.href}
            className="group relative flex flex-col justify-between rounded-2xl border border-[#D4D4D4] bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-8 sm:p-10 transition-all duration-200 hover:shadow-[0_12px_40px_-12px_rgba(26,26,26,0.25)] lg:row-span-2"
          >
            {/* Icon */}
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E31E24]/15 border border-[#E31E24]/25">
                <FeaturedIcon className="h-7 w-7 text-[#E31E24]" aria-hidden="true" />
              </div>
              {featured.categories.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {featured.categories.map((cat) => (
                    <span key={cat} className="rounded-md border border-white/15 bg-white/[0.08] px-2.5 py-1 text-xs font-bold text-white/80 tracking-wide">
                      Κατ. {cat}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="text-2xl font-bold text-white sm:text-3xl">{featured.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-[#9CA3AF]">
                {featured.shortDescription}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#E31E24] transition-colors group-hover:text-white">
              Μάθετε περισσότερα
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
            </div>
          </Link>
        )}

        {/* Secondary services — smaller cards stacked */}
        <div className="flex flex-col gap-5">
          {rest.map((service) => {
            const Icon = iconMap[service.icon] || Car;
            return (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex items-start gap-5 rounded-2xl border border-[#D4D4D4] bg-white p-6 transition-all duration-200 hover:border-[#E31E24]/40 hover:shadow-[0_8px_30px_-12px_rgba(26,26,26,0.12)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20 transition-colors group-hover:bg-[#E31E24]/15">
                  <Icon className="h-6 w-6 text-[#E31E24]" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-bold text-[#1A1A1A]">{service.title}</h3>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#D4D4D4] transition-all group-hover:text-[#E31E24] group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                  {service.categories.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {service.categories.map((cat) => (
                        <span key={cat} className="rounded-md border border-[#D4D4D4] bg-[#ECEEF0] px-2 py-0.5 text-xs font-semibold text-[#3C3C3C]">
                          Κατ. {cat}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
