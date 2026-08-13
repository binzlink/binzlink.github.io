import { getCollection, type CollectionEntry } from 'astro:content';
import { locPath, type Locale } from './locales';

export type { Locale };
export { locPath };
export type ItemType = 'plugin' | 'skill' | 'mcp';
export type CatalogItem = CollectionEntry<'catalog'>;

export const typePath: Record<ItemType, string> = {
  plugin: 'plugins',
  skill: 'skills',
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
  return locPath(`/${typePath[item.data.type]}/${item.id}/`, locale);
}

export function listPath(type: ItemType, locale: Locale): string {
  return locPath(`/${typePath[type]}/`, locale);
}

export function t(obj: { en: string; zh?: string }, locale: Locale): string {
  if (locale === 'zh' && obj.zh) return obj.zh;
  return obj.en;
}
