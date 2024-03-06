import {
  faCode,
  faNewspaper,
  faShoppingBag,
} from '@fortawesome/pro-light-svg-icons';

import Highlight from './components/Highlight';
import Section from '../Section';
import Container from '../../../components/Container';
import SectionTitle from '../SectionTitle';
import Experience from './components/Experience';
import { Response } from '../../queries/getHomepageContent';
import Client from './components/Client';

type Props = {
  readonly experience: Response['home']['experience'];
};

export function History({ experience }: Props) {
  return (
    <Section padded>
      <Container>
        <SectionTitle title="Career Highlights" align="center" />

        <div className="grid gap-3 lg:gap-8 grid-cols-1 lg:grid-cols-3 mb-12 md:mb-28">
          <Highlight icon={faNewspaper} title="Content Automation">
            <p>
              I led (from a technical perspective) and delivered a project that
              schedules and composes financial content at scale, delivering
              hundreds of automated articles across multiple news outlets every
              day.
            </p>
            <p>
              These articles served as our largest source of new user
              registrations by a significant margin over multiple years,
              allowing us to grow with close to zero cost overhead.
            </p>
          </Highlight>
          <Highlight icon={faShoppingBag} title="Custom eCommerce">
            <p>
              I have worked on completely custom user-facing and back-of-house
              e-commerce software.
            </p>
            <p>
              I have developed order aggregation and fulfilment software to
              streamline picking and packing of orders across multiple brands
              and sources. This software has improved the throughput efficiency
              for new orders by many multiples.
            </p>
          </Highlight>
          <Highlight icon={faCode} title="GraphQL Adoption">
            <p>
              I successfully championed the adoption of GraphQL in our team.
              This involved consistent RFC processes, CI/CD improvements,
              refactoring, development of templates and writing of
              documentation.
            </p>
            <p>
              GraphQL is now a beloved technology within the team that is
              enabling significantly accelerated delivery of new features and
              functionality.
            </p>
          </Highlight>
        </div>

        <h3 className="text-2xl mb-8 text-center">Role History</h3>

        <section className="mb-12 md:mb-28">
          {experience.map((exp, index) => (
            <Experience
              key={exp.id}
              workplace={exp.workplace}
              timeframe={exp.timeframe}
              logo={exp.logo[0]?.url}
              last={index === experience.length - 1}
            >
              {exp.body}
            </Experience>
          ))}
        </section>

        <h3 className="text-2xl mb-10 text-center">
          Who I&apos;ve Worked With
        </h3>

        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:px-8">
          <Client
            name="Alessi"
            logo="https://storage.martywallace.com/logos/alessi_logo.jpeg"
            website="alessiaustralia.com.au"
          />
          <Client
            name="Georg Jensen"
            logo="https://storage.martywallace.com/logos/gj_logo.jpeg"
            website="georgjensen.com"
          />
          <Client
            name="Teho"
            logo="https://storage.martywallace.com/logos/teho_logo.jpeg"
            website="teho.com.au"
          />
          <Client
            name="Girls on Fire"
            logo="https://storage.martywallace.com/logos/gof_logo.jpeg"
            website="girlsonfire.com.au"
          />
          <Client
            name="Weaverbirds"
            logo="https://storage.martywallace.com/logos/weaverbirds_logo.jpeg"
            website="weaverbirds.com.au"
          />
        </section>
      </Container>
    </Section>
  );
}
