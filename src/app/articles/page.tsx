import { getArticles } from './queries/getArticles';
import Container from '../../components/Container';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
  const { entries } = await getArticles();

  return (
    <Container>
      <div className="mb-10">
        <h1 className="text-3xl font-light">Articles</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {entries.map((entry) => (
          <article
            className="bg-gray-800 border border-gray-700 rounded-md overflow-hidden shadow-lg hover:bg-gray-700 top-0 hover:-top-2 relative transition-all duration-150 ease-in-out"
            key={entry.id}
          >
            <Link className="block" href={`/articles/${entry.slug}`}>
              <figure>
                {entry.heroImage.map((image) => (
                  <figure className="relative bg-gray-700 h-48" key={image.url}>
                    <Image
                      quality={95}
                      src={image.url}
                      alt=""
                      width={320}
                      height={210}
                      className="object-cover w-full h-full"
                    />
                  </figure>
                ))}
              </figure>
              <div className="p-5">
                <h2 className="text-xl mb-2 leading-tight">{entry.title}</h2>
                <div className="mb-5 text-sm text-gray-500">
                  <time dateTime={entry.postDate}>
                    {format(new Date(entry.postDate), 'do MMM yyyy')}
                  </time>
                </div>
                <div className="prose max-w-none prose-invert">
                  {entry.excerpt}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
