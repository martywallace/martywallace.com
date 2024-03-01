import { DocumentNode } from 'graphql/language';
import { print } from 'graphql';

export async function request<R, V>(
  query: DocumentNode,
  variables: V,
): Promise<R> {
  const response = await fetch(`https://admin.martywallace.com/graphql`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: print(query),
      variables,
    }),
    cache: 'no-cache',
  });

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}
