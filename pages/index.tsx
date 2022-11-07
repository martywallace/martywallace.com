import type { NextPage } from 'next';
import About from '../components/Sections/About';
import Introduction from '../components/Sections/Introduction';
import WorkWithMe from '../components/Sections/Work';

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <About />
      {/* <Articles /> */}
      <WorkWithMe />
    </>
  );
};

export default Home;
