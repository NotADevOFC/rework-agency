/**
 * GraphQL Queries for Services (Custom Post Type)
 */

export const GET_SERVICES = `
  query GetServices($first: Int = 10) {
    services(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        content
        serviceFields {
          icon
          shortDescription
          features
        }
      }
    }
  }
`;
