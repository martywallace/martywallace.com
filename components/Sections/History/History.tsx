import {
  faCode,
  faNewspaper,
  faShoppingBag,
} from '@fortawesome/pro-light-svg-icons';
import Section from '../../Section';
import SectionTitle from '../../SectionTitle';
import Experience from './components/Experience';

export const History = () => {
  return (
    <Section>
      <SectionTitle title="Work Highlights" align="center" />

      <div className="grid gap-3 grid-cols-1 lg:grid-cols-3">
        <Experience icon={faNewspaper} title="Content Automation">
          <p>
            I led (from a technical perspective) and delivered a project that
            schedules and composes financial content at scale, delivering
            hundreds of automated articles across multiple news outlets every
            day.
          </p>
          <p>
            These articles served as our largest source of new user
            registrations by a significant margin over multiple years, allowing
            us to grow with close to zero cost overhead.
          </p>
        </Experience>
        <Experience icon={faShoppingBag} title="Custom eCommerce">
          <p>
            I have worked on completely custom user-facing and back-of-house
            e-commerce software.
          </p>
          <p>
            I have developed order aggregation and fulfilment software to
            streamline picking and packing of orders across multiple brands and
            sources. This software has improved the throughput efficiency for
            new orders by many multiples.
          </p>
        </Experience>
        <Experience icon={faCode} title="GraphQL Adoption">
          <p>
            I successfully championed the adoption of GraphQL in our team. This
            involved consistent RFC processes, CI/CD improvements, refactoring,
            development of templates and writing of documentation.
          </p>
          <p>
            GraphQL is now a beloved technology within the team that is enabling
            significantly accelerated delivery of new features and
            functionality.
          </p>
        </Experience>
      </div>
    </Section>
  );
};
