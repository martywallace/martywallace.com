import type { NextPage } from 'next';
import About from '../components/Sections/About';
import Articles from '../components/Sections/Articles';
import History from '../components/Sections/History';
import Introduction from '../components/Sections/Introduction';

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <About />
      <History />
      <Articles />
    </>
  );
};

export default Home;
