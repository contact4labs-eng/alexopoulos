import { Award, Heart, MapPin, Star } from 'lucide-react';
import { business } from '@/data/business';

const values = [
  {
    icon: Award,
    title: '50+ Χρόνια',
    body: 'Δεκαετίες αφοσίωσης στην εκπαίδευση οδηγών στο Παλαιό Φάληρο.',
  },
  {
    icon: Heart,
    title: 'Ανθρώπινη Προσέγγιση',
    body: 'Υπομονή και προσωπική φροντίδα στον δικό σας ρυθμό.',
  },
  {
    icon: Star,
    title: '4.9★ στο Google',
    body: '251+ αξιολογήσεις από πραγματικούς μαθητές μας.',
  },
  {
    icon: MapPin,
    title: 'Τοπική Παρουσία',
    body: 'Βαθιά γνώση της περιοχής του Παλαιού Φαλήρου.',
  },
];

export function About() {
  return (
    <section id="i-scholi" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          {/* INSTRUCTOR INSET — source-first so it lands on top on mobile, swap to right on desktop */}
          <aside className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] p-8 sm:p-10 lg:order-2">
            <div
              className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#E31E24]/[0.08] blur-[60px]"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E31E24]">
                Ο Εκπαιδευτής
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {business.owner.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-white/60">
                Ιδιοκτήτης & Επικεφαλής Εκπαιδευτής
              </p>
              <div className="mt-7 h-px bg-white/[0.08]" />
              <p className="mt-7 text-base leading-relaxed text-white/75">
                Με αφοσίωση στην ασφαλή οδήγηση και πραγματική φροντίδα για κάθε
                μαθητή. Δεκαετίες εμπειρίας στην εκπαίδευση υπεύθυνων οδηγών.
              </p>
            </div>
          </aside>

          {/* HERITAGE + VALUES */}
          <div className="lg:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E31E24]">
              Η Σχολή
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl md:text-[2.5rem] md:leading-[1.1]">
              Η Προσέγγισή μας
            </h2>
            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-[#6B7280]">
              <p>
                Στη Σχολή Οδηγών Αλεξόπουλος πιστεύουμε ότι η εκπαίδευση οδηγών
                δεν αφορά μόνο την επιτυχία στις εξετάσεις — αφορά τη δημιουργία
                υπεύθυνων και σίγουρων οδηγών.
              </p>
              <p>
                Με εξατομικευμένη προσέγγιση, υπομονή και επαγγελματισμό,
                καθοδηγούμε κάθε μαθητή στο δικό του ρυθμό, διασφαλίζοντας ότι
                αποκτά τις γνώσεις και τις δεξιότητες που χρειάζεται για ασφαλή
                οδήγηση.
              </p>
            </div>

            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E31E24]/10">
                    <v.icon className="h-4 w-4 text-[#E31E24]" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-sm font-bold text-[#1A1A1A]">{v.title}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-[#6B7280]">
                      {v.body}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
