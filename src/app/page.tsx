import { getHomepageArticles } from './queries/getHomepageArticles';
import Introduction from './components/Introduction';
import About from './components/About';
import LatestArticles from './components/LatestArticles';
import Highlights from './components/History';

export default async function Home() {
  const { entries } = await getHomepageArticles();

  return (
    <>
      <Introduction />
      <About />
      <Highlights />
      <LatestArticles articles={entries} />
    </>
  );
}
