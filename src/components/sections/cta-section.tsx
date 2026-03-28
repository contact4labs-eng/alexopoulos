import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { business } from '@/data/business';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showContactLink?: boolean;
}

export function CTASection({
  title = 'Έτοιμοι να Ξεκινήσετε;',
  subtitle = 'Επικοινωνήστε μαζί μας σήμερα και κάντε το πρώτο βήμα προς το δίπλωμά σας.',
  showContactLink = true,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A]">
      {/* Background depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,#3C3C3C,transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-24 md:py-32 lg:flex-row lg:justify-between lg:gap-12">
          {/* Left: message */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-[#9CA3AF]">{subtitle}</p>
          </div>

          {/* Right: action cluster */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:mt-0">
            <a
              href="tel:+302109814083"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#E31E24] px-9 py-[18px] text-base font-bold text-white shadow-[0_4px_24px_-4px_rgba(227,30,36,0.4)] transition-all hover:bg-[#C41A1F] hover:shadow-[0_4px_24px_-4px_rgba(196,26,31,0.5)]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="whitespace-nowrap">{business.contact.phoneDisplay}</span>
            </a>
            {showContactLink && (
              <Link
                href="/epikoinonia"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.12] bg-white/[0.03] px-8 py-[18px] text-base font-medium text-white/90 transition-all hover:border-white/25 hover:bg-white/[0.07]"
              >
                Φόρμα Επικοινωνίας
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
