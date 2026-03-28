import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { business } from '@/data/business';
import { navigation } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.webp"
                alt="Σχολή Οδηγών Αλεξόπουλος"
                width={180}
                height={180}
                className="h-12 w-12 brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              {business.stats.yearsLabel} χρόνια εμπειρίας στην εκπαίδευση οδηγών στο Παλαιό Φάληρο.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">Σελίδες</h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-[#E31E24]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">Επικοινωνία</h3>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a href={`tel:${business.contact.phone}`} className="flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-[#E31E24]">
                  <Phone className="h-4 w-4 shrink-0 text-[#E31E24]/60" aria-hidden="true" />
                  <span className="whitespace-nowrap">{business.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${business.contact.mobile}`} className="flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-[#E31E24]">
                  <Phone className="h-4 w-4 shrink-0 text-[#E31E24]/60" aria-hidden="true" />
                  <span className="whitespace-nowrap">{business.contact.mobileDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${business.contact.email}`} className="flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-[#E31E24]">
                  <Mail className="h-4 w-4 shrink-0 text-[#E31E24]/60" aria-hidden="true" />
                  {business.contact.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#E31E24]/60" aria-hidden="true" />
                  {business.address.full}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">Ωράριο</h3>
            <ul className="mt-5 space-y-3.5">
              {business.hours.map((entry) => (
                <li key={entry.days} className="flex items-start gap-2.5 text-sm text-gray-400">
                  <Clock className="h-4 w-4 shrink-0 mt-0.5 text-[#E31E24]/60" aria-hidden="true" />
                  <span>
                    <span className="font-medium text-gray-300">{entry.days}</span>
                    <br />{entry.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {business.name.display}. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/oroi-xrisis" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
              Όροι & Απόρρητο
            </Link>
            {business.social.facebook && (
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 transition-colors hover:text-gray-300">
                Facebook
              </a>
            )}
            <a href="https://4labs.agency" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 transition-colors hover:text-gray-300">
              Made by <span className="font-semibold">4Labs</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
