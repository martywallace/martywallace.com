import { gql } from 'graphql-tag';
import { request } from '../../backend';

const QUERY = gql`
  query getSitemap {
    entries {
      id
      title
      url
      dateUpdated
    }
  }
`;

export type Variables = {};

export type Response = {
  readonly entries: readonly {
    readonly id: string;
    readonly title: string;
    readonly url: string;
    readonly dateUpdated: string;
  }[];
};

export const getSitemap = () =>
  request<Response, Variables>(QUERY, undefined, 3600);
