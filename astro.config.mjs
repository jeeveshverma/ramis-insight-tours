import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages on the personal account until the custom domain moves over:
// https://jeeveshverma.github.io/ramis-insight-tours/ (Arabic under /ar/).
export default defineConfig({
  site: 'https://jeeveshverma.github.io',
  base: '/ramis-insight-tours',
  trailingSlash: 'always',
  build: { format: 'directory', assets: '_rit', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
  image: { responsiveStyles: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  // maplibre-gl v6 loads its own worker module; Vite's dep pre-bundling breaks that URL in dev.
  vite: { plugins: [tailwindcss()], optimizeDeps: { exclude: ['maplibre-gl'] } },
});
