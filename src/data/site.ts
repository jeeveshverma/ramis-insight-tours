/**
 * Every public fact about the business, in one place. Sources: the old Wix site, the guest house's
 * Booking.com / Google / bedandbreakfast.eu listings, Instagram bios, the BEA Adventurous blog.
 */
export const SITE = {
  url: 'https://jeeveshverma.github.io/ramis-insight-tours',
  name: { en: "Rami's Insight Tours", ar: 'رحلات رامي إنسايت' },
  shortName: { en: "Rami's Insight", ar: 'رامي إنسايت' },
  tagline: { en: 'Egypt, through the eyes of a local', ar: 'مصر بعيون أهلها' },
  founded: 2014,
  city: { en: 'Giza', ar: 'الجيزة' },
  country: { en: 'Egypt', ar: 'مصر' },
  /** The guest house doubles as the office: Sayed Gabir St, Al Haram, Giza 12557. */
  street: { en: 'Sayed Gabir Street, Al Haram', ar: 'شارع سيد جابر، الهرم' },
  postal: '12557',
  geo: { lat: 29.975098, lng: 31.143436 },
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Pyramids+Temple+Guest+House+Giza',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=29.975098,31.143436',
  whatsapp: '201119239280',
  whatsappDisplay: '+20 111 923 9280',
  phone: '+201119239280',
  phoneDisplay: '+20 111 923 9280',
  email: 'ramielshaer2@gmail.com',
  instagram: { handle: 'loai_rami_elshaer', url: 'https://www.instagram.com/loai_rami_elshaer/' },
  instagramStay: { handle: 'pyramids_temple_guest_house', url: 'https://www.instagram.com/pyramids_temple_guest_house/' },
  facebook: { url: 'https://www.facebook.com/ramisinsighttours' },
  bookingUrl: 'https://www.booking.com/hotel/eg/pyramids-temple-guest-house.html',
  /** Aggregate ratings as read on 2026-10-18. */
  ratings: {
    booking: { score: 9.6, count: 105, staff: 9.7, wifi: 10, clean: 9.6, location: 9.5 },
    google: { score: 4.9, count: 133 },
  },
  founder: { en: 'Rami Elshaer', ar: 'رامي الشاعر' },
} as const;
