import { gql } from 'graphql-tag';
import { request } from '../../backend';

const QUERY = gql`
  query getHomepageArticles {
    entries(section: "articles", limit: 3, orderBy: "postDate desc") {
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
  readonly entries: readonly {
    readonly id: string;
    readonly title: string;
    readonly slug: string;
    readonly postDate: string;
    readonly excerpt: string;
  }[];
};

export const getHomepageArticles = () => request<Response, Variables>(QUERY);
