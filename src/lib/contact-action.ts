'use server';

import { z } from 'zod/v4';

const contactSchema = z.object({
  name: z.string().min(2, 'Το όνομα είναι απαραίτητο'),
  phone: z.string().min(8, 'Παρακαλώ εισάγετε έγκυρο τηλέφωνο'),
  email: z.email('Παρακαλώ εισάγετε έγκυρο email').optional().or(z.literal('')),
  service: z.string().optional(),
  message: z.string().optional(),
  // Honeypot - must be empty
  _honey: z.string().max(0).optional(),
});

export interface ContactFormState {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
}

/** Escape HTML special characters to prevent XSS in email templates */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
    _honey: formData.get('_honey'),
  };

  // Honeypot check
  if (raw._honey) {
    // Silently reject spam - return success to not reveal honeypot
    return { success: true };
  }

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const path = issue.path[0];
      if (typeof path === 'string') {
        fieldErrors[path] = issue.message;
      }
    }
    return { success: false, error: 'Παρακαλώ ελέγξτε τα στοιχεία σας.', fieldErrors };
  }

  // If RESEND_API_KEY is configured, send email
  // Otherwise, log the submission (development mode)
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || 'makisalexo@yahoo.gr';

  // From address must match a verified domain in Resend.
  // Update this when the production domain is configured.
  const fromAddress = process.env.EMAIL_FROM || 'onboarding@resend.dev';

  if (apiKey) {
    // Escape all user inputs to prevent XSS in email clients
    const safeName = escapeHtml(result.data.name);
    const safePhone = escapeHtml(result.data.phone);
    const safeEmail = escapeHtml(result.data.email || '-');
    const safeService = escapeHtml(result.data.service || '-');
    const safeMessage = escapeHtml(result.data.message || '-');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: contactEmail,
          subject: `Νέο μήνυμα από τον ιστότοπο - ${safeName}`,
          html: `
            <h2>Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
            <p><strong>Όνομα:</strong> ${safeName}</p>
            <p><strong>Τηλέφωνο:</strong> ${safePhone}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Υπηρεσία:</strong> ${safeService}</p>
            <p><strong>Μήνυμα:</strong> ${safeMessage}</p>
          `,
        }),
      });

      if (!response.ok) {
        console.error('Resend API error:', await response.text());
        return {
          success: false,
          error: 'Υπήρξε πρόβλημα με την αποστολή. Παρακαλώ τηλεφωνήστε μας στο 210 981 4083.',
        };
      }
    } catch (err) {
      console.error('Email send error:', err);
      return {
        success: false,
        error: 'Υπήρξε πρόβλημα με την αποστολή. Παρακαλώ τηλεφωνήστε μας στο 210 981 4083.',
      };
    }
  } else {
    // Development mode: log submission
    console.log('[DEV] Contact form submission:', result.data);
  }

  return { success: true };
}
