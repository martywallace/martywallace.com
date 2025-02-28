import { format } from 'date-fns';
import Container from '../../../components/Container';
import { ArticleMetadata } from '../../../content/repositories/articles';
import { Content } from '../../../content/repository';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Publication from './components/Publication';

type Props = {
  readonly articles: readonly Content<ArticleMetadata>[];
};

export function LatestArticles({ articles }: Props) {
  return (
    <Section padded>
      <Container>
        <SectionTitle title="Latest Articles" />

        <div>
          {articles.map(({ slug, metadata }) => {
            const date = new Date(metadata.date);

            return (
              <Publication
                key={slug}
                title={metadata.title}
                excerpt={metadata.excerpt}
                formattedDate={{
                  date: format(date, 'dd'),
                  monthYear: format(date, 'MMM yyyy'),
                }}
                url={`/articles/${slug}`}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
