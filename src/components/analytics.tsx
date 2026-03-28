'use client';

import Script from 'next/script';
import { useSyncExternalStore } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function subscribeToConsent(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('consent-updated', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('consent-updated', callback);
  };
}

function getConsentSnapshot() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookie_consent') === 'granted';
}

function getConsentServerSnapshot() {
  return false;
}

export function Analytics() {
  const consented = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  );

  if (!GA_ID) return null;

  return (
    <>
      {/* Consent Mode v2: default denied, loaded inline in head */}
      <Script id="consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
        `}
      </Script>

      {/* Load gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {/* Grant consent when user accepts */}
      {consented && (
        <Script id="consent-grant" strategy="afterInteractive">
          {`
            function gtag(){window.dataLayer.push(arguments);}
            gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });
          `}
        </Script>
      )}
    </>
  );
}
