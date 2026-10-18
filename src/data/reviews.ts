import type { Bi } from '../i18n';

/**
 * Written reviews. `source` is where the words were published; quotes are kept short and
 * attributed. Themes recur across ~100 Booking.com reviews, Google and the BEA Adventurous blog.
 */
export interface Review { id: string; name: string; from: Bi; source: 'site' | 'booking' | 'google' | 'blog'; quote: Bi; about: 'tour' | 'stay' | 'both'; url?: string }

export const REVIEWS: Review[] = [
  { id: 'kim', name: 'Kim', from: { en: 'USA', ar: 'الولايات المتحدة' }, source: 'site', about: 'tour',
    quote: { en: 'I found and connected with Rami on Instagram six months before my trip. As a solo female traveller I did everything I wanted, within my budget, and I never once felt unsafe. Rami, Kelly, Ehab and the team were friendly and fun.', ar: 'تواصلت مع رامي عبر إنستغرام قبل رحلتي بستة أشهر. كمسافرة بمفردي فعلت كل ما أردت، وفي حدود ميزانيتي، ولم أشعر بعدم الأمان ولو مرة. رامي وكيلي وإيهاب والفريق كانوا ودودين ومرحين.' } },
  { id: 'bea', name: 'Bea', from: { en: 'Travel writer, UK', ar: 'كاتبة سفر، المملكة المتحدة' }, source: 'blog', about: 'both', url: 'https://bea-adventurous.com/best-tour-guides-in-cairo/',
    quote: { en: 'I don’t think I have ever met a guide as passionate about their trade and their country as Rami. I stayed at the Pyramids Temple Guest House for the rest of my stay and ate most meals with the family, sitting cross-legged on the floor the Bedouin way.', ar: 'لا أظنني قابلت مرشداً شغوفاً بمهنته وبلده مثل رامي. أقمت في بيت ضيافة معبد الأهرامات بقية رحلتي وتناولت معظم وجباتي مع العائلة، جالسة على الأرض على الطريقة البدوية.' } },
  { id: 'terrace', name: 'Guest', from: { en: 'Booking.com', ar: 'Booking.com' }, source: 'booking', about: 'stay',
    quote: { en: 'The view from the terrace is unbeatable. You watch the sound-and-light show on the pyramids from your chair.', ar: 'الإطلالة من السطح لا تُضاهى. تشاهد عرض الصوت والضوء على الأهرامات من مقعدك.' } },
  { id: 'eggplant', name: 'Guest', from: { en: 'Booking.com', ar: 'Booking.com' }, source: 'booking', about: 'stay',
    quote: { en: 'The host family’s cooking was a highlight: homemade, especially the wonderful eggplants.', ar: 'طبخ العائلة كان من أجمل ما في الإقامة: منزلي، وخصوصاً الباذنجان الرائع.' } },
  { id: 'arranged', name: 'Guest', from: { en: 'Booking.com', ar: 'Booking.com' }, source: 'booking', about: 'both',
    quote: { en: 'Rami arranged our guide, the airport transfer and a driver for the day. Everything just worked.', ar: 'رامي رتب لنا المرشد والانتقال من المطار وسائقاً لليوم. كل شيء سار ببساطة.' } },
  { id: 'home', name: 'Guest', from: { en: 'Google', ar: 'Google' }, source: 'google', about: 'stay',
    quote: { en: 'Rooms are clean and simple, the family cooks breakfast every day, and you feel at home within an hour.', ar: 'الغرف نظيفة وبسيطة، والعائلة تطهو الإفطار كل يوم، وتشعر أنك في بيتك خلال ساعة.' } },
  { id: 'rania', name: 'Bea', from: { en: 'Travel writer, UK', ar: 'كاتبة سفر، المملكة المتحدة' }, source: 'blog', about: 'tour', url: 'https://bea-adventurous.com/best-tour-guides-in-cairo/',
    quote: { en: 'When you book with Rami’s Insight Tours, make sure you also spend time with Rania. I found myself forming a connection beyond the typical guide-guest relationship.', ar: 'حين تحجز مع رحلات رامي، احرص على قضاء وقت مع رانيا أيضاً. وجدت نفسي أكوّن صلة تتجاوز علاقة المرشد بالضيف المعتادة.' } },
];

/**
 * Videos recovered from the old Wix site (2026-10-18): the three guest testimonials from its home page
 * and Rami's own 8-minute film. Files live in public/media/; posters are catalogue photos.
 * Titles describe where each was filmed — we do not put words in guests' mouths.
 */
export interface Video { id: string; file: string; poster: string; title: Bi; place: Bi; duration: string; kind: 'guest' | 'film' }

export const FILM: Video = {
  id: 'meet-rami', file: 'meet-rami.mp4', poster: 'video-meet-rami', kind: 'film', duration: '8:07',
  title: { en: 'Meet Rami: a film about how we travel', ar: 'تعرّف إلى رامي: فيلم عن طريقتنا في السفر' },
  place: { en: 'Giza, Cairo, Luxor, Aswan, the Nile', ar: 'الجيزة والقاهرة والأقصر وأسوان والنيل' },
};

export const VIDEOS: Video[] = [
  { id: 'rooftop', file: 'testimonial-rooftop.mp4', poster: 'video-rooftop', kind: 'guest', duration: '1:05',
    title: { en: 'From our rooftop at sunset', ar: 'من سطحنا عند الغروب' }, place: { en: 'Pyramids Temple Guest House, Giza', ar: 'بيت ضيافة معبد الأهرامات، الجيزة' } },
  { id: 'el-fishawy', file: 'testimonial-el-fishawy.mp4', poster: 'video-el-fishawy', kind: 'guest', duration: '2:06',
    title: { en: 'Over tea at El Fishawy', ar: 'على الشاي في مقهى الفيشاوي' }, place: { en: 'Khan el-Khalili, Cairo', ar: 'خان الخليلي، القاهرة' } },
  { id: 'islamic-cairo', file: 'testimonial-islamic-cairo.mp4', poster: 'video-islamic-cairo', kind: 'guest', duration: '1:21',
    title: { en: 'Walking Islamic Cairo with Rami', ar: 'جولة في القاهرة الإسلامية مع رامي' }, place: { en: 'Al-Hussein Square, Cairo', ar: 'ميدان الحسين، القاهرة' } },
];
