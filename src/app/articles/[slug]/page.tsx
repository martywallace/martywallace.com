import { getArticle } from './queries/getArticle';
import { notFound } from 'next/navigation';
import Container from '../../../components/Container';
import { format } from 'date-fns';
import Image from 'next/image';
import { Metadata } from 'next';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import Link from 'next/link';

type Props = {
  readonly params: {
    readonly slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { entry } = await getArticle(params.slug);

  if (!entry) {
    return notFound();
  }

  const title = `${entry.title} - Marty Wallace`;

  return {
    title,
    description: entry.excerpt,
    openGraph: {
      title,
      description: entry.excerpt,
      images: entry.heroImage.map((image) => ({
        url: image.url,
        width: image.width,
        height: image.height,
      })),
    },
  };
}

export default async function Page({ params }: Props) {
  const { entry } = await getArticle(params.slug);

  if (!entry) {
    return notFound();
  }

  return (
    <Container>
      <article className="shadow-xl rounded-md">
        <section className="relative bg-gray-700 w-full rounded-t-md overflow-hidden">
          <figure className="overflow-hidden h-56 sm:h-72 md:h-96">
            {entry.heroImage.map((image) => (
              <Image
                key={image.url}
                quality={95}
                className="object-cover w-full h-full"
                width={image.width}
                height={image.height}
                src={image.url}
                alt=""
              />
            ))}
          </figure>

          <div className="absolute inset-0 top-auto p-5 md:px-10 pb-8 pt-28 bg-gradient-to-b from-transparent to-gray-950">
            <h1 className="text-2xl md:text-3xl font-light mb-1">
              {entry.title}
            </h1>
            <div className="text-sm text-gray-400 drop-shadow-lg">
              <time dateTime={entry.postDate}>
                {format(new Date(entry.postDate), 'do MMMM yyyy')}
              </time>{' '}
              &middot; by{' '}
              <Link className="underline hover:text-white" href="/">
                Marty Wallace
              </Link>
            </div>
          </div>
        </section>

        <div className="p-5 md:px-10 md:py-16 bg-gray-800 rounded-b-md">
          <MarkdownRenderer>{entry.body}</MarkdownRenderer>
        </div>
      </article>
    </Container>
  );
}
