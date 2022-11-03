import { FC } from 'react';
import Section from '../../Section';
import SectionTitle from '../../Section/components/SectionTitle';
import Skill from './components/Skill';
import SkillGroup from './components/SkillGroup';

export const About: FC = () => {
  return (
    <Section style="light">
      <SectionTitle title="About Me" />

      <div className="grid md:grid-cols-5 gap-20">
        <article className="prose max-w-none md:col-span-3">
          <p>
            I am a self-taught full-stack developer based in Australia with
            experience across many disciplines including infrastructure
            management, backend development and frontend development. Writing
            code and working with technology are passions that I developed in my
            early teens and have sustained 15+ years on.
          </p>
          <p>
            My career so far has been equal parts agency and startup. Agency
            taught me to work efficiently, meet client expectations and
            constantly think on my feet while the startup environment has
            allowed me to focus on stretching my core skills to their limits to
            become a leading talent in the industry.
          </p>
        </article>
        <div className="md:col-span-2">
          <h3 className="text-2xl mb-5">Skills &amp; Technology</h3>

          <SkillGroup
            title="Core"
            summary="Core skills and technology that I work with at least weekly."
          >
            <Skill name="TypeScript" core />
            <Skill name="Apollo GraphQL" core />
            <Skill name="Nest.js" core />
            <Skill name="Next.js" core />
            <Skill name="React" core />
            <Skill name="PostgreSQL" core />
            <Skill name="GitLab CI/CD" core />
            <Skill name="TailwindCSS" core />
          </SkillGroup>

          <SkillGroup
            title="Additional"
            summary="Additional skills and technology that I have a high proficiency with but use semi-regularly."
          >
            <Skill name="PHP" />
            <Skill name="Vue.js" />
            <Skill name="Kubernetes" />
            <Skill name="Cloudflare Workers" />
            <Skill name="DataDog" />
            <Skill name="RabbitMQ" />
          </SkillGroup>
        </div>
      </div>
    </Section>
  );
};
