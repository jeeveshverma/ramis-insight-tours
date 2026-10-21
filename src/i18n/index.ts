import en from './en.json';
import ar from './ar.json';

export type Lang = 'en' | 'ar';

export const LANGS: { code: Lang; name: string; hreflang: string; dir: 'ltr' | 'rtl'; ogLocale: string }[] = [
  { code: 'en', name: 'English', hreflang: 'en', dir: 'ltr', ogLocale: 'en_GB' },
  { code: 'ar', name: 'العربية', hreflang: 'ar', dir: 'rtl', ogLocale: 'ar_EG' },
];

export const dirOf = (lang: Lang) => LANGS.find((l) => l.code === lang)!.dir;

export type PageKey =
  | 'home' | 'tours' | 'tour' | 'stays' | 'stay' | 'destinations' | 'destination'
  | 'about' | 'reviews' | 'gallery' | 'tips' | 'journal' | 'post' | 'contact' | 'notfound';

/** Slugs are the same in both languages; Arabic pages live under /ar/. */
const SLUG: Record<PageKey, string> = {
  home: '', tours: 'tours/', tour: 'tours/', stays: 'stays/', stay: 'stays/', destinations: 'destinations/', destination: 'destinations/',
  about: 'about/', reviews: 'reviews/', gallery: 'gallery/', tips: 'travel-tips/', journal: 'journal/', post: 'journal/', contact: 'contact/', notfound: '404/',
};

const BASE = (import.meta.env.BASE_URL.replace(/\/$/, '') + '/') as string;

/** Site-relative path (includes the GitHub Pages base). `sub` is an extra slug, e.g. a tour id. */
export function path(lang: Lang, page: PageKey, sub = ''): string {
  return `${BASE}${lang === 'ar' ? 'ar/' : ''}${SLUG[page]}${sub ? sub.replace(/\/?$/, '/') : ''}`;
}

/** The same page in the other language. */
export function switchLang(lang: Lang, page: PageKey, sub = ''): string {
  return path(lang === 'ar' ? 'en' : 'ar', page, sub);
}

type Dict = Record<string, unknown>;
const DICTS: Record<Lang, Dict> = { en: en as Dict, ar: ar as Dict };

function lookup(dict: Dict, key: string): string | undefined {
  const v = key.split('.').reduce<unknown>((o, k) => (o && typeof o === 'object' ? (o as Dict)[k] : undefined), dict);
  return typeof v === 'string' ? v : undefined;
}

/** `t('key.path', { name: 'x' })` with {placeholders}; falls back to English, then the key. */
export function useT(lang: Lang) {
  const t = (key: string, vars: Record<string, string | number> = {}): string => {
    const raw = lookup(DICTS[lang], key) ?? lookup(DICTS.en, key) ?? key;
    return raw.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
  };
  return { t, lang, dir: dirOf(lang) };
}

/** Pick the language variant of a bilingual field. */
export type Bi = { en: string; ar: string };
export const pick = (b: Bi, lang: Lang) => b[lang] || b.en;

/** Arabic-Indic digits for display numbers in Arabic (section numbers, counters). Prices stay Western. */
export function digits(n: number | string, lang: Lang): string {
  const s = String(n);
  return lang === 'ar' ? s.replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]).replace(/(?<=[٠-٩])\.(?=[٠-٩])/g, '٫') : s;
}

export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;
