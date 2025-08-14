import {
  faCode,
  faNewspaper,
  faShoppingBag,
} from '@fortawesome/pro-light-svg-icons';
import Container from '../../../components/Container';
import { ExperienceMetadata } from '../../../content/repositories/experience';
import { Content } from '../../../content/repository';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Experience from './components/Experience';
import Highlight from './components/Highlight';

type Props = {
  readonly experience: readonly Content<ExperienceMetadata>[];
};

export function History({ experience }: Props) {
  return (
    <Section padded>
      <Container>
        <SectionTitle title="Career Highlights" align="center" />

        <div className="grid gap-3 lg:gap-8 grid-cols-1 lg:grid-cols-3 mb-12 md:mb-28">
          <Highlight icon={faNewspaper} title="Scalable Content Pipeline">
            <p>
              Architected and implemented an end-to-end content generation
              system processing hundreds of articles daily. Designed the
              database architecture for content templating, built internal APIs
              for content management and implemented React dashboards for
              editorial oversight. This system drove our primary user
              acquisition channel for multiple years with near-zero operational
              overhead.
            </p>
          </Highlight>
          <Highlight
            icon={faShoppingBag}
            title="Multi-Brand Fulfillment Platform"
          >
            <p>
              Built a complete order aggregation platform from database design
              through frontend interfaces. Architected complex data schemas
              handling inventory across multiple brands, designed REST APIs for
              real-time order processing, created React dashboards for warehouse
              operations, and implemented automated deployment pipelines.
            </p>
          </Highlight>
          <Highlight icon={faCode} title="API Architecture Transformation">
            <p>
              Led organization-wide migration from REST to GraphQL, encompassing
              schema design, federation architecture, CI/CD integration, and
              developer tooling. Designed type-safe code generation workflows,
              implemented performance monitoring, and created comprehensive
              documentation.
            </p>
          </Highlight>
        </div>

        <h3 className="text-2xl mb-8 text-center">Role History</h3>

        <section>
          {experience.map(({ slug, metadata, content }, index) => (
            <Experience
              key={slug}
              workplace={metadata.name}
              timeframe={metadata.timeframe}
              logo={metadata.logo}
              last={index === experience.length - 1}
            >
              {content ?? ''}
            </Experience>
          ))}
        </section>
      </Container>
    </Section>
  );
}
