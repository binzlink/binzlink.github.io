import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const oldLocales = [
  'ja', 'ko', 'es', 'fr', 'de', 'pt', 'it', 'ru',
  'vi', 'id', 'th', 'tr', 'nl', 'pl', 'ar', 'hi',
];

const redirects = {};
for (const loc of oldLocales) {
  redirects[`/${loc}/`] = '/';
}

export default defineConfig({
  site: 'https://www.claudenovo.com',
  output: 'static',
  outDir: 'dist',
  trailingSlash: 'always',
  redirects,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-CN' },
      },
      filter: (page) => {
        const skip = oldLocales.some(
          (loc) => page.includes(`/${loc}/`) || page.endsWith(`/${loc}`),
        );
        return !skip && !page.includes('/404') && !page.includes('/app') && !page.includes('/design');
      },
    }),
  ],
});
