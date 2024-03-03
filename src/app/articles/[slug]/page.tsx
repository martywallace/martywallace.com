import { getArticle } from './queries/getArticle';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import Container from '../../../components/Container';
import { format } from 'date-fns';
import Image from 'next/image';

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
      <article>
        <figure className="relative rounded-t-md overflow-hidden bg-gray-700 w-full h-56 sm:h-72 md:h-96">
          {entry.heroImage.map((image) => (
            <Image
              key={image.url}
              quality={95}
              className="object-cover w-full h-full"
              width={990}
              height={390}
              src={image.url}
              alt=""
            />
          ))}
        </figure>

        <div className="p-5 md:px-10 md:py-20 bg-gray-800 rounded-b-md">
          <h1 className="text-3xl font-light mb-3">{entry.title}</h1>
          <div className="text-sm mb-8 text-gray-500">
            <time dateTime={entry.postDate}>
              {format(new Date(entry.postDate), 'do MMM yyyy')}
            </time>
          </div>

          <Markdown className="prose prose-invert max-w-none">
            {entry.body}
          </Markdown>
        </div>
      </article>
    </Container>
  );
}
