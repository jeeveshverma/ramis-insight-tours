import { SITE } from '../data/site';

/** WhatsApp deep link to Rami with a pre-filled message. */
export const waUrl = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
export const telUrl = `tel:${SITE.phone}`;
export const mailUrl = (subject: string) => `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
