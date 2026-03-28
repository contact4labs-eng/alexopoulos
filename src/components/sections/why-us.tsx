import { Shield, Heart, Award, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const reasons = [
  {
    icon: Shield,
    title: '50+ Χρόνια',
    subtitle: 'Εμπειρίας',
    description: 'Δεκαετίες αφοσίωσης στην εκπαίδευση ασφαλών οδηγών στο Παλαιό Φάληρο.',
  },
  {
    icon: Heart,
    title: 'Ανθρώπινη',
    subtitle: 'Προσέγγιση',
    description: 'Εξατομικευμένη εκπαίδευση με υπομονή. Στο δικό σας ρυθμό.',
  },
  {
    icon: Award,
    title: '4.9★ Google',
    subtitle: '251+ Κριτικές',
    description: '4.9 στο Google με 251+ αξιολογήσεις από πραγματικούς μαθητές μας.',
  },
  {
    icon: Calendar,
    title: 'Ευέλικτο',
    subtitle: 'Πρόγραμμα',
    description: 'Μαθήματα προσαρμοσμένα στις ανάγκες και τις υποχρεώσεις σας.',
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/15 to-transparent" />
        <div className="absolute -bottom-32 right-[10%] h-[400px] w-[400px] rounded-full bg-[#3C3C3C]/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Asymmetric header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end mb-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E31E24]">
              Πλεονεκτήματα
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Γιατί να μας<br />Επιλέξετε
            </h2>
          </div>
          <Link
            href="/i-scholi-mas"
            className="group hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-[#E31E24] hover:text-white transition-colors"
          >
            Γνωρίστε τη σχολή μας
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-all duration-200 hover:bg-white/[0.07] hover:border-[#E31E24]/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20">
                <reason.icon className="h-6 w-6 text-[#E31E24]" aria-hidden="true" />
              </div>
              <p className="text-2xl font-extrabold tracking-tight text-white leading-tight">
                {reason.title}
              </p>
              <p className="text-lg font-semibold text-[#E31E24]">
                {reason.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
