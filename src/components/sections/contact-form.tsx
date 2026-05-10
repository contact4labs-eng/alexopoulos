'use client';

import { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from '@/lib/contact-action';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const initialState: ContactFormState = { success: false };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center" role="status" aria-live="polite">
        <CheckCircle className="mx-auto h-10 w-10 text-green-600" aria-hidden="true" />
        <h3 className="mt-3 text-lg font-semibold text-green-800">Ευχαριστούμε!</h3>
        <p className="mt-2 text-sm text-green-700">
          Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας σύντομα.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="_honey">Μην συμπληρώσετε</label>
        <input type="text" id="_honey" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite">
        {state.error && (
          <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
            <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-red-700">{state.error}</p>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A]">
          Ονοματεπώνυμο <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          aria-describedby={state.fieldErrors?.name ? 'name-error' : undefined}
          autoComplete="name"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#E31E24] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20"
          placeholder="π.χ. Γιάννης Παπαδόπουλος"
        />
        {state.fieldErrors?.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600">{state.fieldErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A]">
          Τηλέφωνο <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          aria-required="true"
          aria-describedby={state.fieldErrors?.phone ? 'phone-error' : undefined}
          autoComplete="tel"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#E31E24] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20"
          placeholder="π.χ. 694 000 0000"
        />
        {state.fieldErrors?.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-600">{state.fieldErrors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A]">
          Email <span className="text-xs text-[#6B7280]">(προαιρετικό)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          aria-describedby={state.fieldErrors?.email ? 'email-error' : undefined}
          autoComplete="email"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#E31E24] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20"
          placeholder="π.χ. example@email.com"
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600">{state.fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[#1A1A1A]">
          Υπηρεσία Ενδιαφέροντος
        </label>
        <select
          id="service"
          name="service"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#E31E24] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20"
        >
          <option value="">Επιλέξτε υπηρεσία...</option>
          <option value="car">Δίπλωμα Αυτοκινήτου (Β)</option>
          <option value="motorcycle">Δίπλωμα Μοτοσικλέτας (Α1/Α2/Α)</option>
          <option value="professional">Επαγγελματικό Δίπλωμα (Γ/Δ)</option>
          <option value="pei">ΠΕΙ</option>
          <option value="renewal">Ανανέωση Διπλώματος</option>
          <option value="retraining">Μετεκπαίδευση</option>
          <option value="extension">Επέκταση Διπλώματος</option>
          <option value="other">Άλλο</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A]">
          Μήνυμα <span className="text-xs text-[#6B7280]">(προαιρετικό)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#E31E24] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 resize-y"
          placeholder="Γράψτε μας τις ερωτήσεις ή τα σχόλιά σας..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E31E24] px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#C41A1F] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Αποστολή...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Αποστολή Μηνύματος
          </>
        )}
      </button>
    </form>
  );
}
