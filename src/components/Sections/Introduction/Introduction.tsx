import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../../Section';
import SocialTile from './components/SocialTile';
import Image from 'next/image';
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_STACKOVERFLOW,
} from '../../../constants';

export const Introduction = () => {
  return (
    <Section fullHeight>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-8 mx-auto max-w-screen-sm mb-16">
        <figure className="block flex-shrink-0 w-32 h-32 mx-auto rounded-md shadow-lg overflow-hidden mb-8 sm:mb-0">
          <Image
            width={460}
            height={460}
            src="https://avatars.githubusercontent.com/u/606154"
            alt=""
          />
        </figure>
        <div className="text-center sm:text-left">
          <p className="text-2xl mb-2 font-light">
            Hello! I&apos;m <span className="text-amber-500">Marty</span>, a web
            developer.
          </p>
          <article className="prose md:max-w-none">
            <p>
              I specialise in architecting and developing large-scale technical
              solutions while keeping them <em>simple</em>, <em>scalable</em>{' '}
              and <em>efficient</em>.
            </p>
          </article>
        </div>
      </div>

      <div className="grid md:grid-cols-3 mx-auto gap-2 max-w-screen-md">
        <SocialTile
          icon={faGithub}
          title="GitHub"
          summary="View my open-source projects."
          url={SOCIAL_GITHUB}
        />
        <SocialTile
          icon={faLinkedin}
          title="LinkedIn"
          summary="View my public LinkedIn profile."
          url={SOCIAL_LINKEDIN}
        />
        <SocialTile
          icon={faStackOverflow}
          title="StackOverflow"
          summary="View my 11+ years of Q&A contributions."
          url={SOCIAL_STACKOVERFLOW}
        />
      </div>

      <div className="text-center mt-16 animate-bounce">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </Section>
  );
};
