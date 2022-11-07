import { FC } from 'react';
import Section from '../../Section';
import SectionTitle from '../../Section/components/SectionTitle';
import Publication from './components/Publication';

export const Work: FC = () => {
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
          title="Simply Wall St's Journey on GraphQL Adoption"
          excerpt="Moving to GraphQL and a federated architecture has been very rewarding and exciting for the team so far, though not without its own challenges, particularly when it comes to maintaining consistently high performance."
          date={new Date('2021-07-26')}
          url="https://medium.com/simplywallst/simply-wall-sts-journey-on-graphql-adoption-33c196f57ab2"
        />
      </div>
    </Section>
  );
};
