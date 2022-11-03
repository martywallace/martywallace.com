import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/Sections/About';
import Introduction from '../components/Sections/Introduction';
import WorkWithMe from '../components/Sections/Work';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marty Wallace | Full Stack Developer</title>
      </Head>
      <Introduction />
      <About />
      {/* <Articles /> */}
      <WorkWithMe />
    </>
  );
};

export default Home;
