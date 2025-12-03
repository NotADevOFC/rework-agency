/**
 * WordPress GraphQL Client
 * Handles all GraphQL requests to the WordPress headless CMS
 */

const WP_GRAPHQL_URL = import.meta.env.WP_GRAPHQL_URL || 'http://localhost/local.rework.com/graphql';

interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

/**
 * Execute a GraphQL query against WordPress
 */
export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  const json: GraphQLResponse<T> = await response.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    throw new Error(json.errors.map((e) => e.message).join('\n'));
  }

  return json.data;
}

/**
 * Helper to check if WordPress/GraphQL is available
 */
export async function isWordPressAvailable(): Promise<boolean> {
  try {
    const response = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ __typename }' }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
