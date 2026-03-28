'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
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
              alt="Σχολή Οδηγών Αλεξόπουλος"
              width={180}
              height={180}
              className={`h-11 w-11 sm:h-12 sm:w-12 transition-all duration-300 ${
                scrolled || mobileOpen ? '' : 'brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center lg:flex">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-lg px-2.5 py-2 text-[12px] font-semibold uppercase tracking-wider transition-colors xl:px-3 xl:text-[13px] ${
                      scrolled ? 'text-[#1A1A1A] hover:text-[#E31E24]' : 'text-white/90 hover:text-[#E31E24]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-50" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="min-w-56 rounded-xl border border-[#D4D4D4] bg-white p-2 shadow-[0_20px_60px_-15px_rgba(26,26,26,0.2)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#ECEEF0] hover:text-[#E31E24]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-2.5 py-2 text-[12px] font-semibold uppercase tracking-wider transition-colors xl:px-3 xl:text-[13px] ${
                    scrolled ? 'text-[#1A1A1A] hover:text-[#E31E24]' : 'text-white/90 hover:text-[#E31E24]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
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
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={closeMobile}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-[#1A1A1A] transition-colors hover:text-[#E31E24]"
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={closeMobile}
                  className="block rounded-lg px-6 py-2.5 text-sm text-[#6B7280] transition-colors hover:text-[#E31E24]"
                >
                  {child.label}
                </Link>
              ))}
            </div>
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
