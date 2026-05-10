import { business } from '@/data/business';

const stats = [
  { value: `${business.stats.googleRating}★`, label: 'Google' },
  { value: `${business.stats.googleReviewCount}+`, label: 'Κριτικές' },
  { value: business.stats.yearsLabel, label: 'Χρόνια' },
  { value: 'Παλαιό Φάληρο', label: business.address.street },
];

export function TrustStrip() {
  return (
    <section
      id="empistosini"
      aria-label="Εμπιστοσύνη"
      className="border-y border-[#D4D4D4] bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-[#D4D4D4] sm:divide-y-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline justify-center gap-2 px-4 py-7 text-center sm:py-8"
            >
              <span className="text-xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-2xl">
                {s.value}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#6B7280]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
