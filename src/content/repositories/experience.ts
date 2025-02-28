import { z } from 'zod';
import { ContentRepository } from '../repository';

export const experienceSchema = z.object({
  name: z.string(),
  timeframe: z.string(),
  logo: z.string(),
});

export type ExperienceMetadata = z.infer<typeof experienceSchema>;

export const experienceRepository = new ContentRepository<ExperienceMetadata>({
  basePath: 'experience',
  schema: experienceSchema,
});
