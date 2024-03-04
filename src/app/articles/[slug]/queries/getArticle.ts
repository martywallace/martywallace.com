import { gql } from 'graphql-tag';
import { request } from '../../../../backend';

const QUERY = gql`
  query getArticle($slug: String!) {
    entry(section: "articles", slug: [$slug]) {
      title
      postDate
      ... on articles_default_Entry {
        excerpt
        body
        heroImage {
          url
          width
          height
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
    readonly excerpt: string;
    readonly body: string;
    readonly postDate: string;
    readonly heroImage:
      | [
          {
            readonly url: string;
            readonly width: number;
            readonly height: number;
          },
        ]
      | [];
  } | null;
};

export const getArticle = (slug: string) =>
  request<Response, Variables>(QUERY, { slug }, 3600);
