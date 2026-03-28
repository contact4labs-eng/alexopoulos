export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Αρχική', href: '/' },
  {
    label: 'Υπηρεσίες',
    href: '/ypiresies',
    children: [
      { label: 'Δίπλωμα Αυτοκινήτου', href: '/ypiresies/diploma-aftokinitou' },
      { label: 'Δίπλωμα Μοτοσικλέτας', href: '/ypiresies/diploma-motosikletas' },
      { label: 'Επαγγελματικό Δίπλωμα & ΠΕΙ', href: '/ypiresies/epaggelmatiko-diploma' },
    ],
  },
  { label: 'Η Σχολή Μας', href: '/i-scholi-mas' },
  { label: 'Κριτικές', href: '/kritikes' },
  { label: 'Συχνές Ερωτήσεις', href: '/syxnes-erotiseis' },
  { label: 'Επικοινωνία', href: '/epikoinonia' },
];
