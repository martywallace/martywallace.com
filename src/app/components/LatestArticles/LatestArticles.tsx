import Section from '../Section';
import Container from '../../../components/Container';
import SectionTitle from '../SectionTitle';
import Publication from './components/Publication';
import { Response } from '../../queries/getHomepageContent';
import { format } from 'date-fns';

type Props = {
  readonly articles: Response['articles'];
};

export function LatestArticles({ articles }: Props) {
  return (
    <Section padded>
      <Container>
        <SectionTitle title="Latest Articles" />

        <div>
          {articles.map((article) => {
            const date = new Date(article.postDate);

            return (
              <Publication
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                formattedDate={{
                  date: format(date, 'dd'),
                  monthYear: format(date, 'MMM yyyy'),
                }}
                url={`/articles/${article.slug}`}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
