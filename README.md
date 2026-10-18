# Rami's Insight Tours

The rebuild of ramisinsighttours.com (was Wix). Astro 5 static site, English + Arabic (RTL, under `/ar/`),
no backend: every enquiry opens WhatsApp to Rami with a structured message.

```
npm install
npm run dev        # http://127.0.0.1:4321/ramis-insight-tours/
npm run build      # 91 pages into dist/
npm run deploy     # dist/ -> gh-pages (gh auth switch -u jeeveshverma first)
node scripts/qa.mjs audit / /ar/ --width 360     # overflow, broken images, console errors, 404s
node scripts/qa.mjs shots / 390 /tmp/shots --device iphone
```

## Where things live

| What | File |
|---|---|
| Business facts (phone, address, ratings) | `src/data/site.ts` |
| The 9 tours, prices, day-by-day | `src/data/tours.ts` |
| Pyramids Temple Guest House (rooms, amenities, rules) and Amarna (coming soon) | `src/data/stays.ts` |
| Destinations + map coordinates | `src/data/places.ts` |
| Reviews, travel tips, journal posts | `src/data/reviews.ts`, `tips.ts`, `posts.ts` |
| Photo catalogue (alt text, gallery category) | `src/data/photos.ts` + `src/assets/photos/` |
| UI strings | `src/i18n/en.json`, `src/i18n/ar.json` |

## Opening Amarna Guest House Retreat, Luxor

Fill in its entry in `src/data/stays.ts` (rooms, amenities, rules, why, photos, geo, from) and change
`status: 'coming_soon'` to `'open'`. The guest-house template takes over; nothing else changes.

## Still needed from Rami

- Names of the 3-star hotels used outside Cairo, the Nile cruise and felucca operators
- Roles and portraits for Rania, Kelly, Ehab
- Room-by-room photos and confirmed nightly prices (site shows "from $35", Booking.com's indicative rate)
- The three video testimonials from the old home page (source files or YouTube links)
- High-resolution originals (the Wix copies top out at 920-1680 px), plus a rooftop-at-dusk shot
- Approval of the new tour names (Cairo Essentials, Pharaohs' Trail, Grand Egypt, ...)
- Cancellation policy and maximum group size
