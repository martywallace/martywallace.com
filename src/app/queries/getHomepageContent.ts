import { gql } from 'graphql-tag';
import { request } from '../../backend';

const QUERY = gql`
  query getHomepageArticles {
    home: entry(section: "home") {
      id
      ... on home_home_Entry {
        experience {
          ... on experience_job_BlockType {
            workplace
            timeframe
            logo {
              url
            }
            body
          }
        }
      }
    }
    articles: entries(section: "articles", limit: 3, orderBy: "postDate desc") {
      id
      title
      slug
      postDate
      ... on articles_default_Entry {
        excerpt
      }
    }
  }
`;

export type Variables = {};

export type Response = {
  readonly articles: readonly {
    readonly id: string;
    readonly title: string;
    readonly slug: string;
    readonly postDate: string;
    readonly excerpt: string;
  }[];
  readonly home: {
    readonly experience: readonly {
      readonly id: string;
      readonly workplace: string;
      readonly timeframe: string;
      readonly logo:
        | [
            {
              readonly url: string;
            },
          ]
        | [];
      readonly body: string;
    }[];
  };
};

export const getHomepageContent = () =>
  request<Response, Variables>(QUERY, undefined, 3600);
