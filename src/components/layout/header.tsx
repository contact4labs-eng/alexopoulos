'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { navigation } from '@/data/navigation';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/[0.97] backdrop-blur-lg shadow-[0_1px_0_rgba(215,222,230,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]" aria-label="Κύρια πλοήγηση">
          <Link href="/" className="flex items-center shrink-0" onClick={closeMobile}>
            <Image
              src="/images/logo.webp"
              alt="Σχολή Οδηγών Αλεξόπουλος — Παλαιό Φάληρο"
              width={1600}
              height={373}
              className="h-9 w-auto sm:h-10 lg:h-11 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-2.5 py-2 text-[12px] font-semibold uppercase tracking-wider transition-colors xl:px-3 xl:text-[13px] ${
                  scrolled ? 'text-[#1A1A1A] hover:text-[#E31E24]' : 'text-white/90 hover:text-[#E31E24]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex shrink-0">
            <a
              href="tel:+302109814083"
              className="flex items-center gap-2 rounded-xl bg-[#E31E24] px-5 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all hover:bg-[#C41A1F] hover:shadow-md"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Κλείσε Μάθημα
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 lg:hidden ${scrolled || mobileOpen ? 'text-[#1A1A1A]' : 'text-white'}`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#D4D4D4] bg-white px-5 pb-6 pt-3 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-[#1A1A1A] transition-colors hover:text-[#E31E24]"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 border-t border-[#D4D4D4] pt-4">
            <a
              href="tel:+302109814083"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#E31E24] px-5 py-3.5 text-base font-bold text-white"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="whitespace-nowrap">210 981 4083</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
