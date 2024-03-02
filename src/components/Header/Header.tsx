import Container from '../Container';
import Logo from './components/Logo';
import SocialLink from './components/SocialLink';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_STACKOVERFLOW,
} from '../../constants';
import Navigation from './components/Navigation/Navigation';

export function Header() {
  return (
    <header className="border-b border-gray-800 py-5 fixed top-0 left-0 right-0 z-10 backdrop-blur bg-opacity-70 bg-gray-900">
      <Container>
        <div className="flex items-center space-x-10">
          <Logo />
          <div className="flex-grow">
            <Navigation />
          </div>
          <div className="social flex-shrink-0 space-x-4">
            <SocialLink icon={faGithub} href={SOCIAL_GITHUB} />
            <SocialLink icon={faLinkedin} href={SOCIAL_LINKEDIN} />
            <SocialLink icon={faStackOverflow} href={SOCIAL_STACKOVERFLOW} />
          </div>
        </div>
      </Container>
    </header>
  );
}
