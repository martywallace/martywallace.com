import { faExternalLinkAlt } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/Container';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import { articleRepository } from '../../../content/repositories/articles';

type Props = {
  readonly params: {
    readonly slug: string;
  };
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const articles = await articleRepository.getManifest();

  return articles.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = await articleRepository.getEntry(params.slug);

  if (!entry) {
    return notFound();
  }

  const title = `${entry.metadata.title} - Marty Wallace`;

  return {
    title,
    description: entry.metadata.excerpt,
    openGraph: {
      title,
      description: entry.metadata.excerpt,
      images: [
        {
          url: entry.metadata.hero,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const entry = await articleRepository.getEntry(params.slug);

  if (!entry) {
    return notFound();
  }

  return (
    <Container>
      <article className="shadow-xl rounded-md">
        <section className="relative bg-gray-700 w-full rounded-t-md overflow-hidden">
          <figure className="overflow-hidden h-56 sm:h-72 md:h-96">
            {entry.metadata.hero && (
              <Image
                key={entry.metadata.hero}
                quality={95}
                width={1200}
                height={600}
                className="object-cover w-full h-full"
                src={entry.metadata.hero}
                alt=""
              />
            )}
          </figure>

          <div className="absolute inset-0 top-auto p-5 md:px-10 pb-8 pt-28 bg-gradient-to-b from-transparent to-gray-950">
            <h1 className="text-2xl md:text-3xl font-light mb-1">
              {entry.metadata.title}
            </h1>
            <div className="text-sm text-gray-400 drop-shadow-lg">
              <time dateTime={entry.metadata.date}>
                {format(new Date(entry.metadata.date), 'do MMMM yyyy')}
              </time>{' '}
              &middot; by{' '}
              <Link className="underline hover:text-white" href="/">
                Marty Wallace
              </Link>
            </div>
          </div>
        </section>

        <div className="p-5 md:px-10 md:py-16 bg-gray-800 rounded-b-md">
          <MarkdownRenderer>{entry.content ?? ''}</MarkdownRenderer>
        </div>
      </article>

      <div className="flex justify-center pt-5 md:pt-12">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/martywallace/martywallace.com/tree/main/content/articles/${entry.slug}/content.md`}
          className="flex items-center space-x-2 text-sm text-gray-500 hover:text-white"
        >
          <span className="underline">View this article on GitHub</span>
          <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} />
        </a>
      </div>
    </Container>
  );
}
