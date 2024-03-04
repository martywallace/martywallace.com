import { getHomepageContent } from './queries/getHomepageContent';
import Introduction from './components/Introduction';
import About from './components/About';
import LatestArticles from './components/LatestArticles';
import History from './components/History';

export default async function Home() {
  const { articles, home } = await getHomepageContent();

  return (
    <>
      <Introduction />
      <About />
      <History experience={home.experience} />
      <LatestArticles articles={articles} />
    </>
  );
}
