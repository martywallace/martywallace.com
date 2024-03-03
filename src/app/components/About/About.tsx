import Skill from './components/Skill';
import SkillGroup from './components/SkillGroup';
import Section from '../Section';
import Container from '../../../components/Container';
import SectionTitle from '../SectionTitle';

export function About() {
  return (
    <Section padded>
      <Container>
        <SectionTitle title="About Me" />

        <div className="grid md:grid-cols-5 gap-20">
          <article className="prose max-w-none md:col-span-3">
            <p>
              I am a self-taught full-stack web developer based in Australia
              with experience across many disciplines including infrastructure
              management, backend development and frontend development.
            </p>
            <p>
              My career blends agency and startup experiences. Working in
              agencies honed my efficiency, client management, and adaptability
              to tackle ever-changing challenges. Within startups, I&apos;ve
              pushed my core skills to excel, emerging as a standout talent in
              the industry.
            </p>
            <p>
              I thrive in a support role that boosts team productivity and
              satisfaction. My focus lies in streamlining processes through
              automation, developing and managing shared libraries, and
              leveraging my expertise in software architecture for large
              systems. This approach not only facilitates scalability but also
              enhances the overall developer experience.
            </p>
          </article>
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-5">Skills &amp; Technology</h3>

            <SkillGroup
              title="Core"
              summary="Core skills and technology that I work with the most consistently."
            >
              <Skill name="TypeScript" core />
              <Skill name="GraphQL" core />
              <Skill name="Nest.js" core />
              <Skill name="React" core />
              <Skill name="PostgreSQL" core />
              <Skill name="GitLab" core />
            </SkillGroup>

            <SkillGroup
              title="Additional"
              summary="Additional skills and technology that I have a high proficiency in but aren't necessarily my bread and butter."
            >
              <Skill name="PHP" />
              <Skill name="Vue.js" />
              <Skill name="Kubernetes" />
              <Skill name="Cloudflare" />
              <Skill name="RabbitMQ" />
              <Skill name="Next.js" />
              <Skill name="TailwindCSS" />
              <Skill name="Datadog" />
            </SkillGroup>
          </div>
        </div>
      </Container>
    </Section>
  );
}
