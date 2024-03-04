import { gql } from 'graphql-tag';
import { request } from '../../../backend';

const QUERY = gql`
  query getArticles {
    entries(section: "articles") {
      id
      title
      slug
      postDate
      ... on articles_default_Entry {
        excerpt
        heroImage {
          url
        }
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
    readonly heroImage: [{ readonly url: string }] | [];
  }[];
};

export const getArticles = () =>
  request<Response, Variables>(QUERY, undefined, 900);
