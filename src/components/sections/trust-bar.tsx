import { Star, Award, Clock, Users } from 'lucide-react';
import { business } from '@/data/business';

const stats = [
  { icon: Star, value: `${business.stats.googleRating}★`, label: 'Google', highlight: false },
  { icon: Users, value: `${business.stats.googleReviewCount}+`, label: 'Κριτικές', highlight: false },
  { icon: Clock, value: `${business.stats.yearsLabel}`, label: 'Χρόνια', highlight: false },
  { icon: Award, value: 'Π. Φάληρο', label: 'Αιόλου 7', highlight: true },
];

export function TrustBar() {
  return (
    <section className="border-y border-[#D4D4D4] bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px bg-[#D4D4D4] md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-3 bg-white px-4 py-6 md:px-6 md:py-8">
              <stat.icon className={`h-5 w-5 shrink-0 ${stat.highlight ? 'text-[#E31E24]' : 'text-[#1A1A1A]/30'}`} aria-hidden="true" />
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#1A1A1A] md:text-2xl">{stat.value}</span>
                <span className="ml-1.5 text-sm text-[#6B7280]">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
