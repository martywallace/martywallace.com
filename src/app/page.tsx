import {
  ArticleMetadata,
  ExperienceMetadata,
  loadEntries,
} from '../services/content';
import About from './components/About';
import History from './components/History';
import Introduction from './components/Introduction';
import LatestArticles from './components/LatestArticles';

export default async function Home() {
  const [experience, articles] = await Promise.all([
    loadEntries<ExperienceMetadata>('experience', true),
    loadEntries<ArticleMetadata>('articles'),
  ]);

  return (
    <>
      <Introduction />
      <About />
      <History experience={experience} />
      <LatestArticles articles={articles.toReversed().slice(0, 3)} />
    </>
  );
}
