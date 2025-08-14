import Container from '../../../components/Container';
import Section from '../Section';
import SectionTitle from '../SectionTitle';

export function About() {
  return (
    <Section padded>
      <Container>
        <SectionTitle title="Background & Offering" />

        <article className="prose max-w-none md:col-span-3">
          <p>
            My career spans agency and startup environments where I&apos;ve
            solved complex technical challenges for diverse businesses. Agency
            work taught me to quickly understand business requirements and
            deliver reliable systems under pressure. Startup experience pushed
            me to master every aspect of software development and take ownership
            of complete technical initiatives.
          </p>
          <p>
            <strong>
              As an independent contractor, you get senior-level expertise
              across the entire technology stack in a single engagement
            </strong>
            . Rather than managing separate specialists for different parts of
            your system, I can assess your complete technical needs, design
            optimal solutions, and build everything from data storage through
            user-facing applications. This eliminates coordination problems,
            reduces communication overhead, and ensures all technical decisions
            work together seamlessly.
          </p>
          <p>
            <strong>
              My unique advantage is deep expertise across the complete
              technology stack
            </strong>{' '}
            &ndash; while most developers either specialize in one area or have
            surface-level knowledge across many, I&apos;ve developed
            senior-level proficiency in every layer. From advanced database
            optimization through complex API design to frontend performance and
            infrastructure management, this comprehensive depth allows me to
            make optimal architectural decisions across your entire system.
          </p>
        </article>
      </Container>
    </Section>
  );
}
