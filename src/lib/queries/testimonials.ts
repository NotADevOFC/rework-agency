/**
 * GraphQL Queries for Testimonials (Custom Post Type)
 */

export const GET_TESTIMONIALS = `
  query GetTestimonials($first: Int = 6) {
    testimonials(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        title
        content
        testimonialFields {
          author
          role
          company
          avatar {
            sourceUrl
          }
        }
      }
    }
  }
`;
