import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import { articleRepository } from '../../content/repositories/articles';

export default async function Page() {
  const articles = await articleRepository.getManifest();

  return (
    <Container>
      <div className="mb-10">
        <h1 className="text-3xl font-light">Articles</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {articles.map(({ slug, metadata }) => (
          <article
            className="bg-gray-800 border border-gray-700 rounded-md overflow-hidden shadow-lg hover:bg-gray-700 top-0 hover:-top-2 relative transition-all duration-150 ease-in-out"
            key={slug}
          >
            <Link className="block" href={`/articles/${slug}`}>
              <figure>
                {metadata.hero && (
                  <figure className="relative bg-gray-700 h-48">
                    <Image
                      quality={95}
                      src={metadata.hero}
                      alt=""
                      width={320}
                      height={210}
                      className="object-cover w-full h-full"
                    />
                  </figure>
                )}
              </figure>
              <div className="p-5">
                <h2 className="text-xl mb-2 leading-tight">{metadata.title}</h2>
                <div className="mb-5 text-sm text-gray-500">
                  <time dateTime={metadata.date}>
                    {format(new Date(metadata.date), 'do MMM yyyy')}
                  </time>
                </div>
                <div className="prose max-w-none prose-invert line-clamp-5">
                  {metadata.excerpt}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
