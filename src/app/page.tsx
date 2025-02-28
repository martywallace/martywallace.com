import { articleRepository } from '../content/repositories/articles';
import { experienceRepository } from '../content/repositories/experience';
import About from './components/About';
import History from './components/History';
import Introduction from './components/Introduction';
import LatestArticles from './components/LatestArticles';

export default async function Home() {
  const [experience, articles] = await Promise.all([
    experienceRepository.getManifest(true),
    articleRepository.getManifest(),
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
