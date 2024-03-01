import { getArticle } from './queries/getArticle';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import Container from '../../../components/Container';
import { format } from 'date-fns';

type Props = {
  readonly params: {
    readonly slug: string;
  };
};

export default async function Page({ params }: Props) {
  const { entry } = await getArticle(params.slug);

  if (!entry) {
    return notFound();
  }

  return (
    <Container>
      <article className="bg-gray-800 p-5 md:px-10 md:py-20 rounded-md">
        <h1 className="text-3xl font-light mb-3">{entry.title}</h1>
        <div className="text-sm mb-8 text-gray-500">
          <time dateTime={entry.postDate}>
            {format(new Date(entry.postDate), 'do MMM yyyy')}
          </time>
        </div>

        <Markdown className="prose prose-invert max-w-none">
          {entry.body}
        </Markdown>
      </article>
    </Container>
  );
}
