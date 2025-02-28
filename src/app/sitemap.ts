import { MetadataRoute } from 'next';
import { articleRepository } from '../content/repositories/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await articleRepository.getManifest();

  return articles.map((entry) => ({
    url: `https://martywallace.com/articles/${entry.slug}`,
    lastModified: new Date(entry.metadata.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));
}
