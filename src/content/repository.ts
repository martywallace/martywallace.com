import { readdir, readFile } from 'fs';
import path from 'path';
import { z } from 'zod';

export type Content<M> = {
  readonly metadata: M;
  readonly slug: string;
  readonly content: string | null;
};

export function getContentRoot() {
  return path.resolve(process.cwd(), 'content');
}

export type ContentRepositoryOptions = {
  readonly basePath: string;
  readonly schema: z.ZodObject<any>;
};

export class ContentRepository<M extends Record<string, any>> {
  constructor(private readonly options: ContentRepositoryOptions) {}

  async getManifest(fetchContent = false): Promise<readonly Content<M>[]> {
    const fullPath = path.resolve(getContentRoot(), this.options.basePath);

    return new Promise((resolve, reject) => {
      readdir(fullPath, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(
            // todo(pre-optimization): add chunk() here once we have a lot of
            // content.
            Promise.all(files.map((file) => this.getEntry(file, fetchContent))),
          );
        }
      });
    });
  }

  async getEntry(entryDir: string, fetchContent = true): Promise<Content<M>> {
    const fullPath = path.resolve(
      getContentRoot(),
      this.options.basePath,
      entryDir,
    );

    const load = async (filename: string): Promise<string | null> => {
      return new Promise((resolve) => {
        readFile(path.resolve(fullPath, filename), 'utf8', (err, data) => {
          if (err) resolve(null);
          else resolve(data);
        });
      });
    };

    const [metadata, content] = await Promise.all([
      load('metadata.json'),
      fetchContent ? load('content.md') : Promise.resolve(null),
    ]);

    if (!metadata) {
      throw new Error(
        `Failed to load entry metadata for ${entryDir}/metadata.json`,
      );
    }

    return {
      metadata: this.options.schema.parse(JSON.parse(metadata)) as M,
      slug: entryDir.split('/').pop() as string,
      content,
    };
  }
}
