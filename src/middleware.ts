import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (_context, next) => {
  // Simply pass through for now - can add security headers later
  return next();
});
