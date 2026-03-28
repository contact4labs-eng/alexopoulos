import Link from 'next/link';
import { Section } from '@/components/ui/section';

export default function NotFound() {
  return (
    <>
      <Section background="white" className="pt-28 md:pt-32">
        <div className="mx-auto max-w-lg py-16 text-center">
          <p className="text-6xl font-bold text-[#E31E24]">404</p>
          <h1 className="mt-4 text-2xl font-bold text-[#1A1A1A]">
            Η σελίδα δεν βρέθηκε
          </h1>
          <p className="mt-4 text-[#6B7280]">
            Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-[#E31E24] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#C41A1F]"
            >
              Επιστροφή στην Αρχική
            </Link>
            <Link
              href="/epikoinonia"
              className="inline-flex items-center rounded-lg border-2 border-[#1A1A1A] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white"
            >
              Επικοινωνία
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
