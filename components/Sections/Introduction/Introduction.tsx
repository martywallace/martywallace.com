import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Section from '../../Section';
import SocialTile from './components/SocialTile';

export const Introduction: FC = () => {
  return (
    <Section fullHeight>
      <div className="mb-16 text-center">
        <figure className="relative w-36 h-36 mx-auto mb-10">
          <img
            className="relative z-10 transform rotate-3 rounded-2xl shadow-lg"
            width={144}
            height={144}
            src="https://avatars.githubusercontent.com/u/606154"
            alt=""
          />
          <span className="absolute inset-0 transform rotate-12 bg-ui-lighter rounded-lg" />
        </figure>
        <p className="text-2xl mb-5">
          Hello! I'm <span className="text-primary">Marty</span>, a full-stack
          web developer.
        </p>
        <article className="prose md:max-w-sm mx-auto">
          <p>
            I specialise in architecting and developing large-scale technical
            solutions while keeping them simple, scalable and efficient.
          </p>
        </article>
      </div>

      <div className="grid md:grid-cols-3 mx-auto gap-2 max-w-screen-md">
        <SocialTile
          icon={faGithub}
          title="GitHub"
          summary="View my open-source projects."
          url="https://github.com/martywallace"
        />
        <SocialTile
          icon={faLinkedin}
          title="LinkedIn"
          summary="View my public LinkedIn profile."
          url="https://www.linkedin.com/in/marty-wallace-b5b15695/"
        />
        <SocialTile
          icon={faStackOverflow}
          title="StackOverflow"
          summary="View my 11+ years of Q&A contributions."
          url="https://stackoverflow.com/users/699632/marty"
        />
      </div>

      <div className="text-center mt-10 animate-bounce">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </Section>
  );
};
