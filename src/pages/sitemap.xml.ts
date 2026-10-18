import type { APIRoute } from 'astro';
import { LANGS, path, type PageKey } from '../i18n';
import { SITE } from '../data/site';
import { TOURS } from '../data/tours';
import { STAYS } from '../data/stays';
import { PLACES } from '../data/places';
import { POSTS } from '../data/posts';

export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, SITE.url + '/').href.replace(/([^:])\/\//g, '$1/');
  const entries: [PageKey, string?][] = [['home'], ['tours'], ...TOURS.map((t) => ['tour', t.id] as [PageKey, string]), ['stays'], ...STAYS.map((s) => ['stay', s.id] as [PageKey, string]), ['destinations'], ...PLACES.map((p) => ['destination', p.id] as [PageKey, string]), ['about'], ['reviews'], ['gallery'], ['tips'], ['journal'], ...POSTS.map((p) => ['post', p.id] as [PageKey, string]), ['contact']];
  const urls = entries.flatMap(([page, sub]) => LANGS.map((l) => `<url><loc>${abs(path(l.code, page, sub))}</loc>${LANGS.map((a) => `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${abs(path(a.code, page, sub))}"/>`).join('')}</url>`));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
