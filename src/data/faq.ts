export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'licenses' | 'process';
}

// Only include FAQ entries where the answer is factually safe (based on standard Greek procedures)
// Do NOT speculate about pricing, exact hours needed, or school-specific policies
export const faqItems: FAQItem[] = [
  {
    question: 'Τι χρειάζομαι για να ξεκινήσω μαθήματα οδήγησης;',
    answer: 'Επικοινωνήστε μαζί μας για να σας ενημερώσουμε αναλυτικά για τα απαραίτητα δικαιολογητικά ανάλογα με την κατηγορία διπλώματος που σας ενδιαφέρει.',
    category: 'general',
  },
  {
    question: 'Ποιες κατηγορίες διπλωμάτων προσφέρετε;',
    answer: 'Προσφέρουμε εκπαίδευση για δίπλωμα αυτοκινήτου (Β), μοτοσικλέτας (Α1, Α2, Α), επαγγελματικά διπλώματα (Γ, Δ) και ΠΕΙ. Επίσης αναλαμβάνουμε ανανεώσεις, μετεκπαίδευση και επεκτάσεις διπλωμάτων.',
    category: 'licenses',
  },
  {
    question: 'Πώς μπορώ να κλείσω ραντεβού;',
    answer: 'Μπορείτε να μας καλέσετε στο 210 981 4083 ή στο κινητό 694 617 6594, να μας στείλετε email, ή να χρησιμοποιήσετε τη φόρμα επικοινωνίας στη σελίδα μας.',
    category: 'general',
  },
  {
    question: 'Ποιο είναι το ωράριο λειτουργίας σας;',
    answer: 'Δευτέρα - Παρασκευή: 10:00 - 13:30 & 18:00 - 20:30. Σάββατο: 11:00 - 13:00. Κυριακή: Κλειστά.',
    category: 'general',
  },
  {
    question: 'Πού βρίσκεστε;',
    answer: 'Η σχολή μας βρίσκεται στην οδό Αιόλου 7, στο Παλαιό Φάληρο (Τ.Κ. 175 61).',
    category: 'general',
  },
];
