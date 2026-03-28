export interface Testimonial {
  quote: string;
  authorName: string;
  rating: number;
  source: 'direct' | 'pending';
  serviceType?: string;
}

// Real reviews sourced from public review aggregation sites with manager authorization.
// First names only for privacy. Quotes preserved as published.
export const testimonials: Testimonial[] = [
  {
    quote: 'Η καλύτερη σχολή οδηγών στο Παλαιό Φάληρο και φυσικά ο καλύτερος εκπαιδευτής! Ήρεμος και με υπομονή.',
    authorName: 'Ελένη',
    rating: 5,
    source: 'direct',
  },
  {
    quote: 'Ο Μάκης εξαιρετικός δάσκαλος! Ήρεμος, με μεταδοτικότητα και υπομονή!',
    authorName: 'Γιώργος',
    rating: 5,
    source: 'direct',
  },
  {
    quote: 'Θεωρώ από τη πιο αξιόπιστη και ασφαλή σχολή που θα μπορούσε οποιοσδήποτε να πάει.',
    authorName: 'Αλεξάνδρα',
    rating: 5,
    source: 'direct',
  },
  {
    quote: 'Με την ηρεμία του και την μεταδοτικότητά του κέρδισε την εμπιστοσύνη μου.',
    authorName: 'Βάσω',
    rating: 5,
    source: 'direct',
  },
  {
    quote: 'Πολύ καλή σχολή. Και τα πρακτικά και τα θεωρητικά μαθήματα ήταν πολύ βοηθητικά.',
    authorName: 'Ελένη',
    rating: 5,
    source: 'direct',
  },
  {
    quote: 'Εξαιρετική σχολή με τέλεια οργάνωση. Οι εκπαιδευτές είναι πολύ ευγενικοί.',
    authorName: 'Νίκος',
    rating: 5,
    source: 'direct',
  },
  {
    quote: 'Σοβαροί επαγγελματίες και πολύ έμπειρος ο κύριος Αλεξόπουλος.',
    authorName: 'Ρέα',
    rating: 5,
    source: 'direct',
  },
  {
    quote: 'Ξεκίνησα χωρίς να έχω ιδέα από οδήγηση και έμαθα πάρα πολύ γρήγορα!',
    authorName: 'Αγγελική',
    rating: 5,
    source: 'direct',
  },
  {
    quote: 'Πραγματικά άριστη σχολή. Ο κύριος Μάκης ήταν από τους πιο άρτιους ανθρώπους.',
    authorName: 'Τάσος',
    rating: 5,
    source: 'direct',
  },
];

// Use business.ts as single source of truth for rating data
import { business } from './business';

export const testimonialConfig = {
  googleRating: business.stats.googleRating,
  googleReviewCount: business.stats.googleReviewCount,
  googleMapsReviewUrl: business.social.googleMaps,
  showEmptyState: testimonials.length === 0,
} as const;
