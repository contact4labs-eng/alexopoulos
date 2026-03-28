import Link from 'next/link';
import { Phone, ArrowRight, Star, Shield, MapPin } from 'lucide-react';
import { business } from '@/data/business';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A]">
      {/* ── Video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/images/hero/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay for text legibility ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" aria-hidden="true" />

      {/* ── Bottom edge ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/40 to-transparent" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-10 xl:grid-cols-[1fr_400px] xl:gap-16 lg:items-center">

          {/* ── LEFT: Message ── */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E31E24]/30 bg-[#E31E24]/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E31E24]" aria-hidden="true" />
              <span className="text-[13px] font-semibold text-white tracking-wide uppercase">
                {business.stats.yearsLabel} χρόνια εμπειρίας
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.5rem]">
              Μάθετε να
              <br />
              οδηγείτε{' '}
              <span className="relative inline-block text-[#E31E24]">
                σωστά.
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#E31E24]/40" aria-hidden="true" />
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg sm:mt-8">
              Η σχολή οδηγών που εμπιστεύεται το Παλαιό Φάληρο.
              Εξατομικευμένη εκπαίδευση — αποδεδειγμένα αποτελέσματα.
            </p>

            {/* CTAs — red primary */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:mt-10">
              <a
                href="tel:+302109814083"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#E31E24] px-7 py-4 text-[15px] font-bold text-white shadow-[0_4px_20px_-4px_rgba(227,30,36,0.4)] transition-all hover:bg-[#C41A1F] hover:shadow-[0_4px_24px_-2px_rgba(196,26,31,0.5)] sm:px-8"
              >
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                Κλείσε Μάθημα
              </a>
              <Link
                href="/ypiresies"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-4 text-[15px] font-medium text-white backdrop-blur-sm transition-all hover:border-white/35 hover:bg-white/[0.12] sm:px-8"
              >
                Υπηρεσίες
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile proof strip */}
            <div className="mt-10 grid grid-cols-3 gap-3 lg:hidden">
              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm px-3 py-3 text-center">
                <p className="text-xl font-extrabold text-white">{business.stats.googleRating}</p>
                <p className="text-[11px] text-white/60">Google ★</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm px-3 py-3 text-center">
                <p className="text-xl font-extrabold text-white">{business.stats.yearsLabel}</p>
                <p className="text-[11px] text-white/60">Χρόνια</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm px-3 py-3 text-center">
                <p className="text-xl font-extrabold text-white">251+</p>
                <p className="text-[11px] text-white/60">Κριτικές Google</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Proof dashboard ── */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-2 w-2 rounded-full bg-[#2E7D32]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Αξιολόγηση</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-[3.5rem] font-black leading-none tracking-tight text-white">{business.stats.googleRating}</span>
                <div className="pb-1.5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-[#E31E24] text-[#E31E24]" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-white/50">{business.stats.googleReviewCount}+ κριτικές</p>
                </div>
              </div>
              <div className="mt-5 h-px bg-white/[0.08]" />
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/[0.06] p-3.5">
                  <p className="text-2xl font-extrabold text-white">{business.stats.yearsLabel}</p>
                  <p className="text-[11px] text-white/50">χρόνια εμπειρίας</p>
                </div>
                <div className="rounded-lg bg-white/[0.06] p-3.5">
                  <p className="text-2xl font-extrabold text-white">{business.stats.googleReviewCount}+</p>
                  <p className="text-[11px] text-white/50">κριτικές Google</p>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm px-4 py-3">
                <MapPin className="h-4 w-4 text-[#E31E24]" aria-hidden="true" />
                <div>
                  <p className="text-[13px] font-semibold text-white">Π. Φάληρο</p>
                  <p className="text-[11px] text-white/50">{business.address.street}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm px-4 py-3">
                <Shield className="h-4 w-4 text-[#808080]" aria-hidden="true" />
                <div>
                  <p className="text-[13px] font-semibold text-white">Υπεύθυνη Οδήγηση</p>
                  <p className="text-[11px] text-white/50">Εκπαίδευση με αξίες</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
