/**
 * WordPress GraphQL Client
 * Handles all GraphQL requests to the WordPress headless CMS
 */

const WP_GRAPHQL_URL = import.meta.env.WP_GRAPHQL_URL || '';

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
  if (!WP_GRAPHQL_URL) {
    throw new Error('WordPress GraphQL URL not configured');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

  try {
    const response = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const json: GraphQLResponse<T> = await response.json();

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      throw new Error(json.errors.map((e) => e.message).join('\n'));
    }

    return json.data;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * Helper to check if WordPress/GraphQL is available
 */
export async function isWordPressAvailable(): Promise<boolean> {
  if (!WP_GRAPHQL_URL) {
    return false;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

  try {
    const response = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ __typename }' }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response.ok;
  } catch {
    clearTimeout(timeoutId);
    return false;
  }
}
