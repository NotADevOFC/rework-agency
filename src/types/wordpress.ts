/**
 * TypeScript types for WordPress GraphQL responses
 */

// Base types
export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Technology {
  name: string;
  slug: string;
}

export interface Author {
  node: {
    name: string;
    avatar?: {
      url: string;
    };
  };
}

// Project types
export interface ProjectFields {
  client: string;
  year: string;
  liveUrl?: string;
  gallery?: {
    nodes: Array<{
      sourceUrl: string;
      altText: string;
    }>;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  featuredImage?: FeaturedImage;
  technologies?: {
    nodes: Technology[];
  };
  projectFields: ProjectFields;
}

export interface ProjectsResponse {
  projects: {
    nodes: Project[];
  };
}

export interface ProjectResponse {
  project: Project;
}

// Post types
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  date: string;
  modified?: string;
  featuredImage?: FeaturedImage;
  categories?: {
    nodes: Category[];
  };
  author?: Author;
  seo?: {
    title: string;
    metaDesc: string;
    opengraphImage?: {
      sourceUrl: string;
    };
  };
}

export interface PostsResponse {
  posts: {
    nodes: Post[];
  };
}

export interface PostResponse {
  post: Post;
}

// Testimonial types
export interface TestimonialFields {
  author: string;
  role: string;
  company: string;
  avatar?: {
    sourceUrl: string;
  };
}

export interface Testimonial {
  id: string;
  title: string;
  content: string;
  testimonialFields: TestimonialFields;
}

export interface TestimonialsResponse {
  testimonials: {
    nodes: Testimonial[];
  };
}

// Service types
export interface ServiceFields {
  icon: string;
  shortDescription: string;
  features: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  content: string;
  serviceFields: ServiceFields;
}

export interface ServicesResponse {
  services: {
    nodes: Service[];
  };
}

// Slug response for static paths
export interface SlugResponse {
  nodes: Array<{ slug: string }>;
}
