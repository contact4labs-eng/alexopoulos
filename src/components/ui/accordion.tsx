'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`rounded-xl border transition-colors duration-150 ${isOpen ? 'border-[#E31E24]/30 bg-[#E31E24]/[0.03]' : 'border-[#D4D4D4] bg-white'}`}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="text-base font-semibold text-[#1A1A1A] pr-4">{item.title}</span>
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${isOpen ? 'bg-[#E31E24]/10 rotate-180' : 'bg-[#ECEEF0]'}`}>
                <ChevronDown className={`h-4 w-4 ${isOpen ? 'text-[#E31E24]' : 'text-[#6B7280]'}`} aria-hidden="true" />
              </div>
            </button>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="px-6 pb-5">
                <p className="text-[#6B7280] leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
