'use client';

import { useSyncExternalStore } from 'react';

function subscribeToConsent(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('consent-updated', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('consent-updated', callback);
  };
}

function getConsentSnapshot(): string | null {
  if (typeof window === 'undefined') return 'pending';
  return localStorage.getItem('cookie_consent');
}

function getConsentServerSnapshot(): string | null {
  return 'pending';
}

export function CookieConsent() {
  const consentState = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  );

  // Don't show if consent already given or during SSR
  if (consentState !== null) return null;

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'granted');
    window.dispatchEvent(new Event('consent-updated'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'denied');
    window.dispatchEvent(new Event('consent-updated'));
  };

  return (
    <div
      role="dialog"
      aria-label="Συγκατάθεση cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-2xl lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-md lg:rounded-xl lg:border"
    >
      <p className="text-sm leading-relaxed text-[#6B7280]">
        Χρησιμοποιούμε cookies ανάλυσης (Google Analytics) για τη βελτίωση της εμπειρίας σας.
        Μπορείτε να τα αποδεχτείτε ή να τα απορρίψετε.{' '}
        <a href="/oroi-xrisis" className="text-[#1A1A1A] underline underline-offset-2">
          Πολιτική Cookies
        </a>
      </p>
      <div className="mt-3 flex gap-3">
        <button
          onClick={handleAccept}
          className="rounded-lg bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3C3C3C]"
        >
          Αποδοχή
        </button>
        <button
          onClick={handleDecline}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-[#6B7280] transition-colors hover:bg-gray-50"
        >
          Απόρριψη
        </button>
      </div>
    </div>
  );
}
