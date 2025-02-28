import { z } from 'zod';
import { ContentRepository } from '../repository';

export const articleSchema = z.object({
  title: z.string(),
  date: z.string().date(),
  excerpt: z.string(),
  hero: z.string(),
});

export type ArticleMetadata = z.infer<typeof articleSchema>;

export const articleRepository = new ContentRepository<ArticleMetadata>({
  basePath: 'articles',
  schema: articleSchema,
});
