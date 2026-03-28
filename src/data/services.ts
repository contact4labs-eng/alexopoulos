export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string; // lucide icon name
  categories: string[];
  href: string;
}

export const services: Service[] = [
  {
    slug: 'diploma-aftokinitou',
    title: 'Δίπλωμα Αυτοκινήτου',
    shortDescription: 'Απόκτηση άδειας οδήγησης κατηγορίας Β για επιβατικά αυτοκίνητα.',
    icon: 'Car',
    categories: ['Β'],
    href: '/ypiresies/diploma-aftokinitou',
  },
  {
    slug: 'diploma-motosikletas',
    title: 'Δίπλωμα Μοτοσικλέτας',
    shortDescription: 'Άδεια οδήγησης κατηγοριών Α1, Α2 και Α για μοτοσικλέτες όλων των κυβικών.',
    icon: 'Bike',
    categories: ['Α1', 'Α2', 'Α'],
    href: '/ypiresies/diploma-motosikletas',
  },
  {
    slug: 'epaggelmatiko-diploma',
    title: 'Επαγγελματικό Δίπλωμα & ΠΕΙ',
    shortDescription: 'Επαγγελματικές άδειες κατηγοριών Γ και Δ, καθώς και Πιστοποιητικό Επαγγελματικής Ικανότητας.',
    icon: 'Truck',
    categories: ['Γ', 'Δ', 'ΠΕΙ'],
    href: '/ypiresies/epaggelmatiko-diploma',
  },
  {
    slug: 'ananeosi',
    title: 'Ανανέωση Διπλώματος',
    shortDescription: 'Ανανέωση της υπάρχουσας άδειας οδήγησης με πλήρη καθοδήγηση στη διαδικασία.',
    icon: 'RefreshCw',
    categories: [],
    href: '/epikoinonia',
  },
  {
    slug: 'metekpaidefsi',
    title: 'Μετεκπαίδευση',
    shortDescription: 'Επιπλέον μαθήματα οδήγησης για ενίσχυση αυτοπεποίθησης και δεξιοτήτων.',
    icon: 'GraduationCap',
    categories: [],
    href: '/epikoinonia',
  },
  {
    slug: 'epektasi',
    title: 'Επέκταση Διπλώματος',
    shortDescription: 'Αναβάθμιση ή επέκταση υπάρχουσας άδειας σε νέα κατηγορία οχήματος.',
    icon: 'ArrowUpCircle',
    categories: [],
    href: '/epikoinonia',
  },
];

// Only the main 3 services have dedicated pages
export const mainServices = services.slice(0, 3);
export const additionalServices = services.slice(3);
