import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import Section from '../../Section';
import SocialTile from './components/SocialTile';
import Image from 'next/image';
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_STACKOVERFLOW,
} from '../../../constants';
import Container from '../../Container';

export const Introduction = () => {
  return (
    <Section fullHeight padded>
      <Container>
        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 mx-auto max-w-screen-sm mb-16">
          <figure className="block flex-shrink-0 w-28 h-28 mx-auto rounded-md shadow-lg overflow-hidden mb-8 sm:mb-0">
            <Image width={460} height={460} src="/profile.jpg" alt="" />
          </figure>
          <div className="text-center sm:text-left">
            <p className="text-2xl mb-2 font-light">
              Hello! I&apos;m <span className="text-amber-500">Marty</span>{' '}
              &ndash; a web developer.
            </p>
            <article className="prose md:max-w-none">
              <p>
                I specialise in architecting and developing large-scale
                technical solutions while keeping them <em>simple</em>,{' '}
                <em>scalable</em> and <em>efficient</em>.
              </p>
            </article>
          </div>
        </div>

        <div className="grid md:grid-cols-3 mx-auto gap-2 max-w-screen-md">
          <SocialTile
            icon={faGithub}
            title="GitHub"
            summary="My open-source projects."
            url={SOCIAL_GITHUB}
          />
          <SocialTile
            icon={faLinkedin}
            title="LinkedIn"
            summary="My public LinkedIn profile."
            url={SOCIAL_LINKEDIN}
          />
          <SocialTile
            icon={faStackOverflow}
            title="StackOverflow"
            summary="My Q&A contributions."
            url={SOCIAL_STACKOVERFLOW}
          />
        </div>
      </Container>
    </Section>
  );
};
