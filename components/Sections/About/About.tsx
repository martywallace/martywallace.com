import { FC } from 'react';
import Section from '../../Section';
import SectionTitle from '../../Section/components/SectionTitle';
import Skill from './components/Skill';
import SkillGroup from './components/SkillGroup';

export const About: FC = () => {
  return (
    <Section>
      <SectionTitle title="About Me" />

      <div className="grid md:grid-cols-5 gap-20">
        <article className="prose max-w-none md:col-span-3">
          <p>
            I am a self-taught full-stack developer based in Australia with
            experience across many disciplines including infrastructure
            management, backend development and frontend development.
          </p>
          <p>
            My career so far has been equal parts agency and startup. Agency
            taught me to work efficiently, meet and manage client expectations
            and constantly think on my feet in the face of constant new
            challenges. The startup environment has allowed me to focus on
            stretching my core skills to their limits and become a leading
            talent among my peers in the industry.
          </p>
        </article>
        <div className="md:col-span-2">
          <h3 className="text-2xl mb-5">Skills &amp; Technology</h3>

          <SkillGroup
            title="Core"
            summary="Core skills and technology that I work with the most consistently."
          >
            <Skill name="TypeScript" core />
            <Skill name="Apollo GraphQL" core />
            <Skill name="Nest.js" core />
            <Skill name="React" core />
            <Skill name="PostgreSQL" core />
            <Skill name="GitLab CI/CD" core />
          </SkillGroup>

          <SkillGroup
            title="Additional"
            summary="Additional skills and technology that I have a high proficiency in but aren't necessarily my bread and butter."
          >
            <Skill name="PHP" />
            <Skill name="Vue.js" />
            <Skill name="Kubernetes" />
            <Skill name="Cloudflare Workers" />
            <Skill name="RabbitMQ" />
            <Skill name="Next.js" />
          </SkillGroup>
        </div>
      </div>
    </Section>
  );
};
