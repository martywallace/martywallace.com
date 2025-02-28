import { MetadataRoute } from 'next';
import { ArticleMetadata, loadEntries } from '../services/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await loadEntries<ArticleMetadata>('articles');

  return articles.map((entry) => ({
    url: `https://martywallace.com/articles/${entry.metadata.slug}`,
    lastModified: new Date(entry.metadata.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));
}
