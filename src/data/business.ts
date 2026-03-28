export const business = {
  name: {
    full: 'ΑΛΕΞΟΠΟΥΛΟΣ - ΣΧΟΛΗ ΟΔΗΓΩΝ ΠΑΛΑΙΟ ΦΑΛΗΡΟ',
    display: 'Σχολή Οδηγών Αλεξόπουλος',
    short: 'Αλεξόπουλος',
  },
  owner: {
    name: 'Μάκης Αλεξόπουλος',
    role: 'Ιδιοκτήτης & Εκπαιδευτής',
  },
  address: {
    street: 'Αιόλου 7',
    postalCode: '175 61',
    city: 'Παλαιό Φάληρο',
    region: 'Αττική',
    country: 'GR',
    full: 'Αιόλου 7, 175 61 Παλαιό Φάληρο',
  },
  contact: {
    phone: '+302109814083',
    phoneDisplay: '210 981 4083',
    mobile: '+306946176594',
    mobileDisplay: '694 617 6594',
    email: 'makisalexo@yahoo.gr',
  },
  hours: [
    { days: 'Δευτέρα - Παρασκευή', time: '10:00 - 13:30 & 18:00 - 20:30' },
    { days: 'Σάββατο', time: '11:00 - 13:00' },
    { days: 'Κυριακή', time: 'Κλειστά' },
  ],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100040098141654',
    googleMaps: 'https://www.google.com/maps/place/ΑΛΕΞΟΠΟΥΛΟΣ-ΣΧΟΛΗ+ΟΔΗΓΩΝ+ΠΑΛΑΙΟ+ΦΑΛΗΡΟ/@37.9267,23.6967,17z/',
  },
  stats: {
    yearsLabel: '50+',
    googleRating: 4.9,
    googleReviewCount: 251,
    award: 'Χρυσή Εταιρεία', // Verified: xrysietairia.eu + top100ofgreece.eu
  },
  // Placeholder markers for legal data - must be filled before launch
  legal: {
    afm: '[ΑΦΜ - ΑΠΑΙΤΕΙΤΑΙ]',
    doy: '[Δ.Ο.Υ. - ΑΠΑΙΤΕΙΤΑΙ]',
    gemi: '[ΓΕΜΗ - ΑΠΑΙΤΕΙΤΑΙ]',
    licenseNumber: '[Αρ. Αδείας - ΑΠΑΙΤΕΙΤΑΙ]',
  },
} as const;

export type Business = typeof business;
