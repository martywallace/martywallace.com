import { gql } from 'graphql-tag';
import { request } from '../../../../backend';

const QUERY = gql`
  query getArticle($slug: String!) {
    entry(section: "articles", slug: [$slug]) {
      title
      postDate
      ... on articles_default_Entry {
        body
        heroImage {
          url
        }
      }
    }
  }
`;

export type Variables = {
  readonly slug: string;
};

export type Response = {
  readonly entry: {
    readonly title: string;
    readonly body: string;
    readonly postDate: string;
    readonly heroImage: [{ readonly url: string }] | [];
  } | null;
};

export const getArticle = (slug: string) =>
  request<Response, Variables>(QUERY, { slug });
