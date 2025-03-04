import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Container from '../../../components/Container';
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_STACKOVERFLOW,
} from '../../../constants';
import Section from '../Section';
import SocialTile from './components/SocialTile';

export function Introduction() {
  return (
    <Section fullHeight padded>
      <Image
        width={2376}
        height={1344}
        src="https://storage.martywallace.com/background.jpg"
        className="absolute inset-0 -z-10 w-full h-full object-cover opacity-10"
        alt=""
      />

      <Container className="relative z-[5]">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 mx-auto max-w-screen-sm mb-16">
          <figure className="block flex-shrink-0 w-28 h-28 mx-auto rounded-full shadow-lg overflow-hidden mb-8 sm:mb-0">
            <Image
              width={460}
              height={460}
              src="https://storage.martywallace.com/ai-profile.jpg"
              alt=""
            />
          </figure>
          <div className="text-center sm:text-left drop-shadow-lg">
            <p className="text-2xl mb-2 font-light">
              Hello! I&apos;m <span className="text-amber-500">Marty</span>{' '}
              &ndash; a software engineer.
            </p>
            <article className="prose md:max-w-none prose-invert">
              <p>
                I specialise in architecting and developing large-scale
                technical solutions while keeping them <em>simple</em>,{' '}
                <em>scalable</em> and <em>efficient</em>.
              </p>
            </article>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 mx-auto gap-2 max-w-xs sm:max-w-screen-md">
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
}
