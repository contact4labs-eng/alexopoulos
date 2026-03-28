import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { business } from '@/data/business';
import Link from 'next/link';

export function ContactStrip() {
  return (
    <section className="bg-white border-t border-[#D4D4D4]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E31E24]">
              Επικοινωνία
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Βρείτε μας Εύκολα
            </h2>
            <p className="mt-3 max-w-lg text-[#6B7280]">
              Είμαστε στο Παλαιό Φάληρο και σας περιμένουμε.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href={`tel:${business.contact.phone}`} className="group flex items-center gap-3 rounded-xl border border-[#D4D4D4] p-4 transition-all hover:border-[#E31E24]/40 hover:shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/20">
                  <Phone className="h-5 w-5 text-[#E31E24]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">Τηλέφωνο</p>
                  <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#E31E24] transition-colors"><span className="whitespace-nowrap">{business.contact.phoneDisplay}</span></p>
                </div>
              </a>
              <a href={`mailto:${business.contact.email}`} className="group flex items-center gap-3 rounded-xl border border-[#D4D4D4] p-4 transition-all hover:border-[#E31E24]/40 hover:shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/20">
                  <Mail className="h-5 w-5 text-[#E31E24]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">Email</p>
                  <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#E31E24] transition-colors">{business.contact.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-[#D4D4D4] p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/20">
                  <MapPin className="h-5 w-5 text-[#E31E24]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">Διεύθυνση</p>
                  <p className="text-sm font-bold text-[#1A1A1A]">{business.address.full}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#D4D4D4] p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E31E24]/10 border border-[#E31E24]/20">
                  <Clock className="h-5 w-5 text-[#E31E24]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">Ωράριο</p>
                  <p className="text-sm font-bold text-[#1A1A1A]">Δευ-Παρ & Σάββατο</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#1A1A1A] p-8 text-center lg:w-80">
            <p className="text-lg font-bold text-white">Κλείστε Μάθημα</p>
            <p className="text-sm text-[#9CA3AF]">Καλέστε μας ή στείλτε μήνυμα</p>
            <a
              href="tel:+302109814083"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#E31E24] px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-[#C41A1F]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="whitespace-nowrap">{business.contact.phoneDisplay}</span>
            </a>
            <Link
              href="/epikoinonia"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Φόρμα Επικοινωνίας
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
