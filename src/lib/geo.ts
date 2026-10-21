import { SITE } from '../data/site';
import type { Lang } from '../i18n';

const R = 6371;
const rad = (d: number) => (d * Math.PI) / 180;

/** Great-circle distance in km. */
export function km(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const dLat = rad(b.lat - a.lat), dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Distance and minutes from the guest house. Walking 4.8 km/h on a 1.3x street factor; driving ~28 km/h in Giza traffic. */
export function fromHouse(to: { lat: number; lng: number }, mode: 'foot' | 'car') {
  const d = km(SITE.geo, to);
  const min = mode === 'foot' ? Math.max(2, Math.round((d * 1.3) / 4.8 * 60)) : Math.max(5, Math.round((d * 1.4) / 28 * 60));
  return { km: d, min, mode };
}

export const fmtKm = (d: number, lang: Lang) => {
  const s = isMetres(d) ? `${Math.round(d * 100) * 10}` : d < 10 ? d.toFixed(1) : String(Math.round(d));
  return lang === 'ar' ? s.replace(/\d/g, (c) => '٠١٢٣٤٥٦٧٨٩'[Number(c)]).replace(/(?<=[٠-٩])\.(?=[٠-٩])/g, '٫') : s;
};
/** Under 950 m we show metres; from there "1.0 km" reads better than "1000 m". */
export const isMetres = (d: number) => d < 0.95;
