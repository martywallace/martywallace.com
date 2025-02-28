import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_STACKOVERFLOW,
} from '../../constants';
import Container from '../Container';
import SocialLink from './components/SocialLink';

export function Footer() {
  return (
    <footer className="">
      <section className="bg-gray-950 py-12">
        <Container className="grid gap-10 sm:grid-cols-3">
          <div className="col-span-2">
            <h3 className="font-light text-gray-100 text-lg mb-5 flex items-center space-x-3">
              <FontAwesomeIcon className="text-sm" icon={faMessage} />
              <span className="flex-grow">Work With Me</span>
            </h3>
            <article className="prose max-w-none mb-5 text-gray-500">
              <p>
                While my availability is limited, I would love to to support
                anything from the initial planning of a new technical concept to
                hands-on development and ongoing maintenance. Feel free to reach
                out on LinkedIn.
              </p>
            </article>
          </div>
          <div className="flex sm:items-end sm:justify-end space-x-4">
            <SocialLink icon={faGithub} href={SOCIAL_GITHUB} />
            <SocialLink icon={faLinkedin} href={SOCIAL_LINKEDIN} />
            <SocialLink icon={faStackOverflow} href={SOCIAL_STACKOVERFLOW} />
          </div>
        </Container>
      </section>
      <section className="text-sm text-gray-700 py-10">
        <Container>
          <p>
            &copy; Marty Wallace &middot; ABN 24 297 658 841 &middot;{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/martywallace/martywallace.com"
              className="hover:text-gray-600"
            >
              View on GitHub
            </a>
          </p>
        </Container>
      </section>
    </footer>
  );
}
