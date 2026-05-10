export interface ServiceRequirement {
  label: string;
  text: string;
}

export interface ServiceDetail {
  /** "Τι Περιλαμβάνει" — everything covered by the service. */
  included: string[];
  /** "Ηλικία & Προϋποθέσεις" — sub-categories or age/legal requirements. */
  requirements: ServiceRequirement[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  /** Lucide icon name. */
  icon: string;
  categories: string[];
  /** Detail content for primary services that previously had dedicated routes. */
  detail?: ServiceDetail;
}

export const services: Service[] = [
  {
    slug: 'diploma-aftokinitou',
    title: 'Δίπλωμα Αυτοκινήτου',
    shortDescription: 'Απόκτηση άδειας οδήγησης κατηγορίας Β για επιβατικά αυτοκίνητα.',
    icon: 'Car',
    categories: ['Β'],
    detail: {
      included: [
        'Θεωρητική εκπαίδευση για τον Κ.Ο.Κ.',
        'Πρακτικά μαθήματα οδήγησης',
        'Προετοιμασία για θεωρητική εξέταση',
        'Προετοιμασία για πρακτική εξέταση',
        'Καθοδήγηση στη συγκέντρωση δικαιολογητικών',
        'Εκπαιδευτικό όχημα παρεχόμενο',
      ],
      requirements: [
        {
          label: 'Από 17 ετών',
          text:
            'Δυνατότητα εξετάσεων και απόκτησης προσωρινής άδειας οδήγησης κατηγορίας Β με υποχρεωτική συνοδευόμενη οδήγηση, σύμφωνα με τις ισχύουσες προϋποθέσεις (Ν. 4850/2021).',
        },
        {
          label: 'Από 18 ετών',
          text: 'Χορήγηση κανονικής άδειας οδήγησης κατηγορίας Β.',
        },
      ],
    },
  },
  {
    slug: 'diploma-motosikletas',
    title: 'Δίπλωμα Μοτοσικλέτας',
    shortDescription: 'Άδεια οδήγησης κατηγοριών Α1, Α2 και Α για μοτοσικλέτες όλων των κυβικών.',
    icon: 'Bike',
    categories: ['Α1', 'Α2', 'Α'],
    detail: {
      included: [
        'Θεωρητική εκπαίδευση Κ.Ο.Κ.',
        'Πρακτική εκπαίδευση σε πίστα και δρόμο',
        'Προετοιμασία για θεωρητικές εξετάσεις',
        'Προετοιμασία για πρακτικές εξετάσεις',
        'Ενημέρωση για προοδευτική πρόσβαση (Α1→Α2→Α)',
        'Καθοδήγηση στα δικαιολογητικά',
      ],
      requirements: [
        {
          label: 'Α1',
          text: 'Μοτοσικλέτες έως 125cc, μέγιστη ισχύς 11 kW. Ελάχιστη ηλικία: 18 ετών.',
        },
        {
          label: 'Α2',
          text: 'Μοτοσικλέτες μέγιστης ισχύος 35 kW. Ελάχιστη ηλικία: 20 ετών.',
        },
        {
          label: 'Α',
          text: 'Μοτοσικλέτες χωρίς περιορισμό ισχύος. Ελάχιστη ηλικία: 24 ετών (ή 22 με 2 έτη Α2).',
        },
      ],
    },
  },
  {
    slug: 'epaggelmatiko-diploma',
    title: 'Επαγγελματικό Δίπλωμα & ΠΕΙ',
    shortDescription: 'Επαγγελματικές άδειες κατηγοριών Γ και Δ, καθώς και Πιστοποιητικό Επαγγελματικής Ικανότητας.',
    icon: 'Truck',
    categories: ['Γ', 'Δ', 'ΠΕΙ'],
    detail: {
      included: [
        'Θεωρητική εκπαίδευση',
        'Πρακτική εκπαίδευση με επαγγελματικά οχήματα',
        'Προετοιμασία εξετάσεων',
        'Αρχική χορήγηση ΠΕΙ',
        'Περιοδική κατάρτιση ΠΕΙ (ανανέωση κάθε 5 έτη)',
        'Διοικητική υποστήριξη στα δικαιολογητικά',
      ],
      requirements: [
        {
          label: 'Γ (C)',
          text:
            'Φορτηγά βάρους άνω των 3.500 kg. Η ελάχιστη ηλικία εξαρτάται από την κατηγορία και το ΠΕΙ — επικοινωνήστε μαζί μας.',
        },
        {
          label: 'Δ (D)',
          text:
            'Λεωφορεία με περισσότερες από 8 θέσεις επιβατών. Η ελάχιστη ηλικία εξαρτάται από την κατηγορία και το ΠΕΙ — επικοινωνήστε μαζί μας.',
        },
        {
          label: 'ΠΕΙ',
          text:
            'Πιστοποιητικό Επαγγελματικής Ικανότητας (Π.Ε.Ι.) — απαιτείται για επαγγελματίες οδηγούς μεταφοράς εμπορευμάτων ή επιβατών.',
        },
      ],
    },
  },
  {
    slug: 'ananeosi',
    title: 'Ανανέωση Διπλώματος',
    shortDescription: 'Ανανέωση της υπάρχουσας άδειας οδήγησης με πλήρη καθοδήγηση στη διαδικασία.',
    icon: 'RefreshCw',
    categories: [],
  },
  {
    slug: 'metekpaidefsi',
    title: 'Μετεκπαίδευση',
    shortDescription: 'Επιπλέον μαθήματα οδήγησης για ενίσχυση αυτοπεποίθησης και δεξιοτήτων.',
    icon: 'GraduationCap',
    categories: [],
  },
  {
    slug: 'epektasi',
    title: 'Επέκταση Διπλώματος',
    shortDescription: 'Αναβάθμιση ή επέκταση υπάρχουσας άδειας σε νέα κατηγορία οχήματος.',
    icon: 'ArrowUpCircle',
    categories: [],
  },
];

export const mainServices = services.slice(0, 3);
export const additionalServices = services.slice(3);
