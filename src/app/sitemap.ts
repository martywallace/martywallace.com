import { MetadataRoute } from 'next';
import { getSitemap } from './queries/getSitemap';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { entries } = await getSitemap();

  return entries.map((entry) => ({
    url: entry.url,
    lastModified: new Date(entry.dateUpdated),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));
}
