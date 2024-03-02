import { getArticles } from './queries/getArticles';
import Container from '../../components/Container';
import { format } from 'date-fns';
import Link from 'next/link';

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
            className="bg-gray-800 border border-gray-700 rounded-md shadow-lg hover:bg-gray-700 top-0 hover:-top-2 relative transition-all duration-150 ease-in-out"
            key={entry.id}
          >
            <Link className="block p-5" href={`/articles/${entry.slug}`}>
              <h2 className="text-xl mb-2 leading-tight">{entry.title}</h2>
              <div className="mb-5 text-sm text-gray-500">
                <time dateTime={entry.postDate}>
                  {format(new Date(entry.postDate), 'do MMM yyyy')}
                </time>
              </div>
              <div className="prose max-w-none prose-invert">
                {entry.excerpt}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
