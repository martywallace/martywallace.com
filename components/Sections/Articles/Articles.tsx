import { FC } from 'react';
import Section from '../../Section';
import SectionTitle from '../../SectionTitle';
import Publication from './components/Publication';

export const Articles: FC = () => {
  return (
    <Section>
      <SectionTitle title="Articles" />

      <div>
        <Publication
          title="Thoughts on GraphQL After 2 Years"
          excerpt="GraphQL has become my favourite technology to work with across my 12+ year career so far. I would recommend it to any organisation looking to build a large API since it can easily scale with the team and the requirements of the business."
          date={new Date('2022-11-01')}
          url="https://medium.com/@marty.wallace/thoughts-on-graphql-after-2-years-4c4d58e3059b"
        />
        <Publication
          title="Building a CI/CD Template to Publish TypeScript Libraries to the GitLab Package Registry"
          excerpt="As an engineering team that develops a lot of front-end and back-end JavaScript applications grows, it quickly becomes clear that breaking down shared functionality into smaller, well-tested and properly documented packages will be necessary."
          date={new Date('2021-09-20')}
          url="https://medium.com/simplywallst/building-a-ci-cd-template-to-publish-typescript-libraries-to-the-gitlab-package-registry-ac9d67d55774"
        />
        <Publication
          title="Simply Wall St's Journey on GraphQL Adoption"
          excerpt="Moving to GraphQL and a federated architecture has been very rewarding and exciting for the team so far, though not without its own challenges, particularly when it comes to maintaining consistently high performance."
          date={new Date('2021-07-26')}
          url="https://medium.com/simplywallst/simply-wall-sts-journey-on-graphql-adoption-33c196f57ab2"
        />
      </div>
    </Section>
  );
};
