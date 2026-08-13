export const LOCALES = [
  { id: 'en', html: 'en', hreflang: 'en', dir: 'ltr', native: 'English' },
  { id: 'zh', html: 'zh-CN', hreflang: 'zh-CN', dir: 'ltr', native: '中文' },
  { id: 'ja', html: 'ja', hreflang: 'ja', dir: 'ltr', native: '日本語' },
  { id: 'ko', html: 'ko', hreflang: 'ko', dir: 'ltr', native: '한국어' },
  { id: 'es', html: 'es', hreflang: 'es', dir: 'ltr', native: 'Español' },
  { id: 'fr', html: 'fr', hreflang: 'fr', dir: 'ltr', native: 'Français' },
  { id: 'de', html: 'de', hreflang: 'de', dir: 'ltr', native: 'Deutsch' },
  { id: 'pt', html: 'pt', hreflang: 'pt', dir: 'ltr', native: 'Português' },
  { id: 'it', html: 'it', hreflang: 'it', dir: 'ltr', native: 'Italiano' },
  { id: 'ru', html: 'ru', hreflang: 'ru', dir: 'ltr', native: 'Русский' },
  { id: 'vi', html: 'vi', hreflang: 'vi', dir: 'ltr', native: 'Tiếng Việt' },
  { id: 'id', html: 'id', hreflang: 'id', dir: 'ltr', native: 'Indonesia' },
  { id: 'th', html: 'th', hreflang: 'th', dir: 'ltr', native: 'ไทย' },
  { id: 'tr', html: 'tr', hreflang: 'tr', dir: 'ltr', native: 'Türkçe' },
  { id: 'nl', html: 'nl', hreflang: 'nl', dir: 'ltr', native: 'Nederlands' },
  { id: 'pl', html: 'pl', hreflang: 'pl', dir: 'ltr', native: 'Polski' },
  { id: 'ar', html: 'ar', hreflang: 'ar', dir: 'rtl', native: 'العربية' },
  { id: 'hi', html: 'hi', hreflang: 'hi', dir: 'ltr', native: 'हिन्दी' },
] as const;

export type Locale = (typeof LOCALES)[number]['id'];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_IDS: Locale[] = LOCALES.map((l) => l.id);

export const PREFIXED_LOCALES: Locale[] = LOCALE_IDS.filter((id) => id !== 'en');

export function isLocale(value: string): value is Locale {
  return (LOCALE_IDS as string[]).includes(value);
}

export function localeMeta(id: Locale) {
  return LOCALES.find((l) => l.id === id)!;
}

export function localePrefix(locale: Locale): string {
  return locale === 'en' ? '' : `/${locale}`;
}

export function locPath(path: string, locale: Locale): string {
  const prefix = localePrefix(locale);
  if (path === '/') return prefix ? `${prefix}/` : '/';
  return `${prefix}${path}`;
}

export function switchLocaleHref(currentPath: string, from: Locale, to: Locale): string {
  let rest = currentPath;
  if (from !== 'en') {
    const p = `/${from}`;
    if (rest === p || rest === `${p}/`) rest = '/';
    else if (rest.startsWith(`${p}/`)) rest = rest.slice(p.length);
  }
  if (!rest.startsWith('/')) rest = `/${rest}`;
  return locPath(rest, to);
}

export function localeStaticPaths() {
  return PREFIXED_LOCALES.map((locale) => ({
    params: { locale },
    props: { locale },
  }));
}

export function localeItemPaths<T extends { id: string }>(items: T[]) {
  return PREFIXED_LOCALES.flatMap((locale) =>
    items.map((item) => ({
      params: { locale, slug: item.id },
      props: { locale, item },
    })),
  );
}
