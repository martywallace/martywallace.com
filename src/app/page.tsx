import About from '../components/Sections/About';
import Articles from '../components/Sections/Articles';
import History from '../components/Sections/History';
import Introduction from '../components/Sections/Introduction';
import Clients from '../components/Sections/Clients';

export default function Home() {
  return (
    <>
      <Introduction />
      <About />
      <Clients />
      <History />
      <Articles />
    </>
  );
}
