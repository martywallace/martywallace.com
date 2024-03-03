import Section from '../Section';
import Container from '../../../components/Container';
import SectionTitle from '../SectionTitle';
import Publication from './components/Publication';
import { Response } from '../../queries/getHomepageArticles';

type Props = {
  readonly articles: Response['entries'];
};

export function LatestArticles({ articles }: Props) {
  return (
    <Section padded>
      <Container>
        <SectionTitle title="Latest Articles" />

        <div>
          {articles.map((article) => (
            <Publication
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              date={new Date(article.postDate)}
              url={`/articles/${article.slug}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
