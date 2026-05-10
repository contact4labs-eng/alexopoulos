const steps = [
  {
    num: '01',
    title: 'Εγγραφή & Δικαιολογητικά',
    body: 'Συγκέντρωση απαραίτητων εγγράφων και εγγραφή στη σχολή.',
  },
  {
    num: '02',
    title: 'Θεωρητική Εκπαίδευση',
    body: 'Εκμάθηση του Κώδικα Οδικής Κυκλοφορίας και προετοιμασία για τη θεωρητική εξέταση.',
  },
  {
    num: '03',
    title: 'Πρακτική Εκπαίδευση',
    body: 'Μαθήματα οδήγησης σε πραγματικές συνθήκες κυκλοφορίας με εξειδικευμένο εκπαιδευτή.',
  },
  {
    num: '04',
    title: 'Εξέταση',
    body: 'Θεωρητική και πρακτική εξέταση στη Διεύθυνση Μεταφορών.',
  },
];

export function Process() {
  return (
    <section
      id="diadikasia"
      className="relative overflow-hidden bg-[#1A1A1A] py-20 md:py-28"
    >
      {/* hairline at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E31E24]">
            Διαδικασία
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.1]">
            Πώς λειτουργεί
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Η διαδικασία από την εγγραφή μέχρι το δίπλωμα, βήμα-βήμα.
          </p>
        </div>

        {/* Desktop: horizontal stepped timeline */}
        <ol className="hidden lg:block">
          <div className="relative grid grid-cols-4 gap-8">
            {/* Connector line behind the numbered tokens */}
            <div
              className="absolute top-7 left-7 right-7 h-px bg-white/10"
              aria-hidden="true"
            />
            {steps.map((s) => (
              <li key={s.num} className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#1A1A1A] font-mono text-base font-bold text-[#E31E24]">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-white/55">
                  {s.body}
                </p>
              </li>
            ))}
          </div>
        </ol>

        {/* Mobile: vertical stack with left-edge connector */}
        <ol className="relative lg:hidden">
          <div
            className="absolute left-7 top-7 bottom-10 w-px bg-white/10"
            aria-hidden="true"
          />
          <div className="space-y-9">
            {steps.map((s) => (
              <li key={s.num} className="relative grid grid-cols-[3.5rem_1fr] gap-5">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#1A1A1A] font-mono text-base font-bold text-[#E31E24]">
                  {s.num}
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
