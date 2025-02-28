import { readdir, readFile } from 'fs';
import path from 'path';

export type Content<M> = {
  readonly metadata: M;
  readonly slug: string;
  readonly content: string | null;
};

export type ArticleMetadata = {
  readonly title: string;
  readonly slug: string;
  readonly date: string;
  readonly excerpt: string;
  readonly hero: string;
};

export type ExperienceMetadata = {
  readonly name: string;
  readonly timeframe: string;
  readonly logo: string;
};

export function getContentRoot() {
  return path.resolve(process.cwd(), 'content');
}

// todo: validate metadata against zod schema

export async function loadEntries<M>(
  contentDir: string,
  fetchContent = false,
): Promise<readonly Content<M>[]> {
  const fullPath = path.resolve(getContentRoot(), contentDir);

  return new Promise((resolve, reject) => {
    readdir(fullPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(
          Promise.all(
            files.map((file) =>
              loadEntry<M>(`${contentDir}/${file}`, fetchContent),
            ),
          ),
        );
      }
    });
  });
}

export async function loadEntry<M>(
  entryDir: string,
  fetchContent = false,
): Promise<Content<M>> {
  const fullPath = path.resolve(getContentRoot(), entryDir);

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
    metadata: JSON.parse(metadata) as M,
    slug: entryDir.split('/').pop() as string,
    content,
  };
}
