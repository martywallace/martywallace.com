import Container from '../../../components/Container';
import Skeleton from 'react-loading-skeleton';

export default async function Loading() {
  return (
    <Container>
      <article className="shadow-xl rounded-md">
        <figure className="relative rounded-t-md overflow-hidden bg-gray-700 w-full h-56 sm:h-72 md:h-96"></figure>

        <div className="p-5 md:px-10 md:py-20 bg-gray-800 rounded-b-md">
          <h1 className="text-3xl font-light mb-3">
            <Skeleton width="40%" />
          </h1>
          <div className="text-sm mb-8 text-gray-500">
            <Skeleton width="15%" />
          </div>

          <Skeleton count={6} />
        </div>
      </article>
    </Container>
  );
}
