/**
 * GraphQL Queries for Projects (Custom Post Type)
 */

export const GET_PROJECTS = `
  query GetProjects($first: Int = 10) {
    projects(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        technologies {
          nodes {
            name
            slug
          }
        }
        projectFields {
          client
          year
          liveUrl
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_SLUG = `
  query GetProject($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      technologies {
        nodes {
          name
          slug
        }
      }
      projectFields {
        client
        year
        liveUrl
        gallery {
          nodes {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_ALL_PROJECT_SLUGS = `
  query GetAllProjectSlugs {
    projects(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
      }
    }
  }
`;
