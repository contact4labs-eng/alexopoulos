'use client';

import { Phone, MessageCircle } from 'lucide-react';

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#D4D4D4] bg-white/95 backdrop-blur-md px-4 py-3 lg:hidden">
      <div className="flex items-center gap-3">
        <a
          href="tel:+302109814083"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#E31E24] py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#C41A1F]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Τηλεφωνήστε μας
        </a>
        <a
          href="tel:+306946176594"
          className="flex items-center justify-center gap-2 rounded-xl border border-[#D4D4D4] bg-white px-5 py-3.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#ECEEF0]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Κινητό
        </a>
      </div>
    </div>
  );
}
