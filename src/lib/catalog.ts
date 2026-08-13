import { getCollection, type CollectionEntry } from 'astro:content';

export type Locale = 'en' | 'zh';
export type ItemType = 'plugin' | 'skill' | 'mcp';
export type CatalogItem = CollectionEntry<'catalog'>;

export const typePath: Record<ItemType, string> = {
  plugin: 'plugins',
  skill: 'skills',
  mcp: 'mcp',
};

export const typeFromPath: Record<string, ItemType> = {
  plugins: 'plugin',
  skills: 'skill',
  mcp: 'mcp',
};

export async function allItems(): Promise<CatalogItem[]> {
  const items = await getCollection('catalog');
  return items.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

export async function itemsByType(type: ItemType): Promise<CatalogItem[]> {
  return (await allItems()).filter((item) => item.data.type === type);
}

export async function featuredItems(): Promise<CatalogItem[]> {
  return (await allItems()).filter((item) => item.data.featured);
}

export function itemPath(item: CatalogItem, locale: Locale): string {
  const prefix = locale === 'zh' ? '/zh' : '';
  return `${prefix}/${typePath[item.data.type]}/${item.id}/`;
}

export function listPath(type: ItemType, locale: Locale): string {
  const prefix = locale === 'zh' ? '/zh' : '';
  return `${prefix}/${typePath[type]}/`;
}

export function t(obj: { en: string; zh: string }, locale: Locale): string {
  return obj[locale];
}

export function locPath(path: string, locale: Locale): string {
  if (locale === 'zh') {
    return path === '/' ? '/zh/' : `/zh${path}`;
  }
  return path;
}

export function otherLocaleHref(currentPath: string, locale: Locale): string {
  if (locale === 'en') {
    if (currentPath === '/') return '/zh/';
    return `/zh${currentPath}`;
  }
  if (currentPath === '/zh' || currentPath === '/zh/') return '/';
  return currentPath.replace(/^\/zh/, '') || '/';
}
