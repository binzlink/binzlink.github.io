import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { LOCALES } from './src/lib/locales';

const sitemapLocales = Object.fromEntries(LOCALES.map((l) => [l.id, l.hreflang]));

export default defineConfig({
  site: 'https://www.claudenovo.com',
  output: 'static',
  outDir: 'dist',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: sitemapLocales,
      },
      filter: (page) => !page.includes('/404') && !page.includes('/app') && !page.includes('/design'),
    }),
  ],
});
